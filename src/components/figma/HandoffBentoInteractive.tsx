"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { HandoffNoteCard } from "@/components/figma/HandoffNoteCard";
import { HandoffTbdLine } from "@/components/figma/HandoffTbdLine";
import { HandoffLine9 } from "@/components/figma/svg/HandoffLine9";
import { HandoffLine11 } from "@/components/figma/svg/HandoffLine11";
import { HandoffLine12 } from "@/components/figma/svg/HandoffLine12";
import { useBentoCardVisual } from "@/hooks/useBentoCardVisual";
import { bentoMotionDuration } from "@/lib/bento-motion";
import { motionEase } from "@/lib/tokens";

const IMG_ELLIPSE9 = "/figma/imgEllipse9.png";

/** Handoff connectors + note (129:3995) — exact Figma layout + scroll branch. */
export function HandoffBentoInteractive() {
  const { showTransition, showHover } = useBentoCardVisual("handoff");

  return (
    <>
      <AnimatePresence>
        {showTransition && (
          <motion.div
            key="handoff-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: bentoMotionDuration, ease: motionEase }}
          >
            <motion.div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[21px] justify-center leading-[0] left-[calc(50%+117px)] not-italic text-[12px] text-black text-center top-[566.5px] tracking-[0.96px] w-[168px]"
              data-node-id="231:1631"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: bentoMotionDuration, ease: motionEase }}
            >
              <p className="leading-none">8:26 UTC</p>
            </motion.div>
            <motion.div
              className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[21px] justify-center leading-[0] left-[calc(66.67%+96.5px)] not-italic text-[12px] text-black text-center top-[566.5px] tracking-[0.96px] w-[169px]"
              data-node-id="231:1632"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: bentoMotionDuration, ease: motionEase }}
            >
              <p className="leading-none">TBD</p>
            </motion.div>

            <motion.div
              className="absolute left-[calc(50%+33px)] top-[577px]"
              data-node-id="231:1535"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              style={{ transformOrigin: "left center" }}
              transition={{ duration: bentoMotionDuration, ease: motionEase }}
            >
              <HandoffLine9 />
            </motion.div>

            <div
              className="absolute left-[calc(66.67%+12px)] top-[577px] w-[169px] h-[2px]"
              data-node-id="231:1536"
            >
              <HandoffTbdLine crawl={showHover} />
            </div>

            <motion.div
              className="absolute left-[calc(50%+60px)] top-[577px]"
              data-node-id="231:1566"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              style={{ transformOrigin: "top center" }}
              transition={{ duration: bentoMotionDuration, ease: motionEase, delay: 0.1 }}
            >
              <HandoffLine11 />
            </motion.div>

            <motion.div
              className="absolute left-[calc(50%+60px)] top-[634.75px]"
              data-node-id="231:1567"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              style={{ transformOrigin: "left center" }}
              transition={{
                duration: bentoMotionDuration * 0.65,
                ease: motionEase,
                delay: 0.22,
              }}
            >
              <HandoffLine12 />
            </motion.div>

            <motion.div
              className="absolute left-[calc(50%+83px)] size-[7px] top-[631px]"
              data-node-id="231:1568"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.32, duration: 0.3, ease: motionEase }}
            >
              <Image
                src={IMG_ELLIPSE9}
                alt=""
                width={7}
                height={7}
                className="block size-full max-w-none"
                unoptimized
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="absolute h-[71px] left-[calc(50%+86px)] top-[599px] w-[119px]"
              data-node-id="231:1577"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: bentoMotionDuration,
                ease: motionEase,
                delay: 0.14,
              }}
            >
              <HandoffNoteCard className="size-full" />
            </motion.div>
            <motion.div
              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-light h-[26px] justify-center leading-[0] left-[calc(62.5%-94px)] not-italic text-[12px] text-black top-[612px] w-[119px]"
              data-node-id="231:1571"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: bentoMotionDuration * 0.6 }}
            >
              <p className="leading-[1.5] whitespace-pre-wrap">{`   Handoff Note`}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
