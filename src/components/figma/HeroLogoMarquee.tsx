"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colors } from "@/lib/tokens";

const logos = [
  { src: "/figma/imgGoogle1.png", alt: "Google", w: 148 },
  { src: "/figma/imgAws1.png", alt: "AWS", w: 75 },
  { src: "/figma/imgMeta1.png", alt: "Meta", w: 75 },
  { src: "/figma/imgRoblox1.png", alt: "Roblox", w: 50 },
  { src: "/figma/imgStripe1.png", alt: "Stripe", w: 120 },
  { src: "/figma/imgGoldmansachs1.png", alt: "Goldman Sachs", w: 50 },
  { src: "/figma/imgCursor1.png", alt: "Cursor", w: 50 },
  { src: "/figma/imgRamp1.png", alt: "Ramp", w: 156 },
  { src: "/figma/imgGithub1.png", alt: "GitHub", w: 51 },
] as const;

/** Duplicated inline — join uses same gap-14 as between every logo. */
const marqueeLogos = [...logos, ...logos];

const AZURE_50 = colors.azure50;
const AZURE_50_FADE = "239, 247, 255";

function preloadLogoImages() {
  return Promise.all(
    logos.map(
      (logo) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = logo.src;
        }),
    ),
  );
}

function MarqueeEdgeFade({ side }: { side: "left" | "right" }) {
  const background =
    side === "left"
      ? `linear-gradient(to right, ${AZURE_50} 0%, rgba(${AZURE_50_FADE}, 0.72) 28%, rgba(${AZURE_50_FADE}, 0) 100%)`
      : `linear-gradient(to left, ${AZURE_50} 0%, rgba(${AZURE_50_FADE}, 0.72) 28%, rgba(${AZURE_50_FADE}, 0) 100%)`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 z-10 w-[min(28%,140px)] ${side === "left" ? "left-0" : "right-0"}`}
      style={{ background }}
    />
  );
}

/**
 * One flex row, logos ×2, uniform gap-14 (band join = icon gap).
 * Loop shift = measured px from first logo → duplicate first logo.
 */
export function HeroLogoMarquee() {
  const [ready, setReady] = useState(false);
  const [shiftPx, setShiftPx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstLogoRef = useRef<HTMLImageElement>(null);
  const dupLogoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let cancelled = false;
    preloadLogoImages().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useLayoutEffect(() => {
    const first = firstLogoRef.current;
    const dup = dupLogoRef.current;
    if (!first || !dup) return;

    const measure = () => {
      const period = Math.round(dup.offsetLeft - first.offsetLeft);
      setShiftPx(period);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(first);
    ro.observe(dup);
    return () => ro.disconnect();
  }, [ready]);

  const canRun = ready && shiftPx > 0;

  return (
    <div
      className="logo-marquee absolute left-0 top-[904px] z-10 h-[120px] w-[1440px] overflow-hidden bg-[var(--azure-radiance-50,#eff7ff)]"
      data-node-id="114:3978"
    >
      <div className="flex h-full items-center justify-start">
        <div
          ref={trackRef}
          className={`logo-marquee-track flex h-full w-max shrink-0 items-center gap-14 px-8 ${canRun ? "logo-marquee-track--running" : ""}`}
          style={{
            opacity: canRun ? 1 : 0,
            ["--marquee-shift" as string]: `${shiftPx}px`,
          }}
        >
          {marqueeLogos.map((logo, index) => {
            const isDuplicate = index >= logos.length;
            return (
              <img
                key={`${index}-${logo.alt}`}
                ref={
                  index === 0
                    ? firstLogoRef
                    : index === logos.length
                      ? dupLogoRef
                      : undefined
                }
                src={logo.src}
                alt={isDuplicate ? "" : logo.alt}
                width={logo.w}
                height={50}
                loading="eager"
                decoding={isDuplicate ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "low"}
                className="logo-marquee-item block h-[50px] w-auto max-w-none shrink-0 object-contain opacity-90"
                draggable={false}
                aria-hidden={isDuplicate || undefined}
              />
            );
          })}
        </div>
      </div>

      <MarqueeEdgeFade side="left" />
      <MarqueeEdgeFade side="right" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[3px] bg-[var(--azure-radiance-50,#eff7ff)]"
      />
    </div>
  );
}
