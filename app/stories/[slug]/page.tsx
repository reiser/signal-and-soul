import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STORIES } from "../../_data/content";
import { Volume2, ArrowLeft, Calendar, Clock, User, ChevronRight, Award } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  // Find other stories for the "Read Next" section
  const otherStories = STORIES.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0c]/90 border-b border-[#22222a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Volume2 className="h-6 w-6 text-[#d4af37] group-hover:rotate-12 transition-transform" />
            <span className="font-editorial text-2xl font-bold tracking-widest text-white group-hover:text-[#d4af37] transition-colors">
              SIGNAL <span className="text-[#d4af37]">&amp;</span> SOUL
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-300 hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Magazine
          </Link>
        </div>
      </header>

      {/* Article Hero */}
      <section className="relative min-h-[60vh] flex items-end justify-center overflow-hidden border-b border-[#22222a]">
        <div className="absolute inset-0 z-0">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 text-left w-full">
          <span className="inline-block px-3 py-1 border border-[#d4af37]/30 bg-[#d4af37]/10 text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-6">
            {story.category}
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            {story.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-8">
            {story.standfirst}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 border-t border-[#22222a] pt-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-[#d4af37]" />
              <span>By <strong className="text-white">{story.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#d4af37]" />
              <span>{story.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#d4af37]" />
              <span>{story.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="flex-1 py-16 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-8">
            {story.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-300 text-lg leading-relaxed font-light ${
                  index === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:text-[#d4af37] first-letter:mr-3 first-letter:float-left first-letter:font-editorial" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Editorial Sign-off */}
          <div className="mt-16 pt-8 border-t border-[#22222a] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#d4af37]" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                Signal &amp; Soul Certified Editorial
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Read Next Section */}
      {otherStories.length > 0 && (
        <section className="py-20 bg-[#0c0c0f] border-t border-[#22222a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-editorial text-2xl font-bold text-white mb-10 text-center">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherStories.map((other) => (
                <Link
                  key={other.slug}
                  href={`/stories/${other.slug}`}
                  className="group flex flex-col bg-[#121216] border border-[#22222a] overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37] mb-2 block">
                      {other.category}
                    </span>
                    <h4 className="font-editorial text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                      {other.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#0a0a0c] py-12 border-t border-[#22222a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-[#d4af37]" />
            <span className="font-editorial text-lg font-bold tracking-widest text-white">
              SIGNAL <span className="text-[#d4af37]">&amp;</span> SOUL
            </span>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Signal &amp; Soul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
