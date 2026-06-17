import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const root = new URL("../", import.meta.url);
const content = readFileSync(new URL("lib/content.ts", root), "utf8");

const opusImages = [
  "/images/opus-1/opus-1-scene-2-black-black.jpg",
  "/images/opus-1/opus-1-scene-2-white-white.jpg",
  "/images/opus-1/opus-1-scene-4-black-white.jpg",
  "/images/opus-1/opus-1-scene-4-white-white-perspective.jpg",
  "/images/opus-1/opus-1-scene-4-white-white.jpg",
];

const companionReviewImages = [
  "/images/reviews/naim-uniti-nova-pe.jpg",
  "/images/reviews/rega-planar-8.jpg",
  "/images/reviews/isoacoustics-gaia-neo.jpg",
];

test("homepage content uses all OPUS 1 image assets", () => {
  for (const image of [...opusImages, ...companionReviewImages]) {
    assert.match(content, new RegExp(image.replaceAll("/", "\\/")));
    assert.ok(existsSync(new URL(`public${image}`, root)), `${image} should exist in public/`);
  }
});

test("homepage content keeps old field-report language off the page", () => {
  const homepageSources = [
    content,
    readFileSync(new URL("app/page.tsx", root), "utf8"),
    readFileSync(new URL("components/Hero.tsx", root), "utf8"),
    readFileSync(new URL("components/Marquee.tsx", root), "utf8"),
    readFileSync(new URL("components/Stories.tsx", root), "utf8"),
    readFileSync(new URL("components/Reviews.tsx", root), "utf8"),
    readFileSync(new URL("components/Spotlight.tsx", root), "utf8"),
  ].join("\n");

  assert.doesNotMatch(homepageSources, /field\s*report/i);
  assert.doesNotMatch(homepageSources, /heard in the listening rooms of/i);
  assert.doesNotMatch(homepageSources, /beitrag/i);
  assert.match(homepageSources, /OPUS Feature/);
});

test("homepage does not mount the partner logo marquee", () => {
  const page = readFileSync(new URL("app/page.tsx", root), "utf8");

  assert.doesNotMatch(page, /<Marquee\s*\/>/);
  assert.doesNotMatch(page, /@\/components\/Marquee/);
});

test("newsletter copy is digital-first", () => {
  const newsletter = readFileSync(new URL("components/Newsletter.tsx", root), "utf8");

  assert.match(newsletter, /Get the next<br \/>digital issue first\./);
  assert.doesNotMatch(newsletter, /pressing sells out/i);
});

test("homepage shows OPUS plus companion product reviews", () => {
  const reviewsMatch = content.match(/export const REVIEWS(?::[^=]+)? = \[([\s\S]*?)\];/);
  const expectedSlugs = [
    "opus-1",
    "naim-uniti-nova-pe",
    "rega-planar-8",
    "isoacoustics-gaia-neo",
  ];

  assert.ok(reviewsMatch, "REVIEWS content should be present");
  assert.equal((reviewsMatch[1].match(/\bname:/g) || []).length, 4);
  assert.match(reviewsMatch[1], /name: "OPUS 1"/);
  assert.match(reviewsMatch[1], /name: "Naim Uniti Nova PE"/);
  assert.match(reviewsMatch[1], /name: "Rega Planar 8"/);
  assert.match(reviewsMatch[1], /name: "IsoAcoustics GAIA Neo"/);
  assert.match(reviewsMatch[1], /rating: 5/);
  assert.doesNotMatch(reviewsMatch[1], /external: true/);
  for (const slug of expectedSlugs) {
    assert.match(reviewsMatch[1], new RegExp(`slug: "${slug}"`));
    assert.match(reviewsMatch[1], new RegExp(`href: reviewPath\\("${slug}"\\)`));
  }
  assert.match(reviewsMatch[1], /officialUrl: "https:\/\/www\.naimaudio\.com\/products\/nova-power-edition"/);
  assert.match(reviewsMatch[1], /officialUrl: "https:\/\/www\.rega\.co\.uk\/products\/planar-8"/);
  assert.match(reviewsMatch[1], /officialUrl: "https:\/\/isoacoustics\.com\/home-audio-isolation-products\/gaia-neo-series\/"/);
  assert.doesNotMatch(reviewsMatch[1], /OPUS 1 Black \/ White|OPUS 1 Perspective/);
});

test("companion reviews stand alone without OPUS mentions", () => {
  const companionSlugs = [
    "naim-uniti-nova-pe",
    "rega-planar-8",
    "isoacoustics-gaia-neo",
  ];

  for (const slug of companionSlugs) {
    const block = content.match(
      new RegExp(`slug: "${slug}",[\\s\\S]*?(?=\\n  \\{\\n    slug:|\\n\\];)`)
    )?.[0];

    assert.ok(block, `${slug} review block should be present`);
    assert.doesNotMatch(block, /\bOPUS\b|OPUS 1/i);
  }
});

test("companion review pages do not render OPUS as a related review", () => {
  const reviewPage = readFileSync(new URL("app/reviews/[slug]/page.tsx", root), "utf8");

  assert.match(reviewPage, /review\.slug === "opus-1"/);
  assert.match(reviewPage, /item\.slug !== "opus-1"/);
});

test("review cards link to SEO review routes", () => {
  const page = readFileSync(new URL("app/page.tsx", root), "utf8");
  const reviews = readFileSync(new URL("components/Reviews.tsx", root), "utf8");
  const stories = readFileSync(new URL("components/Stories.tsx", root), "utf8");
  const reviewPage = readFileSync(new URL("app/reviews/[slug]/page.tsx", root), "utf8");
  const layout = readFileSync(new URL("app/layout.tsx", root), "utf8");
  const sources = [content, page, reviews, stories, reviewPage].join("\n");

  assert.doesNotMatch(page, /<Feature\s*\/>/);
  assert.match(reviews, /href=\{r\.href\}/);
  assert.doesNotMatch(sources, /#opus-1-review/);
  assert.doesNotMatch(reviews, /FEATURE\.body\.map|r\.external/);
  assert.match(stories, /\/reviews\/opus-1/);
  assert.match(reviewPage, /export const dynamicParams = false/);
  assert.match(reviewPage, /generateStaticParams/);
  assert.match(reviewPage, /generateMetadata/);
  assert.match(reviewPage, /application\/ld\+json/);
  assert.match(reviewPage, /alternates:\s*\{\s*canonical: reviewPath\(review\.slug\)/);
  assert.match(layout, /metadataBase: new URL\(siteUrl\)/);
});

test("hero headline leaves room for italic descenders", () => {
  const hero = readFileSync(new URL("components/Hero.tsx", root), "utf8");

  assert.match(hero, /leading-\[1\.04\]/);
  assert.match(hero, /pb-\[0\.12em\]/);
  assert.match(hero, /-mb-\[0\.12em\]/);
});

test("spotlight uses the black-black OPUS 1 scene", () => {
  const spotlightMatch = content.match(/export const SPOTLIGHT = \{([\s\S]*?)\};/);

  assert.ok(spotlightMatch, "SPOTLIGHT content should be present");
  assert.match(spotlightMatch[1], /title: "Black-black, with daylight on the horn"/);
  assert.match(spotlightMatch[1], /image: OPUS_IMAGES\.scene2BlackBlack/);
  assert.match(spotlightMatch[1], /"Black-black"/);
});
