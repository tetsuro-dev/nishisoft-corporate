"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const PROBLEMS = [
  {
    num: "01",
    title: "要件は、作っている最中に変わる。",
    desc: "「最初に決めた仕様」通りにビジネスが進むことは稀です。ウォーターフォール型の契約は、変化への適応を拒み、機会損失を生みます。",
  },
  {
    num: "02",
    title: "技術と判断が、特定の個人に依存する。",
    desc: "ドキュメント無きコード、頭の中だけの仕様。属人化はリスクです。私たちは可読性とドキュメンテーションを「資産」として残します。",
  },
  {
    num: "03",
    title: "「とりあえず動く」が、未来の負債になる。",
    desc: "スピードを言い訳にした低品質なコードは、後に莫大な修正コストを生みます。セキュリティや拡張性は、後付けできない基礎設計です。",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-48 md:py-64 bg-slate-950 text-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <SectionHeading
            sub="現実"
            title="現代のソフトウェア開発が直面する、構造的な矛盾"
            desc="技術力不足だけが原因ではありません。多くのプロジェクトは硬直的・属人的な開発プロセスと、責任が曖昧な契約形態によって停滞します。"
            light={true}
          />
        </Reveal>

        <div className="mt-20 border-t border-slate-800">
          {PROBLEMS.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="group border-b border-slate-800 hover:border-slate-700 transition-colors duration-500 py-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-slate-600 group-hover:text-primary-400 transition-colors">
                  {item.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-noto-serif-jp)] font-medium mb-6 leading-normal group-hover:text-primary-50 sm:tracking-tight transition-all duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-lg leading-loose group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
