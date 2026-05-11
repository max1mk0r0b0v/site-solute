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
  const quickWhatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "שלום, אני רוצה לקבל פרטים על בניית אתר לעסק שלי.",
  )}`;

  return (
    <div>
      <PageHero
        eyebrow="יצירת קשר"
        title="רוצים אתר חדש שנראה פרימיום ועולה לאוויר מהר?"
        description="אפשר לפנות כדי לדבר על דף נחיתה / אתר תדמית ב־₪995 או אתר עסקי מלא ב־₪1,595, עם כל מה שצריך כדי להתחיל נכון."
        primaryCta={{ label: "שלחו וואטסאפ", href: siteConfig.whatsappHref }}
        secondaryCta={{ label: "התקשרו עכשיו", href: siteConfig.phoneHref }}
      />

      <section className="mx-auto grid w-full max-w-6xl items-stretch gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="surface-panel-dark premium-sheen rounded-[2rem] p-8 text-white lg:h-full">
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
                טלפון / וואטסאפ
              </p>
              <a
                href={siteConfig.phoneHref}
                dir="ltr"
                className="mt-2 block text-lg text-sky-300 transition-colors hover:text-sky-200"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-sky-300 hover:text-sky-200"
              >
                שלחו וואטסאפ
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

        <div className="flex flex-col gap-8 lg:h-full">
          <div className="surface-panel glass-border flex flex-col justify-center rounded-[2rem] p-8 lg:flex-1 lg:p-10">
            <SectionHeading
              eyebrow="יצירת קשר מהירה"
              title="בואו נתחיל בשיחה קצרה"
              description="שלחו הודעה בוואטסאפ עם כמה פרטים על העסק שלכם, ונבין יחד איזה אתר הכי מתאים לכם."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={quickWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-sheen motion-lift inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-900 px-5 py-3.5 text-sm font-semibold tracking-tight text-white shadow-[0_20px_50px_rgba(49,46,129,0.24)] transition-all duration-300 hover:shadow-[0_28px_70px_rgba(79,70,229,0.24)]"
              >
                שלחו הודעה בוואטסאפ
              </a>
              <a
                href={siteConfig.phoneHref}
                className="motion-lift inline-flex items-center justify-center rounded-full border border-white/70 bg-white/72 px-5 py-3.5 text-sm font-semibold tracking-tight text-slate-950 shadow-[0_16px_40px_rgba(49,46,129,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white/90"
              >
                התקשרו עכשיו
              </a>
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
