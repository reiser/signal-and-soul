"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FEATURE, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/bits";

// The Long Read — an editorial column with a drop-cap opener, a full-bleed
// parallax lead image, a large pull-quote, and an inline image.
export function Feature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="feature" ref={ref} className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Kicker className="justify-center">{FEATURE.kicker}</Kicker>
        <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02]">
          {FEATURE.title}
        </h2>
      </Reveal>

      {/* Parallax lead image */}
      <Reveal className="mt-12 overflow-hidden rounded-3xl border border-line/70 shadow-[0_40px_90px_-40px_rgba(20,17,15,0.45)]">
        <div className="aspect-[16/8] overflow-hidden">
          <motion.img
            src={img(FEATURE.image, 1600)}
            alt="A studio mixing console"
            style={{ y }}
            className="h-[118%] w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Body */}
      <div className="mx-auto mt-14 grid max-w-3xl gap-7">
        {FEATURE.body.map((p, i) => (
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
              “{FEATURE.quote}”
            </p>
          </blockquote>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-line/70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img(FEATURE.inline, 1100)}
            alt="A turntable in a listening room"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
