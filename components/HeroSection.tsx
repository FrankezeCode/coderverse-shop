"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative z-10 px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <article className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-[10px] tracking-widest text-cv-red md:text-xs"
        >
          [SYS_OVERRIDE] INITIATING AESTHETIC PROTOCOL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(3.5rem,14vw,9rem)] font-black uppercase leading-[0.85] tracking-tight text-white"
        >
          <span className="block drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            FEELING
          </span>
          <span className="text-grid-outline mt-1 block tracking-[0.35em] md:tracking-[0.45em]">
            GOOD
          </span>
          <span className="mt-1 block">MATTERS</span>
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 max-w-xl border-l-2 border-cv-red pl-5 md:mt-16 md:pl-6"
        >
          <p className="font-sans text-sm leading-relaxed text-cv-muted md:text-base">
          The right fragrance does more than smell beautiful.
          It lifts your mood.
          Boosts your confidence.
          And reminds you to enjoy yourself a little more every day.
          </p>
        </motion.section>
      </article>

      <aside
        className="pointer-events-none absolute right-0 top-1/3 hidden h-[min(50vw,400px)] w-[min(50vw,400px)] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block"
        aria-hidden
      />
    </section>
  );
}
