import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Zen_Maru_Gothic, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans-jp",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif-jp",
});

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-maru",
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "株式会社WABITABI",
  description: "海外挑戦を通じて、自分らしく生きる人を増やす — 株式会社WABITABI コーポレートサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} ${zenMaru.variable} ${shippori.variable} min-h-screen bg-white font-sans text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
