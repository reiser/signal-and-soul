import { GEAR, img } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/bits";

// Gear gallery — a horizontally scrolling marquee of equipment shots (CSS loop).
export function GearGallery() {
  const row = [...GEAR, ...GEAR];
  return (
    <section id="gear" className="py-24 sm:py-32">
      <Reveal className="mx-auto mb-12 max-w-7xl px-5 sm:px-8">
        <Kicker>The objects</Kicker>
        <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
          Gear we'd actually live with.
        </h2>
      </Reveal>

      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max gap-5 pr-5" style={{ ["--marquee-duration" as string]: "55s" }}>
          {row.map((id, i) => (
            <div
              key={i}
              className="relative h-60 w-80 shrink-0 overflow-hidden rounded-2xl border border-line/70 shadow-[0_24px_50px_-30px_rgba(20,17,15,0.45)] sm:h-72 sm:w-96"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(id, 700)}
                alt="Hi-fi equipment"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
