"use client";

import Image from "next/image";
import { useState } from "react";
import { FOOTER } from "@/lib/footer";

export function FooterPoweredBy() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <a
        href={FOOTER.poweredBy.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        {!logoError && (
          <div className="relative h-10 w-[180px] opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(0,180,200,0.35)]">
            <Image
              src={FOOTER.poweredBy.logo}
              alt=""
              fill
              className="object-contain object-center"
              unoptimized
              onError={() => setLogoError(true)}
            />
          </div>
        )}
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cv-muted transition-colors group-hover:text-white/90">
            {FOOTER.poweredBy.label}
          </p>
          <p className="mt-2 max-w-md font-sans text-xs leading-relaxed text-cv-muted/80 group-hover:text-cv-muted">
            {FOOTER.poweredBy.description}
          </p>
        </div>
      </a>
    </div>
  );
}
