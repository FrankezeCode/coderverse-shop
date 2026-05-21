import { BackgroundScene } from "@/components/BackgroundScene";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ArsenalSection } from "@/components/ArsenalSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <BackgroundScene />
      <main id="top" className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <ArsenalSection />
        <SiteFooter />
      </main>
    </>
  );
}
