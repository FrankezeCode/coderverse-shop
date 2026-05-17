"use client";

import { ParticleBackground } from "./ParticleBackground";
import { GridOverlay } from "./GridOverlay";
import { ScanlineOverlay } from "./ScanlineOverlay";

export function BackgroundScene() {
  return (
    <>
      <ParticleBackground />
      <GridOverlay />
      <ScanlineOverlay />
    </>
  );
}
