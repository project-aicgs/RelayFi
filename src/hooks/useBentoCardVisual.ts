"use client";

import type { BentoCardId } from "@/components/figma/BentoGridInteraction";
import { useBentoGridOptional } from "@/components/figma/BentoGridInteraction";
import { resolveVisualState, type VisualState } from "@/lib/figma-spec";

/** Scroll + card-hover → default | transition | hover (Figma bento states). */
export function useBentoCardVisual(cardId: BentoCardId) {
  const grid = useBentoGridOptional();
  const active = grid?.sectionActive ?? false;
  const hovered = grid?.hoveredId === cardId;
  const visual: VisualState = resolveVisualState(active, hovered);

  return {
    active,
    hovered,
    visual,
    showTransition: visual !== "default",
    showHover: visual === "hover",
  };
}
