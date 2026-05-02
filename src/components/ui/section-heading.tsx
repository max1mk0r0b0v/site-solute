type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "";
  const titleColor = tone === "inverse" ? "text-white" : "text-slate-950";
  const descriptionColor =
    tone === "inverse" ? "text-slate-300" : "text-slate-600";
  const eyebrowColor = tone === "inverse" ? "text-sky-200" : "text-sky-800";

  return (
    <div className={`reveal ${alignment}`}>
      {eyebrow ? (
        <p
          className={`badge-soft text-xs font-semibold tracking-[0.22em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.8rem] ${titleColor}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${descriptionColor}`}
      >
        {description}
      </p>
    </div>
  );
}
