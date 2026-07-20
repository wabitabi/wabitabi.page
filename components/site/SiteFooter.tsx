import Link from "next/link";

const sitemap = [
  { label: "私たちについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "会社情報", href: "/company" },
  { label: "お知らせ", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-sand bg-linen">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="text-lg tracking-[0.3em] text-ink">WABITABI</p>
            <p className="mt-3 text-xs leading-loose text-taupe">
              海外挑戦を通じて、自分らしく生きる人を増やす
              <br />
              株式会社WABITABI — 熊本県
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs tracking-widest text-taupe">
            {sitemap.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sand pt-6 text-[10px] tracking-[0.2em] text-gold md:flex-row">
          <p>© 2026 WABITABI Inc.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-ink">
              利用規約
            </Link>
            <Link href="/privacy" className="hover:text-ink">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
