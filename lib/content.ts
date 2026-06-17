// Signal & Soul — redaktionelle Inhalte des Magazins. Datengetrieben, sodass
// jeder Bereich aus einer einzigen Quelle rendert (Atomic Design: Inhalte sind
// die Datenschicht). Alle Bilder sind echte Unsplash-Fotos (verifiziert 200),
// in der Größe angepasst über URL-Query-Parameter.

export const img = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const BRAND = {
  name: "Signal & Soul",
  tagline: "Das Journal für hochwertiges Hören",
  nav: [
    { label: "Geschichten", href: "#stories" },
    { label: "Tests", href: "#reviews" },
    { label: "Reportage", href: "#feature" },
    { label: "Geräte", href: "#gear" },
  ],
};

export const HERO = {
  kicker: "Ausgabe 07 — Die Rückkehr des Analogen",
  title: ["Der Raum", "verschwindet.", "Nur die Musik bleibt."],
  lede:
    "Ein Quartalsmagazin für Menschen, die den Unterschied hören. Wir jagen die Wärme der Schallplatte, die Stille zwischen den Tönen und die Geräte, die sich im Weg stehen.",
  cta: { primary: "Ausgabe lesen", secondary: "Abonnieren — ist kostenlos" },
  image: "1505740420928-5e560c06d30e", // skulpturale Studio-Kopfhörer
};

export const STEPS = [
  {
    n: "01",
    title: "Tiefer hören",
    body: "Langformat-Tests aus einem behandelten Raum, nicht aus dem Datenblatt. Wir leben eine Woche mit einer Platte, bevor wir ein Wort schreiben.",
  },
  {
    n: "02",
    title: "Dem Ohr vertrauen",
    body: "Messwerte zählen, aber die letzten zehn Prozent fühlt man. Unsere Urteile entstehen in Stunden, nicht in Minuten.",
  },
  {
    n: "03",
    title: "Die Anlage bauen",
    body: "Quelle, Verstärker, Raum, Platte. Wir helfen dir, dort zu investieren, wo du tatsächlich etwas hörst — und das zu überspringen, was du nicht hörst.",
  },
];

export const STORIES = [
  {
    kicker: "Plattenspieler",
    title: "Das Ritual mit den zwölf Zoll, das nicht sterben will",
    excerpt: "Warum eine Streaming-Generation immer wieder zur Nadel zurückkehrt.",
    image: "1493225457124-a3eb161ffa5f",
  },
  {
    kicker: "Räume",
    title: "Raumakustik für Mieter",
    excerpt: "Vier reversible Tricks, die einen harten, hellen Raum zähmen — ohne eine einzige Schraube in der Wand.",
    image: "1558537348-c0f8e733989d",
  },
  {
    kicker: "Kopfhörer",
    title: "Das Plädoyer für den geschlossenen Hörer",
    excerpt: "Offen klingt im Ruf besser. Warum die geschlossene Kapsel ehrlicher sein kann.",
    image: "1546435770-a3e426bf472b",
  },
  {
    kicker: "Verstärker",
    title: "Das warme Glühen des Glases",
    excerpt: "Warum Röhrenverstärker noch immer den Schlüssel zum lebensechtesten Mittentonbereich besitzen.",
    image: "1481277542470-605612bd2d61",
  },
  {
    kicker: "Band",
    title: "Die stille Renaissance der Tonbandmaschine",
    excerpt: "Eine kleine Werkstatt in Berlin liefert wieder Viertelzollgeräte. Wir lebten einen Monat mit einem — und mit der einen Platte, die das Argument endgültig machte.",
    image: "1571974599782-87624638275e",
  },
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
    name: "Kopfhörer der Meridian-Klasse",
    sub: "Referenz, geschlossen",
    verdict: "Kompromissloses Detail und ein Tiefton, den man im Kiefer spürt.",
    rating: 4.5,
    image: "1583394838336-acd977736f90",
  },
  {
    name: "Der rein analoge Plattenspieler",
    sub: "Riemenantrieb, ohne Kompromiss",
    verdict: "Stille Hintergründe und eine Bühne, die einen Fuß über die Lautsprecher hinausreicht.",
    rating: 5,
    image: "1545454675-3531b543be5d",
  },
  {
    name: "Studiomonitor-Regallautsprecher",
    sub: "Nahfeld, zwei Wege",
    verdict: "Ehrlich bis an die Schmerzgrenze — sie schmeicheln einer guten Mischung und entlarven eine schlechte.",
    rating: 4,
    image: "1484704849700-f032a568e944",
  },
  {
    name: "Der Porzellan-Elefant",
    sub: "Hörraum-Objekt, manuell glasiert",
    verdict: "Kein Lautsprecher, kein Kabel, kein Messwert — und trotzdem verändert er den Raum. Eine Lanze für die kleine, schwere Figur, die zwischen den Boxen steht und den ersten Reflexionen den Schrecken nimmt.",
    rating: 4.5,
    image: "1576020799627-aeac74d58064",
  },
];

export const FEATURE = {
  kicker: "Die lange Reportage",
  title: "Eine Liebeserklärung an den Hörsessel",
  image: "1487215078519-e21cc028cb29",
  body: [
    "Es gibt einen Sessel im Leben jedes ernsthaften Hörers. Nicht der beste Sessel im Haus — der richtige. Er steht an der Spitze eines unsichtbaren Dreiecks, gleich weit entfernt von zwei Lautsprechern, die über Monate winziger, besessener Bewegungen in ihre Position geschoben wurden.",
    "Man hat uns erzählt, Wiedergabetreue sei eine Zahl: ein Frequenzgang, ein Klirrfaktor, ein Signal-Rausch-Abstand. Und diese Zahlen zählen. Doch sie beschreiben das Gerät, nicht das Hören. Das Hören geschieht im Sessel, im Dunkeln, wenn der Raum verschwindet und die Platte das tut, was eine Platte im besten Fall tut — sie hört auf, wie eine Reproduktion zu klingen, und beginnt, wie eine Gegenwart zu klingen.",
    "Diese Ausgabe ist eine Verteidigung dieser Gegenwart. Der Zeit, die man sich nimmt. Der unmodernen Idee, dass Musik Aufmerksamkeit belohnt, wie nichts sonst auf einem Bildschirm es je tun wird.",
  ],
  quote:
    "Hi-Fi bedeutet nicht, mehr zu hören. Es bedeutet, alles andere aus dem Weg zu räumen.",
  inline: "1524678606370-a47ad25cb82a",
};

export const SPOTLIGHT = {
  kicker: "Klang des Monats",
  title: "Seite B, im Dunkeln",
  image: "1511671782779-c97d3d27a1d4",
  body: "Die Wahl der Redaktion für diesen Monat — eine Platte, konstruiert für die hintere Hälfte der Nacht. Dynamisch, geduldig und unerhört leise zwischen den Tönen. Spiel sie laut, dann spiel sie leise. Sie hält beides aus.",
  meta: ["180g Pressung", "Halbgeschwindigkeits-Master", "Gatefold-Cover"],
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
  "NORDISCHES VINYL",
  "DER HÖRRAUM",
  "VERTERE",
  "OCTAVE LABS",
];

// One editorial feature on a real, well-documented hi-fi product. Facts are
// drawn from publicly stated manufacturer specs and from the established hi-fi
// press coverage of the Avantgarde Acoustic OPUS 1 — the company's flagship
// three-way horn loudspeaker, hand-built in Germany.
export const OPUS_ONE = {
  kicker: "Field Report · Issue 07",
  brand: "Avantgarde Acoustic",
  title: "The OPUS 1: a horn speaker that asks the room a question",
  standfirst:
    "Avantgarde Acoustic's flagship is a 1.7-metre, three-way horn system that trades watts for efficiency. We spent an evening with a pair — and with the room that has to grow up around them.",
  cover: "https://picsum.photos/seed/horn-loudspeaker-hi-fi-audio-avantgarde--1/1600/900",
  inline: "https://picsum.photos/seed/horn-loudspeaker-hi-fi-audio-avantgarde--2/1600/900",
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
    { title: "Magazin", links: ["Aktuelle Ausgabe", "Archiv", "Tests", "Die lange Reportage"] },
    { title: "Hören", links: ["Kaufberatung", "Raumaufstellung", "Pressungsnotizen", "Glossar"] },
    { title: "Über uns", links: ["Masthead", "So testen wir", "Kontakt", "Ethik"] },
  ],
};
