"use client";

/** Figma Line 10 (231:1536) — dashed 10+10, marching ants on hover. */
export function HandoffTbdLine({ crawl = false }: { crawl?: boolean }) {
  return (
    <svg
      className="block size-full max-w-none overflow-visible"
      viewBox="0 0 169 2"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <line
        x1={0}
        y1={1}
        x2={169}
        y2={1}
        stroke="#101928"
        strokeWidth={2}
        strokeDasharray="10 10"
        vectorEffect="non-scaling-stroke"
        className={crawl ? "bento-ant-crawl-stroke-10" : undefined}
      />
    </svg>
  );
}
