"use client";

import { ReactNode } from "react";

export function BorderBeam({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "crimson";
  className?: string;
}) {
  const isCrimson = variant === "crimson";

  return (
    <section className={`group relative ${className}`}>
      <aside
        className={`pointer-events-none absolute -inset-px overflow-hidden ${
          isCrimson ? "opacity-60" : "opacity-30"
        }`}
        aria-hidden
      >
        <span className="absolute inset-[-50%] block animate-border-spin bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.35)_90deg,transparent_180deg)]" />
      </aside>
      {children}
      {isCrimson && (
        <span
          className="pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border border-cv-red animate-pulse-glow"
          aria-hidden
        />
      )}
    </section>
  );
}
