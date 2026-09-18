"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useTheme } from "@/components/ThemeProvider";

export const CONSORTIUM_URL =
  "https://www.ai-consortium.jp/service/member_nishi-soft";

export default function Consortium() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "dark"
      ? "/logos/logo_ai-consortium_b.png"
      : "/logos/logo_ai-consortium_w.png";

  return (
    <section
      id="consortium"
      className="py-32 md:py-40 bg-white dark:bg-black border-y border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-[0.18em] mb-12 flex items-center gap-3 text-primary-600 dark:text-primary-400">
            <span className="w-8 h-px bg-primary-500 dark:bg-primary-400" />
            参画
          </span>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <a
              href={CONSORTIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AI導入支援コンソーシアム 西ソフト紹介ページ"
              className="shrink-0 block rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={logoSrc}
                alt="AI導入支援コンソーシアム"
                width={1592}
                height={391}
                className="h-14 md:h-16 w-auto"
              />
            </a>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-noto-serif-jp)] font-medium text-slate-900 dark:text-white mb-6 leading-snug text-halation">
                <a
                  href={CONSORTIUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  AI導入支援コンソーシアム 発起企業
                </a>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-loose max-w-3xl">
                AIエージェントの本格導入を支援する技術特化型企業のコンソーシアム。2026年7月の発足時から発起企業として参画しています。代表取締役
                CEO/CTO 西方 聖一 が技術アドバイザーを務めています。
              </p>
              <a
                href={CONSORTIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                コンソーシアム紹介ページ
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
