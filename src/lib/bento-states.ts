import { colors } from "@/lib/tokens";

export type BentoVisualState = "default" | "transition" | "hover";

/** Layer stack Y offsets (px from card top) — from Figma Main Outer vs Transition frames. */
export const layerOffsets = {
  default: [234, 240.44, 246.87, 253.31, 259.75, 266.19, 272.62, 279.06],
  transition: [203, 239.44, 275.87, 312.31, 348.75, 385.19, 421.62, 458.06],
} as const;

const ravenStack = [
  colors.raven50,
  colors.raven100,
  colors.raven200,
  colors.raven300,
  colors.raven400,
  colors.raven500,
  colors.raven600,
  colors.raven700,
] as const;

const azureStack = [
  colors.azure50,
  colors.azure100,
  colors.azure200,
  colors.azure300,
  colors.azure400,
  colors.azure500,
  colors.azure600,
  colors.azure700,
] as const;

export function layerColors(state: BentoVisualState): readonly string[] {
  return state === "hover" ? azureStack : ravenStack;
}

export function resolveBentoState(
  sectionActive: boolean,
  hovered: boolean,
): BentoVisualState {
  if (hovered) return "hover";
  if (sectionActive) return "transition";
  return "default";
}
