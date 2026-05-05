import Link from "next/link";

import { footerLinks, navItems, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/94 text-slate-200 backdrop-blur-xl">
      <div className="absolute inset-0">
        <div className="ambient-drift absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-400/14 blur-3xl" />
        <div className="ambient-drift absolute bottom-0 left-12 h-48 w-48 rounded-full bg-violet-500/14 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div className="max-w-md space-y-5">
          <Link
            href="/"
            className="inline-flex rounded-[1.5rem]"
            aria-label={`${siteConfig.name} - דף הבית`}
          >
            <img
              src="/images/brand/sitesolute-wordmark.png"
              alt={siteConfig.name}
              className="h-14 w-auto max-w-[210px] object-contain sm:h-16 sm:max-w-[250px]"
              dir="ltr"
            />
          </Link>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
            אתרים שנראים פרימיום, נטענים מהר ועולים לאוויר בלי סיבוך.
          </h2>
          <p className="text-sm leading-7 text-slate-400">
            Sitesolute מתמקדת בשוק הישראלי עם דפי נחיתה / אתרי תדמית ואתרים
            עסקיים מלאים, תשלום חד פעמי, תת דומיין כלול, קוד מלא וניתן להעברה
            ועלייה מהירה לאוויר.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">ניווט</p>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition-all duration-300 hover:translate-x-[-2px] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">יצירת קשר</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>{siteConfig.location}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              dir="ltr"
              className="block transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              dir="ltr"
              className="block transition-colors hover:text-white"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="block transition-colors hover:text-white"
            >
              WhatsApp {siteConfig.phone}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
