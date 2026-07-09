import { photos } from "@/lib/photos";
import { VISION_LINES, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";

export const metadata = { title: "案10 Film Gallery｜WABITABI" };

export default function FilmGalleryPage() {
  return (
    <div className="film-grain min-h-screen bg-[#171310] font-serif-jp text-[#f3e9d8]">
      <header className="flex items-center justify-between px-8 py-6">
        <p className="text-sm tracking-[0.5em]">WABITABI</p>
        <nav className="hidden gap-8 text-[11px] tracking-[0.25em] text-[#f3e9d8]/60 md:flex">
          <span>ABOUT</span>
          <span>SERVICES</span>
          <span>WORKS</span>
          <span>NEWS</span>
          <span className="text-[#c98d4e]">CONTACT</span>
        </nav>
      </header>

      {/* ヒーロー */}
      <section className="px-8 pb-20 pt-16 text-center">
        <p className="mb-8 text-[10px] tracking-[0.6em] text-[#c98d4e]">
          A JOURNEY TO YOURSELF — EST. 2026, KUMAMOTO
        </p>
        <h1 className="text-3xl font-light leading-[2] tracking-[0.15em] md:text-4xl">
          {VISION_LINES[0]}
          <br />
          {VISION_LINES[1]}
        </h1>
      </section>

      {/* ギャラリー */}
      <section className="mx-auto max-w-6xl px-8 pb-24">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {photos.map((ph, i) => (
            <figure key={ph.id} className={i === 0 || i === 3 ? "md:col-span-2" : ""}>
              <div className="overflow-hidden bg-[#0d0a08] p-3">
                <img
                  src={ph.src}
                  alt={ph.alt}
                  className="w-full object-cover opacity-90 transition duration-700 hover:scale-[1.02] hover:opacity-100"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="text-xs italic tracking-widest text-[#c98d4e]">
                  N°{String(ph.id).padStart(2, "0")}
                </span>
                <span className="text-[11px] tracking-[0.2em] text-[#f3e9d8]/60">{ph.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 事業 */}
      <section className="border-t border-[#f3e9d8]/15 py-20">
        <div className="mx-auto max-w-4xl px-8">
          <p className="mb-14 text-center text-[10px] tracking-[0.6em] text-[#c98d4e]">EXHIBITIONS — OUR SERVICES</p>
          <div className="space-y-12">
            {PILLARS.map((p, i) => (
              <div key={p.id} className="flex flex-col gap-4 border-b border-[#f3e9d8]/10 pb-12 last:border-b-0 md:flex-row md:items-baseline md:gap-12">
                <p className="shrink-0 text-xs italic tracking-widest text-[#c98d4e] md:w-24">
                  Room {["I", "II", "III"][i]}
                </p>
                <div>
                  <h2 className="mb-4 text-xl font-light tracking-[0.2em]">{p.title}</h2>
                  <p className="max-w-xl text-xs leading-[2.2] text-[#f3e9d8]/60">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージ */}
      <section className="border-t border-[#f3e9d8]/15 py-24 text-center">
        <div className="mx-auto max-w-2xl px-8">
          <p className="mb-10 text-[10px] tracking-[0.6em] text-[#c98d4e]">CURATOR&apos;S NOTE</p>
          <p className="text-base font-light leading-[2.6]">{CEO_MESSAGE}</p>
          <p className="mt-10 text-[11px] tracking-[0.3em] text-[#f3e9d8]/50">
            {CEO_TITLE}　{CEO_NAME}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#f3e9d8]/15 py-20 text-center">
        <p className="mb-8 text-[10px] tracking-[0.6em] text-[#c98d4e]">ADMISSION FREE — 相談無料</p>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <span className="border border-[#c98d4e] bg-[#c98d4e] px-12 py-3.5 text-xs tracking-[0.3em] text-[#171310]">
            無料相談を申し込む
          </span>
          <span className="border border-[#f3e9d8]/40 px-12 py-3.5 text-xs tracking-[0.3em]">
            お問い合わせ
          </span>
        </div>
      </section>

      <footer className="py-10 text-center text-[10px] tracking-[0.4em] text-[#f3e9d8]/40">
        © 2026 WABITABI INC.
      </footer>
    </div>
  );
}
