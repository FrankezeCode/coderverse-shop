"use client";

import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ArsenalSection() {
  return (
    <section id="arsenal" className="relative z-10 px-4 pb-20 md:px-8 md:pb-28">
      <header className="mx-auto max-w-7xl border-b border-white/10 pb-6">
        <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            THE ARSENAL
          </h2>
          <p className="font-mono text-[10px] leading-snug text-cv-green md:text-xs">
            [ {String(products.length).padStart(2, "0")} ACTIVE FRAGRANCES
            <br className="sm:hidden" /> DETECTED ]
          </p>
        </section>
      </header>

      <ul className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-12 lg:gap-14">
        {products.map((product, i) => (
          <li key={product.id}>
            <ProductCard product={product} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
