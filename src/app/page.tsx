import Link from "next/link";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { HeroPreviewCarousel } from "@/components/ui/hero-preview-carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  caseStudies,
  faqs,
  heroStats,
  offerHighlights,
  processSteps,
  services,
  sharedTrackBenefits,
  siteConfig,
  technicalValueItems,
  trustPoints,
} from "@/content/site";

export default function Home() {
  return (
    <div className="pb-6">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="ambient-drift absolute right-[4%] top-[6%] h-72 w-72 rounded-full bg-sky-300/24 blur-3xl" />
          <div className="ambient-drift absolute left-[6%] top-[18%] h-64 w-64 rounded-full bg-violet-300/18 blur-3xl" />
          <div className="absolute bottom-0 right-[22%] h-48 w-48 rounded-full bg-amber-200/18 blur-3xl" />
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-18 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
          <div className="reveal relative max-w-2xl">
            <p className="badge-soft text-xs font-semibold tracking-[0.24em] text-sky-800">
              {siteConfig.name}
            </p>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.35rem]">
              אתרים לעסקים שרוצים להיראות כמו מותג גדול.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Sitesolute בונה דפי נחיתה / אתרי תדמית ואתרים עסקיים מלאים עם
              עיצוב פרימיום, תמחור חד וברור, קוד מלא וניתן להעברה ועלייה מהירה
              לאוויר.
            </p>
            <div className="surface-panel glass-border mt-9 rounded-[1.75rem] p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">בואו נתחיל</ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary">
                  לצפייה בעבודות
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                תשלום חד פעמי בלבד, בלי התחייבות חודשית, עם תת דומיין כלול
                ואפשרות לדומיין אישי בתוספת תשלום.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="surface-panel motion-lift glass-border rounded-[1.5rem] p-5"
                >
                  <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1 relative">
            <div className="absolute inset-x-8 top-10 -z-10 h-80 rounded-full bg-sky-200/34 blur-3xl" />
            <div className="surface-panel-dark premium-sheen relative overflow-hidden rounded-[2.25rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_28%)]" />
              <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-sm font-semibold text-white">
                    הצעה ברורה לעסקים
                  </p>
                  <p className="text-xs text-slate-400">
                    עיצוב, קוד, השקה ונראות גבוהה
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                  Premium web agency
                </span>
              </div>
              <div className="relative grid gap-6 p-6">
                <HeroPreviewCarousel />
                <div className="grid gap-4">
                  {[trustPoints.slice(0, 2), trustPoints.slice(2, 4)].map(
                    (row) => (
                      <div key={row.join("-")} className="grid grid-cols-2 gap-4">
                        {row.map((point) => (
                          <div
                            key={point}
                            className="motion-lift rounded-[1.4rem] border border-white/10 bg-white/7 p-5 backdrop-blur-md"
                          >
                            <p className="text-sm font-semibold text-white">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    ),
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {["RTL מלא", "טעינה מהירה", "עיצוב חי"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="section-wash glass-border rounded-[2rem] px-7 py-10 sm:px-10">
          <div className="flex flex-col gap-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              מתאים לעסקים מקומיים, קליניקות, משרדים, סטודיואים ונותני שירות
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {offerHighlights.map((point) => (
                <div
                  key={point}
                  className="motion-lift rounded-[1.35rem] border border-white/70 bg-white/74 p-5 shadow-[0_14px_32px_rgba(49,46,129,0.06)] backdrop-blur-xl"
                >
                  <p className="text-sm font-semibold text-slate-950">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="שירותים"
          title="הצעה פשוטה, ברורה ומדויקת"
          description="שני מסלולים עיקריים – שניהם כוללים עיצוב מותאם אישית, אתר מהיר וקוד נקי. ההבדל המרכזי הוא בהיקף האתר ובכמות התוכן."
        />
        <div className="section-wash glass-border mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="badge-soft text-xs font-semibold tracking-[0.22em] text-sky-800">
                משותף לשני המסלולים
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                מה כלול בשני המסלולים
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-600">
              בסיס מקצועי אחיד, עם תשתית נקייה וכל מה שנדרש כדי לעלות לאוויר
              בצורה מסודרת.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sharedTrackBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.2rem] border border-white/70 bg-white/76 px-4 py-3 shadow-[0_12px_26px_rgba(49,46,129,0.05)] backdrop-blur-xl"
              >
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            מה ההבדל ביניהם?
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
            הבחירה היא בעיקר בין עמוד אחד ממוקד לבין אתר רחב יותר עם מקום לתוכן
            נוסף, עמודים פנימיים ומבנה עסקי מלא.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-panel motion-lift glass-border group flex h-full flex-col rounded-[1.9rem] p-8"
            >
              <p className="badge-soft self-start text-xs font-semibold tracking-[0.2em] text-sky-800">
                {service.price}
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                {service.summary}
              </p>
              <div className="mt-6 rounded-[1.4rem] border border-white/70 bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl">
                <p className="text-sm font-semibold text-sky-800">
                  מתאים במיוחד ל:
                </p>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  {service.bestFor}
                </p>
              </div>
              <ul className="mt-6 grid gap-3">
                {service.comparisonHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-white/72 px-4 py-3 text-sm leading-7 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="section-wash glass-border rounded-[2rem] px-7 py-10 sm:px-10">
          <SectionHeading
            eyebrow="יתרון מובנה"
            title="האתר לא רק נראה מרשים, הוא גם בנוי נכון מאחורי הקלעים"
            description="האתרים משלבים טכנולוגיה מודרנית, מבנה חכם, מהירות וחוויית משתמש מוקפדת. התוצאה היא נכס דיגיטלי שמרגיש מקצועי, ברור ואמין."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {technicalValueItems.map((item) => (
              <article
                key={item.title}
                className="surface-panel motion-lift glass-border rounded-[1.6rem] p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/50 bg-white/36 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0">
          <div className="ambient-drift absolute left-[8%] top-10 h-44 w-44 rounded-full bg-violet-200/22 blur-3xl" />
          <div className="ambient-drift absolute right-[10%] bottom-0 h-52 w-52 rounded-full bg-sky-200/22 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="תהליך"
            title="איך זה עובד"
            description="תהליך עבודה מסודר, ברור ויעיל — משלב הבחירה ועד העלייה לאוויר."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="surface-panel motion-lift glass-border flex h-full flex-col rounded-[1.6rem] p-7 sm:p-8 lg:p-7"
              >
                <p className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sm font-semibold text-sky-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  שלב {index + 1}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-[1.7rem] lg:text-[1.85rem]">
                  {step.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg lg:leading-9">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="עבודות"
            title="דוגמאות שממחישות איך אתר טוב יכול להיראות ולהרגיש"
            description="כל דוגמה מדגישה עיצוב מקצועי, התאמה למובייל, מסר ברור וחוויה שמחזקת אמון מהרגע הראשון."
          />
          <ButtonLink href="/portfolio" variant="ghost">
            לכל העבודות
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="surface-panel motion-lift glass-border group rounded-[1.9rem] p-8"
            >
              <div className="relative -mx-3 -mt-3 mb-6 aspect-[16/9] overflow-hidden rounded-[1.45rem] border border-white/80 bg-slate-100 shadow-[0_18px_42px_rgba(49,46,129,0.12)]">
                <Image
                  src={study.previewImage}
                  alt={`${study.name} preview`}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="badge-soft text-xs font-semibold tracking-[0.18em] text-sky-800">
                {study.industry}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-500">
                {study.projectType}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                {study.name}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {study.summary}
              </p>
              <p className="mt-5 rounded-2xl bg-gradient-to-br from-sky-50 to-white px-4 py-4 text-sm text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                {study.outcome}
              </p>
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full border border-white/70 bg-white/76 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_34px_rgba(49,46,129,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/92"
              >
                צפייה באתר
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950/94 text-white backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_24%)]" />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="שאלות נפוצות"
            title="שאלות נפוצות, עם תשובות קצרות וברורות"
            description="החלק הזה עוזר לבעלי עסקים להבין מהר מה הם מקבלים, כמה זה עולה ולמה ההצעה נשארת פשוטה."
            tone="inverse"
          />
          <div className="mt-12 grid gap-4">
            {faqs.slice(0, 4).map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.6rem] border border-white/10 bg-white/6 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/18 hover:bg-white/8"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold tracking-tight text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/faq"
              className="text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
            >
              לכל השאלות הנפוצות
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="surface-panel premium-sheen glass-border relative overflow-hidden rounded-[2.15rem] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_28%)]" />
          <div className="relative max-w-2xl">
            <p className="badge-soft text-xs font-semibold tracking-[0.24em] text-sky-800">
              מוכנים להתחיל
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              מציגים שירות ברור, בונים אתר מרשים ועולים לאוויר מהר.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              ההצעה פשוטה: דף נחיתה / אתר תדמית ב־₪995, אתר עסקי מלא ב־₪1,595
              ואפשרות לאחזקה שנתית ב־₪795.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 lg:mt-0">
            <ButtonLink href="/contact">יצירת קשר</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              להצגת השירותים
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
