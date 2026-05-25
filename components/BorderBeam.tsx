"use client";

import { ReactNode } from "react";

export function BorderBeam({
  children,
  active = false,
  className = "",
}: {
  children: ReactNode;
  /** Crimson highlight — use when card is hovered/focused */
  active?: boolean;
  className?: string;
}) {
  return (
    <section className={`group relative ${className}`}>
      <aside
        className={`pointer-events-none absolute -inset-px overflow-hidden transition-opacity duration-300 ${
          active ? "opacity-60" : "opacity-30"
        }`}
        aria-hidden
      >
        <span
          className={`absolute inset-[-50%] block animate-border-spin ${
            active
              ? "bg-[conic-gradient(from_0deg,transparent_0deg,rgba(226,29,29,0.85)_90deg,transparent_180deg)]"
              : "bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.35)_90deg,transparent_180deg)]"
          }`}
        />
      </aside>
      {children}
      <span
        className={`pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border border-cv-red transition-opacity duration-300 animate-pulse-glow ${
          active ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
    </section>
  );
}
