"use client";

import { useEffect, useRef, useState } from "react";

/** Fires when section crosses viewport threshold (scroll → transition state). */
export function useSectionInView(
  threshold = 0.35,
  rootMargin = "-8% 0px",
) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, active };
}
