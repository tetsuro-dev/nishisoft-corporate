"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  { label: "サービス", href: "#services" },
  { label: "思想", href: "#principles" },
  { label: "経営陣", href: "#team" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay - Outside header for proper z-index */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <button
          type="button"
          className={`absolute inset-0 bg-white dark:bg-slate-950 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="メニューを閉じる"
        />

        {/* Menu Content */}
        <div
          id="mobile-menu"
          className="relative h-full flex flex-col justify-center items-center px-8"
        >
          <nav className="flex flex-col items-center space-y-10">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-[family-name:var(--font-noto-serif-jp)] font-medium text-slate-900 dark:text-white transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100 + 150}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={`mt-8 inline-block px-10 py-4 bg-primary-500 text-white hover:bg-primary-600 rounded-full font-bold text-lg transition-all duration-500 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isMenuOpen ? "350ms" : "0ms" }}
            >
              お問い合わせ
            </a>
          </nav>

        </div>
      </div>

      <header
        className={`fixed top-0 w-full z-[110] transition-all duration-500 ${
          isScrolled && !isMenuOpen
            ? "py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Image
              src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
              alt="西ソフト"
              width={140}
              height={36}
              className="h-7 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
              aria-label="テーマを切り替える"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold tracking-wide rounded-full bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              お問い合わせ
            </a>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400"
              aria-label="テーマを切り替える"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
            <span
              className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
