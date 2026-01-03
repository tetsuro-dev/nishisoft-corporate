import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishisoft.com"),
  title: "西ソフト株式会社 | 技術で事業を加速させる",
  description: "まるでクライアント社内チームのように機動的。西ソフト株式会社は、ラボ型開発と技術コンサルティングで事業の成長を支援します。",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "西ソフト株式会社 | 技術で事業を加速させる",
    description: "まるでクライアント社内チームのように機動的。ラボ型開発と技術コンサルティングで事業の成長を支援。",
    url: "https://nishisoft.com",
    siteName: "西ソフト",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Old Lens Effects */}
          <div className="film-grain" />
          <div className="vignette" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
