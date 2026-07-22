"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const DEFAULT_DURATION_MS = 2000;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export type ParsedStatValue = {
  end: number;
  suffix: string;
  decimals: number;
};

/** e.g. "90%+", "6000+", "5.2M", "38%" */
export function parseStatValue(raw: string): ParsedStatValue {
  const match = raw.trim().match(/^([\d.]+)(.*)$/);
  if (!match) {
    return { end: 0, suffix: raw, decimals: 0 };
  }
  const numericPart = match[1];
  return {
    end: parseFloat(numericPart),
    suffix: match[2],
    decimals: numericPart.includes(".") ? numericPart.split(".")[1].length : 0,
  };
}

export function formatStatValue(
  current: number,
  { end, suffix, decimals }: ParsedStatValue,
  done: boolean,
) {
  const value = done ? end : current;
  const formatted =
    decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  return `${formatted}${suffix}`;
}

/** Count 0 → target over durationMs when active becomes true (once). */
export function useCountUp(
  parsed: ParsedStatValue,
  active: boolean,
  durationMs = DEFAULT_DURATION_MS,
) {
  const [display, setDisplay] = useState(() =>
    formatStatValue(0, parsed, false),
  );
  const ranRef = useRef(false);
  const parsedRef = useRef(parsed);
  parsedRef.current = parsed;

  useEffect(() => {
    if (!active || ranRef.current) return;
    ranRef.current = true;

    const target = parsedRef.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(formatStatValue(target.end, target, true));
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = easeOutCubic(t);
      const current = target.end * eased;
      setDisplay(formatStatValue(current, target, t >= 1));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, durationMs]);

  return display;
}

function isIntersecting(
  node: HTMLElement,
  threshold: number,
  rootMargin: string,
): boolean {
  const rect = node.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;

  const vm = rootMargin.match(/(-?\d+(?:\.\d+)?)%/);
  const insetPct = vm ? Math.abs(parseFloat(vm[1])) / 100 : 0;
  const rootTop = window.innerHeight * insetPct;
  const rootBottom = window.innerHeight * (1 - insetPct);
  const visibleTop = Math.max(rect.top, rootTop);
  const visibleBottom = Math.min(rect.bottom, rootBottom);
  const visible = Math.max(0, visibleBottom - visibleTop);
  const ratio = visible / rect.height;
  return ratio >= threshold && rect.bottom > rootTop && rect.top < rootBottom;
}

/** Fire once when node enters viewport. Needs a real box (not display:contents). */
export function useInViewOnce(
  threshold = 0.15,
  rootMargin = "0px 0px -5% 0px",
) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const latchedRef = useRef(false);

  const latch = () => {
    if (latchedRef.current) return;
    latchedRef.current = true;
    setInView(true);
  };

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || latchedRef.current) return;
    if (isIntersecting(node, threshold, rootMargin)) latch();
  }, [threshold, rootMargin]);

  useEffect(() => {
    const node = ref.current;
    if (!node || latchedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) latch();
      },
      { threshold: [0, threshold, 0.5, 1], rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
