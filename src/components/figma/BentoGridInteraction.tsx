"use client";

import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion } from "motion/react";
import { useBentoSectionInView } from "@/hooks/useBentoSectionInView";
import { bentoMotionDuration } from "@/lib/bento-motion";
import { motionEase } from "@/lib/tokens";

export type BentoCardId = "inDepth" | "postMortem" | "lifecycle" | "handoff";

export type BentoCardBounds = {
  left: string;
  top: number;
  width: number;
  height: number;
};

export const BENTO_CARD_BOUNDS: Record<BentoCardId, BentoCardBounds> = {
  inDepth: {
    left: "calc(8.33% + 43px)",
    top: 114,
    width: 421,
    height: 570.96,
  },
  postMortem: {
    left: "calc(41.67% + 14px)",
    top: 114,
    width: 258,
    height: 335.072,
  },
  lifecycle: {
    left: "calc(58.33% + 62px)",
    top: 114,
    width: 365,
    height: 335,
  },
  handoff: {
    left: "calc(41.67% + 14px)",
    top: 479.07,
    width: 653,
    height: 205.93,
  },
};

type BentoGridContextValue = {
  hoveredId: BentoCardId | null;
  setHoveredId: (id: BentoCardId | null) => void;
  sectionActive: boolean;
};

const BentoGridContext = createContext<BentoGridContextValue | null>(null);

export function BentoGridProvider({ children }: { children: ReactNode }) {
  const [hoveredId, setHoveredId] = useState<BentoCardId | null>(null);
  const { ref: sectionRef, active: sectionActive } = useBentoSectionInView();

  return (
    <BentoGridContext.Provider value={{ hoveredId, setHoveredId, sectionActive }}>
      <motion.div
        ref={sectionRef}
        className="pointer-events-none absolute left-[calc(8.33%+43px)] top-[114px] h-[571px] w-[1104px]"
        aria-hidden
      />
      {children}
    </BentoGridContext.Provider>
  );
}

export function useBentoGrid() {
  const ctx = useContext(BentoGridContext);
  if (!ctx) {
    throw new Error("useBentoGrid must be used within BentoGridProvider");
  }
  return ctx;
}

/** Optional hook when grid provider is absent (e.g. isolated previews). */
export function useBentoGridOptional() {
  return useContext(BentoGridContext);
}

function boundsStyle(bounds: BentoCardBounds): CSSProperties {
  return {
    left: bounds.left,
    top: bounds.top,
    width: bounds.width,
    height: bounds.height,
  };
}

/** Pointer + hover target aligned to Figma card bounds. */
export function BentoCardHitArea({ id }: { id: BentoCardId }) {
  const { hoveredId, setHoveredId } = useBentoGrid();
  const bounds = BENTO_CARD_BOUNDS[id];
  const hovered = hoveredId === id;

  return (
    <motion.div
      className="absolute cursor-default"
      style={{
        ...boundsStyle(bounds),
        zIndex: hovered ? 40 : 5,
      }}
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
      aria-hidden
    />
  );
}

/** Subtle darken overlay on non-hovered cards while one card is active. */
export function BentoCardDimOverlay({ id }: { id: BentoCardId }) {
  const { hoveredId } = useBentoGrid();
  const bounds = BENTO_CARD_BOUNDS[id];
  const visible = hoveredId !== null && hoveredId !== id;

  return (
    <motion.div
      className="pointer-events-none absolute rounded-[2px] bg-[#101928]/[0.12]"
      style={{ ...boundsStyle(bounds), zIndex: 35 }}
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: bentoMotionDuration, ease: motionEase }}
      aria-hidden
    />
  );
}

/** Scale a positioned card face (main rect + shadow) on hover. */
export function BentoCardScaledFace({
  id,
  className,
  style,
  children,
  ...rest
}: {
  id: BentoCardId;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<ComponentProps<typeof motion.div>, "animate" | "transition">) {
  const { hoveredId } = useBentoGrid();
  const hovered = hoveredId === id;

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "50% 50%", ...style }}
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ duration: bentoMotionDuration, ease: motionEase }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
