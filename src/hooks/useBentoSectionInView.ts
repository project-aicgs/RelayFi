"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  bentoScrollRootMargin,
  bentoScrollThreshold,
} from "@/lib/bento-motion";

function meetsThreshold(
  node: HTMLElement,
  threshold: number,
  rootMargin: string,
): boolean {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight;
  const vm = rootMargin.match(/(-?\d+(?:\.\d+)?)%/);
  const insetPct = vm ? Math.abs(parseFloat(vm[1])) / 100 : 0;
  const rootTop = vh * insetPct;
  const rootBottom = vh * (1 - insetPct);
  const visibleTop = Math.max(rect.top, rootTop);
  const visibleBottom = Math.min(rect.bottom, rootBottom);
  const visible = Math.max(0, visibleBottom - visibleTop);
  const ratio = visible / rect.height;
  return ratio >= threshold && rect.bottom > rootTop && rect.top < rootBottom;
}

/**
 * One-way bento scroll latch: activates once when threshold is met,
 * then stays active for the rest of the session (until page refresh).
 */
export function useBentoSectionInView(
  threshold = bentoScrollThreshold,
  rootMargin = bentoScrollRootMargin,
) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const latchedRef = useRef(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || latchedRef.current) return;
    if (meetsThreshold(node, threshold, rootMargin)) {
      latchedRef.current = true;
      setActive(true);
    }
  }, [threshold, rootMargin]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (latchedRef.current) return;
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          latchedRef.current = true;
          setActive(true);
        }
      },
      { threshold: [0, threshold, 1], rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, active };
}
