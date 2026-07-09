import { photos } from "@/lib/photos";
import { PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";

export const metadata = { title: "案06 Bold Typography｜WABITABI" };

export default function BoldTypePage() {
  return (
    <div className="min-h-screen bg-[#f5ead8] font-sans-jp text-[#2e2018]">
      <header className="flex items-center justify-between border-b-4 border-[#2e2018] px-6 py-4">
        <p className="text-2xl font-black tracking-tighter text-[#c1502e]">WABITABI</p>
        <nav className="hidden gap-6 text-xs font-black uppercase tracking-widest md:flex">
          <span>About</span>
          <span>Service</span>
          <span>Works</span>
          <span>News</span>
          <span className="bg-[#c1502e] px-4 py-1.5 text-[#f5ead8]">Contact</span>
        </nav>
      </header>

      {/* ヒーロー：巨大タイポ */}
      <section className="border-b-4 border-[#2e2018] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-[13vw] font-black leading-[0.95] tracking-tighter md:text-8xl">
            海外挑戦で、
            <br />
            <span className="text-[#c1502e]">自分らしく</span>
            <br />
            生きる。
          </h1>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm font-bold leading-loose">
              株式会社WABITABIは、熊本から「海外挑戦」をデザインする会社です。
              留学も、起業も、SNSも。ぜんぶ、自分らしさへの入り口。
            </p>
            <img src={photos[4].src} alt={photos[4].alt} className="w-56 border-4 border-[#2e2018]" />
          </div>
        </div>
      </section>

      {/* スローガン帯 */}
      <div className="overflow-hidden whitespace-nowrap border-b-4 border-[#2e2018] bg-[#c1502e] py-3 text-sm font-black uppercase tracking-[0.3em] text-[#f5ead8]">
        <span className="inline-block">
          Wellbeing Ryugaku ✦ Kumamoto Ryugaku Soudan ✦ SNS PR ✦ Wellbeing Ryugaku ✦ Kumamoto
          Ryugaku Soudan ✦ SNS PR ✦
        </span>
      </div>

      {/* 事業 */}
      <section className="border-b-4 border-[#2e2018]">
        {PILLARS.map((p, i) => (
          <div
            key={p.id}
            className={`flex flex-col gap-6 border-b-4 border-[#2e2018] px-6 py-10 last:border-b-0 md:flex-row md:items-center ${
              i % 2 === 1 ? "bg-[#eddcbe]" : ""
            }`}
          >
            <p className="text-6xl font-black text-[#c1502e] md:w-40">{`0${i + 1}`}</p>
            <div className="flex-1">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">{p.title}</h2>
              <p className="mt-3 max-w-xl text-xs font-bold leading-loose text-[#5c4634]">{p.desc}</p>
            </div>
            <img
              src={photos[p.photoIndex].src}
              alt={photos[p.photoIndex].alt}
              className="w-40 border-4 border-[#2e2018] md:w-48"
            />
          </div>
        ))}
      </section>

      {/* メッセージ */}
      <section className="border-b-4 border-[#2e2018] bg-[#2e2018] px-6 py-16 text-[#f5ead8]">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-[#c1502e]">Message</p>
          <p className="text-2xl font-black leading-[1.9] md:text-3xl">{CEO_MESSAGE}</p>
          <p className="mt-8 text-xs font-bold tracking-widest opacity-70">
            {CEO_TITLE} {CEO_NAME}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-5xl font-black tracking-tighter md:text-6xl">
          TALK TO US<span className="text-[#c1502e]">.</span>
        </h2>
        <p className="mt-4 text-sm font-bold">留学相談は無料。まずは話そう。</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <span className="border-4 border-[#2e2018] bg-[#c1502e] px-12 py-4 text-sm font-black uppercase tracking-widest text-[#f5ead8]">
            無料相談を申し込む
          </span>
          <span className="border-4 border-[#2e2018] px-12 py-4 text-sm font-black uppercase tracking-widest">
            お問い合わせ
          </span>
        </div>
      </section>

      <footer className="border-t-4 border-[#2e2018] py-6 text-center text-xs font-black uppercase tracking-[0.3em]">
        © 2026 WABITABI Inc.
      </footer>
    </div>
  );
}
