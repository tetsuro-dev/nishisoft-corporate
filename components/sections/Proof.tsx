"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const PROOF_CARDS = [
  {
    title: "「プロダクトをつくること」を深く理解",
    desc: "創業者はスタートアップで、CTO/COOとしてエグジットを経験済み。数々のハードシングスを通じて、プロダクトをつくることを深く理解しています。",
  },
  {
    title: "攻撃者目線のセキュリティ設計",
    desc: "CTOは国際資格「ホワイトハッカー」を保有。設計初期から脆弱性を前提に、攻撃されにくい設計を作ります。",
  },
  {
    title: "大手とスタートアップ、両方で現場と経営を経験",
    desc: "創業者の二人は大手企業とスタートアップの双方で、現場と経営を経験。様々な経験から裏打ちされた判断が可能です。",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="py-48 md:py-64 bg-slate-50 dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading
            sub="根拠"
            title="なぜ西ソフトを選ぶべきか"
            desc="創業者は大手企業とスタートアップの双方で現場と経営を経験。ご支援先も日本を代表する大手からスタートアップまで幅広い実績がございます。過去のプロジェクト詳細については、ご面談にて共有可能な範囲でご説明いたします。"
            align="center"
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROOF_CARDS.map((card) => (
            <Reveal key={card.title}>
              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 backdrop-blur-sm p-8">
                <h3 className="text-xl font-[family-name:var(--font-noto-serif-jp)] font-semibold text-slate-900 dark:text-white mb-4 text-halation">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-loose">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}


