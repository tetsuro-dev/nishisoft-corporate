"use client";

import { Check, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Security() {
  return (
    <section
      id="security"
      className="py-48 md:py-64 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiPjwvcmVjdD4KPC9zdmc+')] opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-green-400 font-[family-name:var(--font-jetbrains-mono)] text-sm mb-8 border border-green-500/30 px-3 py-1 rounded bg-green-950/40">
                <ShieldCheck size={14} />
                <span>SECURITY BY DESIGN</span>
              </div>
              <SectionHeading
                sub="セキュリティ"
                title={
                  <>
                    セキュリティは、
                    <br />
                    機能ではなく
                    <br />
                    前提。
                  </>
                }
                desc="実装後に足すものではなく、設計初期から組み込みます。CTOは国際資格「ホワイトハッカー」を保有し、攻撃者視点で設計とレビューを行います。"
                light
              />
            </Reveal>
          </div>

          <div className="lg:w-1/2 w-full">
            <Reveal delay={200}>
              <div className="w-full bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <div className="font-[family-name:var(--font-jetbrains-mono)] text-green-400 mb-6 text-xs tracking-[0.18em]">
                  標準の対策
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 w-7 h-7 rounded-full border border-green-500/40 flex items-center justify-center text-green-400">
                      <Check size={16} />
                    </div>
                    <div>
                      <div className="text-white font-medium">認証・認可の設計</div>
                      <div className="text-slate-400 leading-relaxed">
                        権限境界を明確化し、最小権限を前提に設計します。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 w-7 h-7 rounded-full border border-green-500/40 flex items-center justify-center text-green-400">
                      <Check size={16} />
                    </div>
                    <div>
                      <div className="text-white font-medium">入力・データ境界の防御</div>
                      <div className="text-slate-400 leading-relaxed">
                        入力検証・エスケープ・CSRF対策を標準で組み込みます。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 w-7 h-7 rounded-full border border-green-500/40 flex items-center justify-center text-green-400">
                      <Check size={16} />
                    </div>
                    <div>
                      <div className="text-white font-medium">依存関係・設定の監査</div>
                      <div className="text-slate-400 leading-relaxed">
                        ライブラリの脆弱性、設定ミス、秘密情報の扱いを点検します。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 w-7 h-7 rounded-full border border-green-500/40 flex items-center justify-center text-green-400">
                      <Check size={16} />
                    </div>
                    <div>
                      <div className="text-white font-medium">レビューとログ設計</div>
                      <div className="text-slate-400 leading-relaxed">
                        監査性（追跡可能性）を担保し、障害と不正の検知に備えます。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
