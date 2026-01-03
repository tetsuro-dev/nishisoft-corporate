"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-5">
            <Image
              src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
              alt="西ソフト"
              width={120}
              height={32}
              className="h-7 w-auto mb-6"
            />
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              技術と実行力で、事業の不確実性を突破する。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              お問い合わせ
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-wrap gap-12 md:gap-16">
            <div>
              <h4 className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                サービス
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                    ラボ型開発
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                    技術コンサルティング
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                会社
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#team" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                    経営陣
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Info */}
          <div className="md:col-span-3">
            <h4 className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
              会社情報
            </h4>
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <p className="font-medium">西ソフト株式会社</p>
              <p className="text-slate-500 dark:text-slate-400">
                〒150-0001 渋谷区神宮前6-23-4
                <br />
                桑野ビル 2階
              </p>
            </div>
            <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              <p>代表取締役</p>
              <p>西方 聖一 / 西川 哲郎</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            © {currentYear} 西ソフト株式会社
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
