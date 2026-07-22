import Image from "next/image";
import { assets } from "@/lib/assets";

const navLinks = ["Company", "Products", "Solutions", "FAQ"] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1114px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-raven-900 bg-azure-50 px-5 py-4 sm:px-8 lg:px-10">
      <Image
        src={assets.relayLogo}
        alt="Relay"
        width={105}
        height={35}
        className="h-8 w-auto shrink-0"
        unoptimized
      />
      <nav
        className="order-3 flex w-full justify-center gap-8 sm:order-none sm:w-auto md:gap-10"
        aria-label="Primary"
      >
        {navLinks.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-sm font-semibold text-raven-900 sm:text-base"
          >
            {label}
          </a>
        ))}
      </nav>
      <HeaderCtas />
    </header>
  );
}

function HeaderCtas() {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <a
        href="#signup"
        className="rounded-lg border border-raven-900 bg-azure-50 px-4 py-2 text-sm font-semibold text-azure-600 sm:text-base"
      >
        Sign Up
      </a>
      <a
        href="#access"
        className="rounded-lg border border-raven-900 bg-azure-500 px-4 py-2 text-sm font-semibold text-azure-50 sm:text-base"
      >
        Request access
      </a>
    </div>
  );
}
