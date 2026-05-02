import { PageHero } from "@/components/ui/page-hero";
import { faqs } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "שאלות נפוצות | Sitesolute",
  description:
    "שאלות נפוצות על השירותים של Sitesolute ועל הדרך שבה אנחנו בונים דפי נחיתה / אתרי תדמית ואתרים עסקיים מלאים לעסקים בישראל.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div>
      <PageHero
        eyebrow="שאלות נפוצות"
        title="תשובות לשאלות שבעלי עסקים בדרך כלל שואלים לפני שמתחילים"
        description="השאלות כאן מסבירות את המודל הפשוט, את המחירים, את השירותים ואת הערך שמאחורי אתר פרימיום."
        primaryCta={{ label: "ליצירת קשר", href: "/contact" }}
        secondaryCta={{ label: "לשירותים", href: "/services" }}
      />

      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="surface-panel motion-lift glass-border rounded-[1.5rem] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold tracking-tight text-slate-950">
                {faq.question}
              </summary>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
