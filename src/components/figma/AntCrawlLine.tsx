"use client";

import type { CSSProperties } from "react";

type AntCrawlLineProps = {
  active?: boolean;
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  length: number | string;
  className?: string;
  style?: CSSProperties;
};

/** Dashed rule with optional marching-ants stroke (hover on bento cards). */
export function AntCrawlLine({
  active = false,
  orientation = "horizontal",
  thickness = 2,
  length,
  className = "",
  style,
}: AntCrawlLineProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      aria-hidden
      className={`${active ? "bento-ant-crawl" : ""} ${className}`}
      style={{
        width: isHorizontal ? length : thickness,
        height: isHorizontal ? thickness : length,
        backgroundImage: isHorizontal
          ? `repeating-linear-gradient(to right, #101928 0, #101928 8px, transparent 8px, transparent 16px)`
          : `repeating-linear-gradient(to bottom, #101928 0, #101928 8px, transparent 8px, transparent 16px)`,
        ...style,
      }}
    />
  );
}
