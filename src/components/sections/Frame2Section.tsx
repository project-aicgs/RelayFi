"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { FigmaBox, figmaStyle } from "@/components/design/FigmaBox";
import { FigmaImage } from "@/components/design/FigmaImage";
import { OffsetShadow } from "@/components/design/OffsetShadow";
import { useSectionInView } from "@/hooks/useSectionInView";
import { assets } from "@/lib/assets";
import {
  inDepthLayers,
  layerSkew,
  resolveVisualState,
  type VisualState,
} from "@/lib/figma-spec";
import { motionDuration, motionEase } from "@/lib/tokens";

type CardId = "inDepth" | "postMortem" | "lifecycle" | "handoff";

export function Frame2Section() {
  const { ref, active } = useSectionInView(0.28);
  const [hovered, setHovered] = useState<CardId | null>(null);

  const state = (id: CardId): VisualState =>
    resolveVisualState(active, hovered === id);

  return (
    <section ref={ref} className="relative" style={{ height: 3756.78 }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #EFF7FF 0%, #63B0F7 25%, #3F90F2 50%, #215DD4 100%), #EFF7FF",
        }}
      />
      <FigmaImage
        src={assets.topLeftCloud}
        left={430}
        top={894}
        width={514.28}
        height={289.28}
        className="opacity-40 blur-[1px]"
        style={{ transform: "rotate(-161.45deg)" }}
      />
      <FigmaImage
        src={assets.topLeftCloud}
        left={843}
        top={769}
        width={864.41}
        height={486.23}
        className="opacity-40 blur-[1px]"
        style={{ transform: "rotate(-161.45deg)" }}
      />

      {/* Bento grid origin 163,114 */}
      <div className="absolute left-[163px] top-[114px] h-[581px] w-[1114px]">
        <InDepthCard
          visual={state("inDepth")}
          expanded={hovered === "inDepth" || active}
          onEnter={() => setHovered("inDepth")}
          onLeave={() => setHovered(null)}
        />
        <PostMortemCard
          visual={state("postMortem")}
          onEnter={() => setHovered("postMortem")}
          onLeave={() => setHovered(null)}
        />
        <LifecycleCard
          visual={state("lifecycle")}
          onEnter={() => setHovered("lifecycle")}
          onLeave={() => setHovered(null)}
        />
        <HandoffCard
          visual={state("handoff")}
          detailed={state("handoff") !== "default"}
          onEnter={() => setHovered("handoff")}
          onLeave={() => setHovered(null)}
        />
      </div>

      <FigmaImage
        src={assets.bigBottomCloud}
        left={-1069}
        top={860}
        width={1681.66}
        height={622}
        className="opacity-50 blur-[1px]"
      />

      <h2
        className="absolute text-center font-serif text-[48px] leading-[115%] tracking-[-0.015em] text-[#101928]"
        style={figmaStyle({ left: 0, top: 938, width: 1440, height: 52 })}
      >
        The incident operations layer for modern engineering teams
      </h2>

      <StatsBlock />

      <EnterpriseBlock />
    </section>
  );
}

function InDepthCard({
  visual,
  expanded,
  onEnter,
  onLeave,
}: {
  visual: VisualState;
  expanded: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const layer = inDepthLayers[visual];
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <OffsetShadow
        main={{ left: 0, top: 0, width: 421, height: 570.96 }}
        active={expanded}
      >
        <p
          className="absolute text-center font-serif text-[36px] leading-[110%] tracking-[-0.02em] text-black"
          style={figmaStyle({ left: 21, top: 2, width: 210, height: 175 })}
        >
          In depth analysis at every level of your organization
        </p>
        {layer.tops.map((top, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-[#101928]"
            style={{
              left: 74 + i * 0.82,
              width: 208,
              height: 97,
              transform: layerSkew,
            }}
            animate={{ top: top - 114, backgroundColor: layer.colors[i] }}
            transition={{ duration: motionDuration, ease: motionEase }}
          />
        ))}
      </OffsetShadow>
    </div>
  );
}

function PostMortemCard({
  visual,
  onEnter,
  onLeave,
}: {
  visual: VisualState;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const showPointer = visual !== "default";

  return (
    <div
      className="absolute left-[451px] top-0"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <OffsetShadow main={{ left: 0, top: 0, width: 258, height: 335.07 }}>
        <p
          className="absolute text-center font-serif text-[36px] leading-[110%] tracking-[-0.02em] text-black"
          style={figmaStyle({ left: 24, top: 0, width: 210, height: 139 })}
        >
          AI assisted post-mortem reporting
        </p>
        <FigmaBox
          left={16}
          top={117}
          width={227}
          height={187}
          className="border-2 border-[#101928] bg-[#EFF7FF]"
        >
          <p
            className="absolute text-center text-sm font-light leading-[150%] text-black"
            style={figmaStyle({ left: 0, top: 0, width: 227, height: 29 })}
          >
            INC 2417 · Payments degraded
          </p>
          <div
            className="absolute left-0 top-[29px] h-px w-full bg-black"
            style={{ borderTop: "1px solid #000" }}
          />
          <FigmaImage
            src={assets.bento.skeleton}
            left={37}
            top={55}
            width={185}
            height={51}
            objectFit="contain"
          />
        </FigmaBox>
        <motion.div
          className="absolute flex items-center justify-center rounded-2xl border-2 border-[#101928] bg-[#3F90F2] text-base font-medium text-[#101928]"
          animate={{
            left: visual === "default" ? 27 : 35,
            top: visual === "default" ? 221 : 228,
            width: visual === "default" ? 204 : 188,
            height: visual === "default" ? 65 : 59.9,
            scale: showPointer ? 1.02 : 1,
          }}
          transition={{ duration: motionDuration, ease: motionEase }}
          style={{ position: "absolute" }}
        >
          Generate post-mortem
        </motion.div>
        <AnimatePresence>
          {showPointer && (
            <motion.div
              initial={{ opacity: 0, x: 8, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: motionEase }}
            >
              <FigmaImage
                src={assets.bento.pointerSpark}
                left={59}
                top={243}
                width={56.45}
                height={46.14}
                objectFit="contain"
              />
              <FigmaImage
                src={assets.bento.pointer}
                left={57}
                top={266}
                width={32}
                height={54}
                objectFit="contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </OffsetShadow>
    </div>
  );
}

function LifecycleCard({
  visual,
  onEnter,
  onLeave,
}: {
  visual: VisualState;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const spread = visual !== "default";
  const tags = [
    { label: "Auto Post-mortem", top: spread ? 39 : 37, bg: "#FEE2E2" },
    { label: "Smart Handoffs", top: spread ? 82 : 80, bg: "#FCF2C9" },
    { label: "Escalation Routing", top: spread ? 125 : 123, bg: "#DCFCE7" },
    { label: "AI Incident Briefing", top: spread ? 168 : 166, bg: "#DCEDFD" },
  ];

  return (
    <div
      className="absolute left-[739px] top-0"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <OffsetShadow main={{ left: 0, top: 0, width: 365, height: 335 }}>
        <p
          className="absolute text-center font-serif text-[36px] leading-[110%] tracking-[-0.02em] text-black"
          style={figmaStyle({ left: 21, top: 170, width: 159, height: 175 })}
        >
          One software. Full life cycle.
        </p>
        <FigmaImage src={assets.bento.vector1} left={85} top={52} width={101} height={65} objectFit="contain" />
        <FigmaImage src={assets.bento.vector3} left={85} top={95} width={101} height={22} objectFit="contain" />
        <FigmaImage src={assets.bento.vector4} left={85} top={117} width={101} height={21} objectFit="contain" style={{ transform: "scaleY(-1)" }} />
        <FigmaImage src={assets.bento.vector2} left={85} top={117} width={101} height={64} objectFit="contain" style={{ transform: "scaleY(-1)" }} />
        <FigmaBox left={30} top={89} width={55} height={55} className="rounded-2xl border-2 border-[#101928] bg-[#1E2B38]">
          <FigmaImage src={assets.relayLogo} left={12} top={10} width={31} height={35} objectFit="contain" />
        </FigmaBox>
        {tags.map((tag) => (
          <motion.div
            key={tag.label}
            className="absolute flex items-center justify-center rounded-2xl border-2 border-[#101928] text-xs font-semibold tracking-[0.08em]"
            style={figmaStyle({ left: 186, top: tag.top, width: 150, height: 30.45, background: tag.bg })}
            animate={{ x: spread ? 0 : 4 }}
            transition={{ duration: motionDuration, ease: motionEase }}
          >
            {tag.label}
          </motion.div>
        ))}
      </OffsetShadow>
    </div>
  );
}

function HandoffCard({
  detailed,
  onEnter,
  onLeave,
}: {
  visual: VisualState;
  detailed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const people = detailed
    ? [
        { letter: "P", name: "Priya", left: 71, top: 67, ring: "#63B0F7", outer: true },
        { letter: "M", name: "Mark", left: 297, top: 67, ring: "#FA6F6F", outer: true },
        { letter: "A", name: "Alexa", left: 523, top: 67, ring: "#4ADE80", outer: true },
      ]
    : [
        { letter: "P", name: "Priya", left: 81, top: 72, ring: "#C0E0FD", outer: false },
        { letter: "M", name: "Mark", left: 307, top: 72, ring: "#FFC9C9", outer: false },
        { letter: "A", name: "Alexa", left: 523, top: 72, ring: "#BBF7D0", outer: false },
      ];

  return (
    <div
      className="absolute left-[451px] top-[365px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <OffsetShadow main={{ left: 0, top: 0, width: 653, height: 205.93 }}>
        <p
          className="absolute text-center font-serif text-[36px] leading-[110%] tracking-[-0.02em] text-black"
          style={figmaStyle({ left: 26, top: 0, width: 600, height: 69.5 })}
        >
          Context ready incident handoffs
        </p>
        {detailed && (
          <>
            <p className="absolute text-xs font-semibold tracking-[0.08em]" style={figmaStyle({ left: 130, top: 77, width: 168, height: 21 })}>8:26 UTC</p>
            <p className="absolute text-xs font-semibold tracking-[0.08em]" style={figmaStyle({ left: 356, top: 77, width: 169, height: 21 })}>TBD</p>
            <div className="absolute bg-black" style={figmaStyle({ left: 129, top: 98, width: 168, height: 2 })} />
            
          </>
        )}
        {people.map((p) => (
          <div key={p.name} className="absolute" style={figmaStyle({ left: p.left, top: p.top, width: 59, height: 76 })}>
            {p.outer && (
              <div className="absolute size-[59px] rounded-full border-2 border-[#101928] bg-[#DCEDFD]" />
            )}
            <motion.div
              className="absolute flex size-[51px] items-center justify-center rounded-full border border-[#101928] font-serif text-[36px]"
              style={{ left: 4, top: 4, background: p.ring }}
              animate={{ scale: detailed ? 1.05 : 1 }}
              transition={{ duration: motionDuration, ease: motionEase }}
            >
              {p.letter}
            </motion.div>
            <p className="absolute w-full text-center text-xs font-semibold tracking-[0.08em]" style={{ top: 58 }}>
              {p.name}
            </p>
          </div>
        ))}
        {detailed && (
          <FigmaBox left={182} top={122} width={119} height={71} className="border border-[#101928] bg-[#E5E7EB]">
            <p className="px-2 pt-1 text-xs font-light leading-[150%]">Handoff Note</p>
            <div className="mx-2 mt-1 border-t border-black/50" />
            <FigmaImage src={assets.bento.skeleton} left={11} top={36} width={97} height={23} objectFit="contain" />
          </FigmaBox>
        )}
      </OffsetShadow>
    </div>
  );
}

function StatsBlock() {
  const stats = [
    { value: "90%+", body: "of recordable incidents fail to have a detailed post-mortem report", left: 59 },
    { value: "6000+", body: "businesses running globally on our infrastructure", left: 333 },
    { value: "5.2M", body: "incidents and counting analyzed since 2019", left: 607 },
    { value: "38%", body: "faster MTTR for teams using Relay", left: 881 },
  ];
  return (
    <div className="absolute left-0 top-[1040px] h-[219px] w-full">
      <FigmaBox
        left={163}
        top={0}
        width={1114}
        height={219}
        className="rounded-2xl border border-[#101928] bg-[rgba(192,224,253,0.1)] opacity-50 shadow-[0_32px_70px_rgba(0,0,0,0.06)] backdrop-blur-[25px]"
      />
      {stats.map((s) => (
        <div
          key={s.value}
          className="absolute text-center font-serif text-[48px] leading-[110%] tracking-[-0.02em] text-[#101928]"
          style={figmaStyle({ left: s.left, top: 52, width: 174, height: 116 })}
        >
          <p>{s.value}</p>
          <p className="mt-2 font-sans text-base font-normal leading-[150%]">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function EnterpriseBlock() {
  const tiles = [
    { left: 162, top: 1488 },
    { left: 445, top: 1488 },
    { left: 728, top: 1488 },
    { left: 1011, top: 1488 },
    { left: 162, top: 1771 },
    { left: 445, top: 1771 },
    { left: 728, top: 1771 },
    { left: 1011, top: 1771 },
  ];
  return (
    <>
      {tiles.map((t, i) => (
        <FigmaBox
          key={i}
          left={t.left}
          top={t.top}
          width={267}
          height={267}
          className="border-2 border-[#101928] bg-[#C0E0FD]"
        />
      ))}
      <FigmaBox
        left={359}
        top={1584}
        width={722}
        height={76}
        className="rounded-2xl border-2 border-[#101928] bg-[#DCEDFD]"
      />
      <p
        className="absolute text-center font-serif text-[48px] leading-[115%] tracking-[-0.015em] text-[#101928]"
        style={figmaStyle({ left: 367, top: 1573, width: 706, height: 133 })}
      >
        Enterprise solutions that fit <em className="italic">your system</em>
      </p>
    </>
  );
}
