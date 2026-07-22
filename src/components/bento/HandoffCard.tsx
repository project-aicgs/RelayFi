"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { assets } from "@/lib/assets";
import { motionDuration, motionEase } from "@/lib/tokens";
import { OffsetCard } from "@/components/ui/OffsetCard";
import type { BentoVisualState } from "@/lib/bento-states";

const people = [
  { letter: "P", name: "Priya", ring: assets.bento.ellipse6 },
  { letter: "M", name: "Mark", ring: assets.bento.ellipse8 },
  { letter: "A", name: "Alexa", ring: assets.bento.ellipse9 },
] as const;

type HandoffCardProps = {
  visualState: BentoVisualState;
  expanded: boolean;
};

export function HandoffCard({ visualState, expanded }: HandoffCardProps) {
  const detailed = visualState !== "default";

  return (
    <OffsetCard active={expanded} className="h-full min-h-[200px] w-full">
      <div className="flex h-full flex-col justify-between gap-6 p-6">
        <h3 className="font-serif-display text-center text-[clamp(1.35rem,2.5vw,2.25rem)] leading-[1.1] tracking-[-0.02em]">
          Context ready incident handoffs
        </h3>
        <div className="relative flex flex-col items-center gap-4">
          <AnimatePresence>
            {detailed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: motionDuration, ease: motionEase }}
                className="flex w-full max-w-md justify-between px-4 text-xs font-semibold tracking-widest"
              >
                <span>8:26 UTC</span>
                <span>TBD</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex w-full max-w-lg items-end justify-between gap-4 px-2">
            {people.map((person, i) => (
              <motion.div
                key={person.name}
                layout
                className="flex flex-col items-center gap-2"
                animate={{ scale: detailed ? 1.08 : 1 }}
                transition={{ duration: motionDuration, ease: motionEase, delay: i * 0.05 }}
              ><div className="relative size-[51px]">
                  {detailed && (
                    <Image
                      src={assets.bento.ellipse7}
                      alt=""
                      width={59}
                      height={59}
                      className="absolute -inset-1"
                      unoptimized
                      aria-hidden
                    />
                  )}
                  <Image
                    src={person.ring}
                    alt=""
                    width={detailed ? 51 : 51}
                    height={51}
                    unoptimized
                    aria-hidden
                  />
                  <span className="font-serif-display absolute inset-0 flex items-center justify-center text-3xl">
                    {person.letter}
                  </span>
                </div>
                <span className="eyebrow">{person.name}</span>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {detailed && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="relative w-full max-w-md"
              >
                <Image
                  src={assets.bento.line9}
                  alt=""
                  width={168}
                  height={2}
                  className="absolute left-[8%] top-3 w-[35%]"
                  unoptimized
                  aria-hidden
                />
                <Image
                  src={assets.bento.line10}
                  alt=""
                  width={169}
                  height={2}
                  className="absolute right-[8%] top-3 w-[35%]"
                  unoptimized
                  aria-hidden
                />
                <Image
                  src={assets.bento.handoffNote}
                  alt=""
                  width={119}
                  height={71}
                  className="mx-auto"
                  unoptimized
                  aria-hidden
                />
                <p className="mt-1 text-center text-xs font-light">Handoff Note</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </OffsetCard>
  );
}
