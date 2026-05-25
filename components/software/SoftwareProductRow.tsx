"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SoftwareProduct } from "@/lib/software-products";
import { inquireSoftwareUrl } from "@/lib/whatsapp";

export function SoftwareProductRow({
  product,
  index,
}: {
  product: SoftwareProduct;
  index: number;
}) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, x: fromLeft ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="list-none"
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className={`group flex flex-col gap-8 border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:gap-10 md:p-8 lg:flex-row lg:items-center ${
          fromLeft ? "" : "lg:flex-row-reverse"
        }`}
      >
        <figure className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border border-white/10 bg-[#0a0814] lg:w-[52%]">
          <Image
            src={product.image}
            alt={`${product.name} product screenshot`}
            fill
            className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 52vw"
            unoptimized
            priority={index < 2}
          />
        </figure>

        <div className="flex flex-1 flex-col lg:py-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            {product.tag}
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {product.name}
          </h2>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-cv-muted md:text-base">
            {product.description}
          </p>
          <a
            href={inquireSoftwareUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 border border-white/30 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-cv-brand-deep md:text-xs"
          >
            Discuss this product
            <span aria-hidden>→</span>
          </a>
        </div>
      </motion.article>
    </motion.li>
  );
}
