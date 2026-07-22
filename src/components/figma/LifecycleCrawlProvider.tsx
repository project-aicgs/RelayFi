"use client";

import { createContext, useContext, type ReactNode } from "react";
import { LifecycleDashedArc } from "@/components/figma/LifecycleDashedArc";
import { useBentoCardVisual } from "@/hooks/useBentoCardVisual";

const LifecycleCrawlContext = createContext(false);

export function LifecycleCrawlProvider({ children }: { children: ReactNode }) {
  const { showHover } = useBentoCardVisual("lifecycle");

  return (
    <LifecycleCrawlContext.Provider value={showHover}>
      {children}
    </LifecycleCrawlContext.Provider>
  );
}

function useLifecycleCrawl() {
  return useContext(LifecycleCrawlContext);
}

export function LifecycleArc({
  variant,
  className,
  wrapperClassName,
}: {
  variant: 1 | 2 | 3 | 4;
  className?: string;
  wrapperClassName?: string;
}) {
  const crawl = useLifecycleCrawl();

  return (
    <div className={wrapperClassName}>
      <LifecycleDashedArc variant={variant} className={className} crawl={crawl} />
    </div>
  );
}
