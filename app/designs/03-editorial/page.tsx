import { photos } from "@/lib/photos";
import { VISION, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";
import { newsItems } from "@/lib/data/news";

export const metadata = { title: "案03 Editorial｜WABITABI" };

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-white font-serif-jp text-[#1a1a1a]">
      <header className="border-b-2 border-[#1a1a1a]">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5">
          <p className="text-2xl font-bold tracking-tight">WABITABI</p>
          <p className="font-sans-jp text-[10px] uppercase tracking-[0.3em] text-[#c1502e]">
            Corporate Journal — Kumamoto, 2026
          </p>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-8 border-t border-[#1a1a1a]/20 px-6 py-2.5 font-sans-jp text-[11px] uppercase tracking-widest">
          <span>About</span>
          <span>Services</span>
          <span>Works</span>
          <span>News</span>
          <span>Company</span>
          <span className="ml-auto text-[#c1502e]">Contact →</span>
        </nav>
      </header>

      {/* ヒーロー：見出し＋非対称グリッド */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-4 font-sans-jp text-[10px] uppercase tracking-[0.4em] text-[#c1502e]">
              Vol.01 — Our Vision
            </p>
            <h1 className="text-4xl font-bold leading-snug tracking-tight md:text-5xl">{VISION}</h1>
            <p className="mt-8 max-w-md border-l-2 border-[#c1502e] pl-5 font-sans-jp text-sm leading-loose text-[#555]">
              熊本発。33カ国を旅した代表が、心理学の知見で「一歩踏み出す体験」を設計する会社です。
            </p>
          </div>
          <div className="md:col-span-5">
            <img src={photos[1].src} alt={photos[1].alt} className="w-full" />
            <p className="mt-2 font-sans-jp text-[10px] tracking-widest text-[#888]">
              fig.1 — {photos[1].caption}
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[photos[0], photos[2], photos[4]].map((ph, i) => (
            <figure key={ph.id}>
              <img src={ph.src} alt={ph.alt} className="w-full" />
              <figcaption className="mt-2 font-sans-jp text-[10px] tracking-widest text-[#888]">
                fig.{i + 2} — {ph.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 事業 */}
      <section className="border-t-2 border-[#1a1a1a]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-10 font-sans-jp text-[10px] uppercase tracking-[0.4em] text-[#c1502e]">
            Index — Our Services
          </h2>
          <div className="grid gap-px overflow-hidden border border-[#1a1a1a] bg-[#1a1a1a] md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={p.id} className="bg-white p-8">
                <p className="mb-6 text-5xl font-bold text-[#c1502e]">{`0${i + 1}`}</p>
                <h3 className="mb-4 text-xl font-bold">{p.title}</h3>
                <p className="font-sans-jp text-xs leading-loose text-[#555]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージ＋ニュース */}
      <section className="border-t border-[#1a1a1a]/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="mb-6 font-sans-jp text-[10px] uppercase tracking-[0.4em] text-[#c1502e]">
              Interview — 代表メッセージ
            </h2>
            <p className="text-lg font-semibold leading-[2.2]">{CEO_MESSAGE}</p>
            <p className="mt-6 font-sans-jp text-xs text-[#888]">
              {CEO_TITLE} {CEO_NAME}
            </p>
          </div>
          <div className="md:col-span-5">
            <h2 className="mb-6 font-sans-jp text-[10px] uppercase tracking-[0.4em] text-[#c1502e]">
              Latest News
            </h2>
            <ul className="divide-y divide-[#1a1a1a]/15 border-y border-[#1a1a1a]/15">
              {newsItems.slice(0, 4).map((n) => (
                <li key={n.slug} className="py-3">
                  <p className="font-sans-jp text-[10px] tracking-widest text-[#888]">{n.date}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug">{n.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-[#1a1a1a] bg-[#1a1a1a] py-16 text-center text-white">
        <p className="mb-2 font-sans-jp text-[10px] uppercase tracking-[0.4em] text-[#c1502e]">Contact</p>
        <h2 className="mb-8 text-2xl font-bold">留学の相談は、すべて無料。</h2>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <span className="bg-[#c1502e] px-10 py-3 font-sans-jp text-sm font-bold">無料相談を申し込む</span>
          <span className="border border-white/50 px-10 py-3 font-sans-jp text-sm">お問い合わせ</span>
        </div>
      </section>

      <footer className="py-6 text-center font-sans-jp text-[10px] uppercase tracking-[0.3em] text-[#888]">
        © 2026 WABITABI Inc. — Kumamoto, Japan
      </footer>
    </div>
  );
}
