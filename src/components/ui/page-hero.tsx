import { ButtonLink } from "@/components/ui/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/45">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-drift absolute right-[8%] top-0 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="ambient-drift absolute bottom-0 left-[10%] h-48 w-48 rounded-full bg-violet-300/16 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="section-wash glass-border relative overflow-hidden rounded-[2rem] px-7 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          <div className="relative max-w-3xl">
            <p className="badge-soft text-xs font-semibold tracking-[0.24em] text-sky-800">
              {eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>
          {primaryCta || secondaryCta ? (
            <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
