import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactHighlights,
  siteConfig,
  services,
  trustPoints,
} from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "יצירת קשר | Sitesolute",
  description:
    "דברו עם Sitesolute על דף נחיתה / אתר תדמית או אתר עסקי מלא, עם תמחור ברור, תת דומיין, קוד מלא ועלייה מהירה לאוויר.",
  path: "/contact",
});

export default function ContactPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`;

  return (
    <div>
      <PageHero
        eyebrow="יצירת קשר"
        title="רוצים אתר חדש שנראה פרימיום ועולה לאוויר מהר?"
        description="אפשר לפנות כדי לדבר על דף נחיתה / אתר תדמית ב־₪995 או אתר עסקי מלא ב־₪1,595, עם כל מה שצריך כדי להתחיל נכון."
        primaryCta={{ label: "שלחו מייל", href: `mailto:${siteConfig.email}` }}
        secondaryCta={{ label: "התקשרו עכשיו", href: phoneHref }}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="surface-panel-dark premium-sheen rounded-[2rem] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            דברו איתנו
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            מתחילים משיחה פשוטה על האתר שלכם.
          </h2>
          <div className="mt-8 space-y-6 text-slate-300">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                אימייל
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                dir="ltr"
                className="mt-2 block text-lg text-sky-300 transition-colors hover:text-sky-200"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                טלפון
              </p>
              <a
                href={phoneHref}
                dir="ltr"
                className="mt-2 block text-lg text-sky-300 transition-colors hover:text-sky-200"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                אזור פעילות
              </p>
              <p className="mt-2 text-base leading-8">{siteConfig.location}</p>
            </div>
          </div>
          <div className="relative mt-10 grid gap-3">
            {contactHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="surface-panel glass-border rounded-[2rem] p-8">
            <SectionHeading
              eyebrow="טופס יצירת קשר"
              title="אפשר לחבר כאן טופס פשוט בכל שלב"
              description="נקודת הקצה כבר קיימת, כך שאפשר להוסיף טופס יצירת קשר אמיתי בהמשך בלי לשנות את מבנה האתר."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["שם", "אימייל", "שם העסק", "מטרת האתר"].map((field) => (
                <div
                  key={field}
                  className="rounded-2xl border border-dashed border-slate-300/80 bg-white/58 px-4 py-4 text-sm text-slate-500 backdrop-blur-xl"
                >
                  שדה לדוגמה: {field}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel glass-border rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              נושאים שכדאי לדבר עליהם
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[...services.map((service) => service.title), ...trustPoints].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/70 bg-white/72 px-4 py-2 text-sm text-slate-700 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
