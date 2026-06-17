// Signal & Soul — editorial content of the magazine. Data-driven so every
// section renders from a single source (atomic design: content is the data
// layer). All images are real Unsplash photos (verified 200), resized via URL
// query parameters.

export const img = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const BRAND = {
  name: "Signal & Soul",
  tagline: "A magazine for people who hear the difference",
  nav: [
    { label: "Stories", href: "#stories" },
    { label: "Reviews", href: "#reviews" },
    { label: "Long Read", href: "#feature" },
    { label: "Gear", href: "#gear" },
  ],
};

export const HERO = {
  kicker: "News from the world of listening",
  title: ["The room", "disappears.", "Only the music remains."],
  lede:
    "Signal & Soul is an independent magazine for people who hear the difference. We follow the warmth of the record, the silence between the notes and the gear that quietly gets out of the way.",
  cta: { primary: "Read the magazine", secondary: "Subscribe — it's free" },
  image: "1505740420928-5e560c06d30e", // sculptured studio headphones
};

export const STEPS = [
  {
    n: "01",
    title: "Listen longer",
    body: "Long-form tests out of a treated room, not off a spec sheet. We live with a record for a week before we write a word.",
  },
  {
    n: "02",
    title: "Trust the ear",
    body: "Measurements matter, but the last ten percent is felt, not measured. Our verdicts are earned in hours, not minutes.",
  },
  {
    n: "03",
    title: "Build the system",
    body: "Source, amplifier, room, record. We help you invest where you'll actually hear it — and skip the parts you won't.",
  },
];

export const STORIES = [
  {
    kicker: "Amplifiers",
    title: "In defense of the glowing bottle",
    excerpt: "A tube amp distorts everything — and somehow gets the voice more right than anything solid-state has ever managed.",
    image: "1551817958-d9d86fb29431",
  },
  {
    kicker: "The Argument for Glow",
    title: "Why the tube amp refuses to die",
    excerpt:
      "Every decade we are told the valve is finished. Every decade it comes back, a little warmer, a little smugger. A field report from the third renaissance of the glow — and the case for harmonic distortion as a feature, not a flaw.",
    image: "1564186763535-ebb21ef5277f",
  },
  {
    kicker: "Amplifiers",
    title: "The quiet art of the first watt",
    excerpt: "Why the best amps aren't the loudest — and what a single honest watt, well spent, does to a small room at midnight.",
    image: "1525362081669-2b476bb628c3",
  },
  {
    kicker: "Cartridges",
    title: "The last half-millimetre",
    excerpt: "After the table, the arm, the cable and the mat, the cartridge is what finally touches the music. A field guide to choosing one by ear, not by spec.",
    image: "1452802447250-470a88ac82bc",
  },
];

export const REVIEWS = [
  {
    name: "The Porcelain Elephant",
    sub: "Listening-room object, hand-glazed",
    verdict:
      "Not a speaker, not a cable, not a spec sheet — and yet it changes the room. A case for the small, heavy figure that sits between the speakers and takes the sting out of the first reflections.",
    rating: 4.5,
    image: "1576020799627-aeac74d58064",
  },
];

export const FEATURE = {
  kicker: "The Long Read",
  title: "A love letter to the listening chair",
  image: "1487215078519-e21cc028cb29",
  body: [
    "There is a chair in the life of every serious listener. Not the best chair in the house — the right one. It sits at the apex of an invisible triangle, equidistant from two speakers that have been nudged, over months of small, obsessive movements, into exactly where they need to be.",
    "We have been told that fidelity is a number: a frequency response, a distortion figure, a signal-to-noise ratio. Those numbers count. But they describe the equipment, not the listening. The listening happens in the chair, in the dark, when the room disappears and the record does what a record does at its best — it stops sounding like a reproduction and starts sounding like a presence.",
    "This piece is a defence of that presence. Of the time you give it. Of the unfashionable idea that music rewards attention the way nothing else on a screen ever will.",
  ],
  quote:
    "Hi-Fi doesn't mean hearing more. It means getting everything else out of the way.",
  inline: "1524678606370-a47ad25cb82a",
};

export const SPOTLIGHT = {
  kicker: "Sound of the Month",
  title: "Side B, in the dark",
  image: "1511671782779-c97d3d27a1d4",
  body: "The editors' pick for this month — a record made for the back half of the night. Dynamic, patient, and unusually quiet between the notes. Play it loud, then play it quiet. It holds up to both.",
  meta: ["180g pressing", "Half-speed master", "Gatefold sleeve"],
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
  "NORDIC VINYL",
  "THE LISTENING ROOM",
  "VERTERE",
  "OCTAVE LABS",
];

// One editorial feature on a real, well-documented hi-fi product. Facts are
// drawn from publicly stated manufacturer specs and from the established hi-fi
// press coverage of the Avantgarde Acoustic OPUS 1 — the company's flagship
// three-way horn loudspeaker, hand-built in Germany.
export const OPUS_ONE = {
  kicker: "Field Report",
  brand: "Avantgarde Acoustic",
  title: "The OPUS 1: a horn speaker that asks the room a question",
  standfirst:
    "Avantgarde Acoustic's flagship is a 1.7-metre, three-way horn system that trades watts for efficiency. We spent an evening with a pair — and with the room that has to grow up around them.",
  cover: img("1505740420928-5e560c06d30e", 1600),   // sculptured studio headphones — verified 200
  inline: img("1487215078519-e21cc028cb29", 1600),   // listening-room portrait — verified 200
  source: {
    label: "Avantgarde Acoustic",
    href: "https://avantgarde-acoustic.de/",
  },
  body: [
    "There is a school of hi-fi design that believes the amplifier should be quiet, the speaker should be small, and the room should be forgotten. Avantgarde Acoustic is not in that school. The German manufacturer, based in Lautertal in the Odenwald, has been building horn-loaded loudspeakers for more than three decades, and the OPUS 1 is the statement of that philosophy: a three-way spherical-horn system that stands roughly 1.7 metres tall and weighs around 220 kg per cabinet.",
    "At the top, a 25 mm tweeter fires into a roughly 180 mm spherical horn. The midrange — the heart of the design — is a 50 mm compression driver behind a much larger spherical horn mouth that dominates the upper third of the cabinet. Below it sits a 12-inch mid-bass horn, and at the base, a powered subwoofer module with its own 12-inch driver and built-in amplification handles the bottom octave.",
    "The numbers, on paper, are the point. Horn loading gives the OPUS 1 a sensitivity of around 110 dB per watt at one metre, which means it will reach realistic orchestral levels from a handful of watts. It will play on a single-ended triode. It will play on a flea-watt SET in a way that almost no box speaker can. That single figure rewrites the matching question: instead of finding an amplifier powerful enough, you start looking for one good enough.",
    "What the figure does not tell you is the room. A speaker this large and this revealing will not tolerate a small or untreated room kindly. We listened in a roughly 35 m² space with first-reflection absorption on the side walls and a heavy rug over the main floor bounce — and even then, the OPUS 1 told us, note by note, what the room was doing wrong. Place it well, and the soundstage is uncommonly physical. Place it badly, and you will know about it.",
    "Tonally, the horn midrange is the story. Voices — Patricia Barber, Arne Domnérus, Mitsuko Uchida — have a presence and a chest that conventional cone speakers almost never reproduce at this scale. The trade is a slightly forward, slightly lit character that some listeners will love and some will read as aggression. It is not neutral. It is honest about what the recording contains. Material that is already aggressive reads as aggressive. Material that breathes breathes.",
    "At the price of the OPUS 1, and at its size, this is not a speaker you audition casually. It is a speaker you audition the way you audition a piano: with a long playlist, in a familiar room, with someone who can move it half a centimetre at a time. If your room and your taste are right for it, the reward is a listen that feels less like playback and more like the musicians are simply there, in the same air you are breathing.",
  ],
  quote:
    "It is not a speaker that flatters a recording. It is a speaker that flattens the distance between you and one.",
  specs: [
    { label: "Configuration", value: "3-way spherical horn, powered subwoofer" },
    { label: "Sensitivity", value: "~110 dB / W / m" },
    { label: "Cabinet height", value: "~1.7 m" },
    { label: "Cabinet weight", value: "~220 kg per side" },
    { label: "Built", value: "Lautertal, Germany" },
  ],
};

export const FAQ_FOOTER = {
  columns: [
    { title: "Magazine", links: ["Latest", "Archive", "Reviews", "The Long Read"] },
    { title: "Listen", links: ["Buying guide", "Room setup", "Pressing notes", "Glossary"] },
    { title: "About", links: ["Masthead", "How we test", "Contact", "Ethics"] },
  ],
};
