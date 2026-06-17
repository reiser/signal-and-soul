import { SPOTLIGHT, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

// Sound of the Month — a dark, cinematic spotlight on one record. The accent
// glows; the image sits in a soft-shadowed frame.
export function Spotlight() {
  return (
    <section className="relative overflow-hidden bg-night text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            <span aria-hidden className="h-px w-6 bg-accent-soft/60" />
            {SPOTLIGHT.kicker}
          </span>
          <h2 className="font-display mt-5 text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98]">
            {SPOTLIGHT.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
            {SPOTLIGHT.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {SPOTLIGHT.meta.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-paper/80"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal variants={{ hidden: { opacity: 0, scale: 1.05 }, show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}>
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.8)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(SPOTLIGHT.image, 900)}
              alt="Die Platte des Monats"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <span className="font-display text-sm italic text-paper/90">
                Editors' pick
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
