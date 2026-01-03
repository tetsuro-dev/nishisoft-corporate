"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const APPROACHES = [
  {
    title: "優先順位の更新を、前提にする",
    desc: "固定スコープではなく、状況に合わせて優先順位を更新します。常に「今、最も価値あるもの」から作ります。",
  },
  {
    title: "判断を、見える形で残す",
    desc: "なぜその技術/設計なのかを言語化します。なぜそう決めたかが残れば、後から迷わない。",
  },
  {
    title: "実装と運用に、最後まで責任を持つ",
    desc: "設計だけで終わりません。実装・運用を前提に、現実的に回るアーキテクチャを作ります。",
  },
];

export default function How() {
  return (
    <section id="how" className="py-48 md:py-64 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionHeading
                sub="進め方"
                title="不確実性を前提に、前へ進める"
                desc="計画どおりに進まない現実に合わせて、作り方を最適化します。ラボ型開発で、意思決定と実装を短いサイクルで回します。"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12">
                <p className="text-2xl text-primary-600 dark:text-primary-300 font-bold mb-8 text-halation leading-relaxed">
                  ラボ型開発のみ。
                  <br />
                  変化を前提に、最善手を探り続けます。
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-loose text-lg font-light">
                  チームの一員として中長期の成長にコミットするため、私たちはラボ型開発のみを採用しています。
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative pl-8 md:pl-16 border-l border-slate-200 dark:border-slate-800 space-y-24">
            {APPROACHES.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[45px] md:-left-[77px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(70,102,214,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-loose">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
