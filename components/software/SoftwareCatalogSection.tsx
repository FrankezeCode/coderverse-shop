"use client";

import { motion } from "framer-motion";
import { softwareProducts } from "@/lib/software-products";
import { SoftwareProductRow } from "./SoftwareProductRow";

export function SoftwareCatalogSection() {
  return (
    <section
      id="software-catalog"
      className="relative z-10 px-4 pb-24 md:px-8 md:pb-32"
    >
      <header className="mx-auto max-w-7xl border-b border-white/10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            Software catalog
          </h2>
          <p className="font-mono text-[10px] leading-snug text-white/45 md:text-xs">
            [ {String(softwareProducts.length).padStart(2, "0")} PRODUCTS · SHIP
            READY ]
          </p>
        </motion.div>
      </header>

      <ul className="mx-auto mt-12 flex max-w-7xl flex-col gap-10 md:mt-16 md:gap-14">
        {softwareProducts.map((product, i) => (
          <SoftwareProductRow key={product.id} product={product} index={i} />
        ))}
      </ul>
    </section>
  );
}
