import Image from "next/image";
import { assets } from "@/lib/assets";

const timelineRows = [
  { time: "02:14:03", text: "Alert — gateway p99 > 1.8s", badge: "D", label: "Datadog", color: assets.widget.datadog },
  { time: "02:14:41", text: "Triage opened", badge: "A", label: "aria.kim", color: assets.widget.aria },
  { time: "02:15:16", text: "On-call engaged · #inc-2417", badge: "M", label: "milo.sato", color: assets.widget.milo },
  { time: "02:18:52", text: "Mitigation deployed", badge: "M", label: "milo.sato", color: assets.widget.milo },
  { time: "02:14:03", text: "Incident resolved · 8m27s", badge: "R", label: "Relay", color: assets.widget.relay },
] as const;

export function IncidentWidget() {
  return (
    <aside
      className="relative mx-auto w-full max-w-[387px] lg:ml-auto lg:mr-0"
      aria-label="Incident timeline preview"
    >
      <div className="absolute left-2 top-2 h-[190px] w-[calc(100%-8px)] border-2 border-raven-900 bg-azure-500" />
      <div className="relative border-2 border-raven-900 bg-azure-50">
        <div className="border-b border-raven-900 px-5 py-2">
          <p className="text-sm font-light">
            INC 2417 · Payments gateway degraded
          </p>
        </div>
        <div className="flex items-center gap-2 border-b border-raven-900 px-5 py-2">
          <Image src={assets.widget.line1} alt="" width={28} height={1} unoptimized aria-hidden />
          <p className="eyebrow text-black">
            Timeline <span className="font-normal">· US-EAST 1</span>
          </p>
          <Image src={assets.widget.line2} alt="" width={120} height={1} className="ml-auto hidden sm:block" unoptimized aria-hidden />
        </div>
        <ul className="space-y-1 px-5 py-3">
          {timelineRows.map((row) => (
            <li key={`${row.time}-${row.text}`} className="grid grid-cols-[59px_1fr_auto] items-center gap-3 text-xs">
              <span className="eyebrow">{row.time}</span>
              <span className="eyebrow truncate">{row.text}</span>
              <span className="flex items-center gap-1">
                <Image src={row.color} alt="" width={16} height={16} unoptimized aria-hidden />
                <span className="text-[8px] font-light">{row.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
