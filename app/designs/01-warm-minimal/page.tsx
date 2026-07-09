import Link from "next/link";
import { photos } from "@/lib/photos";
import { VISION_LINES, SUB_COPY, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";

export const metadata = { title: "案01 Warm Minimal｜WABITABI" };

export default function WarmMinimalPage() {
  return (
    <div className="min-h-screen bg-[#faf7f0] font-serif-jp text-[#3d3229]">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
        <p className="text-lg tracking-[0.3em]">WABITABI</p>
        <nav className="hidden gap-8 text-xs tracking-widest text-[#8a7a66] md:flex">
          <span>私たちについて</span>
          <span>サービス</span>
          <span>実績紹介</span>
          <span>お知らせ</span>
          <span className="text-[#3d3229] underline underline-offset-4">お問い合わせ</span>
        </nav>
      </header>

      {/* ファーストビュー：16:9画像＋アニメーション＋英語コピー */}
      <section className="px-0 md:px-6">
        <div className="relative mx-auto aspect-video max-w-6xl overflow-hidden">
          <img
            src={photos[3].src}
            alt={photos[3].alt}
            className="animate-hero-zoom h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <p className="animate-fade-up animation-delay-1200 mb-5 text-[10px] tracking-[0.5em] text-white/85 md:text-xs">
              WABITABI — KUMAMOTO, JAPAN
            </p>
            <h1 className="animate-tracking-in text-2xl font-light uppercase leading-relaxed drop-shadow-md md:text-5xl">
              Creating
              <span className="mx-3 italic text-[#f2cf8d]">a Vibrant</span>
              Society
            </h1>
            <span className="animate-fade-up animation-delay-1200 mt-6 h-px w-16 bg-white/60" aria-hidden />
          </div>
        </div>
      </section>

      {/* ビジョン：16:9画像の下 */}
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center">
        <p className="animate-fade-up animation-delay-300 mb-10 text-xs tracking-[0.4em] text-[#b08b5e]">
          OUR VISION
        </p>
        <h2 className="animate-fade-up animation-delay-600 text-3xl font-light leading-[2.2] tracking-wider md:text-4xl">
          {VISION_LINES[0]}
          <br />
          {VISION_LINES[1]}
        </h2>
        <p className="animate-fade-up animation-delay-1200 mt-10 text-sm leading-loose text-[#8a7a66]">
          {SUB_COPY}
        </p>
      </section>

      <section className="border-t border-[#e5dccb] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-16 text-center text-xs tracking-[0.4em] text-[#b08b5e]">OUR SERVICES</p>
          <div className="space-y-20">
            {PILLARS.map((p, i) => (
              <div key={p.id} className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <img src={photos[p.photoIndex].src} alt={photos[p.photoIndex].alt} className="w-full max-w-xs" />
                <div className="flex-1 text-center md:text-left">
                  <p className="mb-2 text-[10px] tracking-[0.3em] text-[#b08b5e]">{`0${i + 1}`}</p>
                  <h2 className="mb-5 text-2xl font-light tracking-wide">{p.title}</h2>
                  <p className="text-sm leading-loose text-[#8a7a66]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e5dccb] py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-10 text-xs tracking-[0.4em] text-[#b08b5e]">MESSAGE</p>
          <p className="text-base font-light leading-[2.4]">{CEO_MESSAGE}</p>
          <p className="mt-10 text-xs tracking-widest text-[#8a7a66]">
            {CEO_TITLE} {CEO_NAME}
          </p>
        </div>
      </section>

      <section className="border-t border-[#e5dccb] bg-[#f3ede1] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-xl font-light tracking-wide">まずは、無料相談から</h2>
          <p className="mb-10 text-sm leading-loose text-[#8a7a66]">
            くまもと留学相談室では、留学のご相談を無料で承っています。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <span className="inline-block border border-[#3d3229] bg-[#3d3229] px-10 py-3 text-sm tracking-widest text-[#faf7f0]">
              無料相談を申し込む
            </span>
            <span className="inline-block border border-[#b08b5e] px-10 py-3 text-sm tracking-widest text-[#8a7a66]">
              お問い合わせ
            </span>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-[10px] tracking-[0.3em] text-[#b08b5e]">
        © 2026 WABITABI Inc.
      </footer>
    </div>
  );
}
