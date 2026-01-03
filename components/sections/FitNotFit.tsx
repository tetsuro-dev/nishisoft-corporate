"use client";

import { CheckCircle2, Minus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const FIT_ITEMS = [
  "中長期視点でプロダクトを育てていきたい",
  "技術的な意思決定や設計について深く議論したい",
  "外注ではなく、内製チームに近い関係性を求めている",
];

const NOT_FIT_ITEMS = [
  "仕様固定での一括請負開発を希望している",
  "短期・単発での開発リソースのみを探している",
  "品質やプロセスよりも、価格の安さを最優先したい",
];

export default function FitNotFit() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-48 md:pt-64">
        <Reveal>
          <SectionHeading
            sub="相性"
            title="私たちとの相性"
            desc="西ソフトは、すべてのプロジェクトに最適なわけではありません。お互いにとって良いパートナーシップを築けるか、事前にご確認ください。"
            align="center"
          />
        </Reveal>
      </div>
      <div className="flex flex-col md:flex-row min-h-[600px] mt-16">
        {/* Fit - Left/Top Side */}
        <div className="flex-1 bg-white dark:bg-slate-950 py-32 px-6 md:px-12 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto w-full relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-full border border-primary-500 flex items-center justify-center text-primary-500 shadow-[0_0_15px_rgba(70,102,214,0.3)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-noto-serif-jp)] font-medium text-slate-900 dark:text-white text-halation">
                  向いているケース
                </h3>
              </div>
              <ul className="space-y-8">
                {FIT_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-primary-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Not Fit - Right/Bottom Side */}
        <div className="flex-1 bg-slate-50 dark:bg-slate-900 py-32 px-6 md:px-12 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto w-full relative z-10">
            <Reveal delay={200}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-full border border-slate-400 dark:border-slate-600 flex items-center justify-center text-slate-400 dark:text-slate-500">
                  <Minus size={32} />
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-noto-serif-jp)] font-medium text-slate-600 dark:text-slate-400 text-halation">
                  向いていないケース
                </h3>
              </div>
              <ul className="space-y-8">
                {NOT_FIT_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed pl-6 border-l-2 border-slate-300 dark:border-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
