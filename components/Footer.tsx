import { Disc3, AtSign, Radio, Music, Rss } from "lucide-react";
import { BRAND, FAQ_FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5 font-display text-2xl font-semibold">
              <Disc3 className="h-7 w-7 text-accent" strokeWidth={1.6} />
              {BRAND.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {BRAND.tagline}. Ein unabhängiges Quartalsmagazin. Wir kaufen, was wir testen.
            </p>
            <div className="mt-6 flex gap-2">
              {[AtSign, Radio, Music, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 md:col-span-7">
            {FAQ_FOOTER.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft/70">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-ink/80 transition-colors hover:text-accent">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-ink-soft/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Impressum</a>
            <a href="#" className="hover:text-ink">Datenschutz</a>
            <a href="#" className="hover:text-ink">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
