"use client";

import { useState } from "react";
import { REVIEWS, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { StarRating } from "@/components/ui/bits";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All Gear" },
  { id: "headphones", label: "Headphones" },
  { id: "turntables", label: "Turntables" },
  { id: "speakers", label: "Speakers" },
  { id: "amplifiers", label: "Amplifiers" },
];

export function Reviews() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredReviews = REVIEWS.filter(
    (r) => activeCategory === "all" || r.category === activeCategory
  );

  return (
    <section id="reviews" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
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

          {/* Filter Pills */}
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-ink"
                      : "text-paper/60 hover:text-paper hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeReviewCategory"
                      className="absolute inset-0 rounded-full bg-accent-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Reviews Grid */}
        <motion.div 
          layout
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((r) => (
              <motion.div
                key={r.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
