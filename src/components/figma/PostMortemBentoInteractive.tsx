"use client";

import { motion } from "motion/react";
import { BentoCursorPointer } from "@/components/figma/BentoCursorPointer";
import { useBentoCardVisual } from "@/hooks/useBentoCardVisual";
import { bentoClickSparkDuration, bentoMotionDuration } from "@/lib/bento-motion";
import { colors } from "@/lib/tokens";
import { motionEase } from "@/lib/tokens";

/** Figma — card-local px (main rect 41.67%+14, top 114). */
const BTN = {
  /** Default + transition (188×59.9, 14px label). */
  idle: { left: 35, top: 230, width: 188, height: 59.902 },
  /** Hover / click (204×65, 16px label). */
  hover: { left: 27, top: 225, width: 204, height: 65 },
} as const;

/** Generate post-mortem control + cursor (114:3984). */
export function PostMortemBentoInteractive() {
  const { visual, showTransition, showHover } = useBentoCardVisual("postMortem");

  const pose = showHover ? BTN.hover : BTN.idle;
  const bg = showHover ? colors.azure500 : colors.raven400;
  const fontSize = showHover ? "16px" : "14px";
  const buttonDuration =
    visual === "default" ? bentoMotionDuration : bentoClickSparkDuration;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      data-name="Post Mortem Interactive"
    >
      <motion.div
        className="absolute z-10 flex items-center justify-center rounded-2xl border-2 border-[var(--raven-900,#101928)]"
        style={{
          left: pose.left,
          top: pose.top,
          width: pose.width,
          height: pose.height,
          backgroundColor: bg,
        }}
        initial={false}
        animate={{
          left: pose.left,
          top: pose.top,
          width: pose.width,
          height: pose.height,
          backgroundColor: bg,
        }}
        transition={{ duration: buttonDuration, ease: motionEase }}
        data-name="Generate Button"
      >
        <motion.p
          className={`text-center font-sans leading-[1.5] text-[var(--raven-900,#101928)] ${showHover ? "font-medium" : "font-normal"}`}
          initial={false}
          animate={{ fontSize }}
          transition={{ duration: buttonDuration, ease: motionEase }}
        >
          Generate post-mortem
        </motion.p>
      </motion.div>
      <BentoCursorPointer show={showTransition} spark={showHover} />
    </motion.div>
  );
}
