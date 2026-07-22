/** Layout constants from Figma (1440px artboard). */
export const DESIGN_WIDTH = 1440;
export const PAGE_HEIGHT = 4807;
export const HERO_HEIGHT = 1024;
export const FRAME2_HEIGHT = 3756.78;

/** Full-bleed backgrounds (match MainOuterFrame nodes 35:8 and 90:230). */
export const HERO_BG_GRADIENT =
  "linear-gradient(180deg, rgb(33, 93, 212) 0%, rgb(63, 144, 242) 47.596%, rgb(99, 176, 247) 69.231%, rgb(239, 247, 255) 88.283%)";

export const FRAME2_BG_GRADIENT =
  "linear-gradient(180deg, rgb(239, 247, 255) 0%, rgb(99, 176, 247) 25%, rgb(63, 144, 242) 50%, rgb(33, 93, 212) 100%)";

export type VisualState = "default" | "transition" | "hover";

export const inDepthLayers = {
  default: {
    tops: [348, 354.44, 360.87, 367.31, 373.75, 380.19, 386.62, 393.06],
    colors: [
      "#F9FAFB",
      "#F3F4F6",
      "#E5E7EB",
      "#D1D6DB",
      "#9BA4B0",
      "#737D8C",
      "#4A5764",
      "#364352",
    ],
  },
  transition: {
    tops: [317, 353.44, 389.87, 426.31, 462.75, 499.19, 535.62, 572.06],
    colors: [
      "#F9FAFB",
      "#F3F4F6",
      "#E5E7EB",
      "#D1D6DB",
      "#9BA4B0",
      "#737D8C",
      "#4A5764",
      "#364352",
    ],
  },
  hover: {
    tops: [317, 353.44, 389.87, 426.31, 462.75, 499.19, 535.62, 572.06],
    colors: [
      "#EFF7FF",
      "#DCEDFD",
      "#C0E0FD",
      "#95CDFB",
      "#63B0F7",
      "#3F90F2",
      "#3077E8",
      "#215DD4",
    ],
  },
} as const;

export const layerSkew = "matrix(1, 0, -0.62, 0.79, 0, 0)";

/** In Depth stack layout inside 421px card (Figma nodes 132:4026–132:4055). */
export const inDepthLayerLayout = {
  wrapperWidth: 267.719,
  wrapperHeight: 76.437,
  rectWidth: 208,
  rectHeight: 97,
  baseLeft: 74,
  leftStagger: 0.82,
} as const;

export function resolveVisualState(
  sectionActive: boolean,
  hovered: boolean,
): VisualState {
  if (hovered) return "hover";
  if (sectionActive) return "transition";
  return "default";
}
