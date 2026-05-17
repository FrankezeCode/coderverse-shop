export function ScanlineOverlay() {
  return (
    <section
      className="pointer-events-none fixed inset-0 z-[3] overflow-hidden opacity-[0.03]"
      aria-hidden
    >
      <span className="absolute inset-0 block animate-scan bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.15)_2px,rgba(255,255,255,0.15)_4px)]" />
    </section>
  );
}
