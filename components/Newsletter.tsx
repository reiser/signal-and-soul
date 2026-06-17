"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Disc3 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Subscribe / waitlist — UI only (no backend per the brief). A submit shows a
// toast and an inline confirmation; the email is never sent anywhere.
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [toast, setToast] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setToast(true);
    setTimeout(() => setToast(false), 3200);
  };

  return (
    <section id="subscribe" className="bg-ink text-paper">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <Disc3 className="mx-auto h-10 w-10 text-accent-soft" strokeWidth={1.4} />
          <h2 className="font-display mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.0]">
            Get the next<br />digital issue first.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-paper/70">
            One email when there&rsquo;s something worth sending. The reviews, the long read, and the record we can&rsquo;t stop playing — free, no noise.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="w-full rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm text-paper outline-none transition-colors placeholder:text-paper/40 focus:border-accent-soft"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {done ? "You're in" : "Subscribe"}
            </button>
          </form>
        </Reveal>

        <AnimatePresence>
          {done && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 inline-flex items-center gap-2 text-sm text-accent-soft"
            >
              <Check className="h-4 w-4" /> Saved to the reading list — no backend, just good vibes.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 24, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-night/95 px-5 py-3 text-sm text-paper shadow-2xl backdrop-blur"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
              <Check className="h-3.5 w-3.5" />
            </span>
            You&rsquo;re on the list for the next issue.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
