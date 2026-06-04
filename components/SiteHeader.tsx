"use client";

import Link from "next/link";
import { HeaderUniversalCode } from "./HeaderUniversalCode";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-white/10 px-4 py-4 md:px-8 md:py-6">
      <section className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] gap-x-3 gap-y-2.5 [grid-template-areas:'logo_status'_'tagline_tagline'] sm:gap-y-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-x-4 md:gap-y-0 md:[grid-template-areas:'logo_tagline_status']">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-white [grid-area:logo] md:text-base"
        >
          <span className="h-2.5 w-2.5 shrink-0 bg-cv-red" aria-hidden />
          <span>
            CODERVERSE
            <span className="animate-cursor-blink">_</span>
          </span>
        </Link>

        <aside className="justify-self-end text-right font-mono text-[9px] leading-snug text-cv-muted [grid-area:status] sm:text-[10px] md:text-xs">
          <p>
            <span className="text-cv-red">SERVER:</span>{" "}
            <span className="text-white">HAPPINESS</span>
          </p>
          <p>
            <span className="text-cv-red">LATENCY:</span>{" "}
            <span className="text-white">100% // SELF-ACCEPTANCE</span>
          </p>
        </aside>

        <HeaderUniversalCode />
      </section>
    </header>
  );
}
