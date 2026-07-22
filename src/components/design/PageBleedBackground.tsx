import {
  FRAME2_BG_GRADIENT,
  HERO_BG_GRADIENT,
  HERO_HEIGHT,
  PAGE_HEIGHT,
} from "@/lib/figma-spec";

const HERO_HEIGHT_PERCENT = (HERO_HEIGHT / PAGE_HEIGHT) * 100;

/** Edge-to-edge gradients behind the scaled 1440px artboard. */
export function PageBleedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full" aria-hidden>
      <div
        className="absolute inset-x-0 top-0 w-full"
        style={{
          height: `${HERO_HEIGHT_PERCENT}%`,
          backgroundImage: HERO_BG_GRADIENT,
        }}
      />
      <div
        className="absolute inset-x-0 w-full"
        style={{
          top: `${HERO_HEIGHT_PERCENT}%`,
          bottom: 0,
          backgroundImage: FRAME2_BG_GRADIENT,
        }}
      />
    </div>
  );
}
