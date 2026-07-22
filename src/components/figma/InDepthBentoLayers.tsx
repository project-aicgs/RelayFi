"use client";

import { motion } from "motion/react";
import { useBentoGridOptional } from "@/components/figma/BentoGridInteraction";
import { inDepthLayers, layerSkew, resolveVisualState } from "@/lib/figma-spec";
import { bentoMotionDuration } from "@/lib/bento-motion";
import { motionEase } from "@/lib/tokens";

const CARD_TOP = 114;

const LAYER_WRAPPER_WIDTH = 267.719;
const LAYER_WRAPPER_HEIGHT = 76.437;
const LAYER_RECT_WIDTH = 208;
const LAYER_RECT_HEIGHT = 97;
const LAYER_BASE_LEFT = 74;
const LAYER_LEFT_STAGGER = 0.82;
const LAYER_COUNT = 8;

/** Skewed stack inside In Depth bento (129:3990). */
export function InDepthBentoLayers() {
  const grid = useBentoGridOptional();
  const active = grid?.sectionActive ?? false;
  const cardHovered = grid?.hoveredId === "inDepth";
  const visual = resolveVisualState(active, cardHovered ?? false);
  const layer = inDepthLayers[visual];

  return (
    <div className="absolute inset-0" data-name="In Depth Layers">
      {layer.tops.map((pageTop, i) => {
        const top = pageTop - CARD_TOP;
        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              left: LAYER_BASE_LEFT + i * LAYER_LEFT_STAGGER,
              width: LAYER_WRAPPER_WIDTH,
              height: LAYER_WRAPPER_HEIGHT,
              zIndex: LAYER_COUNT - i,
              top,
            }}
            initial={false}
            animate={{ top }}
            transition={{ duration: bentoMotionDuration, ease: motionEase }}
          >
            <motion.div
              className="border-2 border-[var(--raven-900,#101928)]"
              style={{
                width: LAYER_RECT_WIDTH,
                height: LAYER_RECT_HEIGHT,
                transform: layerSkew,
              }}
              initial={false}
              animate={{ backgroundColor: layer.colors[i] }}
              transition={{ duration: bentoMotionDuration, ease: motionEase }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
