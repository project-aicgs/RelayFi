"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { motionDuration, motionEase } from "@/lib/tokens";
import { OffsetCard } from "@/components/ui/OffsetCard";
import type { BentoVisualState } from "@/lib/bento-states";

const tags = [
  { label: "Auto Post-mortem", bg: "bg-alizarin-100", border: "border-alizarin-600" },
  { label: "Smart Handoffs", bg: "bg-gamboge-100", border: "border-gamboge-600" },
  { label: "Escalation Routing", bg: "bg-emerald-100", border: "border-emerald-600" },
  { label: "AI Incident Briefing", bg: "bg-azure-100", border: "border-azure-600" },
] as const;

type LifecycleCardProps = {
  expanded: boolean;
  visualState: BentoVisualState;
};

export function LifecycleCard({ expanded, visualState }: LifecycleCardProps) {
  const spread = visualState !== "default";

  return (
    <OffsetCard active={expanded} className="h-full min-h-[320px] w-full lg:min-h-[345px]">
      <div className="flex h-full flex-col items-center p-5">
        <div className="relative mx-auto mt-2 h-[160px] w-full max-w-[306px]">
          <Image src={assets.bento.vector1} alt="" width={101} height={65} className="absolute left-[18%] top-2" unoptimized aria-hidden />
          <Image src={assets.bento.vector3} alt="" width={101} height={22} className="absolute left-[18%] top-[38%]" unoptimized aria-hidden />
          <Image src={assets.bento.vector4} alt="" width={101} height={21} className="absolute left-[18%] top-[52%] scale-y-[-1]" unoptimized aria-hidden />
          <Image src={assets.bento.vector2} alt="" width={101} height={64} className="absolute bottom-0 left-[18%] scale-y-[-1]" unoptimized aria-hidden />
          <motion.div
            animate={{ scale: spread ? 1.05 : 1 }}
            transition={{ duration: motionDuration, ease: motionEase }}
            className="absolute left-0 top-[32%] flex size-14 items-center justify-center rounded-2xl border-2 border-raven-900 bg-raven-800"
          >
            <Image src={assets.relayLogo} alt="" width={31} height={35} unoptimized aria-hidden />
          </motion.div>
          <div className="absolute right-0 top-0 flex flex-col gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={tag.label}
                animate={{ x: spread ? 0 : 6, opacity: 1 }}
                transition={{ duration: motionDuration, delay: i * 0.04, ease: motionEase }}
                className={`eyebrow rounded-2xl border-2 px-3 py-2 text-center text-raven-900 ${tag.bg} ${tag.border}`}
              >
                {tag.label}
              </motion.span>
            ))}
          </div>
        </div>
        <h3 className="font-serif-display mt-auto max-w-[159px] text-center text-[clamp(1.35rem,2vw,2.25rem)] leading-[1.1] tracking-[-0.02em]">
          One software. Full life cycle.
        </h3>
      </div>
    </OffsetCard>
  );
}
