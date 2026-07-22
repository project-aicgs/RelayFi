"use client";

import { useState } from "react";
import { HandoffCard } from "@/components/bento/HandoffCard";
import { InDepthCard } from "@/components/bento/InDepthCard";
import { LifecycleCard } from "@/components/bento/LifecycleCard";
import { PostMortemCard } from "@/components/bento/PostMortemCard";
import { useSectionInView } from "@/hooks/useSectionInView";
import { resolveBentoState, type BentoVisualState } from "@/lib/bento-states";

type CardId = "inDepth" | "postMortem" | "lifecycle" | "handoff";

export function BentoSection() {
  const { ref, active: sectionActive } = useSectionInView(0.3);
  const [hovered, setHovered] = useState<CardId | null>(null);

  const cardState = (id: CardId): BentoVisualState =>
    resolveBentoState(sectionActive, hovered === id);

  return (
    <section
      ref={ref}
      id="products"
      className="relative mx-auto w-full max-w-[1114px] px-4 py-16 sm:px-6 lg:px-0 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)_minmax(0,1.35fr)] lg:grid-rows-[auto_auto] lg:gap-x-5 lg:gap-y-5">

        <div
          className="lg:row-span-2"
          onMouseEnter={() => setHovered("inDepth")}
          onMouseLeave={() => setHovered(null)}
        >
          <InDepthCard
            visualState={cardState("inDepth")}
            expanded={hovered === "inDepth" || sectionActive}
          />
        </div>
        <div
          onMouseEnter={() => setHovered("postMortem")}
          onMouseLeave={() => setHovered(null)}
        >
          <PostMortemCard
            visualState={cardState("postMortem")}
            expanded={hovered === "postMortem"}
          />
        </div>
        <div
          onMouseEnter={() => setHovered("lifecycle")}
          onMouseLeave={() => setHovered(null)}
        >
          <LifecycleCard
            visualState={cardState("lifecycle")}
            expanded={hovered === "lifecycle"}
          />
        </div>
        <div
          className="md:col-span-2 lg:col-span-2"
          onMouseEnter={() => setHovered("handoff")}
          onMouseLeave={() => setHovered(null)}
        >
          <HandoffCard
            visualState={cardState("handoff")}
            expanded={hovered === "handoff" || sectionActive}
          />
        </div>
      </div>
    </section>
  );
}
