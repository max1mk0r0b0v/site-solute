import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  heroStats,
  processSteps,
  trustPoints,
} from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "אודות | Sitesolute",
  description:
    "הכירו את Sitesolute ואת הדרך שבה אנחנו בונים דפי נחיתה / אתרי תדמית ואתרים עסקיים מלאים לעסקים בישראל.",
  path: "/about",
});

const values = [
  {
    title: "פשטות שמוכרת",
    description:
      "אנחנו שומרים על הצעה ברורה ותחרותית כדי שבעלי עסקים יבינו בדיוק מה הם מקבלים וכמה זה עולה.",
  },
  {
    title: "נראה פרימיום ועובד נכון",
    description:
      "האתרים נראים ברמה גבוהה אבל נשארים נקיים, מהירים, רספונסיביים ונוחים למסירה.",
  },
  {
    title: "ממוקדים בעיקר",
    description:
      "אנחנו מתמקדים בעיצוב, ביצועים, התאמה למובייל, מבנה נכון לגוגל ועלייה מהירה לאוויר.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="אודות"
        title="מותג פרימיום שבנוי סביב שירות ברור לבעלי עסקים בישראל"
        description="Sitesolute עוזרת לעסקים לעלות לאוויר עם דפי נחיתה / אתרי תדמית ואתרים עסקיים מלאים שנראים מרשימים, עובדים מהר ומרגישים מקצועיים."
        primaryCta={{ label: "לצפייה בשירותים", href: "/services" }}
        secondaryCta={{ label: "לצפייה בעבודות", href: "/portfolio" }}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <SectionHeading
            eyebrow="הגישה שלנו"
            title="בונים אתרים לעסקים אמיתיים שרוצים תוצאה חזקה בלי הצעה מסובכת"
            description="הכיוון העסקי פשוט בכוונה: דף נחיתה / אתר תדמית או אתר עסקי מלא, עם תשלום חד פעמי, תת דומיין, קוד מלא ועלייה מהירה לאוויר."
          />
        </div>
        <div className="grid gap-4">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="surface-panel motion-lift glass-border rounded-[1.5rem] p-6"
            >
              <p className="text-base font-semibold text-slate-950">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/50 bg-white/36 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="ערכים"
            title="עקרונות פשוטים שהופכים את האתר לקל יותר למכירה ולקל יותר להשקה"
            description="הערכים האלה שומרים על מראה פרימיום ועל מבנה מסודר שמתאים לעסק ישראלי שרוצה תוצאה ברורה."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="surface-panel motion-lift glass-border rounded-[1.75rem] p-8"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {value.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
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
              <p className="inline-flex self-start rounded-full bg-sky-50 px-3.5 py-1.5 text-sm font-semibold text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                שלב {index + 1}
              </p>
              <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-[1.7rem] lg:text-[1.85rem]">
                {step.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg lg:leading-9">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/94 text-white backdrop-blur-xl">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="נתונים"
            title="מספרים שמחזקים הצעת שירות פשוטה וברורה"
            description="אלה הנתונים שיכולים לעזור לבעל עסק ישראלי להבין במהירות מה הערך שהוא מקבל."
            tone="inverse"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-semibold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
