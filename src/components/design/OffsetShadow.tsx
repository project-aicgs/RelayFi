import { motion } from "motion/react";
import type { ReactNode } from "react";
import { figmaStyle, type BoxRect } from "./FigmaBox";
import { motionDuration, motionEase } from "@/lib/tokens";

type OffsetShadowProps = {
  main: BoxRect;
  children: ReactNode;
  active?: boolean;
};

/** Figma card: azure-500 shadow rect +10/+10, azure-50 face on top. */
export function OffsetShadow({ main, children, active = false }: OffsetShadowProps) {
  const shadow: BoxRect = {
    left: main.left + 10,
    top: main.top + 10,
    width: main.width,
    height: main.height,
  };

  return (
    <motion.div
      layout
      className="absolute"
      style={figmaStyle({ left: main.left, top: main.top, width: main.width, height: main.height })}
      animate={{ scale: active ? 1.01 : 1 }}
      transition={{ duration: motionDuration, ease: motionEase }}
    >
      <div
        className="absolute border-2 border-[#101928] bg-[#3F90F2]"
        style={figmaStyle(shadow)}
      />
      <div
        className="absolute overflow-hidden border-2 border-[#101928] bg-[#EFF7FF]"
        style={figmaStyle({ left: 0, top: 0, width: main.width, height: main.height })}
      >
        {children}
      </div>
    </motion.div>
  );
}
