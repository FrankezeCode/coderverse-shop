"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { buyUrl } from "@/lib/whatsapp";
import { BorderBeam } from "./BorderBeam";
import { CornerBrackets } from "./CornerBrackets";
import { RotatingImage } from "./RotatingImage";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const [paused, setPaused] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <BorderBeam active={paused}>
        <section
          className={`relative border bg-cv-black p-4 transition-colors duration-300 md:p-5 ${
            paused ? "border-cv-red/90" : "border-white/15"
          }`}
        >
          <CornerBrackets color={paused ? "red" : "white"} />

          <figure className="relative mb-5 aspect-[4/5] overflow-hidden border border-white/10 bg-cv-surface sm:aspect-square">
            <CornerBrackets className="left-2 top-2" color={paused ? "red" : "white"} />
            <RotatingImage
              sources={product.images}
              alt={product.name}
              paused={paused}
              transitionOffset={index}
            />
          </figure>

          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-cv-red md:text-xs">
            {product.tag}
            {product.tag.includes("SHADE") && (
              <span
                className="ml-1 inline-block h-3 w-2 bg-cv-red align-middle animate-cursor-blink"
                aria-hidden
              />
            )}
          </p>

          <h3 className="font-display text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl">
            {product.name}
          </h3>

          <p className="mt-3 font-sans text-sm leading-relaxed text-cv-muted">
            {product.description}
          </p>

          <footer className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xl text-white md:text-2xl">
              {product.price}
            </p>
            <a
              href={buyUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[140px] items-center justify-center border border-white px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black sm:min-w-[160px] md:text-xs"
            >
              <span className="hidden text-center leading-tight sm:block">
                I LOVE THIS — BUY →
              </span>
              <span className="text-center leading-tight sm:hidden">
                I LOVE
                <br />
                THIS —
                <br />
                BUY →
              </span>
            </a>
          </footer>
        </section>
      </BorderBeam>
    </motion.article>
  );
}
