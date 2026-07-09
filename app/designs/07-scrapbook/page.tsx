import { photos } from "@/lib/photos";
import { PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";

export const metadata = { title: "案07 Scrapbook｜WABITABI" };

function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 h-7 w-24 bg-[#e9c98a]/80 shadow-sm ${className}`}
      style={{ clipPath: "polygon(2% 0, 98% 4%, 100% 96%, 0 100%)" }}
    />
  );
}

export default function ScrapbookPage() {
  return (
    <div className="min-h-screen bg-[#e8dcc3] font-maru text-[#4a3a28] [background-image:radial-gradient(#d8c9a8_1px,transparent_1px)] [background-size:24px_24px]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="rotate-[-2deg] rounded bg-white px-4 py-2 text-lg font-bold shadow-md">
          WABITABI <span className="text-[#d97f4e]">旅ノート</span>
        </p>
        <nav className="hidden gap-5 text-sm font-bold text-[#7a6648] md:flex">
          <span className="underline decoration-wavy decoration-[#d97f4e]">私たちについて</span>
          <span>サービス</span>
          <span>実績</span>
          <span>おしらせ</span>
          <span className="rotate-2 rounded bg-[#d97f4e] px-4 py-1.5 text-white shadow">相談する✈</span>
        </nav>
      </header>

      {/* ヒーロー：コラージュ */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rotate-[-1deg] bg-[#fff9e8] px-3 py-1 text-xs font-bold text-[#b06a2c] shadow">
              熊本 → 世界 の旅の記録
            </p>
            <h1 className="text-3xl font-bold leading-[1.9] md:text-4xl">
              海外挑戦を通じて、
              <br />
              自分らしく生きる
              <br />
              人を増やす。
            </h1>
            <p className="mt-6 max-w-md text-sm leading-loose text-[#7a6648]">
              33カ国分の旅の頁から生まれた会社です。あなたの最初の1ページを、一緒に書きはじめませんか。
            </p>
          </div>
          <div className="relative h-[420px]">
            <div className="absolute left-2 top-0 w-52 rotate-[-5deg] bg-white p-3 pb-10 shadow-lg">
              <Tape className="-top-3 left-14 rotate-[-8deg]" />
              <img src={photos[0].src} alt={photos[0].alt} className="w-full" />
              <p className="mt-2 text-center text-[10px]">{photos[0].caption}</p>
            </div>
            <div className="absolute right-4 top-10 w-52 rotate-[4deg] bg-white p-3 pb-10 shadow-lg">
              <Tape className="-top-3 left-14 rotate-[6deg]" />
              <img src={photos[4].src} alt={photos[4].alt} className="w-full" />
              <p className="mt-2 text-center text-[10px]">{photos[4].caption}</p>
            </div>
            <div className="absolute bottom-0 left-1/2 w-52 -translate-x-1/2 rotate-[-2deg] bg-white p-3 pb-10 shadow-lg">
              <Tape className="-top-3 left-14 rotate-[-4deg]" />
              <img src={photos[3].src} alt={photos[3].alt} className="w-full" />
              <p className="mt-2 text-center text-[10px]">{photos[3].caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業：付箋カード */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-10 text-center text-2xl font-bold">
          <span className="rounded bg-white px-4 py-1 shadow rotate-1 inline-block">3つの旅のかたち</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.id}
              className={`relative bg-[#fffdf5] p-6 shadow-md ${["rotate-[-1.5deg]", "rotate-[1deg]", "rotate-[-0.5deg]"][i]}`}
            >
              <Tape className="-top-3 left-1/2 -translate-x-1/2" />
              <p className="mb-3 text-xs font-bold text-[#d97f4e]">{`no.${i + 1}`}</p>
              <h3 className="mb-3 border-b-2 border-dashed border-[#d8c9a8] pb-2 text-lg font-bold">
                {p.title}
              </h3>
              <p className="text-xs leading-loose text-[#7a6648]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* メッセージ：手紙風 */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="relative rotate-[0.5deg] bg-[#fffdf5] p-10 shadow-lg [background-image:repeating-linear-gradient(transparent,transparent_31px,#e5d9be_32px)]">
          <Tape className="-top-3 right-10 rotate-[8deg]" />
          <p className="mb-4 text-sm font-bold text-[#d97f4e]">あなたへ、</p>
          <p className="text-sm leading-[2.3]">{CEO_MESSAGE}</p>
          <p className="mt-6 text-right text-xs font-bold text-[#7a6648]">
            {CEO_TITLE} {CEO_NAME} より
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <p className="mb-3 text-sm font-bold text-[#7a6648]">切手はいりません。相談は無料です。</p>
        <span className="inline-block rotate-[-1deg] rounded bg-[#d97f4e] px-12 py-4 text-base font-bold text-white shadow-[3px_3px_0_#b05e34]">
          無料相談を申し込む ✈
        </span>
        <p className="mt-6 text-xs text-[#9a8664]">その他のお問い合わせはこちらから</p>
      </section>

      <footer className="py-8 text-center text-xs font-bold text-[#9a8664]">
        © 2026 WABITABI Inc. — 旅の続きは、あなたと。
      </footer>
    </div>
  );
}
