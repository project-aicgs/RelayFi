"use client";

import { AnimatePresence, motion } from "motion/react";
import { PostMortemClickSpark } from "@/components/figma/svg/PostMortemClickSpark";
import { PostMortemPointer } from "@/components/figma/svg/PostMortemPointer";
import { bentoMotionDuration } from "@/lib/bento-motion";
import { motionEase } from "@/lib/tokens";

/**
 * Figma hover (225:999) — card-local px (main rect 41.67%+14, top 116).
 * Pointer wrapper: 41.67%+79, top 382 → (65, 266).
 * Spark: 41.67%+73, top 359 → (59, 243), offset (-6, -23) from wrapper.
 */
const POINTER_LEFT = 65;
const POINTER_TOP = 266;
const SPARK_OFFSET_LEFT = -6;
const SPARK_OFFSET_TOP = -23;
const SPARK_WIDTH = 56.452;
const SPARK_HEIGHT = 46.135;

/** Figma pointer (225:1078) + click spark (225:1510). */
export function BentoCursorPointer({
  show,
  spark,
}: {
  show: boolean;
  spark?: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: bentoMotionDuration * 0.5, ease: motionEase }}
        >
          <motion.div
            className="absolute flex h-[41px] w-[24px] items-center justify-center"
            style={{ left: POINTER_LEFT, top: POINTER_TOP }}
            initial={{ opacity: 0, x: -72, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -36, y: 8 }}
            transition={{ duration: bentoMotionDuration, ease: motionEase }}
          >
            <AnimatePresence>
              {spark && (
                <motion.div
                  key="click-spark"
                  className="absolute"
                  style={{
                    left: SPARK_OFFSET_LEFT,
                    top: SPARK_OFFSET_TOP,
                    width: SPARK_WIDTH,
                    height: SPARK_HEIGHT,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute inset-[-1.57%_0_0_-0.74%]">
                    <PostMortemClickSpark />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="-scale-y-100 flex-none rotate-180">
              <PostMortemPointer />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
