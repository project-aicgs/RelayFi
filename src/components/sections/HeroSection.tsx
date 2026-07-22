import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { IncidentWidget } from "@/components/hero/IncidentWidget";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { assets } from "@/lib/assets";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pb-28 pt-12 lg:pb-32 lg:pt-14">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[max(1rem,calc((100%-1114px)/2))]">
        <SiteHeader />
        <div className="mt-16 grid items-start gap-12 lg:mt-20 lg:grid-cols-[minmax(0,660px)_1fr] lg:gap-8">
          <div className="max-w-[660px]">
            <h1 className="font-serif-display text-[clamp(2.25rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-azure-50">
              Incident management{" "}
              <em className="italic">without</em> the chaos.{" "}
              <span className="text-azure-400">
                Explore solutions that put your business one step ahead.
              </span>
            </h1>
            <HeroCtas />
          </div>
          <IncidentWidget />
        </div>
        <LogoMarquee className="mt-16 lg:mt-24" />
      </div>
    </section>
  );
}

function HeroCtas() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#access"
        className="rounded-lg border border-raven-900 bg-azure-500 px-6 py-2.5 text-base font-semibold text-azure-50"
      >
        Request access
      </a>
      <a
        href="#learn"
        className="rounded-lg border border-raven-900 bg-azure-50 px-6 py-2.5 text-base font-semibold text-azure-500"
      >
        Learn More
      </a>
    </div>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--azure-700) 0%, var(--azure-500) 47.6%, var(--azure-400) 69.2%, var(--azure-50) 88.3%)",
        }}
      />
      <Image
        src={assets.topRightCloud}
        alt=""
        width={722}
        height={406}
        className="pointer-events-none absolute right-0 top-3 w-[min(50vw,722px)] opacity-25"
        unoptimized
        aria-hidden
      />
      <Image
        src={assets.topLeftCloud}
        alt=""
        width={407}
        height={229}
        className="pointer-events-none absolute left-0 top-28 w-[min(28vw,407px)] opacity-40"
        unoptimized
        aria-hidden
      />
      <Image
        src={assets.bigBottomCloud}
        alt=""
        width={1368}
        height={506}
        className="pointer-events-none absolute bottom-0 left-1/2 w-[min(95vw,1368px)] -translate-x-1/2 opacity-40"
        unoptimized
        aria-hidden
      />
    </>
  );
}
