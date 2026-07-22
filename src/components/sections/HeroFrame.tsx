import { FigmaImage } from "@/components/design/FigmaImage";
import { FigmaBox, figmaStyle } from "@/components/design/FigmaBox";
import { assets } from "@/lib/assets";

const nav = [
  { label: "Company", left: 390 },
  { label: "Products", left: 505 },
  { label: "Solutions", left: 616 },
  { label: "FAQ", left: 730 },
] as const;

const logos = [
  { src: assets.logos.google, left: 90, w: 147.81 },
  { src: assets.logos.aws, left: 312.81, w: 75 },
  { src: assets.logos.meta, left: 462.81, w: 75.26 },
  { src: assets.logos.roblox, left: 613.07, w: 49.85 },
  { src: assets.logos.stripe, left: 737.92, w: 120.05 },
  { src: assets.logos.goldman, left: 932.97, w: 50 },
  { src: assets.logos.cursor, left: 1057.97, w: 50 },
  { src: assets.logos.ramp, left: 1182.97, w: 155.9 },
  { src: assets.logos.github, left: 1413.88, w: 51 },
] as const;

export function HeroFrame() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #215DD4 0%, #3F90F2 47.6%, #63B0F7 69.23%, #EFF7FF 88.28%)",
        }}
      />
      <FigmaImage
        src={assets.topRightCloud}
        left={786}
        top={11}
        width={722}
        height={406}
        opacity={0.25}
      />
      <FigmaImage
        src={assets.topLeftCloud}
        left={0}
        top={135}
        width={407.11}
        height={229}
        opacity={0.4}
      />
      <FigmaImage
        src={assets.bigBottomCloud}
        left={229}
        top={512}
        width={1368}
        height={506}
        opacity={0.4}
      />

      {/* Hotbar */}
      <FigmaBox
        left={163}
        top={50}
        width={1114}
        height={77}
        className="rounded-2xl border border-[#101928] bg-[#EFF7FF]"
      />
      <FigmaImage
        src={assets.relayLogo}
        left={204}
        top={71}
        width={105}
        height={35}
        objectFit="contain"
      />
      {nav.map((item) => (
        <p
          key={item.label}
          className="absolute flex items-center text-center text-base font-semibold text-[#101928]"
          style={figmaStyle({ left: item.left, top: 81, width: 80, height: 15 })}
        >
          {item.label}
        </p>
      ))}
      <FigmaBox
        left={957}
        top={73}
        width={93}
        height={30.8}
        className="flex items-center justify-center rounded-lg border border-[#101928] bg-[#EFF7FF] text-base font-semibold text-[#3077E8]"
      >
        Sign Up
      </FigmaBox>
      <FigmaBox
        left={1075.5}
        top={73}
        width={155}
        height={30.8}
        className="flex items-center justify-center rounded-lg border border-[#101928] bg-[#3F90F2] text-base font-semibold text-[#EFF7FF]"
      >
        Request access
      </FigmaBox>

      {/* Hero copy */}
      <h1
        className="absolute font-serif text-[48px] leading-[110%] tracking-[-0.02em] text-[#EFF7FF]"
        style={figmaStyle({ left: 277, top: 321, width: 660, height: 149 })}
      >
        Incident management <em className="italic">without</em> the chaos.{" "}
        <span className="text-[#63B0F7]">
          Explore solutions that put your business one step ahead.
        </span>
      </h1>
      <FigmaBox
        left={277}
        top={528}
        width={155}
        height={40}
        className="flex items-center justify-center rounded-lg border border-[#101928] bg-[#3F90F2] text-base font-semibold text-[#EFF7FF]"
      >
        Request access
      </FigmaBox>
      <FigmaBox
        left={458}
        top={528}
        width={120}
        height={40}
        className="flex items-center justify-center rounded-lg border border-[#101928] bg-[#EFF7FF] text-base font-semibold text-[#3F90F2]"
      >
        Learn More
      </FigmaBox>

      {/* Incident widget */}
      <FigmaBox left={853.99} top={479} width={376.01} height={190} className="border-2 border-[#101928] bg-[#3F90F2]" />
      <FigmaBox left={843} top={470} width={376.01} height={190} className="border-2 border-[#101928] bg-[#EFF7FF]">
        <FigmaBox left={1} top={1} width={374} height={38} className="border border-[#101928] bg-[#EFF7FF] px-4 text-sm font-light leading-[150%] text-black">
          INC 2417 · Payments gateway degraded
        </FigmaBox>
        <div className="absolute left-[5px] top-[42px] flex w-[366px] items-center gap-2 px-2">
          <div className="h-px w-[28px] bg-black" />
          <p className="text-xs font-semibold tracking-[0.08em]">
            Timeline <span className="font-normal">· US-EAST 1</span>
          </p>
          <div className="ml-auto h-px flex-1 bg-black" />
        </div>
        <WidgetRows />
      </FigmaBox>

      {/* Logos */}
      <div className="absolute left-[-57px] top-[904px] h-[120px] w-[1554px]">
        {logos.map((logo) => (
          <FigmaImage
            key={logo.src}
            src={logo.src}
            left={logo.left}
            top={19}
            width={logo.w}
            height={50}
            objectFit="contain"
          />
        ))}
      </div>
    </>
  );
}

function WidgetRows() {
  const rows = [
    { t: "02:14:03", m: "Alert — gateway p99 > 1.8s", b: "D", l: "Datadog", c: "#FFC9C9" },
    { t: "02:14:41", m: "Triage opened", b: "A", l: "aria.kim", c: "#BBF7D0" },
    { t: "02:15:16", m: "On-call engaged · #inc-2417", b: "M", l: "milo.sato", c: "#C0E0FD" },
    { t: "02:18:52", m: "Mitigation deployed", b: "M", l: "milo.sato", c: "#C0E0FD" },
    { t: "02:14:03", m: "Incident resolved · 8m27s", b: "R", l: "Relay", c: "#3F90F2" },
  ];
  const tops = [536, 558, 580, 603, 625];
  return (
    <>
      {rows.map((row, i) => (
        <div
          key={`${row.t}-${i}`}
          className="absolute grid items-center text-xs font-semibold tracking-[0.08em] text-black"
          style={{
            left: 20,
            top: tops[i] - 470,
            width: 346,
            height: 22,
            gridTemplateColumns: "59px 1fr auto",
            gap: 8,
          }}
        >
          <span>{row.t}</span>
          <span className="font-semibold">{row.m}</span>
          <span className="flex items-center gap-1 text-[8px] font-light">
            <span
              className="inline-flex size-4 items-center justify-center rounded-full border border-[#101928] text-[10px] font-semibold"
              style={{ background: row.c }}
            >
              {row.b}
            </span>
            {row.l}
          </span>
        </div>
      ))}
    </>
  );
}
