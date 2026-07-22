"use client";

import type { ComponentProps } from "react";
import {
  BentoCardDimOverlay,
  BentoCardHitArea,
  BentoCardScaledFace,
  BentoGridProvider,
} from "@/components/figma/BentoGridInteraction";
import { HandoffBentoAvatars } from "@/components/figma/HandoffBentoAvatars";
import { HandoffBentoInteractive } from "@/components/figma/HandoffBentoInteractive";
import { LifecycleBentoChips } from "@/components/figma/LifecycleBentoChips";
import { EnterpriseSolutionsScroller } from "@/components/figma/EnterpriseSolutionsScroller";
import { HeroLogoMarquee } from "@/components/figma/HeroLogoMarquee";
import { InDepthBentoLayers } from "@/components/figma/InDepthBentoLayers";
import { LifecycleArc, LifecycleCrawlProvider } from "@/components/figma/LifecycleCrawlProvider";
import { PostMortemBentoInteractive } from "@/components/figma/PostMortemBentoInteractive";
import { StatisticsCountUp } from "@/components/figma/StatisticsCountUp";

const imgTopRightCloud = "/figma/imgTopRightCloud.png";
const imgBigBottomCloud = "/figma/imgBigBottomCloud.png";
const imgTopLeftCloud = "/figma/imgTopLeftCloud.png";
const imgRelaylogo2 = "/figma/imgRelaylogo2.png";
/** CSS stroke lines (Figma exports these as h-0 + 1px PNG). */
function FigmaLine({
  className,
  thickness = 1,
  dashed = false,
  ...rest
}: ComponentProps<"div"> & {
  thickness?: 0.25 | 1 | 2;
  dashed?: boolean;
}) {
  if (dashed) {
    return (
      <div
        aria-hidden
        className={`h-0 border-t-2 border-dashed border-[var(--raven-900,#101928)] ${className ?? ""}`}
        {...rest}
      />
    );
  }
  const h =
    thickness === 0.25 ? "h-[0.25px]" : thickness === 2 ? "h-[2px]" : "h-px";
  return (
    <div
      aria-hidden
      className={`${h} bg-[var(--raven-900,#101928)] ${className ?? ""}`}
      {...rest}
    />
  );
}

/** Avatar / badge circles from Figma fill + stroke tokens. */
function FigmaCircle({
  className,
  fill,
  stroke,
  strokeWidth = 2,
  ...rest
}: ComponentProps<"div"> & {
  fill: string;
  stroke: string;
  strokeWidth?: number;
}) {
  return (
    <div
      aria-hidden
      className={`rounded-full border-solid ${className ?? ""}`}
      style={{
        backgroundColor: fill,
        borderColor: stroke,
        borderWidth: strokeWidth,
      }}
      {...rest}
    />
  );
}

/** Dashboard card skeleton (node 225:906) — paths from Figma export SVG. */
function DashboardSkeletonLines() {
  return (
    <svg
      className="block size-full"
      viewBox="0 0 185 51"
      fill="none"
      aria-hidden
      data-name="Skeleton Lines"
    >
      <g fill="#9BA4B0">
        <path d="M102 0C103.105 0 104 0.895431 104 2C104 3.10457 103.105 4 102 4H2C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0H102Z" />
        <path d="M78.2363 9.01562C79.2294 9.13264 80 9.97546 80 11C80 12.0245 79.2294 12.8663 78.2363 12.9834V13H1.76367V12.9941C1.73739 12.9956 1.71115 13 1.68457 13C0.754407 13 0 12.1046 0 11C0 9.89543 0.754407 9 1.68457 9C1.71114 9.00001 1.73741 9.00343 1.76367 9.00488V9H78.2363V9.01562Z" />
        <path d="M182.906 47.0049C182.937 47.0034 182.969 47 183 47C184.105 47 185 47.8954 185 49C185 50.1046 184.105 51 183 51C182.969 51 182.937 50.9956 182.906 50.9941V51H92.0938V50.9941C92.0626 50.9956 92.0315 51 92 51C90.8954 51 90 50.1046 90 49C90 47.8954 90.8954 47 92 47C92.0315 47 92.0626 47.0034 92.0938 47.0049V47H182.906V47.0049Z" />
        <path d="M145.082 28.0039C146.149 28.047 147 28.9229 147 30C147 31.077 146.149 31.952 145.082 31.9951V32H68.918V31.9951C67.8515 31.952 67 31.077 67 30C67 28.9229 67.8515 28.047 68.918 28.0039V28H145.082V28.0039Z" />
        <path d="M61 28C62.1046 28 63 28.8954 63 30C63 31.1046 62.1046 32 61 32H2C0.895431 32 0 31.1046 0 30C0 28.8954 0.895431 28 2 28H61Z" />
        <path d="M19.0811 37.0039C20.148 37.0465 21 37.9226 21 39C21 40.0774 20.148 40.9525 19.0811 40.9951V41H2.08105V40.9951C2.05413 40.9962 2.02719 41 2 41C0.895431 41 0 40.1046 0 39C0 37.8954 0.895431 37 2 37C2.02718 37 2.05414 37.0028 2.08105 37.0039V37H19.0811V37.0039Z" />
        <path d="M61 37C62.1046 37 63 37.8954 63 39C63 40.1046 62.1046 41 61 41H43C41.8954 41 41 40.1046 41 39C41 37.8954 41.8954 37 43 37H61Z" />
        <path d="M36 37C37.1046 37 38 37.8954 38 39C38 40.1046 37.1046 41 36 41H26C24.8954 41 24 40.1046 24 39C24 37.8954 24.8954 37 26 37H36Z" />
        <path d="M151 0C152.105 0 153 0.895431 153 2C153 3.10457 152.105 4 151 4H128C126.895 4 126 3.10457 126 2C126 0.895431 126.895 0 128 0H151Z" />
        <path d="M122 0C123.105 0 124 0.895431 124 2C124 3.10457 123.105 4 122 4H112C110.895 4 110 3.10457 110 2C110 0.895431 110.895 0 112 0H122Z" />
        <path d="M82 47C83.1046 47 84 47.8954 84 49C84 50.1046 83.1046 51 82 51H72C70.8954 51 70 50.1046 70 49C70 47.8954 70.8954 47 72 47H82Z" />
        <path d="M183.143 0.00683594C184.181 0.0800124 185 0.943413 185 2C185 3.05656 184.181 3.91898 183.143 3.99219V4H160.143V3.99219C160.095 3.99551 160.048 4 160 4C158.895 4 158 3.10457 158 2C158 0.895431 158.895 0 160 0C160.048 0 160.095 0.00351281 160.143 0.00683594V0H183.143V0.00683594Z" />
        <path d="M128.751 37.0166C128.833 37.0065 128.916 37 129 37C130.105 37 131 37.8954 131 39C131 40.1046 130.105 41 129 41C128.916 41 128.833 40.9926 128.751 40.9824V41H68.7236V40.9775C67.7501 40.8427 67 40.0106 67 39C67 37.9893 67.75 37.1562 68.7236 37.0215V37H128.751V37.0166Z" />
        <path d="M138 41L137.796 40.9893C136.787 40.887 136 40.0357 136 39C136 37.9644 136.787 37.113 137.796 37.0107L138 37L183 37L183.204 37.0107C184.213 37.113 185 37.9643 185 39C185 40.1046 184.105 41 183 41L138 41Z" />
        <path d="M153 32L152.796 31.9893C151.787 31.887 151 31.0357 151 30C151 28.9644 151.787 28.113 152.796 28.0107L153 28L183 28L183.204 28.0107C184.213 28.113 185 28.9643 185 30C185 31.1046 184.105 32 183 32L153 32Z" />
        <path d="M183.096 9.00488C184.156 9.05489 185 9.92756 185 11C185 12.0724 184.156 12.9441 183.096 12.9941V13H87.9043V12.9941C86.8442 12.9441 86 12.0724 86 11C86 9.92756 86.8442 9.05489 87.9043 9.00488V9H183.096V9.00488Z" />
        <path d="M63 47.0713C63.1324 47.0261 63.2713 47 63.415 47C64.2904 47.0003 65 47.8956 65 49C65 50.1044 64.2904 50.9997 63.415 51C63.2712 51 63.1325 50.973 63 50.9277V51H2C0.895431 51 0 50.1046 0 49C0 47.8954 0.895431 47 2 47H63V47.0713Z" />
      </g>
    </svg>
  );
}

export function MainOuterFrame() {
  return (
    <div className="relative size-full font-sans antialiased" data-node-id="108:3871" data-name="Main Outer Frame">
      <div className="absolute contents left-0 top-0" data-node-id="108:3870" data-name="Inner Frames">
        <div className="absolute h-[1024px] left-0 top-0 w-[1440px]" data-node-id="32:4">
          <div className="absolute h-[1024px] left-0 top-0 w-[1440px]" data-node-id="35:8" style={{ backgroundImage: "linear-gradient(180deg, var(--azure-radiance-700,rgb(33, 93, 212)) 0%, var(--azure-radiance-500,rgb(63, 144, 242)) 47.596%, var(--azure-radiance-400,rgb(99, 176, 247)) 69.231%, var(--azure-radiance-50,rgb(239, 247, 255)) 88.283%)" }} data-name="Main BG" />
          <div className="absolute h-[406px] left-[calc(50%+66px)] top-[11px] w-[722px]" data-node-id="61:183" data-name="Top Right Cloud">
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgTopRightCloud} />
          </div>
          <p
            className="[word-break:break-word] absolute z-[100] font-serif h-[149px] leading-[0] left-[calc(41.67%-323px)] not-italic text-[48px] text-[color:var(--azure-radiance-200,#c0e0fd)] top-[321px] tracking-[-0.96px] w-[660px]"
            data-node-id="35:5"
          >
            <span className="leading-[1.1] text-[#eff7ff]">{`Incident management `}</span>
            <span className="font-serif italic leading-[1.1] text-[#eff7ff]">without</span>
            <span className="leading-[1.1] text-[#eff7ff]">{` the chaos.`}</span>
            <span className="leading-[1.1]">{` `}</span>
            <span className="leading-[1.1] text-[color:var(--azure-radiance-300,#95cdfb)]">
              Explore solutions that put your business one step ahead.
            </span>
          </p>
          <div className="absolute h-[506px] left-[calc(8.33%+109px)] top-[512px] w-[1368px]" data-node-id="90:223" data-name="Big Bottom Cloud">
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgBigBottomCloud} />
          </div>
          <div className="absolute h-[229px] left-0 top-[135px] w-[407.111px]" data-node-id="77:221" data-name="Top Left Cloud">
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgTopLeftCloud} />
          </div>
          <div className="-translate-x-1/2 absolute contents left-1/2 top-[50px]" data-node-id="72:209" data-name="Hotbar Menu">
            <div className="-translate-x-1/2 absolute bg-[var(--azure-radiance-50,#eff7ff)] border-[0.5px] border-[var(--raven-900,#101928)] border-solid h-[77px] left-1/2 rounded-[16px] top-[50px] w-[1114px]" data-node-id="72:203" data-name="Menu Outline Shape" />
            <div className="[word-break:break-word] absolute contents font-sans font-semibold leading-[0] left-[calc(25%+30px)] not-italic text-[16px] text-[color:var(--raven-900,#101928)] text-center top-[81px]" data-node-id="72:208" data-name="Button Texts">
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(25%+67px)] top-[88.5px] min-w-[74px] overflow-visible"
                data-node-id="72:204"
              >
                <p className="whitespace-nowrap font-sans text-[16px] font-semibold leading-[1.5] text-[color:var(--raven-900,#101928)]">
                  Company
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-[calc(33.33%+60px)] top-[88.5px] w-[70px]" data-node-id="72:205">
                <p className="leading-[1.5]">Products</p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-[calc(41.67%+52.5px)] top-[88.5px] w-[73px]" data-node-id="72:206">
                <p className="leading-[1.5]">Solutions</p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-[calc(50%+26px)] top-[88.5px] w-[32px]" data-node-id="72:207">
                <p className="leading-[1.5]">FAQ</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute contents left-[calc(66.67%-3px)] top-[calc(50%-423.6px)]" data-node-id="75:216" data-name="Hotbar Buttons">
              <div className="-translate-y-1/2 absolute contents left-[calc(75%-4.5px)] top-[calc(50%-423.6px)]" data-node-id="75:219" data-name="Demo Button">
                <div className="-translate-y-1/2 absolute bg-[var(--azure-radiance-500,#3f90f2)] border border-[var(--raven-900,#101928)] border-solid h-[30.8px] left-[calc(75%-4.5px)] rounded-[8px] top-[calc(50%-423.6px)] w-[155px]" data-node-id="75:211" data-name="Demo BG Button" />
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[30.8px] justify-center leading-[0] left-[calc(79.17%+13px)] not-italic text-[16px] text-[color:var(--azure-radiance-50,#eff7ff)] text-center top-[calc(50%-423.6px)] w-[123px]" data-node-id="75:214">
                  <p className="leading-[1.5]">Request access</p>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute contents left-[calc(66.67%-3px)] top-[calc(50%-423.6px)]" data-node-id="75:217" data-name="Learn Button">
                <div className="-translate-y-1/2 absolute bg-[var(--azure-radiance-50,#eff7ff)] border border-[var(--raven-900,#101928)] border-solid h-[30.8px] left-[calc(66.67%-3px)] rounded-[8px] top-[calc(50%-423.6px)] w-[93px]" data-node-id="75:212" data-name="Learn More Button BG" />
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[30.8px] justify-center leading-[0] left-[calc(70.83%-16.5px)] not-italic text-[16px] text-[color:var(--azure-radiance-600,#3077e8)] text-center top-[calc(50%-423.6px)] w-[61px]" data-node-id="75:215">
                  <p className="leading-[1.5]">Sign Up</p>
                </div>
              </div>
            </div>
            <div className="absolute h-[35px] left-[calc(8.33%+84px)] top-[71px] w-[105px]" data-node-id="72:210" data-name="relaylogo 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[0.38%] max-w-none top-0 w-[99.23%]" src={imgRelaylogo2} />
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute contents left-[calc(16.67%+37px)] top-[calc(50%+36px)]" data-node-id="90:224" data-name="Demo Button">
            <div className="-translate-y-1/2 absolute bg-[var(--azure-radiance-500,#3f90f2)] border border-[var(--raven-900,#101928)] border-solid h-[40px] left-[calc(16.67%+37px)] rounded-[8px] top-[calc(50%+36px)] w-[155px]" data-node-id="90:225" data-name="Demo BG Button" />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[40px] justify-center leading-[0] left-[calc(20.83%+54.5px)] not-italic text-[16px] text-[color:var(--azure-radiance-50,#eff7ff)] text-center top-[calc(50%+36px)] w-[123px]" data-node-id="90:226">
              <p className="leading-[1.5]">Request access</p>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute contents left-[calc(25%+98px)] top-[calc(50%+36px)]" data-node-id="114:3877" data-name="Learn More">
            <div className="-translate-y-1/2 absolute bg-[var(--azure-radiance-50,#eff7ff)] border border-[var(--raven-900,#101928)] border-solid h-[40px] left-[calc(25%+98px)] rounded-[8px] top-[calc(50%+36px)] w-[120px]" data-node-id="114:3878" data-name="Demo BG Button" />
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center font-sans font-semibold h-[40px] left-[calc(37.5%-22px)] not-italic text-[16px] text-[color:var(--azure-radiance-500,#3f90f2)] top-[calc(50%+36px)] w-[120px] overflow-visible"
              data-node-id="114:3879"
            >
              <p className="whitespace-nowrap leading-[1.5]">Learn More</p>
            </div>
          </div>
          <HeroLogoMarquee />
          <div className="absolute contents left-[calc(58.33%+3px)] top-[470px]" data-node-id="114:3883" data-name="Frontpage Widget">
            <div className="absolute bg-[var(--azure-radiance-500,#3f90f2)] border-2 border-[var(--raven-900,#101928)] border-solid h-[190px] left-[calc(58.33%+13.99px)] top-[479px] w-[376.006px]" data-node-id="114:3882" data-name="BG Rect" />
            <div className="absolute bg-[var(--azure-radiance-50,#eff7ff)] border-2 border-[var(--raven-900,#101928)] border-solid h-[190px] left-[calc(58.33%+3px)] top-[470px] w-[376.006px]" data-node-id="114:3884" data-name="Main Rect" />
            <div className="absolute contents left-[calc(58.33%+4px)] top-[471px]" data-node-id="114:3891" data-name="Payments degraded text">
              <div className="absolute bg-[var(--azure-radiance-50,#eff7ff)] border border-[var(--raven-900,#101928)] border-solid h-[38px] left-[calc(58.33%+4px)] top-[471px] w-[374px]" data-node-id="114:3887" />
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-light h-[37px] justify-center leading-[0] left-[calc(70.83%-156px)] not-italic text-[14px] text-black top-[490.5px] w-[299.574px]" data-node-id="114:3888">
                <p className="leading-[1.5]">INC 2417 · Payments gateway degraded</p>
              </div>
            </div>
            <div className="absolute contents left-[calc(58.33%+8px)] top-[512px]" data-node-id="114:3896" data-name="Timeline Text">
              <FigmaLine
                className="absolute left-[calc(58.33%+8px)] top-[521px] w-[28px]"
                thickness={0.25}
                data-node-id="114:3893"
              />
              <FigmaLine
                className="absolute left-[calc(66.67%+62px)] top-[521px] w-[192px]"
                thickness={0.25}
                data-node-id="114:3894"
              />
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-semibold h-[17px] justify-center leading-[0] left-[calc(58.33%+40px)] not-italic text-[12px] text-black top-[520.5px] tracking-[0.96px] w-[141px]" data-node-id="114:3892">
                <p>
                  <span className="leading-none">{`Timeline `}</span>
                  <span className="[word-break:break-word] font-sans font-normal leading-none not-italic">· US-EAST 1</span>
                </p>
              </div>
            </div>
            <div className="absolute contents left-[calc(58.33%+23px)] top-[536px]" data-node-id="114:3932" data-name="Issue Body Text">
              <div className="absolute content-stretch flex flex-col items-start left-[calc(58.33%+23px)] top-[536px] w-[344px]" data-node-id="114:3970">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="114:3905" data-name="First Line">
                  <div className="col-1 flex items-center font-sans font-semibold h-[22px] ml-0 mt-0 not-italic relative row-1 shrink-0 overflow-visible text-[12px] text-black tracking-[0.96px] w-[63px]" data-node-id="114:3898">
                    <p className="whitespace-nowrap leading-none">02:14:03</p>
                  </div>
                  <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold h-[22px] justify-center ml-[82px] mt-0 not-italic relative row-1 text-[12px] text-black tracking-[0.96px] w-[184px]" data-node-id="114:3899">
                    <p className="leading-none">{`Alert — gateway p99 > 1.8s`}</p>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[293px] mt-[3px] place-items-start relative row-1" data-node-id="114:3951" data-name="DataDog">
                    <FigmaCircle
                      className="col-1 ml-0 mt-0 relative row-1 size-[16px]"
                      fill="#ffc9c9"
                      stroke="#101928"
                      strokeWidth={0.5}
                      data-node-id="114:3933"
                    />
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold h-[16px] justify-center ml-0 mt-0 not-italic relative row-1 text-[12px] text-[color:var(--raven-900,#101928)] text-center tracking-[0.96px] w-[17px]" data-node-id="114:3950">
                      <p className="leading-none">D</p>
                    </div>
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-light h-[16px] justify-center ml-[19px] mt-0 not-italic relative row-1 text-[8px] text-[color:var(--raven-900,#101928)] text-center w-[32px]" data-node-id="114:3952">
                      <p className="leading-none">Datadog</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[calc(58.33%+23px)] top-[558px] w-[346px]" data-node-id="114:3973">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="114:3904" data-name="Second Line">
                  <div className="col-1 flex items-center font-sans font-semibold h-[22px] ml-0 mt-0 not-italic relative row-1 shrink-0 overflow-visible text-[12px] text-black tracking-[0.96px] w-[63px]" data-node-id="114:3901">
                    <p className="whitespace-nowrap leading-none">02:14:41</p>
                  </div>
                  <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold h-[22px] justify-center ml-[82px] mt-0 not-italic relative row-1 text-[12px] text-black tracking-[0.96px] w-[184px]" data-node-id="114:3902">
                    <p className="leading-none">Triage opened</p>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[293px] mt-[3px] place-items-start relative row-1" data-node-id="114:3956" data-name="ariakim">
                    <FigmaCircle
                      className="col-1 ml-0 mt-0 relative row-1 size-[16px]"
                      fill="#bbf7d0"
                      stroke="#101928"
                      strokeWidth={0.5}
                      data-node-id="114:3946"
                      data-name="ariakim"
                    />
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold justify-center ml-0 mt-0 not-italic relative row-1 size-[16px] text-[12px] text-[color:var(--raven-900,#101928)] text-center tracking-[0.96px]" data-node-id="114:3960">
                      <p className="leading-none">A</p>
                    </div>
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-light h-[16px] justify-center ml-[19px] mt-0 not-italic relative row-1 text-[8px] text-[color:var(--raven-900,#101928)] text-center w-[34px]" data-node-id="114:3961">
                      <p className="leading-none">aria.kim</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[calc(58.33%+23px)] top-[603px] w-[346px]" data-node-id="114:3974">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="114:3918" data-name="Fourth Line">
                  <div className="col-1 flex items-center font-sans font-semibold h-[22px] ml-0 mt-0 not-italic relative row-1 shrink-0 overflow-visible text-[12px] text-black tracking-[0.96px] w-[63px]" data-node-id="114:3919">
                    <p className="whitespace-nowrap leading-none">02:18:52</p>
                  </div>
                  <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold h-[22px] justify-center ml-[82px] mt-0 not-italic relative row-1 text-[12px] text-black tracking-[0.96px] w-[231px]" data-node-id="114:3920">
                    <p className="leading-none">Mitigation deployed</p>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[293px] mt-[2px] place-items-start relative row-1" data-node-id="114:3955" data-name="milo2">
                    <FigmaCircle
                      className="col-1 ml-0 mt-0 relative row-1 size-[16px]"
                      fill="#c0e0fd"
                      stroke="#101928"
                      strokeWidth={0.5}
                      data-node-id="114:3944"
                      data-name="mila2"
                    />
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold justify-center ml-0 mt-0 not-italic relative row-1 size-[16px] text-[12px] text-[color:var(--raven-900,#101928)] text-center tracking-[0.96px]" data-node-id="114:3963">
                      <p className="leading-none">M</p>
                    </div>
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-light h-[16px] justify-center ml-[19px] mt-0 not-italic relative row-1 text-[8px] text-[color:var(--raven-900,#101928)] text-center w-[34px]" data-node-id="114:3964">
                      <p className="leading-none">milo.sato</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[calc(58.33%+23px)] top-[625px] w-[344px]" data-node-id="114:3975">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="114:3926" data-name="Last Line">
                  <div className="col-1 flex items-center font-sans font-semibold h-[22px] ml-0 mt-0 not-italic relative row-1 shrink-0 overflow-visible text-[12px] text-black tracking-[0.96px] w-[63px]" data-node-id="114:3927">
                    <p className="whitespace-nowrap leading-none">02:14:03</p>
                  </div>
                  <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold h-[22px] justify-center ml-[82px] mt-0 not-italic relative row-1 text-[12px] text-black tracking-[0.96px] w-[184px]" data-node-id="114:3928">
                    <p className="leading-none">Incident resolved · 8m27s</p>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[293px] mt-[2px] place-items-start relative row-1" data-node-id="114:3954" data-name="relay">
                    <FigmaCircle
                      className="col-1 ml-0 mt-0 relative row-1 size-[16px]"
                      fill="#3f90f2"
                      stroke="#101928"
                      strokeWidth={0.5}
                      data-node-id="114:3942"
                      data-name="Relay"
                    />
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold justify-center ml-0 mt-0 not-italic relative row-1 size-[16px] text-[12px] text-[color:var(--raven-900,#101928)] text-center tracking-[0.96px]" data-node-id="114:3966">
                      <p className="leading-none">R</p>
                    </div>
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-light h-[16px] justify-center ml-[19px] mt-0 not-italic relative row-1 text-[8px] text-[color:var(--raven-900,#101928)] text-center w-[32px]" data-node-id="114:3967">
                      <p className="leading-none">Relay</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[calc(58.33%+23px)] top-[580px] w-[346px]" data-node-id="114:3976">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="114:3922" data-name="Third Line">
                  <div className="col-1 flex items-center font-sans font-semibold h-[22px] ml-0 mt-0 not-italic relative row-1 shrink-0 overflow-visible text-[12px] text-black tracking-[0.96px] w-[63px]" data-node-id="114:3923">
                    <p className="whitespace-nowrap leading-none">02:15:16</p>
                  </div>
                  <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold h-[22px] justify-center ml-[82px] mt-0 not-italic relative row-1 text-[12px] text-black tracking-[0.96px] w-[189px]" data-node-id="114:3924">
                    <p className="leading-none">On-call engaged · #inc-2417</p>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[293px] mt-[3px] place-items-start relative row-1" data-node-id="114:3953" data-name="milo1">
                    <FigmaCircle
                      className="col-1 ml-0 mt-0 relative row-1 size-[16px]"
                      fill="#c0e0fd"
                      stroke="#101928"
                      strokeWidth={0.5}
                      data-node-id="114:3948"
                    />
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-semibold justify-center ml-0 mt-0 not-italic relative row-1 size-[16px] text-[12px] text-[color:var(--raven-900,#101928)] text-center tracking-[0.96px]" data-node-id="114:3957">
                      <p className="leading-none">M</p>
                    </div>
                    <div className="[word-break:break-word] col-1 flex flex-col font-sans font-light h-[16px] justify-center ml-[19px] mt-0 not-italic relative row-1 text-[8px] text-[color:var(--raven-900,#101928)] text-center w-[34px]" data-node-id="114:3958">
                      <p className="leading-none">milo.sato</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[3756.783px] left-0 top-[1018px] w-[1440px]" data-node-id="107:3859">
          <div className="absolute h-[3783px] left-0 top-0 w-[1440px]" data-node-id="90:230" style={{ backgroundImage: "linear-gradient(180deg, var(--azure-radiance-50,rgb(239, 247, 255)) 0%, var(--azure-radiance-400,rgb(99, 176, 247)) 25%, var(--azure-radiance-500,rgb(63, 144, 242)) 50%, var(--azure-radiance-700,rgb(33, 93, 212)) 100%), linear-gradient(90deg, rgb(239, 247, 255) 0%, rgb(239, 247, 255) 100%)" }} data-name="Azure/50 BG Continuation" />
          <BentoGridProvider>
          <div className="absolute contents left-[calc(8.33%+43px)] top-[114px]" data-node-id="114:3983" data-name="Bento Grid">
            <BentoCardHitArea id="lifecycle" />
            <BentoCardHitArea id="postMortem" />
            <BentoCardHitArea id="inDepth" />
            <BentoCardHitArea id="handoff" />
            <BentoCardDimOverlay id="lifecycle" />
            <BentoCardDimOverlay id="postMortem" />
            <BentoCardDimOverlay id="inDepth" />
            <BentoCardDimOverlay id="handoff" />
            <div className="absolute contents left-[calc(58.33%+62px)] top-[114px]" data-node-id="114:3982" data-name="Full Life Cycle">
              <BentoCardScaledFace id="lifecycle" className="absolute bg-[var(--azure-radiance-500,#3f90f2)] border-2 border-[var(--raven-900,#101928)] border-solid h-[335px] left-[calc(58.33%+72px)] top-[124px] w-[365px]" data-node-id="114:3876" data-name="BG" />
              <BentoCardScaledFace id="lifecycle" className="absolute bg-[var(--azure-radiance-50,#eff7ff)] border-2 border-[var(--raven-900,#101928)] border-solid h-[335px] left-[calc(58.33%+62px)] top-[114px] w-[365px]" data-node-id="132:4007" data-name="Main Rect" />
              <div className="[word-break:break-word] absolute bottom-[3385.28px] flex flex-col font-serif h-[175px] justify-center leading-[0] not-italic right-[calc(16.67%+197.5px)] text-[36px] text-[color:var(--raven-900,#101928)] text-center tracking-[-0.72px] translate-x-1/2 translate-y-1/2 w-[159px]" data-node-id="165:4535">
                <p className="leading-[1.1]">One software. Full life cycle.</p>
              </div>
              <LifecycleCrawlProvider>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(79.17%-55px)] top-[calc(50%-1647.67px)]" data-node-id="194:4897" data-name="Relay Graphic">
                <LifecycleArc variant={1} wrapperClassName="absolute h-[65px] left-[calc(66.67%+27px)] top-[166px] w-[101px]" />
                <LifecycleArc variant={2} wrapperClassName="absolute h-[64px] left-[calc(66.67%+27px)] top-[231px] w-[101px] -scale-y-100" />
                <LifecycleArc variant={3} wrapperClassName="absolute h-[22px] left-[calc(66.67%+27px)] top-[209px] w-[101px]" />
                <LifecycleArc variant={4} wrapperClassName="absolute h-[21px] left-[calc(66.67%+27px)] top-[231px] w-[101px] -scale-y-100" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(70.83%-60.5px)] top-[calc(50%-1647.89px)]" data-node-id="194:4843" data-name="Logo Box">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--raven-800,#1e2b38)] border-2 border-[var(--raven-900,#101928)] border-solid left-[calc(70.83%-60.5px)] rounded-[16px] size-[55px] top-[calc(50%-1647.89px)]" data-node-id="194:4842" data-name="logo container" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35px] left-[calc(70.83%-60.5px)] top-[calc(50%-1647.89px)] w-[31px]" data-node-id="194:4838" data-name="relaylogo 2">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[1.3%] max-w-none top-0 w-[336.11%]" src={imgRelaylogo2} />
                    </div>
                  </div>
                </div>
                <LifecycleBentoChips />

              </div>
              </LifecycleCrawlProvider>
            </div>
            <div className="absolute contents left-[calc(41.67%+14px)] top-[114px]" data-node-id="114:3984" data-name="AI Post Mortem">
              <BentoCardScaledFace id="postMortem" className="absolute bg-[var(--azure-radiance-500,#3f90f2)] border-2 border-[var(--raven-900,#101928)] border-solid h-[335.072px] left-[calc(41.67%+24px)] top-[124px] w-[258px]" data-node-id="114:3988" data-name="BG" />
              <BentoCardScaledFace id="postMortem" className="absolute bg-[var(--azure-radiance-50,#eff7ff)] border-2 border-[var(--raven-900,#101928)] border-solid h-[335.072px] left-[calc(41.67%+14px)] top-[114px] w-[258px]" data-node-id="132:4005" data-name="Main Rect" />
              <div className="-translate-x-1/2 absolute bg-[var(--azure-radiance-50,#eff7ff)] border-2 border-[var(--raven-900,#101928)] border-solid h-[187px] left-[calc(54.17%-36.5px)] top-[231px] w-[227px]" data-node-id="225:817" data-name="Dashboard BG" />
              <div className="absolute h-[51px] left-[calc(41.67%+51px)] top-[271px] w-[185px]" data-node-id="225:906" data-name="Skeleton Lines">
                <DashboardSkeletonLines />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-light h-[29px] justify-center leading-[0] left-[calc(54.17%-37px)] not-italic text-[14px] text-black text-center top-[245.5px] w-[226px]" data-node-id="225:818">
                <p className="leading-[1.5]">INC 2417 · Payments degraded</p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-serif h-[139px] justify-center leading-[0] left-[calc(41.67%+143px)] not-italic text-[36px] text-black text-center top-[183.5px] tracking-[-0.72px] w-[210px]" data-node-id="132:4009">
                <p className="leading-[1.1]">AI assisted post-mortem reporting</p>
              </div>
              <div className="absolute left-[calc(41.67%+14px)] top-[114px] h-[335px] w-[258px] overflow-hidden pointer-events-none">
                <PostMortemBentoInteractive />
              </div>
              <FigmaLine
                className="absolute left-[calc(41.67%+30px)] top-[260px] w-[226px]"
                thickness={1}
                data-node-id="225:820"
              />
            </div>
            <div className="absolute contents left-[calc(8.33%+43px)] top-[114px]" data-node-id="129:3990" data-name="In Depth">
              <BentoCardScaledFace id="inDepth" className="absolute bg-[var(--azure-radiance-500,#3f90f2)] border-2 border-[var(--raven-900,#101928)] border-solid h-[570.96px] left-[calc(8.33%+53px)] top-[124px] w-[421px]" data-node-id="129:3992" data-name="BG" />
              <BentoCardScaledFace id="inDepth" className="absolute bg-[var(--azure-radiance-50,#eff7ff)] border-2 border-[var(--raven-900,#101928)] border-solid h-[570.96px] left-[calc(8.33%+43px)] top-[114px] w-[421px]" data-node-id="132:4001" data-name="Main Rect" />
              <div className="pointer-events-none relative z-10 -translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-serif h-[175px] justify-center leading-[0] left-[calc(8.33%+169px)] not-italic text-[36px] text-black text-center top-[203.5px] tracking-[-0.72px] w-[210px]" data-node-id="161:4462">
                <p className="leading-[1.1]">In depth analysis at every level of your organization</p>
              </div>
              <div className="absolute left-[calc(8.33%+43px)] top-[114px] h-[570.96px] w-[421px] overflow-hidden">
                <InDepthBentoLayers />
              </div>
            </div>
            <div className="absolute contents left-[calc(41.67%+14px)] top-[479px]" data-node-id="129:3995" data-name="Bento Square 4">
              <BentoCardScaledFace id="handoff" className="absolute bg-[var(--azure-radiance-500,#3f90f2)] border-2 border-[var(--raven-900,#101928)] border-solid h-[205.93px] left-[calc(41.67%+24px)] top-[489.07px] w-[653px]" data-node-id="129:3996" data-name="BG" />
              <BentoCardScaledFace id="handoff" className="absolute bg-[var(--azure-radiance-50,#eff7ff)] border-2 border-[var(--raven-900,#101928)] border-solid h-[205.93px] left-[calc(41.67%+14px)] top-[479.07px] w-[653px]" data-node-id="132:4003" data-name="Main Rect" />
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-serif h-[69.5px] justify-center leading-[0] left-[calc(66.67%-19px)] not-italic text-[36px] text-black text-center top-[513.75px] tracking-[-0.72px] w-[600px]" data-node-id="231:1513">
                <p className="leading-[1.1]">Context ready incident handoffs</p>
              </div>
              <HandoffBentoAvatars />
              <HandoffBentoInteractive />
            </div>
          </div>
          </BentoGridProvider>
          <div className="-translate-x-1/2 absolute contents left-[calc(25%+14.08px)] top-[769px]" data-node-id="178:4663" data-name="Statistics Section">
            <div className="absolute flex h-[437.83px] items-center justify-center left-[calc(25%+70px)] top-[894px] w-[579.579px]">
              <div className="flex-none rotate-[-161.45deg]">
                <div className="blur-[1px] h-[289.281px] relative w-[514.277px]" data-node-id="171:4655" data-name="Top Left Cloud">
                  <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgTopLeftCloud} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[735.912px] items-center justify-center left-[calc(58.33%+3px)] top-[769px] w-[974.167px]">
              <div className="flex-none rotate-[-161.45deg]">
                <div className="blur-[1px] h-[486.228px] relative w-[864.405px]" data-node-id="178:4664" data-name="Top Left Cloud">
                  <img alt="" className="absolute inset-0 max-w-none object-cover opacity-40 pointer-events-none size-full" src={imgTopLeftCloud} />
                </div>
              </div>
            </div>
            <div className="absolute blur-[1px] h-[622px] left-[-1069px] top-[860px] w-[1681.658px]" data-node-id="171:4653" data-name="Big Bottom Cloud">
              <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgBigBottomCloud} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-serif h-[52px] justify-center leading-[0] left-1/2 not-italic text-[48px] text-[color:var(--raven-900,#101928)] text-center top-[939px] tracking-[-0.72px] w-[1440px]" data-node-id="171:4650">
              <p className="leading-[1.15]">The incident operations layer for modern engineering teams</p>
            </div>
            <StatisticsCountUp />
          </div>
          <EnterpriseSolutionsScroller />
        </div>
      </div>
    </div>
  );
}