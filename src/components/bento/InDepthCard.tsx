"use client";

import { motion } from "motion/react";
import {
  layerColors,
  layerOffsets,
  type BentoVisualState,
} from "@/lib/bento-states";
import { motionDuration, motionEase } from "@/lib/tokens";
import { OffsetCard } from "@/components/ui/OffsetCard";

type InDepthCardProps = {
  visualState: BentoVisualState;
  expanded: boolean;
};

export function InDepthCard({ visualState, expanded }: InDepthCardProps) {
  const offsets =
    visualState === "default" ? layerOffsets.default : layerOffsets.transition;
  const palette = layerColors(visualState);

  return (
    <OffsetCard
      active={expanded}
      className="h-full min-h-[420px] w-full lg:min-h-[571px] lg:max-w-[431px]"
    >
      <div className="flex h-full flex-col p-6 pb-8">
        <h3 className="font-serif-display mx-auto max-w-[210px] text-center text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.1] tracking-[-0.02em]">
          In depth analysis at every level of your organization
        </h3>
        <div className="relative mt-auto h-[280px] w-full max-w-[268px] self-center sm:h-[320px]">
          {palette.map((fill, index) => {
            const base = offsets[0];
            const top = ((offsets[index] - base) / 320) * 100;
            return (
              <motion.div
                key={`layer-${index}`}
                className="absolute left-1/2 h-[76px] w-[208px] -translate-x-1/2 border-2 border-raven-900"
                style={{
                  backgroundColor: fill,
                  transformOrigin: "center",
                  skewX: "-38deg",
                  scaleY: 0.79,
                }}
                animate={{ top: `${top}%` }}
                transition={{ duration: motionDuration, ease: motionEase }}
              />
            );
          })}
        </div>
      </div>
    </OffsetCard>
  );
}
