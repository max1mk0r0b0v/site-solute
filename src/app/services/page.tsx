import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "שירותים | Sitesolute",
  description:
    "הכירו את השירותים של Sitesolute: דף נחיתה / אתר תדמית ב־₪995 או אתר עסקי מלא ב־₪1,595, עם תמחור ברור ועלייה מהירה לאוויר.",
  path: "/services",
});

const extraPricing = [
  "אחזקה שנתית אופציונלית — ₪795",
  "דומיין אישי — בתוספת תשלום",
  "תת דומיין — כלול במחיר",
];

const pricingNote =
  "המחיר נשאר פשוט וברור. התאמות מיוחדות, דומיין אישי או היקף חריג יתומחרו בנפרד לפני תחילת העבודה.";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="שירותים"
        title="שני מסלולים ברורים לבעלי עסקים שרוצים אתר מרשים בלי התחייבות חודשית"
        description="אפשר לבחור בין דף נחיתה / אתר תדמית ב־₪995 לבין אתר עסקי מלא ב־₪1,595, לפי היקף התוכן והצורך של העסק."
        primaryCta={{ label: "לקבלת הצעת מחיר", href: "/contact" }}
        secondaryCta={{ label: "לצפייה בעבודות", href: "/portfolio" }}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="מה אנחנו מציעים"
          title="שני מסלולים שקל להבין, קל למכור וקל להשיק"
          description="כל מסלול בנוי בצורה ברורה, עם מה שכלול בפועל: תשלום חד פעמי, תת דומיין, קוד מלא, מובייל ועלייה מהירה לאוויר."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-panel motion-lift glass-border rounded-[1.9rem] p-8"
            >
              <p className="badge-soft text-xs font-semibold tracking-[0.22em] text-sky-800">
                {service.price}
              </p>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {service.summary}
              </p>
              <div className="mt-6">
                <h3 className="text-base font-semibold text-slate-950">מה כלול:</h3>
                <ul className="mt-3 space-y-3">
                  {service.included.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="rounded-2xl bg-white/75 px-4 py-3 text-sm text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-base font-semibold text-slate-950">
                  מתאים במיוחד ל:
                </h3>
                <ul className="mt-3 space-y-3">
                  {service.idealFor.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="rounded-2xl border border-white/70 bg-white/78 px-4 py-3 text-sm text-slate-700 shadow-[0_10px_22px_rgba(49,46,129,0.05)] backdrop-blur-xl"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/50 bg-white/36 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-12 h-40 w-40 rounded-full bg-sky-200/20 blur-3xl" />
          <div className="absolute right-[12%] bottom-0 h-48 w-48 rounded-full bg-violet-200/14 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="מחירים"
            title="מחירון נקי וברור"
            description="שני המסלולים הראשיים מוצגים כאן בצורה ברורה, ולצידם תוספות אפשריות לפי צורך."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
            {services.map((tier) => (
              <article
                key={tier.title}
                className="surface-panel motion-lift glass-border rounded-[1.9rem] p-8"
              >
                <p className="badge-soft text-xs font-semibold tracking-[0.22em] text-sky-800">
                  {tier.title}
                </p>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {tier.price}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {tier.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.idealFor.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-2xl bg-white/75 px-4 py-3 text-sm text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="surface-panel-dark motion-lift rounded-[1.9rem] p-8 text-white">
              <p className="badge-soft border-white/10 bg-white/8 text-xs font-semibold tracking-[0.22em] text-sky-200">
                תוספות לפי צורך
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                שירותים משלימים
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                אפשר להוסיף שירותים משלימים לפי הצורך, בלי לסבך את מבנה ההצעה.
              </p>
              <ul className="mt-6 space-y-3">
                {extraPricing.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-8 text-center text-sm leading-7 text-slate-500">
            {pricingNote}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="surface-panel-dark premium-sheen relative overflow-hidden rounded-[2.1rem] p-8 text-white sm:p-10 lg:flex lg:items-end lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_24%)]" />
          <div className="max-w-2xl">
            <p className="badge-soft border-white/10 bg-white/8 text-xs font-semibold tracking-[0.24em] text-sky-200">
              פשוט למכור
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              מציגים שתי הצעות ברורות, וכל מה שצריך לעלייה מהירה לאוויר כבר בפנים.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              המודל הזה מרגיש טבעי יותר לבעל עסק ישראלי: מחיר ברור, קוד מלא,
              תת דומיין כלול ותוצאה שקל להבין.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              נדבר על האתר שלכם
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
