"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";

// Reveal — the one scroll-reveal primitive the whole magazine uses (no repeated
// whileInView boilerplate). Pass a variant; defaults to a calm fade-up.
export function Reveal({
  children,
  variants = fadeUp,
  className,
  as = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "h2";
  delay?: number;
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Tag>
  );
}
