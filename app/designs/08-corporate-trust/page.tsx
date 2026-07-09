import { photos } from "@/lib/photos";
import { VISION, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE, STATS } from "@/lib/site-content";
import { newsItems } from "@/lib/data/news";

export const metadata = { title: "案08 Corporate Trust｜WABITABI" };

export default function CorporateTrustPage() {
  return (
    <div className="min-h-screen bg-[#f3efe4] font-sans-jp text-[#26332c]">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold tracking-wide text-[#1e3a2f]">株式会社WABITABI</p>
            <p className="text-[10px] tracking-[0.3em] text-[#c9a86a]">WABITABI INC.</p>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#44544b] md:flex">
            <span>私たちについて</span>
            <span>事業内容</span>
            <span>実績紹介</span>
            <span>会社情報</span>
            <span>お知らせ</span>
            <span className="bg-[#1e3a2f] px-5 py-2.5 text-xs font-bold text-white">お問い合わせ</span>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="bg-[#1e3a2f] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-5 border-l-4 border-[#c9a86a] pl-4 text-xs tracking-[0.3em] text-[#c9a86a]">
              OUR VISION
            </p>
            <h1 className="text-3xl font-bold leading-relaxed">{VISION}</h1>
            <p className="mt-6 text-sm leading-loose text-white/75">
              教育機関・自治体との連携実績と心理学的アプローチで、個人の留学から企業の海外研修まで。
              信頼される「海外挑戦のパートナー」であり続けます。
            </p>
            <div className="mt-8 flex gap-4">
              <span className="bg-[#c9a86a] px-7 py-3 text-xs font-bold text-[#1e3a2f]">事業内容を見る</span>
              <span className="border border-white/40 px-7 py-3 text-xs font-bold">会社情報</span>
            </div>
          </div>
          <img src={photos[1].src} alt={photos[1].alt} className="w-full" />
        </div>
      </section>

      {/* 数字 */}
      <section className="border-b border-[#d9d2bf] bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[#d9d2bf] md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-[#1e3a2f]">
                {s.value}
                <span className="text-base text-[#c9a86a]">{s.unit}</span>
              </p>
              <p className="mt-2 text-xs text-[#6b7a70]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 事業 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-xs tracking-[0.3em] text-[#c9a86a]">BUSINESS</p>
        <h2 className="mb-10 text-2xl font-bold text-[#1e3a2f]">3つの事業</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.id} className="border-t-4 border-[#1e3a2f] bg-white shadow-sm">
              <img src={photos[p.photoIndex].src} alt={photos[p.photoIndex].alt} className="w-full" />
              <div className="p-6">
                <h3 className="mb-3 font-bold text-[#1e3a2f]">{p.title}</h3>
                <p className="text-xs leading-loose text-[#6b7a70]">{p.desc}</p>
                <p className="mt-4 text-xs font-bold text-[#c9a86a]">詳細を見る →</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* メッセージ＋ニュース */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs tracking-[0.3em] text-[#c9a86a]">MESSAGE</p>
            <h2 className="mb-6 text-xl font-bold text-[#1e3a2f]">代表挨拶</h2>
            <p className="text-sm leading-[2.1] text-[#44544b]">{CEO_MESSAGE}</p>
            <p className="mt-5 text-xs font-bold text-[#1e3a2f]">
              {CEO_TITLE} {CEO_NAME}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs tracking-[0.3em] text-[#c9a86a]">NEWS</p>
            <h2 className="mb-6 text-xl font-bold text-[#1e3a2f]">お知らせ</h2>
            <ul className="divide-y divide-[#e5dfd0] border-y border-[#e5dfd0]">
              {newsItems.slice(0, 4).map((n) => (
                <li key={n.slug} className="flex gap-5 py-3.5 text-sm">
                  <span className="shrink-0 font-mono text-xs text-[#9aa79f]">{n.date}</span>
                  <span className="leading-snug text-[#44544b]">{n.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a2f] py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          <div className="border border-[#c9a86a] p-8 text-center">
            <p className="mb-2 text-xs tracking-widest text-[#c9a86a]">個人のみなさまへ</p>
            <h3 className="mb-5 text-lg font-bold">留学の無料相談</h3>
            <span className="inline-block bg-[#c9a86a] px-8 py-3 text-xs font-bold text-[#1e3a2f]">
              無料相談を申し込む
            </span>
          </div>
          <div className="border border-white/30 p-8 text-center">
            <p className="mb-2 text-xs tracking-widest text-white/60">法人のみなさまへ</p>
            <h3 className="mb-5 text-lg font-bold">研修・PR等のご相談</h3>
            <span className="inline-block border border-white/60 px-8 py-3 text-xs font-bold">
              お問い合わせ
            </span>
          </div>
        </div>
      </section>

      <footer className="bg-[#14261e] py-8 text-center text-[10px] tracking-[0.2em] text-white/50">
        © 2026 WABITABI Inc. — Kumamoto, Japan
      </footer>
    </div>
  );
}
