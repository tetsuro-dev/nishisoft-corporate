"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const PROOF_CARDS = [
  {
    title: "エグジットまで、経営と技術で伴走",
    desc: "HRテック・スタートアップで、CTO/COOとしてプロダクトと組織の両面を担い、エグジットに貢献しました。",
  },
  {
    title: "攻撃者視点のセキュリティ設計",
    desc: "国際資格「ホワイトハッカー」を保有。設計初期から脆弱性を前提に、壊れにくい構造を組み上げます。",
  },
  {
    title: "大手とスタートアップ、両方で現場と経営を経験",
    desc: "創業者は大手企業とスタートアップの双方で、現場と経営を経験しています。スピードと統制の両立が必要な局面でも判断がぶれません。",
  },
];

const DOMAIN_AREAS = [
  "マッチングサービスの基幹システム",
  "広告トラッキング / 計測基盤",
  "新規事業の立ち上げ・実装",
  "強化学習などの導入支援",
  "業務システム・社内ツール",
  "セキュリティ設計・監査",
];

export default function Proof() {
  return (
    <section id="proof" className="py-48 md:py-64 bg-slate-50 dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading
            sub="根拠"
            title="信頼の根拠"
            desc="創業者は大手企業とスタートアップの双方で現場と経営を経験。ご支援先も日本を代表する大手からスタートアップまで幅広い実績があります。社名・数値は守秘のため一部非公開ですが、守秘契約のうえ初回のご面談で詳細を共有できます。"
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

        <div className="mt-20">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-6">
                領域
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {DOMAIN_AREAS.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


