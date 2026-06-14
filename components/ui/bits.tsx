import { Star, StarHalf } from "lucide-react";

// Small, reusable presentational atoms (Atomic Design). Pure + server-safe.

export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}

export function StarRating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5 text-accent" aria-label={`${value} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent" strokeWidth={1.5} />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-accent" strokeWidth={1.5} />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e${i}`} className="h-4 w-4 text-ink/20" strokeWidth={1.5} />
      ))}
    </span>
  );
}

// A large rounded image frame with soft shadow — the magazine's signature mockup
// container. `eager` for above-the-fold (hero) images.
export function Frame({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-line/70 bg-line/30 shadow-[0_40px_80px_-32px_rgba(20,17,15,0.45)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
