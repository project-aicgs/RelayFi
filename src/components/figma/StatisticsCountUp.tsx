"use client";

import {
  parseStatValue,
  useCountUp,
  useInViewOnce,
} from "@/hooks/useCountUpOnView";

const STATS = [
  {
    value: "90%+",
    body: "of recordable incidents fail to have a detailed post-mortem report",
    className:
      "-translate-x-1/2 [word-break:break-word] absolute font-serif h-[116px] leading-[0] left-[calc(8.33%+189px)] not-italic text-[color:var(--raven-900,#101928)] text-center top-[1092px] tracking-[-0.96px] w-[174px]",
    nodeId: "171:4651",
    trailingSpacer: true,
  },
  {
    value: "6000+",
    body: "businesses running globally on our infrastructure",
    className:
      "-translate-x-1/2 [word-break:break-word] absolute font-serif h-[116px] leading-[0] left-[calc(33.33%+103px)] not-italic text-[color:var(--raven-900,#101928)] text-center top-[1092px] tracking-[-0.96px] w-[174px]",
    nodeId: "178:4659",
  },
  {
    value: "5.2M",
    body: "incidents and counting analyzed since 2019",
    className:
      "-translate-x-1/2 [word-break:break-word] absolute font-serif h-[116px] leading-[0] left-[calc(50%+137px)] not-italic text-[color:var(--raven-900,#101928)] text-center top-[1092px] tracking-[-0.96px] w-[174px]",
    nodeId: "178:4661",
  },
  {
    value: "38%",
    body: "faster MTTR for teams using Relay",
    className:
      "-translate-x-1/2 [word-break:break-word] absolute font-serif h-[116px] leading-[0] left-[calc(66.67%+171px)] not-italic text-[color:var(--raven-900,#101928)] text-center top-[1092px] tracking-[-0.96px] w-[174px]",
    nodeId: "178:4657",
  },
] as const;

function StatBlock({
  value,
  body,
  className,
  nodeId,
  active,
  trailingSpacer = false,
}: (typeof STATS)[number] & { active: boolean; trailingSpacer?: boolean }) {
  const parsed = parseStatValue(value);
  const display = useCountUp(parsed, active, 2000);

  return (
    <div className={className} data-node-id={nodeId}>
      <p className="leading-[1.1] mb-0 text-[#101928] text-[48px] tabular-nums">
        {display}
      </p>
      <p className="font-sans font-normal leading-[1.5] mb-0 text-[#101928] text-[16px]">
        {body}
      </p>
      {trailingSpacer ? (
        <p className="leading-[1.1] text-[48px]" aria-hidden>
          ​
        </p>
      ) : null}
    </div>
  );
}

/** Figma stats row — rapid count-up over 2s when the numbers enter the viewport. */
export function StatisticsCountUp() {
  // Gate on the number row only (not title / frosted box). ~48px type @ 1.1 leading.
  const { ref, inView } = useInViewOnce(0.4, "0px");

  return (
    <>
      {/* Real box for IntersectionObserver (display:contents has zero size). */}
      <div
        ref={ref}
        className="-translate-x-1/2 pointer-events-none absolute left-1/2 top-[1092px] h-[53px] w-[1114px]"
        aria-hidden
        data-name="Stats numbers scroll sentinel"
      />
      <div
        className="-translate-x-1/2 absolute contents left-1/2 top-[1040px]"
        data-node-id="183:4667"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[25px] bg-[rgba(192,224,253,0.1)] border-[0.25px] border-[var(--raven-900,#101928)] border-solid h-[219px] left-1/2 opacity-50 rounded-[16px] shadow-[0px_794px_222px_0px_rgba(0,0,0,0),0px_508px_203px_0px_rgba(0,0,0,0.01),0px_286px_172px_0px_rgba(0,0,0,0.03),0px_127px_127px_0px_rgba(0,0,0,0.05),0px_32px_70px_0px_rgba(0,0,0,0.06)] top-[calc(50%-728.89px)] w-[1114px]"
          data-node-id="181:4666"
          data-name="Stats Container"
        />
        {STATS.map((stat) => (
          <StatBlock key={stat.nodeId} {...stat} active={inView} />
        ))}
      </div>
    </>
  );
}
