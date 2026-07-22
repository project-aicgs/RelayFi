"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { motionDuration, motionEase } from "@/lib/tokens";

type OffsetCardProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};

/** Figma-style hard shadow card (azure-500 offset block). */
export function OffsetCard({ children, className = "", active = false }: OffsetCardProps) {
  return (
    <motion.div
      layout
      className={`relative ${className}`}
      animate={{ scale: active ? 1.015 : 1 }}
      transition={{ duration: motionDuration, ease: motionEase }}
    >
      <motion.div
        layout
        aria-hidden
        className="pointer-events-none absolute inset-0 translate-x-2.5 translate-y-2.5 border-2 border-raven-900 bg-azure-500"
        transition={{ duration: motionDuration, ease: motionEase }}
      />
      <motion.div
        layout
        className="relative h-full w-full border-2 border-raven-900 bg-azure-50"
        transition={{ duration: motionDuration, ease: motionEase }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
