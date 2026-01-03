"use client";

import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  // Google FormのURLを差し替えて使用
  const formUrl = "https://forms.gle/xxxx";

  return (
    <section
      id="contact"
      className="py-48 md:py-64 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-noto-serif-jp)] font-medium text-slate-900 dark:text-white mb-10 tracking-tight leading-tight text-halation">
            一緒に、<br />
            <span className="text-primary-500 dark:text-primary-400">つくりませんか？</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto leading-loose">
            現在、質の高いデリバリーを維持するため、
            <br />
            <strong className="text-slate-900 dark:text-white border-b-2 border-primary-500">
              ラボ型開発のみ
            </strong>
            新規受付を行っております。
          </p>
          <p className="text-slate-500 dark:text-slate-500 mb-16 leading-relaxed">
            まずは技術的な課題感の整理から、お気軽にご相談ください。
          </p>

          <div className="flex justify-center">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-16 py-6 text-xl font-bold tracking-wide rounded-full bg-primary-500 text-white hover:bg-primary-600 shadow-[0_10px_30px_rgba(70,102,214,0.3)] hover:shadow-[0_15px_40px_rgba(70,102,214,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              お問い合わせフォーム
            </a>
          </div>

          <div className="mt-12 text-slate-500 dark:text-slate-400">
            <p className="text-sm mb-2">メールでのお問い合わせ</p>
            <a
              href="mailto:contact@nishisoft.com"
              className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 transition-colors"
            >
              contact@nishisoft.com
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-400 font-[family-name:var(--font-jetbrains-mono)]">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            <span>初回返信: 24時間以内</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
