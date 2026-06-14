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

export const FAQ_FOOTER = {
  columns: [
    { title: "Magazin", links: ["Aktuelle Ausgabe", "Archiv", "Tests", "Die lange Reportage"] },
    { title: "Hören", links: ["Kaufberatung", "Raumaufstellung", "Pressungsnotizen", "Glossar"] },
    { title: "Über uns", links: ["Masthead", "So testen wir", "Kontakt", "Ethik"] },
  ],
};
