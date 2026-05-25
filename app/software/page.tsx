import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SoftwareBackground } from "@/components/software/SoftwareBackground";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwareCatalogSection } from "@/components/software/SoftwareCatalogSection";

export const metadata: Metadata = {
  title: "Software | Coderverse Technology",
  description:
    "Explore Coderverse software products — BetterDev, Aquarius, Colorflow, Eatopia, and more.",
};

export default function SoftwarePage() {
  return (
    <>
      <SoftwareBackground />
      <main className="relative z-10 min-h-screen">
        <SiteHeader />
        <SoftwareHero />
        <SoftwareCatalogSection />
        <SiteFooter />
      </main>
    </>
  );
}
