import type { CSSProperties, ReactNode } from "react";

export type BoxRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type FigmaBoxProps = BoxRect & {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function figmaStyle({
  left,
  top,
  width,
  height,
  ...rest
}: BoxRect & CSSProperties): CSSProperties {
  return {
    position: "absolute",
    left,
    top,
    width,
    height,
    boxSizing: "border-box",
    ...rest,
  };
}

export function FigmaBox({
  left,
  top,
  width,
  height,
  children,
  className = "",
  style,
}: FigmaBoxProps) {
  return (
    <div
      className={className}
      style={{ ...figmaStyle({ left, top, width, height }), ...style }}
    >
      {children}
    </div>
  );
}
