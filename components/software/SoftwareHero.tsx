"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SoftwareHero() {
  return (
    <section className="relative z-10 px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
      <article className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 font-mono text-[10px] tracking-[0.25em] text-white/50 md:text-xs"
        >
          <Link href="/" className="transition-colors hover:text-white">
            ← CODERVERSE SHOP
          </Link>
          {" · "}
          SOFTWARE DIVISION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-4xl font-display text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tight text-white"
        >
          Products built
          <span className="block text-white/90">for modern teams</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-cv-muted md:text-base"
        >
          Custom software, platforms, and digital tools — designed, shipped, and
          supported by Coderverse Technology.
        </motion.p>
      </article>
    </section>
  );
}
