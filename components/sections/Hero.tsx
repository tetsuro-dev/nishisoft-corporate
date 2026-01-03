"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useTheme } from "@/components/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-25%] right-[-15%] w-[80vw] h-[80vw] bg-primary-100 dark:bg-primary-500/15 rounded-full blur-[170px] opacity-30 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-15%] left-[-15%] w-[65vw] h-[65vw] bg-slate-100 dark:bg-accent-500/10 rounded-full blur-[150px] opacity-25 dark:opacity-35" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 pt-12 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Reveal delay={100}>
              <h1 className="text-halation text-4xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-noto-serif-jp)] font-medium tracking-tight text-slate-900 dark:text-white leading-[1.35] sm:leading-[1.2] mb-12">
                まるで、貴社の
                <br />
                <span className="font-[family-name:var(--font-noto-sans-jp)] font-extrabold text-primary-500 dark:text-primary-400 tracking-normal relative">
                  コアチーム
                  <span className="absolute inset-0 bg-primary-500/14 dark:bg-primary-400/22 blur-lg rounded-full -z-10" />
                </span>
                <br />
                のように。
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-xl leading-loose mb-14 font-light">
              技術と実行力で、事業の不確実性を突破する。
                <br />
                ラボ型開発と技術コンサルティングの
                <br className="hidden md:block" />
                プロフェッショナルファーム。
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-base font-bold tracking-wide rounded-full bg-primary-500 text-white hover:bg-primary-600 shadow-[0_10px_40px_rgba(70,102,214,0.32)] hover:shadow-[0_14px_46px_rgba(70,102,214,0.42)] hover:-translate-y-1 transition-all duration-300"
                >
                  プロジェクトを相談する
                </a>
                <a
                  href="#services"
                  className="group flex items-center gap-2 px-6 py-5 text-base font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  サービス詳細
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Code Editor Visual */}
          <Reveal delay={400} className="hidden lg:block relative perspective-1000">
            <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-700 ease-out">
              {/* Glow Effect */}
              <div className="absolute -inset-12 bg-primary-500/25 rounded-full blur-[70px] opacity-50 animate-pulse-slow mix-blend-screen" />

              {/* Main Editor Window */}
              <div
                className={`relative rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm ${
                  isDark
                    ? "bg-[#1e1e1e] border border-slate-700/50"
                    : "bg-white border border-slate-200"
                }`}
              >
                {/* Editor Header */}
                <div
                  className={`h-10 flex items-center px-4 justify-between ${
                    isDark
                      ? "bg-[#252526] border-b border-[#333]"
                      : "bg-slate-50 border-b border-slate-200"
                  }`}
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_#27c93f]" />
                  </div>
                  <div
                    className={`text-[10px] font-[family-name:var(--font-jetbrains-mono)] ${
                      isDark ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    nishisoft.ts
                  </div>
                </div>

                {/* Editor Body */}
                <div
                  className={`p-6 font-[family-name:var(--font-jetbrains-mono)] text-sm leading-7 ${
                    isDark ? "text-[#d4d4d4]" : "text-slate-800"
                  }`}
                >
                  <div className="grid grid-cols-[30px_1fr] gap-2">
                    {/* Line Numbers */}
                    <div
                      className={`text-right select-none space-y-1 ${
                        isDark ? "text-[#858585]" : "text-slate-400"
                      }`}
                    >
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                    </div>
                    {/* Code Content */}
                    <div className="space-y-1">
                      <div>
                        <span className="text-primary-500 drop-shadow-md">import</span>{" "}
                        {"{"}{" "}
                        <span
                          className={`${isDark ? "text-white" : "text-slate-900"} drop-shadow-md`}
                        >
                          Partner
                        </span>{" "}
                        {"}"} <span className="text-primary-500">from</span>{" "}
                        <span className="text-accent-500">&apos;@nishisoft/core&apos;</span>;
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        <span className={`${isDark ? "text-slate-500" : "text-slate-500"}`}>
                          // Initialize high-performance team
                        </span>
                      </div>
                      <div>
                        <span className="text-primary-500">const</span>{" "}
                        <span className={isDark ? "text-white" : "text-slate-900"}>
                          project
                        </span>{" "}
                        ={" "}
                        <span className="text-primary-500">new</span>{" "}
                        <span className="text-[#FFC600] drop-shadow-md">NishiSoft</span>
                        ({"{"}
                      </div>
                      <div>
                        &nbsp;&nbsp;<span className="text-[#9cdcfe]">mode</span>:{" "}
                        <span className="text-accent-400">&apos;lab_development&apos;</span>,
                      </div>
                      <div>
                        &nbsp;&nbsp;<span className="text-[#9cdcfe]">mindset</span>:{" "}
                        <span className="text-accent-400">&apos;ownership&apos;</span>
                      </div>
                      <div>{"}"});</div>
                      <div>&nbsp;</div>
                      <div>
                        <span className="text-primary-500">while</span> (
                        <span className={isDark ? "text-white" : "text-slate-900"}>
                          project
                        </span>
                        .
                        <span className="text-[#dcdcaa]">isActive</span>()) {"{"}
                      </div>
                      <div>
                        &nbsp;&nbsp;<span className="text-primary-500">await</span>{" "}
                        <span className={isDark ? "text-white" : "text-slate-900"}>
                          project
                        </span>
                        .
                        <span className="text-[#dcdcaa]">resolve</span>(
                        <span className="text-[#9cdcfe]">complexIssues</span>);
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div
                  className={`h-6 text-[10px] flex items-center px-3 justify-between ${
                    isDark ? "bg-[#007acc] text-white" : "bg-primary-500 text-white"
                  }`}
                >
                  <div className="flex gap-4">
                    <span>master*</span>
                    <span>0 errors, 0 warnings</span>
                  </div>
                  <div className="flex gap-4">
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>

              {/* Floating Decoration */}
              <div className="absolute -right-12 bottom-10 bg-white/90 dark:bg-slate-800/90 p-4 rounded-lg shadow-xl border-l-4 border-green-500 animate-float hidden md:block backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full text-green-600 dark:text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Build Succeeded
                    </div>
                    <div className="text-[10px] text-slate-500">Ready for production</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
