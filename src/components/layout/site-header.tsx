import Link from "next/link";

import { navItems, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/54 shadow-[0_18px_60px_rgba(49,46,129,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center rounded-full"
            aria-label={`${siteConfig.name} - דף הבית`}
          >
            <img
              src="/images/brand/sitesolute-wordmark.png"
              alt={siteConfig.name}
              className="h-12 w-auto max-w-[178px] object-contain sm:h-14 sm:max-w-[218px]"
              dir="ltr"
            />
          </Link>
          <Link
            href="/contact"
            className="premium-sheen inline-flex rounded-full bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-900 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(49,46,129,0.18)] transition-all duration-300 hover:-translate-y-0.5 lg:hidden"
          >
            בואו נתחיל
          </Link>
        </div>

        <nav className="surface-panel glass-border flex gap-1 overflow-x-auto rounded-full p-1.5 pb-1 lg:justify-center lg:pb-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-white/86 hover:text-slate-950 hover:shadow-[0_12px_28px_rgba(49,46,129,0.1)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/70 bg-white/76 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_34px_rgba(49,46,129,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/92 lg:inline-flex"
        >
          בקשת הצעת מחיר
        </Link>
      </div>
    </header>
  );
}
