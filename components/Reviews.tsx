import { REVIEWS, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, StarRating } from "@/components/ui/bits";

// Gear reviews — three cards, each image / rating / verdict. Hover lifts the card.
export function Reviews() {
  return (
    <section id="reviews" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            <span aria-hidden className="h-px w-6 bg-accent-soft/60" />
            On the bench
          </span>
          <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
            Reviews, the long way.
          </h2>
          <p className="mt-4 text-paper/70">
            Weeks with the gear, in a treated room. No loaner gloss, no spec-sheet
            shortcuts — just what it sounds like when you live with it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-white/25">
                <div className="overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(r.image, 700)}
                    alt={r.name}
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
