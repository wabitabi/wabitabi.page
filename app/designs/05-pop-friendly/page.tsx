import { photos } from "@/lib/photos";
import { PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE, STATS } from "@/lib/site-content";

export const metadata = { title: "案05 Pop & Friendly｜WABITABI" };

const cardColors = ["bg-[#ffe3d0]", "bg-[#fff0c9]", "bg-[#dff0dd]"];

export default function PopFriendlyPage() {
  return (
    <div className="min-h-screen bg-[#fff8ec] font-maru text-[#4a3a2e]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <p className="text-xl font-bold text-[#ff8a5c]">WABITABI</p>
        <nav className="hidden items-center gap-6 text-sm font-bold text-[#8a7562] md:flex">
          <span>わたしたち</span>
          <span>サービス</span>
          <span>じっせき</span>
          <span>おしらせ</span>
          <span className="rounded-full bg-[#ff8a5c] px-5 py-2.5 text-white shadow-[0_4px_0_#e06a3c]">
            無料相談する
          </span>
        </nav>
      </header>

      {/* ヒーロー */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 inline-block rounded-full bg-[#ffd9a8] px-4 py-1.5 text-xs font-bold text-[#b06a2c]">
              ＼ 熊本から世界へ ／
            </p>
            <h1 className="text-3xl font-bold leading-[1.8] md:text-4xl">
              海外挑戦を通じて、
              <br />
              <span className="rounded-lg bg-[#ff8a5c] px-2 text-white">自分らしく</span>
              生きる人を増やす
            </h1>
            <p className="mt-6 text-sm leading-loose text-[#8a7562]">
              「留学って、わたしにもできるのかな？」——その気持ちだけで、じゅうぶんです。
              最初の一歩から帰国後まで、ぜんぶ一緒に考えます。
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 md:flex-row">
              <span className="rounded-full bg-[#ff8a5c] px-8 py-3.5 text-sm font-bold text-white shadow-[0_4px_0_#e06a3c]">
                無料で相談してみる 🌏
              </span>
              <span className="rounded-full border-2 border-[#ffd9a8] bg-white px-8 py-3 text-sm font-bold text-[#b06a2c]">
                サービスを見る
              </span>
            </div>
          </div>
          <div className="relative w-full max-w-sm">
            <img src={photos[4].src} alt={photos[4].alt} className="w-full rounded-[2rem] border-4 border-white shadow-xl" />
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="absolute -bottom-8 -left-10 hidden w-36 rotate-[-6deg] rounded-2xl border-4 border-white shadow-lg md:block"
            />
          </div>
        </div>
      </section>

      {/* 数字 */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`rounded-3xl p-5 text-center ${cardColors[i % 3]}`}>
              <p className="text-3xl font-bold text-[#e06a3c]">
                {s.value}
                <span className="text-base">{s.unit}</span>
              </p>
              <p className="mt-1 text-xs font-bold text-[#8a7562]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 事業 */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-2 text-center text-2xl font-bold">できること、3つ。</h2>
        <p className="mb-10 text-center text-sm text-[#8a7562]">それぞれ詳しく紹介します</p>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.id} className={`rounded-[2rem] p-7 ${cardColors[i]}`}>
              <img
                src={photos[p.photoIndex].src}
                alt={photos[p.photoIndex].alt}
                className="mb-5 w-full rounded-2xl border-4 border-white"
              />
              <h3 className="mb-3 text-lg font-bold">{p.title}</h3>
              <p className="text-xs leading-loose text-[#6e5c4c]">{p.desc}</p>
              <p className="mt-4 text-sm font-bold text-[#e06a3c]">くわしく見る →</p>
            </div>
          ))}
        </div>
      </section>

      {/* メッセージ */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <img src={photos[1].src} alt={photos[1].alt} className="w-40 shrink-0 rounded-full border-4 border-[#ffd9a8]" />
            <div>
              <p className="mb-3 inline-block rounded-full bg-[#ffd9a8] px-4 py-1 text-xs font-bold text-[#b06a2c]">
                代表からのメッセージ
              </p>
              <p className="text-sm leading-[2.2]">{CEO_MESSAGE}</p>
              <p className="mt-4 text-xs font-bold text-[#8a7562]">
                {CEO_TITLE} {CEO_NAME}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="mb-3 text-2xl font-bold">まずは、おしゃべりから🕊️</h2>
        <p className="mb-8 text-sm text-[#8a7562]">相談はぜんぶ無料。オンラインでも熊本でも。</p>
        <span className="inline-block rounded-full bg-[#ff8a5c] px-12 py-4 text-base font-bold text-white shadow-[0_5px_0_#e06a3c]">
          無料相談を申し込む
        </span>
        <p className="mt-6 text-xs text-[#b0a08e]">企業のご担当者さまのお問い合わせはこちら</p>
      </section>

      <footer className="bg-[#ffd9a8]/50 py-8 text-center text-xs font-bold text-[#b06a2c]">
        © 2026 WABITABI Inc. 🧡 Kumamoto
      </footer>
    </div>
  );
}
