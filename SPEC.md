# Signal & Soul — Spec

A glossy, Framer-style editorial **magazine** for high-end audio / HiFi / sound
culture. Static frontend only — no backend; CTAs/forms give UI feedback only.

## Goal & audience
Showcase a premium audio-journalism brand and convert readers to the (free)
quarterly. Audience: discerning listeners and audiophiles.

## Tech (binding)
Next.js (App Router, TypeScript) · Framer Motion (all animation) · Tailwind v4 ·
Atomic Design, reusable components, no duplicated logic · SSG, responsive,
mobile-first, accessible.

## Requirements → sections (traceability — every built section maps here)
| # | Requirement | Component |
|---|---|---|
| R1 | Sticky navbar, transparent→solid on scroll, compact CTA | `Navbar` |
| R2 | Cinematic hero: oversized headline, two CTAs, parallax image | `Hero` |
| R3 | Partner/label logo marquee | `Marquee` |
| R4 | "How we listen" — 3 principles, scroll-reveal | `HowItWorks` |
| R5 | Featured stories grid (lead + column), hover micro-interactions | `Stories` |
| R6 | Gear reviews — cards with image, star rating, verdict (dark) | `Reviews` |
| R7 | The Long Read — long-form, drop-cap, pull-quote, parallax images | `Feature` |
| R8 | "Sound of the Month" — dark spotlight section | `Spotlight` |
| R9 | Gear gallery — horizontal image marquee | `GearGallery` |
| R10 | Subscribe/waitlist — email field, UI-only, toast | `Newsletter` |
| R11 | Footer — sections, socials, Impressum/Datenschutz/AGB | `Footer` |

## Reuse / atoms
`ui/Reveal` (the single scroll-reveal primitive), `ui/bits` (`Kicker`,
`StarRating`, `Frame`), `lib/motion` (shared variants), `lib/content` (all copy
+ Unsplash imagery). Accent = burnt amber over an ink/paper palette; alternating
light/dark sections.

## Acceptance
- All R1–R11 render with real content and real Unsplash imagery (no placeholders).
- Scroll reveals, sticky navbar, parallax, and the newsletter toast work.
- `next build` passes; responsive and reduced-motion friendly.
