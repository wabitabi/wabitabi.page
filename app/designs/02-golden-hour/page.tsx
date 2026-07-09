import { photos } from "@/lib/photos";
import { VISION_LINES, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE, STATS } from "@/lib/site-content";

export const metadata = { title: "案02 Golden Hour｜WABITABI" };

export default function GoldenHourPage() {
  return (
    <div className="min-h-screen bg-[#2b1a12] font-serif-jp text-[#ffe9c4]">
      {/* フルスクリーンヒーロー */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={photos[3].src}
          alt={photos[3].alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b1a12] via-[#2b1a12]/30 to-transparent" />
        <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-8 py-6">
          <p className="text-sm font-bold tracking-[0.3em] text-white drop-shadow">WABITABI</p>
          <nav className="hidden gap-6 text-xs text-white/80 md:flex">
            <span>About</span>
            <span>Services</span>
            <span>Works</span>
            <span>News</span>
            <span className="rounded-full border border-white/60 px-4 py-1.5">Contact</span>
          </nav>
        </header>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-8 pb-24">
          <p className="mb-6 text-xs tracking-[0.4em] text-[#f2994a]">FROM KUMAMOTO TO THE WORLD</p>
          <h1 className="text-4xl font-semibold leading-snug tracking-wide md:text-6xl">
            {VISION_LINES[0]}
            <br />
            {VISION_LINES[1]}
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-loose text-[#ffe9c4]/80">
            夕暮れの空を見上げたときの、あの胸の高鳴りを。私たちは「海外挑戦」というかたちで届けます。
          </p>
        </div>
      </section>

      {/* 数字 */}
      <section className="border-y border-[#f2994a]/30 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-semibold text-[#f2994a]">
                {s.value}
                <span className="text-lg">{s.unit}</span>
              </p>
              <p className="mt-2 text-xs text-[#ffe9c4]/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 事業：写真と物語 */}
      {PILLARS.map((p, i) => (
        <section key={p.id} className="relative flex min-h-[70vh] items-center overflow-hidden">
          <img
            src={photos[p.photoIndex].src}
            alt={photos[p.photoIndex].alt}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div
            className={`absolute inset-0 from-[#2b1a12] via-[#2b1a12]/60 to-transparent ${
              i % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
            }`}
          />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-8 py-24">
            <div className={`max-w-md ${i % 2 === 1 ? "ml-auto text-right" : ""}`}>
              <p className="mb-3 text-xs tracking-[0.4em] text-[#f2994a]">{`SCENE 0${i + 1}`}</p>
              <h2 className="mb-6 text-3xl font-semibold tracking-wide">{p.title}</h2>
              <p className="text-sm leading-loose text-[#ffe9c4]/85">{p.desc}</p>
            </div>
          </div>
        </section>
      ))}

      {/* メッセージ */}
      <section className="py-28 text-center">
        <div className="mx-auto max-w-2xl px-8">
          <p className="mb-8 text-xs tracking-[0.4em] text-[#f2994a]">MESSAGE</p>
          <p className="text-lg leading-[2.4]">{CEO_MESSAGE}</p>
          <p className="mt-8 text-xs tracking-widest text-[#ffe9c4]/70">
            {CEO_TITLE} {CEO_NAME}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#2b1a12] to-[#4a2a18] pb-28 pt-10 text-center">
        <h2 className="mb-4 text-2xl font-semibold">あなたの物語は、ここから。</h2>
        <p className="mb-10 text-sm text-[#ffe9c4]/70">留学のご相談は、いつでも無料です。</p>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <span className="rounded-full bg-[#f2994a] px-10 py-3.5 text-sm font-bold text-[#2b1a12]">
            無料相談を申し込む
          </span>
          <span className="rounded-full border border-[#ffe9c4]/50 px-10 py-3.5 text-sm">
            お問い合わせ
          </span>
        </div>
      </section>

      <footer className="border-t border-[#f2994a]/20 py-8 text-center text-[10px] tracking-[0.3em] text-[#ffe9c4]/50">
        © 2026 WABITABI Inc.
      </footer>
    </div>
  );
}
