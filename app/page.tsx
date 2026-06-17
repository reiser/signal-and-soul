import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { HowItWorks } from "@/components/HowItWorks";
import { Stories } from "@/components/Stories";
import { Reviews } from "@/components/Reviews";
import { Feature } from "@/components/Feature";
import { Spotlight } from "@/components/Spotlight";
import { OpusOneFeature } from "@/components/OpusOneFeature";
import { GearGallery } from "@/components/GearGallery";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

// Signal & Soul — the magazine homepage. Each section maps 1:1 to a spec
// requirement (see SPEC.md): nav, hero, marquee, how-we-listen, stories,
// reviews, the long read, sound of the month, gear gallery, subscribe, footer.
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <HowItWorks />
        <Stories />
        <Reviews />
        <Feature />
        <OpusOneFeature />
        <Spotlight />
        <GearGallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
