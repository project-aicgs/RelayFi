"use client";

const ARCS = {
  1: {
    viewBox: "0 0 101.032 66.9995",
    d: "M0 65.9995C52.8905 65.9995 22.7101 3.51886 101 0.999483",
  },
  2: {
    viewBox: "0 0 101.032 65.9995",
    d: "M0 64.9995C52.8905 64.9995 22.7101 3.48012 101 0.999498",
  },
  3: {
    viewBox: "0 0 101 24",
    d: "M3.93761e-07 23C73.6205 23 46.5452 1 101 1",
  },
  4: {
    viewBox: "0 0 101 23",
    d: "M3.75863e-07 22C73.6205 22 46.5452 1 101 1",
  },
} as const;

export function LifecycleDashedArc({
  variant,
  className,
  crawl = false,
}: {
  variant: 1 | 2 | 3 | 4;
  className?: string;
  crawl?: boolean;
}) {
  const spec = ARCS[variant];

  return (
    <svg
      className={`block size-full overflow-visible ${className ?? ""}`}
      viewBox={spec.viewBox}
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d={spec.d}
        stroke="#1E2B38"
        strokeWidth={2}
        strokeDasharray="8 8"
        vectorEffect="non-scaling-stroke"
        className={crawl ? "bento-ant-crawl-stroke" : undefined}
      />
    </svg>
  );
}
