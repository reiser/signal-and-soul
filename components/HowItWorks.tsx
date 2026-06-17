import { STEPS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/bits";

// "How we listen" — three principles, scroll-revealed with a stagger.
export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <Kicker>How we listen</Kicker>
        <h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          A magazine, not a spec sheet.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08} className="bg-paper p-8">
            <span className="font-display text-5xl font-semibold text-accent/90">{s.n}</span>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
