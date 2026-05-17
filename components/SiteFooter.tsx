export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 md:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 font-mono text-sm font-bold text-white">
          <span className="h-2.5 w-2.5 bg-cv-red" aria-hidden />
          CODERVERSE<span className="animate-cursor-blink">_</span>
        </p>
        <p className="font-mono text-[10px] text-cv-muted md:text-xs">
          CONNECTION TERMINATED // END OF SESSION
        </p>
      </section>
    </footer>
  );
}
