import { STORIES, img } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const storyIndex = STORIES.findIndex((s) => s.slug === slug);
  
  if (storyIndex === -1) {
    notFound();
  }

  const story = STORIES[storyIndex];
  const nextStory = STORIES[(storyIndex + 1) % STORIES.length];

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent-soft selection:text-ink">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Back Button */}
        <div className="mx-auto max-w-3xl px-5 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to issue
          </Link>
        </div>

        {/* Hero Header */}
        <article>
          <header className="mx-auto max-w-3xl px-5 text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              {story.kicker}
            </span>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl leading-[1.1]">
              {story.title}
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed font-light italic">
              {story.excerpt}
            </p>
          </header>

          {/* Hero Image */}
          <div className="mx-auto max-w-5xl px-5 mb-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line/70 shadow-[0_30px_70px_-30px_rgba(20,17,15,0.3)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(story.image, 1600)}
                alt={story.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Body Content */}
          <div className="mx-auto max-w-2xl px-5">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {story.body?.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-lg leading-relaxed text-ink-soft mb-8 font-serif ${
                    idx === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-accent" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Next Story Recommendation */}
        <div className="mx-auto max-w-3xl px-5 mt-20 pt-12 border-t border-line">
          <span className="text-xs font-bold uppercase tracking-widest text-ink-soft block mb-6">
            Next in this issue
          </span>
          <Link
            href={`/stories/${nextStory.slug}`}
            className="group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 rounded-2xl border border-line hover:border-accent/30 hover:bg-accent-soft/10 transition-all duration-300"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {nextStory.kicker}
              </span>
              <h3 className="font-display text-xl font-semibold mt-1 group-hover:text-accent transition-colors">
                {nextStory.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent shrink-0">
              Read next <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
