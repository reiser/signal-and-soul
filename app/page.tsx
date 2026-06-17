import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Stories } from "@/components/Stories";
import { Reviews } from "@/components/Reviews";
import { Spotlight } from "@/components/Spotlight";
import { GearGallery } from "@/components/GearGallery";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

// Signal & Soul — the magazine homepage. Each section maps 1:1 to a spec
// requirement (see SPEC.md): nav, hero, how-we-listen, stories, reviews,
// sound of the month, gear gallery, subscribe, footer.
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Stories />
        <Reviews />
        <Spotlight />
        <GearGallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
