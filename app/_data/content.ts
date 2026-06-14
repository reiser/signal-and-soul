export interface Story {
  slug: string;
  title: string;
  standfirst: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export interface Review {
  id: string;
  title: string;
  category: string;
  rating: number;
  price: string;
  verdict: string;
  specs: { label: string; value: string }[];
  image: string;
}

export interface GearItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  image: string;
}

export const STORIES: Story[] = [
  {
    slug: "return-of-reel-to-reel",
    title: "The Return of Reel-to-Reel",
    standfirst: "Why audiophiles are turning back to analog tape for the ultimate high-fidelity experience.",
    category: "Analog",
    author: "Julian Vance",
    date: "October 30, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-5/1600/900",
    content: [
      "For decades, the vinyl record has been the poster child of the analog revival. But for a small, dedicated group of ultra-high-end audiophiles, there is a format that stands even higher: reel-to-reel analog tape.",
      "Reel-to-reel tape offers a level of dynamic range, frequency response, and pure physical presence that even the best vinyl pressings cannot match. When you listen to a master tape copy on a calibrated deck, you are hearing the music exactly as the artist and engineer heard it in the control room.",
      "The resurgence of analog tape has led to a new wave of hardware restoration and boutique record labels releasing master-tape duplicates. It is a demanding, expensive, and utterly uncompromising format—but for those who seek the absolute peak of sound reproduction, reel-to-reel is the ultimate destination."
    ]
  },
  {
    slug: "warmth-of-glass",
    title: "The Warmth of Glass: Why Vacuum Tubes Still Rule the High-End",
    standfirst: "In an era dominated by digital precision, the glowing vacuum tube remains the undisputed sovereign of pure, emotional sound reproduction.",
    category: "Amplification",
    author: "Julian Vance",
    date: "October 24, 2024",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-1/1600/900",
    content: [
      "There is an undeniable magic in the soft, amber glow of a vacuum tube. For decades, solid-state technology has promised lower distortion, higher efficiency, and absolute reliability. Yet, walk into any ultra-high-end listening room, and you are highly likely to find a pair of glowing monoblocks standing like sentinels of sound.",
      "The secret lies not in technical perfection, but in how human ears perceive sound. Vacuum tubes, or thermionic valves, introduce even-order harmonic distortion when pushed. Unlike the harsh, odd-order harmonics of clipping transistors, even-order harmonics are inherently musical, mimicking the natural resonance of acoustic instruments.",
      "When you listen to a vocal track through a well-designed tube amplifier, the singer doesn't just appear between the speakers; they materialize in the room. The breath, the subtle vibrato, and the acoustic space surrounding the microphone are rendered with a three-dimensional depth that digital-only systems often flatten.",
      "Of course, tube ownership is a commitment. They run hot, they require manual biasing, and they eventually wear out. But for those who seek the soul of music rather than just its signal, there is simply no substitute for the warmth of glass."
    ]
  },
  {
    slug: "perfect-groove",
    title: "The Perfect Groove: Mastering the Art of Turntable Calibration",
    standfirst: "A millimeter of misalignment can be the difference between sonic transcendence and muddy distortion. Here is how to calibrate your deck.",
    category: "Analog",
    author: "Marcus Thorne",
    date: "October 18, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-2/1600/900",
    content: [
      "Vinyl is a physical medium. It is a microscopic diamond tracing a plastic canyon, translating physical vibrations into electrical signals measured in millivolts. Because of this mechanical nature, the setup of your turntable is just as critical as the quality of the components themselves.",
      "Many enthusiasts spend thousands on cartridges only to mount them with a basic alignment card and hope for the best. To truly unlock the detail hidden in the groove, one must master the holy trinity of calibration: tracking force, VTA (Vertical Tracking Angle), and azimuth.",
      "Tracking force ensures the stylus stays seated in the groove without carving away the vinyl. Too light, and it mistracks, causing permanent damage; too heavy, and the sound becomes dull and compressed. A digital gauge is essential for setting this to within a hundredth of a gram.",
      "Next is VTA, which adjusts the angle at which the stylus enters the groove. A perfectly parallel tonearm is the starting point, but fine-tuning by ear can reveal a wider soundstage and tighter bass. Finally, azimuth ensures the stylus is perfectly perpendicular to the record surface, maximizing stereo separation and eliminating crosstalk."
    ]
  },
  {
    slug: "acoustic-sanctuary",
    title: "Acoustic Sanctuary: Designing the Ultimate Listening Room",
    standfirst: "Your room is the most influential component in your entire audio chain. Learn how to tame reflections and unleash your speakers.",
    category: "Acoustics",
    author: "Elena Rostova",
    date: "October 12, 2024",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-3/1600/900",
    content: [
      "You can buy the finest speakers in the world, but if you place them in a concrete box with bare glass windows, they will sound terrible. The room is not just a container for your system; it is an active acoustic component that shapes every frequency before it reaches your ears.",
      "The primary enemy of clean sound is early reflections. When sound waves leave your speakers, they bounce off the side walls, floor, and ceiling, arriving at your ears slightly after the direct sound. This creates phase cancellation, muddying the stereo image and blurring transient details.",
      "Taming these reflections doesn't mean turning your room into an anechoic chamber. A completely dead room sounds unnatural and fatiguing. The goal is a balanced combination of absorption (to control bass build-up and flutter echoes) and diffusion (to scatter high frequencies and create a sense of spaciousness).",
      "Start with the 'mirror trick' to locate your first reflection points on the side walls, and place high-quality fiberglass or rockwool panels there. For the rear wall, a mathematical diffuser will scatter reflections, making your room sound twice as large as it actually is."
    ]
  },
  {
    slug: "beyond-decibels",
    title: "Beyond Decibels: The Psychoacoustics of High-Resolution Audio",
    standfirst: "Why do we feel a difference when listening to master-quality recordings, even when the frequencies exceed human hearing?",
    category: "Digital",
    author: "Dr. Aris Thorne",
    date: "October 05, 2024",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-4/1600/900",
    content: [
      "The debate over high-resolution audio has raged since the introduction of the Compact Disc. Critics point out that the human ear can rarely hear above 20 kHz, making the extended frequency response of 96 kHz or 192 kHz files theoretically useless. But psychoacoustics tells a different story.",
      "Our brains do not perceive sound as isolated sine waves. We process complex wave fronts, transient attacks, and spatial cues. High-resolution audio provides much higher temporal resolution, meaning the timing of transients—the initial strike of a drum or pluck of a string—is preserved with microsecond accuracy.",
      "This temporal precision is what allows our brain to construct a realistic 3D soundstage. When timing is smeared by low-sample-rate filters, the music feels flat and fatiguing. High-resolution formats restore this temporal integrity, resulting in a more relaxed, natural, and emotionally engaging listening experience."
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    title: "Aurelia Reference One",
    category: "Loudspeakers",
    rating: 5.0,
    price: "$12,500 / pair",
    verdict: "An absolute masterpiece of spatial imaging and low-frequency authority. The Reference One redefines what is possible at this price point.",
    specs: [
      { label: "Frequency Response", value: "22Hz - 35kHz" },
      { label: "Sensitivity", value: "91 dB" },
      { label: "Impedance", value: "4 Ohms" },
      { label: "Weight", value: "48 kg each" }
    ],
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-5/1600/900"
  },
  {
    id: "rev-2",
    title: "Chronos Tube Amp V2",
    category: "Amplifiers",
    rating: 4.8,
    price: "$8,900",
    verdict: "Pure holographic magic. While it won't drive extremely demanding speakers, its midrange purity is unmatched by any solid-state design.",
    specs: [
      { label: "Power Output", value: "45W Class A per channel" },
      { label: "Tube Complement", value: "4x KT88, 2x 12AX7" },
      { label: "Inputs", value: "3x RCA, 1x XLR" },
      { label: "THD", value: "< 0.1% at rated power" }
    ],
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-6/1600/900"
  },
  {
    id: "rev-3",
    title: "Elysium DAC-9",
    category: "Digital",
    rating: 4.9,
    price: "$4,200",
    verdict: "The most analog-sounding digital converter we have ever tested. It strips away digital glare to reveal pure, unadulterated musicality.",
    specs: [
      { label: "DAC Chip", value: "Proprietary R-2R Ladder" },
      { label: "Max Resolution", value: "32-bit / 768kHz, DSD512" },
      { label: "Outputs", value: "Balanced XLR, Single-ended RCA" },
      { label: "Dynamic Range", value: "130 dB" }
    ],
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-7/1600/900"
  }
];

export const GEAR_GALLERY: GearItem[] = [
  {
    id: "gear-1",
    title: "Solis Precision Tonearm",
    brand: "Solis Audio",
    category: "Analog Components",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-8/1600/900"
  },
  {
    id: "gear-2",
    title: "Aether Open-Back Headphones",
    brand: "Aether Labs",
    category: "Personal Audio",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-3/1600/900"
  },
  {
    id: "gear-3",
    title: "Vortex Power Conditioner",
    brand: "Vortex Power",
    category: "Power Delivery",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-1/1600/900"
  },
  {
    id: "gear-4",
    title: "Titanium Stylus Cartridge",
    brand: "Orpheus Analog",
    category: "Cartridges",
    image: "https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-2/1600/900"
  }
];
