import { photos } from "@/lib/photos";
import { PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE, STATS } from "@/lib/site-content";

export const metadata = { title: "案09 Soft Gradient｜WABITABI" };

export default function SoftGradientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf1e0] via-[#ffe4d1] to-[#ffd0b8] font-sans-jp text-[#503528]">
      <header className="sticky top-0 z-40 border-b border-white/50 bg-white/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="bg-gradient-to-r from-[#e77e55] to-[#d95f7e] bg-clip-text text-xl font-black tracking-tight text-transparent">
            WABITABI
          </p>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#7a5a48] md:flex">
            <span>About</span>
            <span>Services</span>
            <span>Works</span>
            <span>News</span>
            <span className="rounded-full bg-gradient-to-r from-[#e77e55] to-[#d95f7e] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e77e55]/30">
              無料相談
            </span>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <p className="mb-6 inline-block rounded-full border border-white/70 bg-white/50 px-5 py-1.5 text-xs font-bold text-[#c05f38] backdrop-blur">
          ✦ 熊本発・海外挑戦デザインカンパニー
        </p>
        <h1 className="text-4xl font-black leading-[1.6] tracking-tight md:text-5xl">
          海外挑戦を通じて、
          <br />
          <span className="bg-gradient-to-r from-[#e77e55] via-[#d95f7e] to-[#c9694f] bg-clip-text text-transparent">
            自分らしく生きる人
          </span>
          を増やす
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-loose text-[#8a6a55]">
          ポジティブ心理学 × 行動分析にもとづく体験設計で、「いつか」を「いま」に変える。
        </p>
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-white/40 backdrop-blur" aria-hidden />
          <img src={photos[2].src} alt={photos[2].alt} className="relative w-full rounded-[2rem] shadow-2xl shadow-[#e77e55]/20" />
        </div>
      </section>

      {/* 数字：ガラスカード */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-white/70 bg-white/45 p-6 text-center shadow-lg shadow-[#e77e55]/10 backdrop-blur-md"
            >
              <p className="bg-gradient-to-r from-[#e77e55] to-[#d95f7e] bg-clip-text text-3xl font-black text-transparent">
                {s.value}
                <span className="text-lg">{s.unit}</span>
              </p>
              <p className="mt-2 text-xs font-medium text-[#8a6a55]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 事業 */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              className="group rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-lg shadow-[#e77e55]/10 backdrop-blur-md transition hover:-translate-y-1"
            >
              <img
                src={photos[p.photoIndex].src}
                alt={photos[p.photoIndex].alt}
                className="mb-5 w-full rounded-3xl"
              />
              <h3 className="mb-3 text-lg font-black">{p.title}</h3>
              <p className="text-xs leading-loose text-[#8a6a55]">{p.desc}</p>
              <p className="mt-4 text-sm font-bold text-[#e77e55] transition group-hover:translate-x-1">
                詳しく →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* メッセージ */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/55 p-10 text-center shadow-xl shadow-[#e77e55]/10 backdrop-blur-md">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d95f7e]">Message</p>
          <p className="text-sm leading-[2.3] md:text-base">{CEO_MESSAGE}</p>
          <p className="mt-6 text-xs font-bold text-[#8a6a55]">
            {CEO_TITLE} {CEO_NAME}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-8 text-center">
        <h2 className="mb-4 text-3xl font-black tracking-tight">はじめの一歩を、いちばん軽く。</h2>
        <p className="mb-10 text-sm text-[#8a6a55]">留学のご相談は何度でも無料です。</p>
        <span className="inline-block rounded-full bg-gradient-to-r from-[#e77e55] to-[#d95f7e] px-14 py-4 text-base font-black text-white shadow-xl shadow-[#e77e55]/40">
          無料相談を申し込む
        </span>
        <p className="mt-6 text-xs font-medium text-[#b08a72] underline underline-offset-4">
          企業・メディアの方のお問い合わせ
        </p>
      </section>

      <footer className="border-t border-white/60 bg-white/30 py-8 text-center text-xs font-medium text-[#b08a72] backdrop-blur">
        © 2026 WABITABI Inc.
      </footer>
    </div>
  );
}
