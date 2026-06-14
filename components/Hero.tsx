"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { HERO, img } from "@/lib/content";
import { Kicker } from "@/components/ui/bits";
import { ease } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: the image drifts up and scales gently as you scroll past.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Headline column */}
        <motion.div style={{ opacity: fade }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Kicker>{HERO.kicker}</Kicker>
          </motion.div>

          <h1 className="font-display mt-5 text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.96]">
            {HERO.title.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.09 }}
                >
                  {i === HERO.title.length - 1 ? (
                    <span className="italic text-accent">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            {HERO.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.62 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#stories"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {HERO.cta.primary}
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#subscribe"
              className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {HERO.cta.secondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Image column with parallax */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line/70 shadow-[0_50px_90px_-30px_rgba(20,17,15,0.5)]"
          >
            <motion.img
              src={img(HERO.image, 1100)}
              alt="A pair of reference studio headphones"
              style={{ y, scale }}
              className="absolute inset-0 h-[115%] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-night/70 to-transparent p-5 text-white">
              <span className="font-display text-sm italic">On test this issue</span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/70">
                Reference / closed-back
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
