"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { DESIGN_WIDTH } from "@/lib/figma-spec";
import { PageBleedBackground } from "./PageBleedBackground";

type DesignCanvasProps = {
  height: number;
  children: ReactNode;
  className?: string;
};

export function DesignCanvas({ height, children, className = "" }: DesignCanvasProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = outerRef.current;
    if (!node) return;
    const update = () => {
      const w = node.clientWidth;
      setScale(w / DESIGN_WIDTH);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const scaledHeight = height * scale;
  const scaledWidth = DESIGN_WIDTH * scale;

  return (
    <div
      ref={outerRef}
      className={`relative w-full ${className}`}
      style={{ height: scaledHeight }}
    >
      <PageBleedBackground />
      <div
        className="relative mx-auto"
        style={{ width: scaledWidth, height: scaledHeight }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: DESIGN_WIDTH,
            height,
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
