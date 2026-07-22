import Image from "next/image";
import { assets } from "@/lib/assets";

const stats = [
  {
    value: "90%+",
    body: "of recordable incidents fail to have a detailed post-mortem report",
  },
  {
    value: "6000+",
    body: "businesses running globally on our infrastructure",
  },
  {
    value: "5.2M",
    body: "incidents and counting analyzed since 2019",
  },
  {
    value: "38%",
    body: "faster MTTR for teams using Relay",
  },
] as const;

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <StatsBackground />
      <div className="relative z-10 mx-auto max-w-[1114px] px-4 sm:px-6 lg:px-0">
        <h2 className="font-serif-display text-center text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-raven-900">
          The incident operations layer for modern engineering teams
        </h2>
        <div className="mt-14 rounded-2xl border border-raven-900/30 bg-azure-200/10 p-6 shadow-[0_32px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.value} className="text-center">
                <p className="font-serif-display text-5xl leading-none tracking-tight text-raven-900">
                  {stat.value}
                </p>
                <p className="mt-3 text-base leading-relaxed text-raven-900">
                  {stat.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBackground() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--azure-50) 0%, var(--azure-400) 35%, var(--azure-500) 55%, var(--azure-700) 100%)",
        }}
      />
      <Image
        src={assets.bigBottomCloud}
        alt=""
        width={1681}
        height={622}
        className="pointer-events-none absolute -left-1/4 bottom-0 w-[120%] max-w-none opacity-50"
        unoptimized
        aria-hidden
      />
    </>
  );
}
