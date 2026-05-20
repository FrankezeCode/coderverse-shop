"use client";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-white/10 px-4 py-5 md:px-8 md:py-6">
      <section className="mx-auto flex max-w-7xl items-start justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-white md:text-base"
        >
          <span className="h-2.5 w-2.5 shrink-0 bg-cv-red" aria-hidden />
          <span>
            CODERVERSE
            <span className="animate-cursor-blink">_</span>
          </span>
        </a>
        <aside className="hidden text-right font-mono text-[10px] leading-relaxed text-cv-muted sm:block md:text-xs">
          <p>
            <span className="text-cv-red">SERVER:</span>{" "}
            <span className="text-white">HAPPINESS</span>
          </p>
          <p>
            <span className="text-cv-red">LATENCY:</span>{" "}
            <span className="text-white">100% // SELF-ACCEPTANCE</span>
          </p>
        </aside>
      </section>
    </header>
  );
}
