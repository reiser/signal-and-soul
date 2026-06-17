import { STORIES, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/bits";
import { ArrowUpRight } from "lucide-react";

// Featured stories — an editorial grid: one large lead card + a column of three.
export function Stories() {
  const [lead, ...rest] = STORIES;
  return (
    <section id="stories" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <Reveal className="mb-10 flex items-end justify-between gap-6">
        <div>
          <Kicker>From the magazine</Kicker>
          <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">Stories</h2>
        </div>
        <a href="#feature" className="hidden shrink-0 text-sm font-semibold text-accent hover:underline sm:inline">
          The full table of contents →
        </a>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Lead */}
        <Reveal>
          <a href="#feature" className="group block">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-line/70 shadow-[0_30px_70px_-30px_rgba(20,17,15,0.4)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(lead.image, 1200)}
                alt={lead.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <Kicker>{lead.kicker}</Kicker>
              <h3 className="font-display mt-3 text-3xl font-semibold leading-tight transition-colors group-hover:text-accent">
                {lead.title}
              </h3>
              <p className="mt-2 max-w-xl text-ink-soft">{lead.excerpt}</p>
            </div>
          </a>
        </Reveal>

        {/* Column of three */}
        <div className="flex flex-col gap-6">
          {rest.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <a href="#feature" className="group flex gap-5">
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-2xl border border-line/70 sm:w-36">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(s.image, 500)}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 self-center">
                  <Kicker>{s.kicker}</Kicker>
                  <h3 className="font-display mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-accent sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">{s.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
