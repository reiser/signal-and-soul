"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { OPUS_ONE } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/bits";

// OPUS 1 field report — a long-form editorial feature, the same column
// treatment as Feature.tsx: a parallax lead image, drop-capped opener, a
// pull-quote, an inline image, and a small specs table at the foot. This is
// the single new article added in this issue.
export function OpusOneFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="opus-one" ref={ref} className="border-t border-line/60 bg-[#fbf8f3]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker className="justify-center">{OPUS_ONE.kicker}</Kicker>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {OPUS_ONE.brand}
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02]">
            {OPUS_ONE.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {OPUS_ONE.standfirst}
          </p>
        </Reveal>

        {/* Parallax lead image */}
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-line/70 shadow-[0_40px_90px_-40px_rgba(20,17,15,0.45)]">
          <div className="aspect-[16/8] overflow-hidden">
            <motion.img
              src={OPUS_ONE.cover}
              alt={`${OPUS_ONE.brand} OPUS 1 horn loudspeaker in a listening room`}
              style={{ y }}
              className="h-[118%] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Body */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-7">
          {OPUS_ONE.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p
                className={`text-lg leading-[1.8] text-ink/90 ${
                  i === 0
                    ? "first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent"
                    : ""
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <blockquote className="my-6 border-l-2 border-accent pl-7">
              <p className="font-display text-3xl font-medium italic leading-snug sm:text-4xl">
                &ldquo;{OPUS_ONE.quote}&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal className="overflow-hidden rounded-2xl border border-line/70">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={OPUS_ONE.inline}
              alt="The OPUS 1 in a treated room, midrange horn visible"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>

          {/* Specs table */}
          <Reveal>
            <div className="mt-6 overflow-hidden rounded-2xl border border-line/70 bg-paper">
              <div className="border-b border-line/70 px-6 py-4">
                <p className="font-display text-lg font-semibold">On the spec sheet</p>
                <p className="mt-1 text-sm text-ink-soft">
                  Publicly stated figures from{" "}
                  <a
                    href={OPUS_ONE.source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    {OPUS_ONE.source.label}
                  </a>
                  .
                </p>
              </div>
              <dl className="divide-y divide-line/70">
                {OPUS_ONE.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                      {s.label}
                    </dt>
                    <dd className="font-display text-base text-ink sm:col-span-2">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
