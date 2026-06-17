# Preview asset 404 recovery

**Status**: implemented
**Created**: 2026-06-17

## Problem
Live preview showed all `/_next/static/chunks/*` assets failing with
no successful response. Browser console threw a `ChunkLoadError` for the
Turbopack HMR client chunk. Direct `curl` to the prefixed asset URL
(`/api/public/p/<vm>/3000/_next/static/chunks/...`) on `localhost:3000`
returned the chunks correctly, so the dev server itself was healthy —
the symptom came from a stale `.next` build cache.

## Root cause
The `.next/dev/static/chunks` directory held orphan chunk files from
several previous `next dev` runs (multiple `hmr-client` hashes
side-by-side: `1mojsay`, `1xch-cm`, `1xx01vv`). The dev process had
been killed and respawned by the Studio supervisor (`devshot-studio`)
without the build cache being cleared, so the in-memory manifest no
longer matched the on-disk chunks. In addition, the `.next` directory
was owned by `root` (left over from a `rm -rf` run as root) which made
Turbopack fail with `EACCES: permission denied, mkdir '/var/www/studio/.next/dev'`.

## Fix
1. Killed the Studio-managed `next dev` process tree
   (npm → next dev → next-server + the .next/dev build worker).
2. Removed `.next` to drop the stale build cache.
3. Restarted via `sudo rc-service devshot-studio restart`, which
   respawns `start-studio` → `npm run dev` → `next dev` as the
   `devshot` user, letting Turbopack build a fresh, consistent manifest.
4. Re-owned `.next` to `devshot:devshot` so the worker could write
   `.next/dev/static/chunks/...`.

## Verification
- `curl http://127.0.0.1:3000/api/public/p/<vm>/3000/` → 200,
  104 KB of magazine HTML.
- `curl` of a HMR chunk through the prefixed URL → 200, real JS bytes.
- Live preview browser_console snapshot: status 200, correct title
  "Signal & Soul — A magazine for people who hear the difference",
  full screenshot attached, no chunk 404s.
