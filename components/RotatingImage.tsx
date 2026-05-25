"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const INTERVAL_MS = 4000;

type TransitionMode = "fade" | "slide" | "wipe" | "drift";

const MODES: TransitionMode[] = ["fade", "slide", "wipe", "drift"];

const EASE = [0.22, 1, 0.36, 1] as const;
/** Crossfade overlap — slower than snap, faster than the old 0.75s wait gap */
const ENTER_DURATION = 0.5;
const EXIT_DURATION = 0.32;

const enterTransition = { duration: ENTER_DURATION, ease: EASE };
const exitTransition = { duration: EXIT_DURATION, ease: EASE };

function buildVariants(mode: TransitionMode): Variants {
  switch (mode) {
    case "slide":
      return {
        initial: { opacity: 0, x: "12%" },
        animate: { opacity: 1, x: 0, transition: enterTransition },
        exit: { opacity: 0, x: "-10%", transition: exitTransition },
      };
    case "wipe":
      return {
        initial: { clipPath: "inset(100% 0 0 0)" },
        animate: {
          clipPath: "inset(0% 0 0 0)",
          transition: enterTransition,
        },
        exit: {
          clipPath: "inset(0 0 100% 0)",
          transition: exitTransition,
        },
      };
    case "drift":
      return {
        initial: { opacity: 0, scale: 1.04, x: "-4%" },
        animate: { opacity: 1, scale: 1, x: 0, transition: enterTransition },
        exit: { opacity: 0, scale: 1.02, x: "4%", transition: exitTransition },
      };
    case "fade":
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: enterTransition },
        exit: { opacity: 0, transition: exitTransition },
      };
  }
}

export function RotatingImage({
  sources,
  alt,
  paused = false,
  transitionOffset = 0,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  sources: string[];
  alt: string;
  paused?: boolean;
  /** Shifts which transition runs first per product card */
  transitionOffset?: number;
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || sources.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sources.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [sources.length, paused, reducedMotion]);

  useEffect(() => {
    if (sources.length <= 1) return;
    const nextSrc = sources[(index + 1) % sources.length];
    if (!nextSrc) return;
    const img = new window.Image();
    img.src = nextSrc;
  }, [index, sources]);

  const mode = useMemo(() => {
    if (reducedMotion) return "fade";
    return MODES[(index + transitionOffset) % MODES.length];
  }, [index, transitionOffset, reducedMotion]);

  const variants = useMemo(() => {
    const v = buildVariants(mode);
    if (!reducedMotion) return v;
    const fast = { duration: 0.22, ease: EASE };
    return {
      ...v,
      animate: { ...v.animate, transition: fast },
      exit: { ...v.exit, transition: fast },
    };
  }, [mode, reducedMotion]);

  if (sources.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-cv-surface font-mono text-xs text-cv-muted">
        No image
      </div>
    );
  }

  const src = sources[index] ?? sources[0];

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
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

      {sources.length > 1 && (
        <div
          className="pointer-events-none absolute bottom-2 right-2 z-10 flex items-center gap-1.5 rounded-sm bg-black/50 px-2 py-1 font-mono text-[10px] tracking-wider text-white/80 backdrop-blur-sm"
          aria-live="polite"
        >
          {paused && (
            <span className="text-cv-red" aria-hidden>
              ◼
            </span>
          )}
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(sources.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </>
  );
}
