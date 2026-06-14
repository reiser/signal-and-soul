import type { CSSProperties } from "react";

// Reveal — the one entrance/scroll-reveal primitive the magazine uses. CSS-driven
// (the .reveal class in globals.css) so content is ALWAYS rendered and never
// trapped behind a JS animation that might not run in a given runtime. Plays on
// load; `both` fill holds the final visible state. `delay` staggers a group.
// Server-safe (no "use client"); usable from both server and client sections.
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  /** Accepted for call-site compatibility; the animation is CSS-driven. */
  variants?: unknown;
}) {
  const style: CSSProperties | undefined = delay ? { animationDelay: `${delay}s` } : undefined;
  return (
    <Tag className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
