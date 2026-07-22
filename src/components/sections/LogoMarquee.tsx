import Image from "next/image";
import { assets } from "@/lib/assets";

const logos = [
  { src: assets.logos.google, alt: "Google", w: 148 },
  { src: assets.logos.aws, alt: "AWS", w: 75 },
  { src: assets.logos.meta, alt: "Meta", w: 75 },
  { src: assets.logos.roblox, alt: "Roblox", w: 50 },
  { src: assets.logos.stripe, alt: "Stripe", w: 120 },
  { src: assets.logos.goldman, alt: "Goldman Sachs", w: 50 },
  { src: assets.logos.cursor, alt: "Cursor", w: 50 },
  { src: assets.logos.ramp, alt: "Ramp", w: 156 },
  { src: assets.logos.github, alt: "GitHub", w: 51 },
] as const;

export function LogoMarquee({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee items-center gap-12 px-4">
        {[...logos, ...logos].map((logo, i) => (
          <Image
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={50}
            className="h-[50px] w-auto shrink-0 object-contain opacity-90"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
