import Link from "next/link";

const footerLinks = [
  { label: "私たちについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "実績紹介", href: "/results" },
  { label: "会社情報", href: "/company" },
  { label: "お知らせ", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "利用規約", href: "/terms" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <p className="mb-4 font-mono text-sm font-bold text-gray-700">株式会社WABITABI</p>
        <nav className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-gray-400">© 2026 WABITABI Inc. （ワイヤーフレーム版）</p>
      </div>
    </footer>
  );
}
