// Shared Framer Motion variants (Atomic Design: one source for all animation,
// no duplicated transition logic). Used by the <Reveal> wrapper and sections.
import type { Variants, Transition } from "framer-motion";

export const ease: Transition["ease"] = [0.16, 1, 0.3, 1]; // expo-out, calm & premium

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
};

// Stagger container — children animate in sequence as the group reveals.
export const stagger = (gap = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease } },
};

// Default viewport for whileInView — reveal a touch before fully in view, once.
export const inView = { once: true, margin: "-12% 0px -12% 0px" } as const;
