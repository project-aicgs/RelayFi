"use client";

import { motion } from "motion/react";
import { bentoClickSparkDuration } from "@/lib/bento-motion";
import { motionEase } from "@/lib/tokens";

/**
 * Figma Pointer Spark (225:1510).
 * Expand: base fixed, tip extends out. Collapse: tip fixed, base slides to tip (pop).
 */
const LINES = [
  { bx: 24.1685, by: 22.5577, tx: 12.1685, ty: 4.55765, delay: 0 },
  { bx: 30.9611, by: 21.3537, tx: 36.1938, ty: 0.362823, delay: 0.02 },
  { bx: 35.2368, by: 25.2438, tx: 56.6606, ty: 22.2401, delay: 0.04 },
  { bx: 21.632, by: 28.2401, tx: 0.208272, ty: 31.2438, delay: 0.03 },
  { bx: 33.3748, by: 31.8866, tx: 50.0179, ty: 45.7071, delay: 0.05 },
] as const;

export function PostMortemClickSpark() {
  return (
    <svg
      width={56.453}
      height={46.135}
      viewBox="0 0 56.8689 46.8611"
      fill="none"
      aria-hidden
      overflow="visible"
      className="block overflow-visible"
    >
      {LINES.map((line, i) => (
        <motion.line
          key={i}
          stroke="#101928"
          strokeWidth={3}
          strokeLinecap="square"
          initial={{
            x1: line.bx,
            y1: line.by,
            x2: line.bx,
            y2: line.by,
            opacity: 0,
          }}
          animate={{
            x1: [line.bx, line.bx, line.bx, line.tx],
            y1: [line.by, line.by, line.by, line.ty],
            x2: [line.bx, line.tx, line.tx, line.tx],
            y2: [line.by, line.ty, line.ty, line.ty],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: bentoClickSparkDuration,
            delay: line.delay,
            times: [0, 0.32, 0.5, 1],
            ease: motionEase,
          }}
        />
      ))}
    </svg>
  );
}
