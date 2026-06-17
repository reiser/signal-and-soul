import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { REVIEWS, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { StarRating } from "@/components/ui/bits";

// Review index — every card points at its own crawlable detail route.
export function Reviews() {
  const reviewGridClass =
    REVIEWS.length === 1
      ? "mx-auto max-w-lg md:grid-cols-1"
      : "sm:grid-cols-2 xl:grid-cols-4";

  return (
    <section id="reviews" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            <span aria-hidden className="h-px w-6 bg-accent-soft/60" />
            On the test bench
          </span>
          <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
            Reviews, the long way.
          </h2>
          <p className="mt-4 text-paper/70">
            Weeks with the gear, in a treated room. No loaner sheen, no spec-sheet shortcuts — only what it sounds like when you live with it.
          </p>
        </Reveal>

        <div className={`mt-14 grid gap-6 ${reviewGridClass}`}>
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <Link
                href={r.href}
                aria-label={`Read the ${r.name} review`}
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:-translate-y-1 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-accent-soft"
              >
                <div className="overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(r.image, 700)}
                    alt={r.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 pb-3 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <StarRating value={r.rating} />
                    <span className="text-xs font-medium uppercase tracking-widest text-paper/40">
                      {r.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-2xl font-semibold">{r.name}</h3>
                  <p className="text-sm text-accent-soft">{r.sub}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-paper/70">{r.verdict}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft">
                    {r.cta ?? "Read review"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
