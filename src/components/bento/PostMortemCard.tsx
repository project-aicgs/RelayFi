"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { assets } from "@/lib/assets";
import { motionDuration, motionEase } from "@/lib/tokens";
import { OffsetCard } from "@/components/ui/OffsetCard";
import type { BentoVisualState } from "@/lib/bento-states";

type PostMortemCardProps = {
  visualState: BentoVisualState;
  expanded: boolean;
};

export function PostMortemCard({ visualState, expanded }: PostMortemCardProps) {
  const showPointer = visualState !== "default";

  return (
    <OffsetCard active={expanded} className="h-full min-h-[320px] w-full lg:min-h-[345px]">
      <div className="flex h-full flex-col p-5">
        <h3 className="font-serif-display mx-auto max-w-[210px] text-center text-[clamp(1.35rem,2vw,2.25rem)] leading-[1.1] tracking-[-0.02em]">
          AI assisted post-mortem reporting
        </h3>
        <motion.div
          layout
          className="relative mx-auto mt-4 w-full max-w-[227px] border-2 border-raven-900 bg-azure-50 p-3"
          animate={{ y: showPointer ? 4 : 0 }}
          transition={{ duration: motionDuration, ease: motionEase }}
        >
          <p className="text-center text-sm font-light">INC 2417 · Payments degraded</p>
          <Image
            src={assets.bento.line3}
            alt=""
            width={226}
            height={1}
            className="my-2 w-full"
            unoptimized
            aria-hidden
          />
          <Image
            src={assets.bento.skeleton}
            alt=""
            width={185}
            height={51}
            className="mx-auto w-[85%]"
            unoptimized
            aria-hidden
          />
          <motion.div
            layout
            className="relative mt-3 rounded-2xl border-2 border-raven-900 bg-azure-500 px-4 py-4 text-center"
            animate={{ scale: showPointer ? 1.03 : 1 }}
            transition={{ duration: motionDuration, ease: motionEase }}
          >
            <p className="text-base font-medium text-raven-900">Generate post-mortem</p>
            <AnimatePresence>
              {showPointer && (
                <motion.div
                  initial={{ opacity: 0, x: 8, y: 8 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: motionEase }}
                  className="pointer-events-none absolute -bottom-2 right-6"
                >
                  <Image
                    src={assets.bento.pointerSpark}
                    alt=""
                    width={56}
                    height={46}
                    className="absolute -left-4 -top-4"
                    unoptimized
                    aria-hidden
                  />
                  <Image
                    src={assets.bento.pointer}
                    alt=""
                    width={32}
                    height={54}
                    unoptimized
                    aria-hidden
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </OffsetCard>
  );
}
