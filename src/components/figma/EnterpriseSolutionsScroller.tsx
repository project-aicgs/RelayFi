"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { motionEase } from "@/lib/tokens";

const SLIDE_W = 1113;
const AUTO_MS = 8000;
const TRANSITION_S = 0.75;

type Slide = {
  id: string;
  nodeId: string;
  image: string;
  imageClass: string;
  quote: string;
  name: string;
  role: string;
};

const slides: Slide[] = [
  {
    id: "christian",
    nodeId: "380:34",
    image: "/figma/imgEnterpriseChristianMain.png",
    imageClass: "absolute inset-0 max-w-none object-cover object-[center_30%] size-full",
    quote:
      "“Thanks to Relay, everything from start to finish of our incident management is in one place. It is such a game changer.”",
    name: "Christian Mariano",
    role: "Data Engineer, SpaceX",
  },
  {
    id: "allison",
    nodeId: "380:52",
    image: "/figma/imgEnterpriseAllison.png",
    imageClass:
      "absolute h-full left-[-17.5%] max-w-none top-[0.09%] w-[152.12%]",
    quote:
      "“We went from managing 10 incidents a week to 200, and nothing fell through the cracks.”",
    name: "Allison Liu",
    role: "CTO, Technical Staff, MedAI",
  },
  {
    id: "david",
    nodeId: "380:86",
    image: "/figma/imgEnterpriseDavid.png",
    imageClass: "absolute inset-0 max-w-none object-cover size-full",
    quote:
      "“We used to dread post-mortems because writing them took longer than the incident itself. Relay just does it.”",
    name: "David Stocheberg",
    role: "Project Manager, Meta",
  },
];

/** Fixed overlay — stays put while slides scroll. Figma EllipseScrollers (51×15). */
function CarouselDots({ active }: { active: number }) {
  const positions =
    active === 0
      ? [
          { x: 0, y: 0, size: 15 },
          { x: 25, y: 3.5, size: 8 },
          { x: 43, y: 3.5, size: 8 },
        ]
      : active === 1
        ? [
            { x: 0, y: 3.5, size: 8 },
            { x: 18, y: 0, size: 15 },
            { x: 43, y: 3.5, size: 8 },
          ]
        : [
            { x: 0, y: 3.5, size: 8 },
            { x: 18, y: 3.5, size: 8 },
            { x: 36, y: 0, size: 15 },
          ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[517px] top-[525px] z-30 h-[30.8px] w-[77.5px]"
      data-name="CarouselScroller"
    >
      <div className="absolute inset-0 rounded-[8px] border border-[var(--raven-900,#101928)] bg-white" />
      <div className="absolute left-[13px] top-[8px] h-[15px] w-[51px]">
        {positions.map((dot, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              backgroundColor:
                i === active
                  ? "var(--raven-900, #101928)"
                  : "rgba(16, 25, 40, 0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div
      className="relative h-full w-full"
      data-node-id={slide.nodeId}
      data-name={slide.id}
    >
      <div
        aria-hidden
        className="absolute left-[10px] top-[10px] h-[581px] w-[1103px] border-2 border-solid border-[var(--raven-900,#101928)] bg-[var(--azure-radiance-500,#3f90f2)]"
        data-name="BlueBGRect"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 h-[581px] w-[1103px] border-2 border-solid border-[var(--raven-900,#101928)] bg-[var(--azure-radiance-50,#eff7ff)]"
        data-name="WhiteBGRect"
      />

      <div
        className="absolute left-0 top-0 h-[581px] w-[679px] overflow-hidden border-2 border-solid border-[var(--raven-900,#101928)]"
        data-name="ChristianImage"
      >
        <img
          alt=""
          className={slide.imageClass}
          src={slide.image}
          draggable={false}
        />
      </div>

      <div
        className="absolute left-[734px] top-[118px] w-[274px] font-serif text-[36px] leading-[1.15] tracking-[-0.54px] text-[color:var(--raven-900,#101928)]"
        data-name="Quote"
      >
        <p>{slide.quote}</p>
      </div>

      <div
        className="absolute left-[734px] top-[421px] w-[360px] font-sans text-[20px] leading-[1.45] text-[color:var(--raven-900,#101928)]"
        data-name="Attribution"
      >
        <p className="font-bold">{slide.name}</p>
        <p className="font-normal">{slide.role}</p>
      </div>
    </div>
  );
}

export function EnterpriseSolutionsScroller() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    // Loose trigger: scaled DesignCanvas + high threshold was delaying / flickering
    // inView, which kept resetting the interval before the first advance.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          return;
        }
        // Only stop once fully off-screen — avoids boundary flicker resets.
        if (entry.intersectionRatio === 0) setInView(false);
      },
      { threshold: [0, 0.05], rootMargin: "120px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || reduceMotion.current) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
    // Intentionally omit `index` — including it restarted the 8s clock on every
    // slide change / IO flicker and made the first rotation feel stuck.
  }, [inView, paused]);

  const duration = reduceMotion.current ? 0 : TRANSITION_S;

  return (
    <div
      ref={rootRef}
      className="absolute left-[calc(8.33%+44px)] top-[1477px] z-10"
      data-node-id="339:7"
      data-name="EnterpriseSolutions"
      style={{
        width: SLIDE_W,
        height: 591,
        overflow: "hidden",
        isolation: "isolate",
        contain: "paint",
        // Hard clip — ancestor DesignCanvas scale() can defeat overflow:hidden on transformed slides
        WebkitMaskImage: "linear-gradient(#000 0 0)",
        maskImage: "linear-gradient(#000 0 0)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {slides.map((slide, slideIndex) => (
        <motion.div
          key={slide.id}
          className="absolute left-0 top-0"
          style={{ width: SLIDE_W, height: 591 }}
          initial={false}
          animate={{ x: (slideIndex - index) * SLIDE_W }}
          transition={{ duration, ease: motionEase }}
        >
          <SlideCard slide={slide} />
        </motion.div>
      ))}

      {/* Fixed scroller chrome — does not move with slides */}
      <CarouselDots active={index} />
      <div className="absolute left-[517px] top-[525px] z-40 flex h-[30.8px] w-[77.5px] items-center justify-center gap-1">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Show testimonial from ${s.name}`}
            aria-current={i === index ? "true" : undefined}
            className="size-[18px] rounded-full"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        {slides[index].name}: {slides[index].quote}
      </span>
    </div>
  );
}
