import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "עבודות | Sitesolute",
  description:
    "צפו בדוגמאות לאתרים שממחישים את ההצעה הפשוטה, הפרימיום והברורה של Sitesolute לשוק הישראלי.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div>
      <PageHero
        eyebrow="עבודות"
        title="דוגמאות לאתרים שמשקפים שירות פשוט, ברור ומרשים"
        description="העמוד הזה נועד להמחיש את רמת העיצוב, הביצועים והחשיבה שמאחורי דפי נחיתה / אתרי תדמית ואתרים עסקיים מלאים."
        primaryCta={{ label: "נתחיל פרויקט", href: "/contact" }}
        secondaryCta={{ label: "לשירותים", href: "/services" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="פרויקטים נבחרים"
          title="אפשר להחליף את הדוגמאות האלה בעבודות אמיתיות בכל שלב"
          description="כל פרויקט ממוסגר סביב איכות העיצוב, מהירות האתר, התאמה למובייל והדרך שבה העסק מוצג כמקצועי יותר."
        />
        <div className="mt-12 grid gap-6">
          {caseStudies.map((study, index) => (
            <article
              key={study.name}
              className="surface-panel motion-lift glass-border group grid gap-8 rounded-[2.1rem] p-8 lg:grid-cols-[0.82fr_1.18fr]"
            >
              <div className="surface-panel-dark relative overflow-hidden rounded-[1.7rem] p-8 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_28%)]" />
                {index === 0 ? (
                  <span className="relative inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-200">
                    מקרה בולט
                  </span>
                ) : null}
                <p className="relative mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                  {study.industry}
                </p>
                <h2 className="relative mt-4 text-3xl font-semibold tracking-tight">
                  {study.name}
                </h2>
                {study.subtitle ? (
                  <p className="relative mt-3 text-sm leading-7 text-slate-300">
                    {study.subtitle}
                  </p>
                ) : null}
                <p className="relative mt-6 text-base leading-8 text-slate-300">
                  {study.outcome}
                </p>
              </div>
              <div>
                <p className="text-base leading-8 text-slate-600">
                  {study.summary}
                </p>
                {study.intro ? (
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {study.intro}
                  </p>
                ) : null}
                {study.challenge ? (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-950">האתגר</h3>
                    <div className="mt-3 space-y-3">
                      {study.challenge.map((item) => (
                        <p key={item} className="text-base leading-8 text-slate-600">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
                {study.solution ? (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-950">הפתרון</h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      {study.solution}
                    </p>
                  </div>
                ) : null}
                {study.projectIncludes ? (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-950">
                      מה כלל הפרויקט
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {study.projectIncludes.map((item) => (
                        <li
                          key={item}
                        className="rounded-2xl bg-white/75 px-4 py-3 text-sm text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/70 bg-white/76 px-4 py-2 text-sm text-slate-700 shadow-[0_10px_24px_rgba(49,46,129,0.05)] backdrop-blur-xl"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                {study.highlights ? (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-950">
                      נקודות בולטות
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {study.highlights.map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl border border-white/70 bg-white/78 px-4 py-3 text-sm text-slate-700 shadow-[0_10px_24px_rgba(49,46,129,0.05)] backdrop-blur-xl"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/50 bg-white/36 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="הנחיות לתוכן"
            title="עקרונות פשוטים להצגת כל פרויקט"
            description="כדאי לשמור כל תיאור פרויקט ממוקד בהיקף האתר, באיכות הביצוע, בתחושת הפרימיום ובתוצאה העסקית."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              "ציינו אם מדובר בדף נחיתה / אתר תדמית או באתר עסקי מלא.",
              "הסבירו מה השתפר בעיצוב, במהירות ובמובייל.",
              "הדגישו איך האתר החדש חיזק את האמינות והנראות של העסק.",
            ].map((note) => (
              <div
                key={note}
                className="surface-panel motion-lift glass-border rounded-[1.6rem] p-6"
              >
                <p className="text-base leading-8 text-slate-700">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
