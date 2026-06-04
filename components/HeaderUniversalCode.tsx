"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const FULL_TEXT = "The Universal CODE Is LOVE";
const SEGMENTS: { end: number; className: string }[] = [
  { end: 14, className: "text-cv-muted" },
  { end: 18, className: "text-cv-red" },
  { end: 22, className: "text-cv-muted" },
  { end: FULL_TEXT.length, className: "text-white" },
];

const CHAR_MS = 150;
const HOLD_MS = 3200;
const FADE_MS = 500;
const IDLE_MS = 2800;

type Phase = "typing" | "hold" | "fade" | "idle";

function renderSegments(visible: string) {
  if (!visible) return null;
  const nodes: ReactNode[] = [];
  let start = 0;
  for (const seg of SEGMENTS) {
    if (start >= visible.length) break;
    const slice = visible.slice(start, Math.min(seg.end, visible.length));
    if (slice) {
      nodes.push(
        <span key={start} className={seg.className}>
          {slice}
        </span>
      );
    }
    start = seg.end;
  }
  return nodes;
}

export function HeaderUniversalCode() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [charIndex, setCharIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timers.current = [...timers.current, id];
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    clearTimers();

    if (phase === "typing") {
      if (charIndex < FULL_TEXT.length) {
        schedule(() => setCharIndex((c) => c + 1), CHAR_MS);
      } else {
        schedule(() => setPhase("hold"), 0);
      }
      return clearTimers;
    }

    if (phase === "hold") {
      schedule(() => setPhase("fade"), HOLD_MS);
      return clearTimers;
    }

    if (phase === "fade") {
      schedule(() => {
        setPhase("idle");
        setCharIndex(0);
      }, FADE_MS);
      return clearTimers;
    }

    if (phase === "idle") {
      schedule(() => setPhase("typing"), IDLE_MS);
      return clearTimers;
    }

    return clearTimers;
  }, [phase, charIndex, reducedMotion, clearTimers, schedule]);

  const visible = reducedMotion
    ? FULL_TEXT
    : phase === "idle" || phase === "fade"
      ? phase === "fade"
        ? FULL_TEXT
        : ""
      : FULL_TEXT.slice(0, charIndex);

  const showCursor =
    !reducedMotion &&
    (phase === "typing" || phase === "hold") &&
    visible.length > 0;

  return (
    <p
      className="mx-auto w-full min-h-[2.5rem] max-w-md border-t border-white/5 pt-2.5 text-center font-mono text-[9px] leading-snug tracking-wide text-balance [grid-area:tagline] sm:min-h-[2.25rem] sm:text-[10px] md:min-h-0 md:max-w-none md:justify-self-center md:border-0 md:pt-0 md:text-xs"
      aria-hidden={!reducedMotion}
    >
      <span
        className={`inline-block transition-opacity duration-300 ${
          phase === "fade" && !reducedMotion ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderSegments(visible)}
        {showCursor && (
          <span className="text-cv-red animate-cursor-blink" aria-hidden>
            _
          </span>
        )}
      </span>
    </p>
  );
}
