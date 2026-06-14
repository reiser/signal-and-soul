"use client";

import React, { useState } from "react";
import Link from "next/link";
import { STORIES, REVIEWS, GEAR_GALLERY } from "./_data/content";
import { Volume2, Star, ArrowRight, Mail, CheckCircle, Shield, Award, Disc, Radio, Sliders } from "lucide-react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0c]/90 border-b border-[#22222a] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Volume2 className="h-6 w-6 text-[#d4af37] group-hover:rotate-12 transition-transform" />
            <span className="font-editorial text-2xl font-bold tracking-widest text-white group-hover:text-[#d4af37] transition-colors">
              SIGNAL <span className="text-[#d4af37]">&amp;</span> SOUL
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#stories" className="text-sm font-medium tracking-wider uppercase text-gray-300 hover:text-[#d4af37] transition-colors">
              Stories
            </a>
            <a href="#reviews" className="text-sm font-medium tracking-wider uppercase text-gray-300 hover:text-[#d4af37] transition-colors">
              Reviews
            </a>
            <a href="#feature" className="text-sm font-medium tracking-wider uppercase text-gray-300 hover:text-[#d4af37] transition-colors">
              Feature
            </a>
            <a href="#gear" className="text-sm font-medium tracking-wider uppercase text-gray-300 hover:text-[#d4af37] transition-colors">
              Gear
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#newsletter"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-[#d4af37] text-xs font-semibold tracking-widest uppercase text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
            >
              Subscribe
            </a>
          </div>
        </div>
      </header>

      {/* Bold Editorial Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#22222a]">
        <div className="absolute inset-0 z-0">
          <img
            src={STORIES[0].image}
            alt="Premium Hi-Fi Hero"
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            style={{ animationDuration: "10s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#d4af37]/30 bg-[#d4af37]/10 text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-6">
            <Award className="h-3.5 w-3.5" /> Cover Story
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-6">
            {STORIES[0].title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            {STORIES[0].standfirst}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/stories/${STORIES[0].slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-semibold tracking-wider uppercase text-sm hover:bg-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Read Article <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#stories"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-semibold tracking-wider uppercase text-sm hover:border-white transition-all duration-300 w-full sm:w-auto"
            >
              Explore Issue
            </a>
          </div>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section id="stories" className="py-24 border-b border-[#22222a] bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">Editorial</span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-white mt-2">Latest Stories</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0 font-light">
              Deep dives into analog culture, acoustic engineering, and the pursuit of absolute sonic fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORIES.map((story, idx) => (
              <article
                key={story.slug}
                className={`group flex flex-col bg-[#121216] border border-[#22222a] overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <Link href={`/stories/${story.slug}`} className="block overflow-hidden aspect-[16/10] relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 border border-[#22222a]">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37]">
                      {story.category}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span>By {story.author}</span>
                      <span>•</span>
                      <span>{story.readTime}</span>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors mb-4 line-clamp-2">
                      <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                    </h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 line-clamp-3">
                      {story.standfirst}
                    </p>
                  </div>

                  <Link
                    href={`/stories/${story.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#d4af37] group-hover:text-white transition-colors"
                  >
                    Read Story <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 border-b border-[#22222a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">Laboratory Tested</span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-white mt-2">Equipment Reviews</h2>
            <p className="text-gray-400 mt-4 font-light">
              Unbiased, rigorous, and highly critical evaluations of the world's finest audio hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#121216] border border-[#22222a] p-8 flex flex-col justify-between hover:border-gray-700 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                      {review.category}
                    </span>
                    <div className="flex items-center gap-1 bg-[#d4af37]/10 px-2.5 py-1 border border-[#d4af37]/20 text-[#d4af37]">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-bold">{review.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="aspect-[16/10] overflow-hidden mb-6 relative">
                    <img src={review.image} alt={review.title} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-white mb-2">{review.title}</h3>
                  <p className="text-[#d4af37] text-sm font-semibold mb-4">{review.price}</p>
                  <p className="text-gray-300 font-light text-sm leading-relaxed italic mb-6">
                    "{review.verdict}"
                  </p>
                </div>

                <div className="border-t border-[#22222a] pt-6">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Technical Specs</h4>
                  <dl className="space-y-2">
                    {review.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-xs">
                        <dt className="text-gray-500">{spec.label}</dt>
                        <dd className="text-gray-300 font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form Feature Section */}
      <section id="feature" className="relative py-32 overflow-hidden border-b border-[#22222a] bg-[#070709]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-2/1600/900"
            alt="Feature Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">Special Feature</span>
              <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                The Analog Renaissance &amp; The Human Connection
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                In a world of instant streaming and algorithmic playlists, the physical act of playing a record has become a form of modern meditation. It forces us to slow down, to appreciate the album as a cohesive work of art, and to connect with the music on a visceral level.
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Our obsession with high-fidelity sound isn't just about frequency response curves or dynamic range. It is about capturing the soul of the performance—the subtle acoustic space of the recording studio, the warmth of the tape, and the raw emotion of the artist.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#121216] border border-[#22222a] text-[#d4af37]">
                    <Disc className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Pure Analog</h4>
                    <p className="text-xs text-gray-500">Zero digital compression</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#121216] border border-[#22222a] text-[#d4af37]">
                    <Radio className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Acoustic Depth</h4>
                    <p className="text-xs text-gray-500">True three-dimensional imaging</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-2 border border-[#22222a] bg-[#121216]">
                <img
                  src="https://picsum.photos/seed/high-end-audio-turntable-vacuum-tube-spe-4/1600/900"
                  alt="Analog Setup"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-black p-6 hidden sm:block max-w-xs">
                  <p className="font-editorial text-lg font-bold leading-tight">
                    "Sound is not just heard; it is felt in the very core of our being."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gear Gallery Section */}
      <section id="gear" className="py-24 border-b border-[#22222a] bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">Industrial Design</span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-white mt-2">The Gear Gallery</h2>
            <p className="text-gray-400 mt-4 font-light">
              A visual celebration of the precision engineering and exquisite craftsmanship behind high-end audio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GEAR_GALLERY.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#121216] border border-[#22222a] overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37]">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-1 group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{item.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-[#121216] border-b border-[#22222a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 bg-[#0a0a0c] border border-[#22222a] text-[#d4af37] mb-6">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white mb-4">Join the Inner Circle</h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light mb-8">
            Receive exclusive equipment reviews, high-fidelity guides, and curated playlists delivered directly to your inbox.
          </p>

          {subscribed ? (
            <div className="max-w-md mx-auto bg-[#d4af37]/10 border border-[#d4af37]/30 p-6 flex items-center gap-3 text-left">
              <CheckCircle className="h-6 w-6 text-[#d4af37] shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Subscription Confirmed</h4>
                <p className="text-gray-400 text-xs mt-0.5">Welcome to Signal &amp; Soul. Your first dispatch is on its way.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 bg-[#0a0a0c] border border-[#22222a] text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#d4af37] text-black font-bold tracking-wider uppercase text-xs hover:bg-white transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Volume2 className="h-6 w-6 text-[#d4af37]" />
                <span className="font-editorial text-xl font-bold tracking-widest text-white">
                  SIGNAL <span className="text-[#d4af37]">&amp;</span> SOUL
                </span>
              </div>
              <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed">
                A premium publication dedicated to the art and science of high-fidelity sound reproduction, analog culture, and acoustic design.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Sections</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#stories" className="hover:text-[#d4af37] transition-colors">Stories</a></li>
                <li><a href="#reviews" className="hover:text-[#d4af37] transition-colors">Reviews</a></li>
                <li><a href="#feature" className="hover:text-[#d4af37] transition-colors">Special Feature</a></li>
                <li><a href="#gear" className="hover:text-[#d4af37] transition-colors">Gear Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Legal &amp; Contact</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><span className="hover:text-[#d4af37] cursor-pointer transition-colors">Privacy Policy</span></li>
                <li><span className="hover:text-[#d4af37] cursor-pointer transition-colors">Terms of Service</span></li>
                <li><span className="hover:text-[#d4af37] cursor-pointer transition-colors">Contact Editorial</span></li>
                <li><span className="hover:text-[#d4af37] cursor-pointer transition-colors">Advertise</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#22222a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Signal &amp; Soul. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Shield className="h-3.5 w-3.5 text-[#d4af37]" />
              <span>Secured &amp; Verified Connection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
