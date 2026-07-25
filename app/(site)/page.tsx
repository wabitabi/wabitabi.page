import Link from "next/link";
import { danangPhotos, ryugakuPhoto, guestLecturePhoto, Photo } from "@/lib/photos";
import { VISION, MISSION, PILLARS, CEO_MESSAGE, CEO_NAME, CEO_TITLE } from "@/lib/site-content";
import { newsItems } from "@/lib/data/news";
import { BUSINESS_CATEGORY_LABEL } from "@/lib/types";
import { Eyebrow } from "@/components/site/Eyebrow";
import { HeroParallax } from "@/components/site/HeroParallax";
import { SmartImage } from "@/components/site/SmartImage";

export const metadata = {
  title: "株式会社WABITABI｜海外挑戦を、自分らしく生きるきっかけに",
};

// 事業ごとの写真（くまもと留学相談室・出張授業は実写真が届くまでプレースホルダー）
const pillarPhoto: Record<string, Photo> = {
  wellbeing: danangPhotos.beach,
  ryugaku: ryugakuPhoto,
  shucchou: guestLecturePhoto,
  sns: danangPhotos.cafe,
};

export default function TopPage() {
  return (
    <>
      {/* ファーストビュー：全画面パララックスヒーロー */}
      <HeroParallax />

      {/* ビジョン & ミッション */}
      <section className="mx-auto max-w-4xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="text-center md:text-left">
            <Eyebrow className="mb-8">Vision</Eyebrow>
            <h2 className="text-xl font-light leading-[2] tracking-wider md:text-2xl">{VISION}</h2>
          </div>
          <div className="text-center md:text-left md:border-l md:border-sand md:pl-16">
            <Eyebrow className="mb-8">Mission</Eyebrow>
            <h2 className="text-xl font-light leading-[2] tracking-wider md:text-2xl">{MISSION}</h2>
          </div>
        </div>
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
                <SmartImage
                  photo={pillarPhoto[p.id]}
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

      {/* お知らせ */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow className="mb-10 text-center">News</Eyebrow>
          <ul className="border-t border-sand">
            {newsItems.slice(0, 4).map((item) => (
              <li key={item.slug} className="border-b border-sand">
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex flex-col gap-1.5 py-5 md:flex-row md:items-baseline md:gap-8"
                >
                  <span className="shrink-0 text-[10px] tracking-[0.25em] text-gold md:w-24">
                    {item.date}
                  </span>
                  <span className="shrink-0 text-[10px] tracking-[0.2em] text-taupe md:w-36">
                    {BUSINESS_CATEGORY_LABEL[item.category]}
                  </span>
                  <span className="text-sm leading-relaxed transition group-hover:text-gold">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
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
