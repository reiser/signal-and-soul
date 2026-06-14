// Signal & Soul — editorial content for the magazine. Data-driven so every
// section renders from one source (Atomic Design: content is the data layer).
// All imagery is real Unsplash (verified 200), sized via the URL query params.

export const img = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const BRAND = {
  name: "Signal & Soul",
  tagline: "The journal of high-fidelity listening",
  nav: [
    { label: "Stories", href: "#stories" },
    { label: "Reviews", href: "#reviews" },
    { label: "Feature", href: "#feature" },
    { label: "Gear", href: "#gear" },
  ],
};

export const HERO = {
  kicker: "Issue 08 — The Analog Revival",
  title: ["The room", "disappears.", "Only the music remains."],
  lede:
    "A quarterly for people who hear the difference. We chase the warmth of vinyl, the silence between notes, and the gear that gets out of the way.",
  cta: { primary: "Start reading", secondary: "Subscribe free" },
  image: "1505740420928-5e560c06d30e", // sculptural studio headphones
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
    kicker: "Turntables",
    title: "The 12-inch ritual that won't die",
    excerpt: "Why a generation raised on streaming keeps coming back to the drop of a needle.",
    image: "1493225457124-a3eb161ffa5f",
  },
  {
    kicker: "Rooms",
    title: "Acoustics for renters",
    excerpt: "Four reversible fixes that tame a hard, bright room without a single screw in the wall.",
    image: "1558537348-c0f8e733989d",
  },
  {
    kicker: "Headphones",
    title: "The case for closed-back",
    excerpt: "Open-back gets the press. Here's why the sealed cup might be the more honest listen.",
    image: "1546435770-a3e426bf472b",
  },
  {
    kicker: "Pressings",
    title: "One album, five pressings",
    excerpt: "We A/B'd the same record across five cuts. The cheapest won. Here's what that tells you.",
    image: "1607853202273-797f1c22a38e",
  },
  {
    kicker: "Amplifiers",
    title: "The warm glow of glowing glass",
    excerpt: "Why tube amplification remains the gold standard for listeners seeking soul over specs.",
    image: "1511379938547-c1f69419868d",
  },
];

export const REVIEWS = [
  {
    name: "Meridian-class headphones",
    sub: "Reference, closed-back",
    category: "headphones",
    verdict: "Unflinching detail with a low end you can feel in your jaw.",
    rating: 4.5,
    image: "1583394838336-acd977736f90",
  },
  {
    name: "The all-analog turntable",
    sub: "Belt-drive, no compromise",
    category: "turntables",
    verdict: "Silent backgrounds and a soundstage that steps a foot past the speakers.",
    rating: 5,
    image: "1545454675-3531b543be5d",
  },
  {
    name: "Studio-monitor bookshelves",
    sub: "Near-field, two-way",
    category: "speakers",
    verdict: "Honest to a fault — they'll flatter a great mix and expose a bad one.",
    rating: 4,
    image: "1484704849700-f032a568e944",
  },
  {
    name: "Silver-signature tube amp",
    sub: "Class-A, single-ended triode",
    category: "amplifiers",
    verdict: "Breathes life into vocals. Not for hard-to-drive speakers, but pure magic with high-sensitivity horns.",
    rating: 4.8,
    image: "1511379938547-c1f69419868d",
  },
  {
    name: "Reference electrostatic IEMs",
    sub: "Multi-driver hybrid",
    category: "headphones",
    verdict: "Transient speed that rivals full-sized earspeakers. Requires a dedicated source to truly sing.",
    rating: 4.7,
    image: "1505740420928-5e560c06d30e",
  },
];

export const FEATURE = {
  kicker: "The Long Read",
  title: "In praise of the listening chair",
  image: "1487215078519-e21cc028cb29",
  body: [
    "There is a chair in every serious listener's life. Not the best chair in the house — the right one. It sits at the apex of an invisible triangle, equidistant from two speakers that have been nudged into place over months of small, obsessive movements.",
    "We have been told that fidelity is a number: a frequency response, a distortion figure, a signal-to-noise ratio. And those numbers matter. But they describe the gear, not the listening. The listening happens in the chair, in the dark, when the room falls away and the record does the thing a record does at its best — it stops sounding like a reproduction and starts sounding like a presence.",
    "This issue is a defense of that presence. Of taking the time. Of the unfashionable idea that music rewards attention the way nothing else on a screen ever will.",
  ],
  quote:
    "Hi-fi isn't about hearing more. It's about getting everything else out of the way.",
  inline: "1524678606370-a47ad25cb82a",
};

export const SPOTLIGHT = {
  kicker: "Sound of the Month",
  title: "Side B, in the dark",
  image: "1511671782779-c97d3d27a1d4",
  body: "Our editors' pick for the month — a record engineered for the back half of the night. Dynamic, patient, and impossibly quiet between the notes. Play it loud, then play it quiet. It holds up both ways.",
  meta: ["180g pressing", "Half-speed master", "Gatefold"],
};

export const GEAR = [
  "1505740420928-5e560c06d30e",
  "1493225457124-a3eb161ffa5f",
  "1546435770-a3e426bf472b",
  "1545454675-3531b543be5d",
  "1607853202273-797f1c22a38e",
  "1583394838336-acd977736f90",
  "1481277542470-605612bd2d61",
  "1558537348-c0f8e733989d",
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
