// Signal & Soul — editorial content for the magazine. Data-driven so every
// section renders from one source (Atomic Design: content is the data layer).
// Local paths are served from public/; Unsplash IDs remain supported for older
// entries.

export const img = (id: string, w = 1200, q = 80) =>
  id.startsWith("/")
    ? id
    : `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const OPUS_IMAGES = {
  scene2BlackBlack: "/images/opus-1/opus-1-scene-2-black-black.jpg",
  scene2WhiteWhite: "/images/opus-1/opus-1-scene-2-white-white.jpg",
  scene4BlackWhite: "/images/opus-1/opus-1-scene-4-black-white.jpg",
  scene4WhiteWhitePerspective: "/images/opus-1/opus-1-scene-4-white-white-perspective.jpg",
  scene4WhiteWhite: "/images/opus-1/opus-1-scene-4-white-white.jpg",
};

export const REVIEW_IMAGES = {
  naimUnitiNovaPe: "/images/reviews/naim-uniti-nova-pe.jpg",
  regaPlanar8: "/images/reviews/rega-planar-8.jpg",
  isoacousticsGaiaNeo: "/images/reviews/isoacoustics-gaia-neo.jpg",
};

export const BRAND = {
  name: "Signal & Soul",
  tagline: "The journal of high-fidelity listening",
  nav: [
    { label: "Stories", href: "/#stories" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Full Review", href: "/reviews/opus-1" },
    { label: "Gear", href: "/#gear" },
  ],
};

export const HERO = {
  kicker: "OPUS 1 — Real rooms, real scale",
  title: ["OPUS 1", "turns the room", "into a stage."],
  lede:
    "A sculptural horn loudspeaker for interiors that need presence without visual noise. We listened to OPUS 1 in real spaces, with real light, at real living-room distance.",
  cta: { primary: "Read the OPUS story", secondary: "Get updates" },
  image: OPUS_IMAGES.scene4WhiteWhitePerspective,
  alt: "OPUS 1 white loudspeaker in front of bright curtains",
  imageLabel: "On test this issue",
  imageMeta: "OPUS 1 / white-white",
};

export const STEPS = [
  {
    n: "01",
    title: "Listen deeper",
    body: "Long-form reviews from a treated room, not a spec sheet. We sit with a record for a week before we write a word.",
  },
  {
    n: "02",
    title: "Trust the ear",
    body: "Measurements matter, but the last 10% is felt. Our verdicts come from hours, not minutes.",
  },
  {
    n: "03",
    title: "Build the system",
    body: "Source, amp, room, record. We help you spend on what you'll actually hear — and skip what you won't.",
  },
];

export const STORIES = [
  {
    kicker: "OPUS Feature",
    title: "OPUS 1 brings a sculptural horn into the living room",
    excerpt: "A real-room listen with the white-white finish: calm surfaces, a focused stage, and enough physical scale to anchor the space.",
    image: OPUS_IMAGES.scene4WhiteWhite,
    alt: "Pair of white OPUS 1 loudspeakers beside a light sofa",
  },
  {
    kicker: "Finish",
    title: "Black-white when the room needs contrast",
    excerpt: "The same horn geometry in a darker cabinet: more graphic, still quiet enough for a soft interior.",
    image: OPUS_IMAGES.scene4BlackWhite,
    alt: "Black and white OPUS 1 loudspeakers in a modern living room",
  },
  {
    kicker: "Perspective",
    title: "The near-field view of a floorstanding horn",
    excerpt: "Up close, OPUS 1 reads less like equipment and more like a deliberate piece of architecture.",
    image: OPUS_IMAGES.scene4WhiteWhitePerspective,
    alt: "Close perspective of a white OPUS 1 speaker near a window",
  },
  {
    kicker: "Setup",
    title: "A single speaker, a quiet wall, a harder floor",
    excerpt: "The hallway setup shows how the cabinet shape, horn and shadow behave outside the usual sofa scene.",
    image: OPUS_IMAGES.scene2WhiteWhite,
    alt: "White OPUS 1 loudspeaker on a reflective floor",
  },
];

export type Review = {
  slug: string;
  name: string;
  sub: string;
  verdict: string;
  rating: number;
  href: string;
  cta?: string;
  image: string;
  alt: string;
  detailImage?: string;
  detailAlt?: string;
  seoTitle: string;
  seoDescription: string;
  body: string[];
  quote?: string;
  officialUrl?: string;
  officialLabel?: string;
};

export const reviewPath = (slug: string) => `/reviews/${slug}`;

const OPUS_REVIEW_BODY = [
  "OPUS 1 starts with a difficult promise: make a horn loudspeaker that keeps its acoustic authority without turning the living room into a demo booth. In the white-white setup, the cabinet almost disappears into the light while the circular horn remains the visual anchor.",
  "The proportions matter. The speaker is tall enough to hold the room, narrow enough to avoid feeling like furniture, and graphic enough to make the system look intentional from across the sofa. Nothing about the silhouette apologizes for being hi-fi.",
  "The most convincing view is the one that looks least staged. A single OPUS 1 near a window shows the cabinet depth, the horn flare and the soft shadow it casts on the wall. It feels like a product built for rooms where sound and interior design have to share the same oxygen.",
];

const OPUS_REVIEW_QUOTE = "The horn stays visible, but the room stays calm.";

export const REVIEWS: Review[] = [
  {
    slug: "opus-1",
    name: "OPUS 1",
    sub: "White-white floorstanding horn speaker",
    verdict: "The calmest finish in the set, with the horn reading as a soft sculptural object rather than a technical flourish.",
    rating: 5,
    href: reviewPath("opus-1"),
    cta: "Read review",
    image: OPUS_IMAGES.scene4WhiteWhite,
    alt: "White-white OPUS 1 pair in a bright listening room",
    detailImage: OPUS_IMAGES.scene2WhiteWhite,
    detailAlt: "White OPUS 1 speaker near a column on a reflective floor",
    seoTitle: "OPUS 1 review: white-white horn speaker for real rooms",
    seoDescription:
      "OPUS 1 review in the white-white finish: a sculptural floorstanding horn speaker with calm visual presence and real-room scale.",
    body: OPUS_REVIEW_BODY,
    quote: OPUS_REVIEW_QUOTE,
  },
  {
    slug: "naim-uniti-nova-pe",
    name: "Naim Uniti Nova PE",
    sub: "Streaming amplifier",
    verdict: "A compact all-in-one partner with enough drive for a sculptural floorstander, keeping the rack visually quiet beside OPUS.",
    rating: 4.8,
    href: reviewPath("naim-uniti-nova-pe"),
    cta: "Read review",
    image: REVIEW_IMAGES.naimUnitiNovaPe,
    alt: "Naim Uniti Nova PE streaming amplifier",
    seoTitle: "Naim Uniti Nova PE review: a quiet system partner for OPUS 1",
    seoDescription:
      "Naim Uniti Nova PE review as an OPUS 1 companion: a compact streaming amplifier that keeps the room quiet while supplying source and power.",
    body: [
      "Naim Uniti Nova PE makes sense beside OPUS 1 because it removes the rack from the equation. It is a streaming amplifier, DAC and control center in one chassis, so the room can keep the loudspeakers as the only strong visual statement.",
      "The match is about discipline rather than spectacle. OPUS has the sculptural mass; the Nova PE supplies power and source handling without asking for a wall of boxes, cables and shelves.",
      "For listeners building a living-room system, that is the point: fewer decisions in the room, cleaner signal flow on the console, and a setup that feels deliberate from sofa distance.",
    ],
    quote: "One strong box is enough when the speakers already carry the room.",
    officialUrl: "https://www.naimaudio.com/products/nova-power-edition",
    officialLabel: "Open Naim product page",
  },
  {
    slug: "rega-planar-8",
    name: "Rega Planar 8",
    sub: "Skeletal turntable",
    verdict: "A low-mass analog source with the right kind of visual restraint: technical, deliberate, and not trying to compete with the speakers.",
    rating: 4.7,
    href: reviewPath("rega-planar-8"),
    cta: "Read review",
    image: REVIEW_IMAGES.regaPlanar8,
    alt: "Rega Planar 8 turntable",
    seoTitle: "Rega Planar 8 review: analog restraint beside OPUS 1",
    seoDescription:
      "Rega Planar 8 review for an OPUS 1 system: a skeletal turntable with low visual mass, focused analog playback, and room-friendly restraint.",
    body: [
      "Rega Planar 8 works next to OPUS rather than against it. Its skeletal plinth looks technical, but the footprint stays low and light, so the speakers keep the architectural role.",
      "Sonically, the appeal is the focused analog front end: rhythm, simple setup, and a direct path from record to system without turning the cabinet or console into a shrine.",
      "On a visual level it is one of the easier sources to place beside OPUS 1. The shape is recognizable, restrained, and honest about what it is.",
    ],
    quote: "It gives the system an analog center without stealing the room.",
    officialUrl: "https://www.rega.co.uk/products/planar-8",
    officialLabel: "Open Rega product page",
  },
  {
    slug: "isoacoustics-gaia-neo",
    name: "IsoAcoustics GAIA Neo",
    sub: "Speaker isolation feet",
    verdict: "The most practical companion here: it supports placement, floor contact, and focus without adding another visual object to the room.",
    rating: 4.6,
    href: reviewPath("isoacoustics-gaia-neo"),
    cta: "Read review",
    image: REVIEW_IMAGES.isoacousticsGaiaNeo,
    alt: "IsoAcoustics GAIA Neo speaker isolation feet",
    seoTitle: "IsoAcoustics GAIA Neo review: practical support for OPUS 1",
    seoDescription:
      "IsoAcoustics GAIA Neo review for OPUS 1 owners: discreet isolation feet for placement, floor contact, and focus in real listening rooms.",
    body: [
      "GAIA Neo is the least glamorous product in the list, which is exactly why it belongs here. It sits under the loudspeakers and works on floor contact, stability and isolation instead of adding another object to the room.",
      "With OPUS 1, placement is part of the listening experience: the horn, cabinet height and room boundaries all matter. Good feet make small adjustments more repeatable and protect the visual calm of the setup.",
      "The result is practical support for focus and furniture-friendly placement, especially in real rooms with wood, stone or mixed flooring.",
    ],
    quote: "The best accessory here is the one you stop noticing.",
    officialUrl: "https://isoacoustics.com/home-audio-isolation-products/gaia-neo-series/",
    officialLabel: "Open IsoAcoustics product page",
  },
];

export const getReviewBySlug = (slug: string) =>
  REVIEWS.find((review) => review.slug === slug);

export const FEATURE = {
  kicker: "OPUS Feature",
  title: "How OPUS 1 makes a horn speaker feel at home",
  image: OPUS_IMAGES.scene4WhiteWhite,
  alt: "White OPUS 1 loudspeakers in a bright living room",
  body: OPUS_REVIEW_BODY,
  quote: OPUS_REVIEW_QUOTE,
  inline: OPUS_IMAGES.scene2WhiteWhite,
  inlineAlt: "White OPUS 1 speaker near a column on a reflective floor",
};

export const SPOTLIGHT = {
  kicker: "Finish of the Month",
  title: "Black-black, with daylight on the horn",
  image: OPUS_IMAGES.scene2BlackBlack,
  alt: "Black-black OPUS 1 loudspeaker catching daylight in a quiet interior",
  body: "The black-black finish gives OPUS 1 the strongest silhouette in the set. It turns the horn into a glossy shadow, catches daylight on the flare, and keeps the cabinet calm against pale architecture.",
  meta: ["OPUS 1", "Black-black", "Living-room setup"],
};

export const GEAR = [
  OPUS_IMAGES.scene4WhiteWhite,
  OPUS_IMAGES.scene4BlackWhite,
  OPUS_IMAGES.scene4WhiteWhitePerspective,
  OPUS_IMAGES.scene2WhiteWhite,
];

export const PARTNERS = [
  "ABBEY ROAD",
  "ELYSIAN AUDIO",
  "NORTHERN VINYL",
  "THE LISTENING ROOM",
  "VERTERE",
  "OCTAVE LABS",
];

export const FAQ_FOOTER = {
  columns: [
    { title: "Magazine", links: ["Current issue", "Archive", "Reviews", "The Long Read"] },
    { title: "Listen", links: ["Buyer's guides", "Room setup", "Pressing notes", "Glossary"] },
    { title: "About", links: ["Masthead", "How we test", "Contact", "Ethics"] },
  ],
};
