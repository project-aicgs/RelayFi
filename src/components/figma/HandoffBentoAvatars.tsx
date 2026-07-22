"use client";

import { motion } from "motion/react";
import { useBentoCardVisual } from "@/hooks/useBentoCardVisual";
import { bentoMotionDuration } from "@/lib/bento-motion";
import { colors } from "@/lib/tokens";
import { motionEase } from "@/lib/tokens";

const MUTED = { fill: colors.raven100, stroke: colors.raven600 };

const AVATARS = [
  {
    name: "Priya",
    letter: "P",
    wrapperClass: "absolute contents left-[calc(41.67%+95px)] top-[551px]",
    circleClass: "absolute left-[calc(41.67%+102px)] size-[51px] top-[551px]",
    letterClass:
      "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-serif justify-center leading-[0] left-[calc(50%+7.5px)] not-italic size-[35px] text-[36px] text-black text-center top-[calc(50%-1301.89px)] tracking-[-0.72px]",
    labelClass:
      "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-semibold h-[14px] justify-center leading-[0] left-[calc(41.67%+124.5px)] not-italic text-[12px] text-black text-center top-[613px] tracking-[0.96px] w-[59px]",
    nodeId: "231:1515",
    hover: { fill: colors.azure200, stroke: colors.azure500 },
  },
  {
    name: "Mark",
    letter: "M",
    wrapperClass: "absolute contents left-[calc(58.33%+81px)] top-[551px]",
    circleClass: "absolute left-[calc(58.33%+81px)] size-[51px] top-[551px]",
    letterClass:
      "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-serif justify-center leading-[0] left-[calc(58.33%+106.5px)] not-italic size-[35px] text-[36px] text-black text-center top-[576.5px] tracking-[-0.72px]",
    labelClass:
      "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-semibold h-[14px] justify-center leading-[0] left-[calc(58.33%+106.5px)] not-italic text-[12px] text-black text-center top-[616px] tracking-[0.96px] w-[51px]",
    nodeId: "231:1525",
    hover: { fill: "#ffc9c9", stroke: "#f24141" },
  },
  {
    name: "Alexa",
    letter: "A",
    wrapperClass: "absolute contents left-[calc(75%+57px)] top-[551px]",
    circleClass: "absolute left-[calc(75%+61px)] size-[51px] top-[551px]",
    letterClass:
      "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-serif justify-center leading-[0] left-[calc(75%+86.5px)] not-italic size-[35px] text-[36px] text-black text-center top-[576.5px] tracking-[-0.72px]",
    labelClass:
      "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-semibold h-[14px] justify-center leading-[0] left-[calc(75%+86.5px)] not-italic text-[12px] text-black text-center top-[616px] tracking-[0.96px] w-[59px]",
    nodeId: "231:1531",
    hover: { fill: "#bbf7d0", stroke: "#22c35d" },
  },
] as const;

/** Handoff team avatars — muted raven until card hover restores Figma color. */
export function HandoffBentoAvatars() {
  const { showHover } = useBentoCardVisual("handoff");

  return (
    <>
      {AVATARS.map((avatar) => {
        const palette = showHover ? avatar.hover : MUTED;
        return (
          <div key={avatar.name} className={avatar.wrapperClass} data-name={`${avatar.name} Icon`}>
            <motion.div
              className={`${avatar.circleClass} rounded-full border-2 border-solid`}
              data-node-id={avatar.nodeId}
              initial={false}
              animate={{
                backgroundColor: palette.fill,
                borderColor: palette.stroke,
              }}
              transition={{ duration: bentoMotionDuration, ease: motionEase }}
              aria-hidden
            />
            <div className={avatar.letterClass}>
              <p className="leading-[1.1]">{avatar.letter}</p>
            </div>
            <motion.div className={avatar.labelClass}>
              <p className="leading-none">{avatar.name}</p>
            </motion.div>
          </div>
        );
      })}
    </>
  );
}
