"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="grid min-h-screen place-items-center bg-[#fbf8f3] px-4">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-display text-base font-semibold text-ink/80 transition-colors hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-full bg-accent text-paper"
          >
            ◆
          </span>
          <span>DevShot Studio</span>
        </Link>

        <div className="rounded-2xl border border-line bg-paper p-8 shadow-[0_30px_60px_-30px_rgba(20,17,15,0.25)]">
          <h1 className="font-display text-2xl font-semibold">Sign in</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Continue to your DevShot Studio workspace.
          </p>

          <form
            method="post"
            action="/dashboard"
            className="mt-6 space-y-4"
          >
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft/80">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.dev"
                className="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft/80">
                Password
              </span>
              <input
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Sign in
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-ink-soft/70">
          New to DevShot Studio?{" "}
          <a href="#" className="font-semibold text-accent hover:underline">
            Create a workspace
          </a>
        </p>
      </div>
    </main>
  );
}
