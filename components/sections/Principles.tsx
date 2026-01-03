"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const PRINCIPLES = [
  {
    title: "品質は、後から足せない",
    desc: "可読性・テスト・レビューを当たり前のこととして組み込み、変更に強い状態を保ちます。",
  },
  {
    title: "セキュリティは、設計の前提",
    desc: "実装後の追加ではなく、権限・境界・脅威を最初に定義してから作ります。",
  },
  {
    title: "意思決定は、言語化して残す",
    desc: "なぜその技術/設計なのかをドキュメント化し、貴社の資産として継承します。",
  },
  {
    title: "運用まで含めて、設計する",
    desc: "数年後の運用コスト、監視、障害対応までを見据えた設計と実装を行います。",
  },
];

const WE_DONT_DO = [
  "仕様固定で、変化を受け入れられない進め方",
  "根拠のない技術選定（流行や好みで決める）",
  "読み捨ての実装（ドキュメント無し/テスト無し/レビュー無し）",
];

export default function Principles() {
  return (
    <section id="principles" className="py-48 md:py-64 bg-white dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading
            sub="原則"
            title="譲れない原則"
            desc="当社は「一貫性」を経営理念に据えています。原理原則を最初に共有し、お客様にもご理解いただいたうえで進める。だから判断がぶれない。変化の中でも、品質と判断基準を守り抜きます。"
            align="center"
          />
        </Reveal>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.title}>
                <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30 p-8">
                  <h3 className="text-2xl font-[family-name:var(--font-noto-serif-jp)] font-semibold text-slate-900 dark:text-white mb-3 text-halation">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-loose">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Reveal>
              <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-black/20 p-8">
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-6">
                  NO GO
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-[family-name:var(--font-noto-serif-jp)] font-semibold text-slate-900 dark:text-white mb-3 text-halation">
                      やらないこと
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-loose">
                      まず方針を共有し、期待値を揃えて進めます。合わない進め方の場合は、辞退させていただく場合がございます。
                    </p>
                  </div>
                  <ul className="space-y-5">
                    {WE_DONT_DO.map((item) => (
                      <li
                        key={item}
                        className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed pl-5 border-l-2 border-slate-200 dark:border-slate-800"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


