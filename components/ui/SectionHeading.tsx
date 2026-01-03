import type { ReactNode } from "react";

interface SectionHeadingProps {
  sub: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  sub,
  title,
  desc,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-20 md:mb-24 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } ${align === "center" ? "max-w-3xl" : "max-w-4xl"}`}
    >
      <span
        className={`font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-[0.18em] mb-6 block flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        } ${light ? "text-primary-300" : "text-primary-600 dark:text-primary-400"}`}
      >
        <span
          className={`w-8 h-px ${light ? "bg-primary-400" : "bg-primary-500 dark:bg-primary-400"}`}
        />
        {sub}
      </span>
      <h2
        className={`text-halation text-4xl md:text-5xl lg:text-[64px] font-[family-name:var(--font-noto-serif-jp)] font-medium tracking-tight mb-8 leading-snug ${light ? "text-white" : "text-slate-900 dark:text-white"}`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`text-lg md:text-xl leading-loose ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl"
          } ${light ? "text-slate-100" : "text-slate-600 dark:text-slate-400"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

