import { photos } from "@/lib/photos";
import { PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";

export const metadata = { title: "案04 Wabi-Sabi｜WABITABI" };

export default function WabiSabiPage() {
  return (
    <div className="min-h-screen bg-[#f3efe6] font-shippori text-[#1f1d1a]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b3402a] text-sm font-bold text-white">
            侘
          </span>
          <p className="text-lg tracking-[0.2em]">株式会社WABITABI</p>
        </div>
        <nav className="hidden gap-7 text-xs tracking-[0.2em] text-[#5c564c] md:flex">
          <span>私たちについて</span>
          <span>事業内容</span>
          <span>実績</span>
          <span>お知らせ</span>
          <span className="border-b border-[#b3402a] pb-0.5 text-[#b3402a]">相談する</span>
        </nav>
      </header>

      {/* ヒーロー：縦書き */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-stretch md:justify-between">
          <div className="flex gap-8">
            <h1 className="writing-vertical text-3xl font-semibold leading-loose tracking-[0.35em] md:text-4xl">
              自分らしく生きる人を増やす
            </h1>
            <p className="writing-vertical text-base tracking-[0.35em] text-[#b3402a]">
              海外挑戦を通じて
            </p>
          </div>
          <div className="relative w-full max-w-md">
            <img src={photos[0].src} alt={photos[0].alt} className="w-full" />
            <span className="absolute -left-3 -top-3 h-full w-full border border-[#b3402a]/40" aria-hidden />
          </div>
        </div>
        <p className="mt-14 max-w-xl text-sm leading-[2.4] text-[#5c564c]">
          侘び、そして旅。日常の外に出てはじめて出会える「自分」がある——。
          熊本の地から、心理学にもとづいた海外挑戦の体験を届けます。
        </p>
      </section>

      {/* 事業：三つの柱 */}
      <section className="bg-[#eae4d6] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#1f1d1a]/20" />
            <h2 className="text-xl tracking-[0.4em]">三つの柱</h2>
            <span className="h-px flex-1 bg-[#1f1d1a]/20" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={p.id} className="border border-[#1f1d1a]/15 bg-[#f3efe6] p-7">
                <p className="mb-5 text-xs tracking-[0.3em] text-[#b3402a]">{["壱", "弐", "参"][i]}</p>
                <h3 className="mb-4 text-lg font-semibold tracking-widest">{p.title}</h3>
                <p className="text-xs leading-[2.2] text-[#5c564c]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 写真帯 */}
      <section className="flex gap-2 overflow-hidden py-2">
        {photos.map((ph) => (
          <img key={ph.id} src={ph.src} alt={ph.alt} className="h-40 w-1/5 min-w-0 object-cover grayscale-[15%] sepia-[20%]" />
        ))}
      </section>

      {/* メッセージ */}
      <section className="py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 md:flex-row">
          <div className="shrink-0">
            <span className="writing-vertical text-sm tracking-[0.4em] text-[#b3402a]">代表の言葉</span>
          </div>
          <div>
            <p className="text-base leading-[2.6]">{CEO_MESSAGE}</p>
            <p className="mt-8 text-xs tracking-[0.3em] text-[#5c564c]">
              {CEO_TITLE}　{CEO_NAME}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1f1d1a]/15 py-16 text-center">
        <p className="mb-3 text-xs tracking-[0.4em] text-[#b3402a]">ご相談は無料です</p>
        <h2 className="mb-10 text-xl tracking-[0.2em]">一歩を、ともに。</h2>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <span className="bg-[#b3402a] px-12 py-3.5 text-sm tracking-[0.2em] text-white">無料相談を申し込む</span>
          <span className="border border-[#1f1d1a]/40 px-12 py-3.5 text-sm tracking-[0.2em]">お問い合わせ</span>
        </div>
      </section>

      <footer className="bg-[#1f1d1a] py-8 text-center text-[10px] tracking-[0.4em] text-[#f3efe6]/60">
        株式会社WABITABI — 熊本県
      </footer>
    </div>
  );
}
