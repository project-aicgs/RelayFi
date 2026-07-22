"use client";

import { motion } from "motion/react";
import { useBentoCardVisual } from "@/hooks/useBentoCardVisual";
import { bentoMotionDuration } from "@/lib/bento-motion";
import { colors } from "@/lib/tokens";
import { motionEase } from "@/lib/tokens";

const MUTED = { fill: colors.raven100, stroke: colors.raven600 };

const CHIPS = [
  {
    label: "Auto Post-mortem",
    top: 151,
    labelTop: 165.66,
    nodeBg: "194:4898",
    hover: { fill: colors.alizarin100, stroke: colors.alizarin600 },
  },
  {
    label: "Smart Handoffs",
    top: 194,
    labelTop: 208.66,
    nodeBg: "194:4904",
    hover: { fill: colors.gamboge100, stroke: colors.gamboge600 },
  },
  {
    label: "Escalation Routing",
    top: 237,
    labelTop: 251.66,
    nodeBg: "194:4916",
    hover: { fill: colors.emerald100, stroke: colors.emerald600 },
  },
  {
    label: "AI Incident Briefing",
    top: 280,
    labelTop: 294.66,
    nodeBg: "194:4924",
    hover: { fill: colors.azure100, stroke: colors.azure600 },
  },
] as const;

/** Lifecycle pills — raven fill/stroke until card hover lights up color. */
export function LifecycleBentoChips() {
  const { showHover } = useBentoCardVisual("lifecycle");

  return (
    <div className="absolute contents left-[calc(75%+8px)] top-[151px]" data-name="Graphic Text">
      {CHIPS.map((chip) => {
        const palette = showHover ? chip.hover : MUTED;
        return (
          <div
            key={chip.label}
            className="absolute contents left-[calc(75%+8px)]"
            style={{ top: chip.top }}
            data-name={`${chip.label} chip`}
          >
            <motion.div
              className="absolute h-[30.451px] left-[calc(75%+8px)] rounded-[16px] border-2 border-solid w-[150px]"
              style={{ top: chip.top }}
              data-node-id={chip.nodeBg}
              initial={false}
              animate={{
                backgroundColor: palette.fill,
                borderColor: palette.stroke,
              }}
              transition={{ duration: bentoMotionDuration, ease: motionEase }}
            />
            <div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[13.534px] justify-center leading-[0] left-[calc(75%+83px)] not-italic text-[12px] text-[color:var(--raven-900,#101928)] text-center tracking-[0.96px] w-[138.722px]"
              style={{ top: chip.labelTop }}
            >
              <p className="leading-none">{chip.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
