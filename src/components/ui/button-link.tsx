import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "premium-sheen motion-lift bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-900 text-white shadow-[0_20px_50px_rgba(49,46,129,0.24)] hover:shadow-[0_28px_70px_rgba(79,70,229,0.24)]",
  secondary:
    "motion-lift border border-white/70 bg-white/72 text-slate-950 shadow-[0_16px_40px_rgba(49,46,129,0.08)] backdrop-blur-xl hover:border-white hover:bg-white/90",
  ghost:
    "motion-lift border border-transparent bg-white/36 text-slate-700 backdrop-blur-xl hover:border-white/70 hover:bg-white/72 hover:text-slate-950",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ${variants[variant]}`;
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
