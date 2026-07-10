import Link from "next/link";
import { photos, heroPhoto, danangPhotos, Photo } from "@/lib/photos";
import { VISION_LINES, SUB_COPY, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";
import { newsItems } from "@/lib/data/news";
import { resultItems } from "@/lib/data/results";
import { BUSINESS_CATEGORY_LABEL } from "@/lib/types";
import { Eyebrow } from "@/components/site/Eyebrow";

export const metadata = {
  title: "株式会社WABITABI｜海外挑戦を通じて、自分らしく生きる人を増やす",
};

// 事業ごとの写真（くまもと留学相談室は実写真が届くまでプレースホルダー）
const pillarPhoto: Record<string, Photo> = {
  wellbeing: danangPhotos.beach,
  ryugaku: photos[3],
  sns: danangPhotos.cafe,
};

export default function TopPage() {
  return (
    <>
      {/* ファーストビュー：16:9アニメーションヒーロー */}
      <section className="px-0 md:px-6 md:pt-6">
        <div className="relative mx-auto aspect-video max-w-6xl overflow-hidden">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="animate-hero-zoom h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/35" />
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

      {/* ビジョン */}
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center">
        <Eyebrow className="animate-fade-up animation-delay-300 mb-10">Our Vision</Eyebrow>
        <h2 className="animate-fade-up animation-delay-600 text-3xl font-light leading-[2.2] tracking-wider md:text-4xl">
          {VISION_LINES[0]}
          <br />
          {VISION_LINES[1]}
        </h2>
        <p className="animate-fade-up animation-delay-1200 mt-10 text-sm leading-loose text-taupe">
          {SUB_COPY}
        </p>
      </section>

      {/* 事業：3本柱 */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow className="mb-16 text-center">Our Services</Eyebrow>
          <div className="space-y-20">
            {PILLARS.map((p, i) => (
              <div
                key={p.id}
                className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <img
                  src={pillarPhoto[p.id].src}
                  alt={pillarPhoto[p.id].alt}
                  className="w-full max-w-xs object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="mb-2 text-[10px] tracking-[0.3em] text-gold">{`0${i + 1}`}</p>
                  <h3 className="mb-5 text-2xl font-light tracking-wide">{p.title}</h3>
                  <p className="text-sm leading-loose text-taupe">{p.desc}</p>
                  <Link
                    href={`/services#${p.id}`}
                    className="mt-6 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] text-ink transition hover:text-gold"
                  >
                    詳しく見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="border-t border-sand py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Eyebrow className="mb-10">Message</Eyebrow>
          <p className="text-base font-light leading-[2.4]">{CEO_MESSAGE}</p>
          <p className="mt-10 text-xs tracking-widest text-taupe">
            {CEO_TITLE} {CEO_NAME}
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] text-ink transition hover:text-gold"
            >
              私たちについて
            </Link>
          </div>
        </div>
      </section>

      {/* 実績・お知らせ */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-2">
          <div>
            <Eyebrow className="mb-8">Works</Eyebrow>
            <div className="space-y-6">
              {resultItems.slice(0, 3).map((item) => (
                <Link key={item.slug} href={`/results/${item.slug}`} className="group block">
                  <p className="text-[10px] tracking-[0.2em] text-gold">
                    {item.date} — {BUSINESS_CATEGORY_LABEL[item.category]}
                  </p>
                  <p className="mt-1.5 border-b border-sand pb-4 text-sm leading-relaxed transition group-hover:text-gold">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
            <Link
              href="/results"
              className="mt-8 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
            >
              実績紹介一覧
            </Link>
          </div>
          <div>
            <Eyebrow className="mb-8">News</Eyebrow>
            <div className="space-y-6">
              {newsItems.slice(0, 3).map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`} className="group block">
                  <p className="text-[10px] tracking-[0.2em] text-gold">
                    {item.date} — {BUSINESS_CATEGORY_LABEL[item.category]}
                  </p>
                  <p className="mt-1.5 border-b border-sand pb-4 text-sm leading-relaxed transition group-hover:text-gold">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
            <Link
              href="/news"
              className="mt-8 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
            >
              お知らせ一覧
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-sand bg-linen py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-xl font-light tracking-wide">まずは、無料相談から</h2>
          <p className="mb-10 text-sm leading-loose text-taupe">
            くまもと留学相談室では、留学のご相談を無料で承っています。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href="/contact/ryugaku"
              className="inline-block border border-ink bg-ink px-10 py-3 text-sm tracking-widest text-paper transition hover:bg-paper hover:text-ink"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold px-10 py-3 text-sm tracking-widest text-taupe transition hover:text-ink"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
