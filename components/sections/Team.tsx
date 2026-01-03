"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const MEMBERS = [
  {
    name: "西方 聖一",
    title: "CEO / CTO",
    photo: "/team-nishikata.png",
    role: "高校時代に独学でプログラミングを開始。リクルートでテックリードとして新規事業開発や強化学習の導入を主導した後、HRテック・スタートアップにCTOとして参画しエグジットに貢献。サイバー攻撃と防御の国際資格「ホワイトハッカー」を保有し、セキュリティから大規模実装まで一気通貫で担う。",
    expertise: ["元リクルート", "ホワイトハッカー", "CTO経験者"],
  },
  {
    name: "西川 哲郎",
    title: "COO",
    photo: "/team-nishikawa.png",
    role: "三井物産でグローバルな商流構築を経験後、HRテック・スタートアップにCOOとして参画。プロダクト企画からセールス、資金調達、組織づくりまで経営全般を管掌しエグジットに貢献。その後はVCのベンチャースタジオ創設やスタートアップ複数社へのハンズオン支援に従事。東京大学卒業・同大学院修了（物理工学）。",
    expertise: ["元三井物産", "ベンチャースタジオ", "COO経験者"],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-48 md:py-64 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading sub="経営陣" title="経営陣" align="left" />
        </Reveal>

        <div className="mt-16 space-y-20">
          {MEMBERS.map((member, index) => (
            <Reveal key={index} delay={(index + 1) * 100}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start border-t border-slate-300 dark:border-slate-700 pt-12">
                {/* Photo */}
                <div className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-noto-serif-jp)] font-bold text-slate-900 dark:text-white mb-1 text-halation">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-jetbrains-mono)] text-primary-500 text-base">
                      {member.title}
                    </p>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
