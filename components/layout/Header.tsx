import Link from "next/link";

const navItems = [
  { label: "私たちについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "実績紹介", href: "/results" },
  { label: "会社情報", href: "/company" },
  { label: "お知らせ", href: "/news" },
];

export function Header() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-mono text-sm font-bold text-gray-800">
          [LOGO] 株式会社WABITABI
        </Link>
        <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="border border-gray-400 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
        >
          お問い合わせ
        </Link>
      </div>
      {/* 3本柱ショートカット */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4 px-4 py-2 text-xs text-gray-500">
          <span className="font-mono">3本柱：</span>
          <Link href="/services#wellbeing" className="hover:underline">
            Wellbeing留学
          </Link>
          <Link href="/services#ryugaku" className="hover:underline">
            くまもと留学相談室
          </Link>
          <Link href="/services#sns" className="hover:underline">
            SNS PR事業
          </Link>
        </div>
      </div>
    </header>
  );
}
