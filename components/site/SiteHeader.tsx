import Link from "next/link";

const navItems = [
  { label: "私たちについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "会社情報", href: "/company" },
  { label: "お知らせ", href: "/news" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-sand bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-base tracking-[0.2em] text-ink md:text-lg">
          株式会社WABITABI
        </Link>
        <nav className="hidden items-center gap-7 text-xs tracking-widest text-taupe md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-ink px-5 py-2 text-ink transition hover:bg-ink hover:text-paper"
          >
            お問い合わせ
          </Link>
        </nav>
        <Link href="/contact" className="border border-ink px-4 py-2 text-xs text-ink md:hidden">
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
