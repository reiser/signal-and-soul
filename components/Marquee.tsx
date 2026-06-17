import { PARTNERS } from "@/lib/content";

// Infinite logo marquee — pure CSS (globals.css @keyframes marquee). The track
// is duplicated so the -50% translate loops seamlessly. Server component.
export function Marquee() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <div className="border-y border-line/70 py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {row.map((name, i) => (
            <span
              key={i}
              className="font-display text-lg font-medium tracking-wide text-ink/45 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
