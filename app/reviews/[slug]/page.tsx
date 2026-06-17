import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, StarRating } from "@/components/ui/bits";
import { BRAND, REVIEWS, getReviewBySlug, img, reviewPath } from "@/lib/content";

type ReviewPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamicParams = false;

export function generateStaticParams() {
  return REVIEWS.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({
  params,
}: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);

  if (!review) {
    return {
      title: "Review not found",
    };
  }

  const image = review.detailImage ?? review.image;
  const alt = review.detailAlt ?? review.alt;

  return {
    title: review.seoTitle,
    description: review.seoDescription,
    alternates: {
      canonical: reviewPath(review.slug),
    },
    openGraph: {
      title: review.seoTitle,
      description: review.seoDescription,
      type: "article",
      url: reviewPath(review.slug),
      images: [
        {
          url: image,
          alt,
          width: 1600,
          height: 900,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: review.seoTitle,
      description: review.seoDescription,
      images: [image],
    },
  };
}

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);

  if (!review) {
    notFound();
  }

  const heroImage = review.detailImage ?? review.image;
  const heroAlt = review.detailAlt ?? review.alt;
  const relatedReviews = REVIEWS.filter((item) => item.slug !== review.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${review.name} review`,
    headline: review.seoTitle,
    description: review.seoDescription,
    image: absoluteUrl(heroImage),
    url: absoluteUrl(reviewPath(review.slug)),
    reviewBody: review.body.join(" "),
    author: {
      "@type": "Organization",
      name: BRAND.name,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
    },
    itemReviewed: {
      "@type": "Product",
      name: review.name,
      description: review.sub,
      image: absoluteUrl(heroImage),
      brand: {
        "@type": "Brand",
        name: review.name.split(" ")[0],
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <Navbar />
      <main id="top" className="flex-1 bg-paper pt-28">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article>
          <section className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <Link
                href="/#reviews"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to reviews
              </Link>
              <Kicker>Review</Kicker>
              <h1 className="font-display mt-5 text-[clamp(3rem,8vw,6.6rem)] font-semibold leading-[0.98]">
                {review.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-accent">{review.sub}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <StarRating value={review.rating} />
                <span className="text-sm font-semibold uppercase tracking-widest text-ink-soft/70">
                  {review.rating.toFixed(1)} / 5.0
                </span>
              </div>
              <p className="mt-7 text-xl leading-relaxed text-ink-soft">
                {review.verdict}
              </p>
              {review.officialUrl && (
                <a
                  href={review.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {review.officialLabel ?? "Official product page"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </Reveal>

            <Reveal className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-line/70 shadow-[0_50px_100px_-35px_rgba(20,17,15,0.48)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(heroImage, 1600)}
                  alt={heroAlt}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>
          </section>

          <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <Reveal className="sticky top-28 border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft/70">
                  Verdict
                </p>
                <p className="font-display mt-4 text-3xl font-medium leading-tight">
                  {review.quote ?? review.verdict}
                </p>
                <dl className="mt-8 grid gap-5 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Product</dt>
                    <dd className="mt-1 text-ink-soft">{review.name}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Category</dt>
                    <dd className="mt-1 text-ink-soft">{review.sub}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Rating</dt>
                    <dd className="mt-1 text-ink-soft">{review.rating.toFixed(1)} / 5.0</dd>
                  </div>
                </dl>
              </Reveal>
            </aside>

            <div className="lg:col-span-8">
              <div className="mx-auto max-w-3xl">
                {review.body.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 0.04}>
                    <p
                      className={`text-lg leading-[1.85] text-ink/85 ${
                        index === 0
                          ? "first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent"
                          : "mt-7"
                      }`}
                    >
                      {paragraph}
                    </p>
                  </Reveal>
                ))}

                {review.quote && (
                  <Reveal>
                    <blockquote className="my-10 border-l-2 border-accent pl-7">
                      <p className="font-display text-3xl font-medium italic leading-snug text-ink sm:text-4xl">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </blockquote>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        </article>

        <section className="border-t border-line bg-white/45">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Kicker>More reviews</Kicker>
                <h2 className="font-display mt-4 text-4xl font-semibold">
                  Keep building the system.
                </h2>
              </div>
              <Link
                href="/#reviews"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                All reviews <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {relatedReviews.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.05}>
                  <Link
                    href={item.href}
                    className="group block h-full rounded-lg border border-line bg-paper p-4 transition-colors hover:border-accent"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(item.image, 600)}
                      alt={item.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-md object-cover"
                    />
                    <h3 className="font-display mt-4 text-2xl font-semibold group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.sub}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
