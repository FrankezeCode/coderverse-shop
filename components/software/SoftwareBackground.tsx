"use client";

import { GridOverlay } from "../GridOverlay";

export function SoftwareBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-cv-brand-deep via-cv-brand to-[#0f0a28]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(80,60,180,0.18),transparent)]"
        aria-hidden
      />
      <GridOverlay />
    </>
  );
}
