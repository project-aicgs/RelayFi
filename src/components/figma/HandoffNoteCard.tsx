"use client";

import { useBentoCardVisual } from "@/hooks/useBentoCardVisual";
import { colors } from "@/lib/tokens";

/** Handoff note card (231:1577) — muted until handoff card hover. */
export function HandoffNoteCard({ className }: { className?: string }) {
  const { showHover } = useBentoCardVisual("handoff");
  const fill = showHover ? colors.raven200 : colors.raven100;
  const stroke = showHover ? colors.raven900 : colors.raven600;
  const skeleton = showHover ? colors.raven400 : colors.raven300;

  return (
    <svg
      className={`block size-full ${className ?? ""}`}
      viewBox="0 0 119 71"
      fill="none"
      aria-hidden
      data-name="Handoff Note"
    >
      <rect x="0.5" y="0.5" width="118" height="70" fill={fill} stroke={stroke} strokeWidth={2} />
      <line x1="0" y1="25.5" x2="119" y2="25.5" stroke={stroke} />
      <g fill={skeleton}>
        <path d="M72 36C73.1046 36 74 36.8954 74 38C74 39.1046 73.1046 40 72 40H13C11.8954 40 11 39.1046 11 38C11 36.8954 11.8954 36 13 36H72Z" />
        <path d="M30.0811 45.0039C31.148 45.0465 32 45.9226 32 47C32 48.0774 31.148 48.9525 30.0811 48.9951V49H13.0811V48.9951C13.0541 48.9962 13.0272 49 13 49C11.8954 49 11 48.1046 11 47C11 45.8954 11.8954 45 13 45C13.0272 45 13.0541 45.0028 13.0811 45.0039V45H30.0811V45.0039Z" />
        <path d="M106.081 55.0039C107.148 55.0465 108 55.9226 108 57C108 58.0774 107.148 58.9525 106.081 58.9951V59H85.0811V58.9951C85.0541 58.9962 85.0272 59 85 59C83.8954 59 83 58.1046 83 57C83 55.8954 83.8954 55 85 55C85.0272 55 85.0541 55.0028 85.0811 55.0039V55H106.081V55.0039Z" />
        <path d="M106 45C107.105 45 108 45.8954 108 47C108 48.1046 107.105 49 106 49H88C86.8954 49 86 48.1046 86 47C86 45.8954 86.8954 45 88 45H106Z" />
        <path d="M81 45C82.1046 45 83 45.8954 83 47C83 48.1046 82.1046 49 81 49H39C37.8954 49 37 48.1046 37 47C37 45.8954 37.8954 45 39 45H81Z" />
        <path d="M106 36C107.105 36 108 36.8954 108 38C108 39.1046 107.105 40 106 40H83C81.8954 40 81 39.1046 81 38C81 36.8954 81.8954 36 83 36H106Z" />
        <path d="M74 55.0713C74.1324 55.0261 74.2713 55 74.415 55C75.2904 55.0003 76 55.8956 76 57C76 58.1044 75.2904 58.9997 74.415 59C74.2712 59 74.1325 58.973 74 58.9277V59H13C11.8954 59 11 58.1046 11 57C11 55.8954 11.8954 55 13 55H74V55.0713Z" />
      </g>
    </svg>
  );
}
