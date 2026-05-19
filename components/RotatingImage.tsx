"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const INTERVAL_MS = 4000;

export function RotatingImage({
  sources,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  sources: string[];
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sources.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sources.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [sources.length]);

  if (sources.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-cv-surface font-mono text-xs text-cv-muted">
        No image
      </div>
    );
  }

  const src = sources[index] ?? sources[0];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={src}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes={sizes}
          priority={index === 0}
        />
      </motion.div>
    </AnimatePresence>
  );
}
