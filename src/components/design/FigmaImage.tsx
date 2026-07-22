import type { CSSProperties } from "react";
import Image from "next/image";
import { figmaStyle, type BoxRect } from "./FigmaBox";

type FigmaImageProps = BoxRect & {
  src: string;
  alt?: string;
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
  opacity?: number;
  style?: CSSProperties;
};

export function FigmaImage({
  src,
  alt = "",
  className = "",
  objectFit = "cover",
  opacity,
  style,
  ...rect
}: FigmaImageProps) {
  return (
    <div style={{ ...figmaStyle({ ...rect, opacity }), ...style }} className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className={
          objectFit === "cover"
            ? "object-cover"
            : objectFit === "contain"
              ? "object-contain"
              : "object-fill"
        }
        sizes={`${rect.width}px`}
      />
    </div>
  );
}
