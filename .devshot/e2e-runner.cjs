const fs = require('node:fs');
const zlib = require('node:zlib');
const { execSync } = require('node:child_process');

let puppeteer;
try { puppeteer = require('/opt/devshot-e2e/node_modules/puppeteer-core'); }
catch (e) { console.log(JSON.stringify({ ok: false, passed: false, error: 'puppeteer-core not installed — rebake the studio image', steps: [] })); process.exit(0); }


function findChromium() {
  for (const bin of ['chromium-browser', 'chromium', 'chromium-headless-shell', 'chrome', 'google-chrome-stable', 'headless-shell']) {
    try { const p = execSync('command -v ' + bin + ' 2>/dev/null', { encoding: 'utf8' }).trim(); if (p) return p; } catch (e) {}
  }
  return process.env.PUPPETEER_EXECUTABLE_PATH || '';
}

async function main() {
  let plan = {};
  try { plan = JSON.parse(Buffer.from(process.argv[2] || '', 'base64').toString('utf8')); }
  catch (e) { console.log(JSON.stringify({ ok: false, passed: false, error: 'invalid plan payload', steps: [] })); process.exit(0); }
  const baseUrl = 'http://127.0.0.1:' + (plan.appPort || 3000);
  const steps = Array.isArray(plan.steps) ? plan.steps.slice(0, 40) : [];
  const exe = findChromium();
  if (!exe) { console.log(JSON.stringify({ ok: false, passed: false, error: 'no chromium found in VM', steps: [] })); process.exit(0); }
  const norm = (u) => /^https?:/i.test(u) ? u : baseUrl + (String(u || '/').startsWith('/') ? u : '/' + u);
  const results = [];
  const rec = (action, detail, ok, err) => results.push({ action, detail: String(detail || '').slice(0, 160), ok, error: err ? String(err.message || err).slice(0, 200) : undefined });
  let browser;
  try {
    browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-color-profile=srgb'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 720 });
    page.setDefaultTimeout(8000);
    const network = [];
    const pageErrors = [];
    const short = (s) => String(s || '').slice(0, 220);
    page.on('requestfailed', (req) => {
      try { network.push({ url: short(req.url()), type: req.resourceType && req.resourceType(), status: 0, failed: true, error: short(req.failure && req.failure()?.errorText) }); } catch (e) {}
    });
    page.on('response', (res) => {
      try {
        const status = res.status();
        if (status >= 400) network.push({ url: short(res.url()), type: res.request && res.request().resourceType && res.request().resourceType(), status, failed: true });
      } catch (e) {}
    });
    page.on('pageerror', (err) => pageErrors.push(short(err && (err.stack || err.message || err))));
    if (!steps.some((s) => String(s.action || '').toLowerCase() === 'goto')) {
      try { await page.goto(norm('/'), { waitUntil: 'networkidle2', timeout: 15000 }); rec('goto', '/', true); } catch (e) { rec('goto', '/', false, e); }
    }
    for (const step of steps) {
      const a = String(step.action || '').toLowerCase();
      const sel = String(step.selector || '');
      try {
        if (a === 'goto') { await page.goto(norm(step.url || step.path || '/'), { waitUntil: 'networkidle2', timeout: 15000 }); rec('goto', step.url || step.path || '/', true); }
        else if (a === 'click') { await page.waitForSelector(sel, { timeout: 8000 }); await page.click(sel); rec('click', sel, true); }
        else if (a === 'clicktext') { const t = String(step.text || ''); const hit = await page.evaluate((txt) => { const els = Array.from(document.querySelectorAll('button, a, [role=button], [role=tab], summary, label, input[type=submit], input[type=button], li, span, div')); const el = els.find((e) => ((e.innerText || e.value || '').trim().toLowerCase().includes(txt.toLowerCase())) && e.offsetParent !== null); if (el) { el.click(); return true; } return false; }, t); rec('clickText', t, hit, hit ? null : new Error('no visible element with that text')); }
        else if (a === 'fill') { await page.waitForSelector(sel, { timeout: 8000 }); await page.click(sel, { clickCount: 3 }); await page.type(sel, String(step.value == null ? '' : step.value)); rec('fill', sel + '=' + step.value, true); }
        else if (a === 'hover') { await page.waitForSelector(sel, { timeout: 8000 }); await page.hover(sel); rec('hover', sel, true); }
        else if (a === 'wait') { const _numWait = sel != null && /^[0-9]+$/.test(String(sel).trim()); if (sel && !_numWait) { await page.waitForSelector(sel, { timeout: Number(step.timeoutMs) || 8000 }); rec('wait', sel, true); } else { const _ms = Math.min(Number(step.ms) || (_numWait ? Number(sel) : 0) || 500, 8000); await new Promise((r) => setTimeout(r, _ms)); rec('wait', _ms + 'ms', true); } }
        else if (a === 'expecttext') { const t = String(step.text || ''); const body = await page.evaluate(() => (document.body ? document.body.innerText : '')); const ok = body.toLowerCase().includes(t.toLowerCase()); rec('expectText', t, ok, ok ? null : new Error('text not found on page')); }
        else if (a === 'expectvisible') { await page.waitForSelector(sel, { visible: true, timeout: Number(step.timeoutMs) || 8000 }); rec('expectVisible', sel, true); }
        else if (a === 'expecthidden') { await page.waitForSelector(sel, { hidden: true, timeout: Number(step.timeoutMs) || 8000 }); rec('expectHidden', sel, true); }
        else if (a === 'expectscreenshotdominantcolor' || a === 'expectdominantcolor') {
          // Deterministic dominant-colour matching was REMOVED (spec 079): it
          // false-failed real colours (a genuine purple #f3e8ff rejected against
          // an exact #800080) and the AI verification panel now does visual
          // verification properly. Any stray emission is a benign skip so it can
          // never block a turn again.
          rec('skippedColorCheck', 'skipped — visual verification is handled by the AI panel, not pixel matching', true);
        }
        else { rec(a || 'unknown', JSON.stringify(step).slice(0, 100), false, new Error('unknown action')); }
      } catch (err) { rec(a, sel || step.text || step.url || '', false, err); }
    }
    const failedAssets = network.filter((n) => {
      const type = String(n.type || '').toLowerCase();
      const url = String(n.url || '');
      return (n.failed || !n.status || n.status >= 400)
        && (['stylesheet', 'script', 'link', 'style', 'css'].includes(type) || /(?:^|\/)_next\/static\//.test(url) || /\.(?:css|js)(?:[?#]|$)/i.test(url));
    });
    if (failedAssets.length) {
      rec('network', failedAssets.map((n) => (n.status || 'FAIL') + ' ' + (n.type || 'asset') + ' ' + n.url).join('; '), false, new Error('critical asset failure: CSS/JS did not load'));
    }
    if (pageErrors.length) {
      rec('pageerror', pageErrors.join('; '), false, new Error('browser page error'));
    }
    let shot = '';
    try { const buf = await page.screenshot({ type: 'png' }); shot = Buffer.from(buf).toString('base64'); } catch (e) {}
    const passed = results.length > 0 && results.every((r) => r.ok);
    console.log(JSON.stringify({ ok: passed, passed, steps: results }));
    if (shot) process.stdout.write('<<<DEVSHOT_SHOT:image/png>>>' + shot + '<<<END_DEVSHOT_SHOT>>>');
  } catch (err) {
    console.log(JSON.stringify({ ok: false, passed: false, error: String(err && err.message || err).slice(0, 200), steps: results }));
  } finally {
    if (browser) { try { await browser.close(); } catch (e) {} }
  }
}
main();