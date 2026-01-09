"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const LAB_DEVELOPMENT_ITEMS = [
  "Webアプリケーション開発",
  "MVP / PoC 開発",
  "業務システム・社内ツール",
  "レガシーシステムの刷新",
  "パフォーマンス改善",
  "技術的負債の解消",
];

const CONSULTING_ITEMS = [
  "技術選定・アーキテクチャ設計",
  "開発プロセス・体制構築",
  "コードレビュー・品質管理",
  "エンジニア採用・評価設計",
  "セキュリティ監査",
  "内製化支援",
];

export default function Services() {
  return (
    <section id="services" className="py-48 md:py-64 bg-white dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading sub="サービス" title="提供価値" align="center" />
        </Reveal>

        <div className="mt-24 space-y-32">
          {/* Service 1 */}
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              <div className="lg:w-1/3">
                <span className="text-9xl font-[family-name:var(--font-noto-serif-jp)] text-slate-100 dark:text-slate-800/50 leading-none select-none block -ml-2">
                  01
                </span>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mt-[-40px] relative z-10 text-halation">
                  ラボ型開発
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-loose mb-12 border-b border-slate-200 dark:border-slate-800 pb-12">
                  クライアントの専属エンジニアリングチームとして、要件定義から実装、運用までを一気通貫で担当します。
                  <br />
                  <span className="text-accent-500 font-medium">
                    外部パートナーではなく、内製チームのような距離感で。
                  </span>
                </p>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                  {LAB_DEVELOPMENT_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <span className="w-8 h-px bg-primary-500 transition-all group-hover:w-12 shadow-[0_0_5px_rgba(70,102,214,0.5)]" />
                      <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Service 2 */}
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              <div className="lg:w-1/3">
                <span className="text-9xl font-[family-name:var(--font-noto-serif-jp)] text-slate-100 dark:text-slate-800/50 leading-none select-none block -ml-2">
                  02
                </span>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mt-[-40px] relative z-10 text-halation">
                  技術コンサル
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-loose mb-12 border-b border-slate-200 dark:border-slate-800 pb-12">
                  CTO/VPoEのパートナーとして、技術戦略の策定、アーキテクチャ設計、開発組織の構築を支援します。
                  <br />
                  <span className="text-accent-500 font-medium">
                    経営と現場、両方の考え方がわかるから。
                  </span>
                </p>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                  {CONSULTING_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <span className="w-8 h-px bg-primary-500 transition-all group-hover:w-12 shadow-[0_0_5px_rgba(70,102,214,0.5)]" />
                      <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
