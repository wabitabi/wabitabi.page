import Link from "next/link";
import { photos, danangPhotos } from "@/lib/photos";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";

export const metadata = { title: "サービス｜株式会社WABITABI" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        en="Services"
        title="サービス"
        lead="Wellbeing留学・くまもと留学相談室・SNS PR事業。3つの事業を通じて、海外挑戦を身近なものにします。"
      />

      {/* 事業① Wellbeing留学 */}
      <section id="wellbeing" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <img src={danangPhotos.beach.src} alt={danangPhotos.beach.alt} className="w-full max-w-sm object-cover" />
            <div className="flex-1">
              <p className="mb-2 text-[10px] tracking-[0.3em] text-gold">01 — WELLBEING RYUGAKU</p>
              <h2 className="mb-6 text-2xl font-light tracking-wide">Wellbeing留学</h2>
              <div className="space-y-4 text-sm leading-[2.1] text-taupe">
                <p>女性（18〜25歳）を対象とした、2週間の起業・インターンプログラムです。</p>
                <p>
                  開催地はベトナム・ダナン。第1期は10名が参加し、第2期（8/26〜9/8、最大12名）を計画中です。
                </p>
                <p>
                  ライフデザインワークショップ、事業立ち上げインターン、SNS研修など、自己理解と実践的な
                  挑戦を組み合わせた構成。卒業生（アルムナイ）が次期プログラムをサポートする、
                  紹介・還元の仕組みも大切にしています。
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
              >
                プログラムについて問い合わせる
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 事業② くまもと留学相談室 */}
      <section id="ryugaku" className="scroll-mt-20 border-t border-sand bg-linen py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
            <img src={photos[3].src} alt={photos[3].alt} className="w-full max-w-sm" />
            <div className="flex-1">
              <p className="mb-2 text-[10px] tracking-[0.3em] text-gold">02 — KUMAMOTO RYUGAKU SOUDAN</p>
              <h2 className="mb-6 text-2xl font-light tracking-wide">くまもと留学相談室</h2>
              <div className="space-y-4 text-sm leading-[2.1] text-taupe">
                <p>地域に根ざした、無料の留学相談窓口です。熊本県内の中学校・高校・大学と連携しています。</p>
                <p>セブ島を中心に、ハワイ・バリ・フィジーの語学留学を専門にサポート。</p>
                <p>教育委員会や高校生サミットでの登壇実績があり、InstagramやTikTokでも情報発信中です。</p>
              </div>
              <div className="mt-8 border border-gold/40 bg-paper p-6">
                <p className="mb-4 text-xs leading-relaxed text-taupe">
                  相談は何度でも無料。「まだ何も決まっていない」段階からでも、お気軽にどうぞ。
                </p>
                <Link
                  href="/contact/ryugaku"
                  className="inline-block border border-ink bg-ink px-8 py-3 text-xs tracking-widest text-paper transition hover:bg-paper hover:text-ink"
                >
                  無料相談を申し込む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業③ SNS PR事業 */}
      <section id="sns" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <img src={danangPhotos.cafe.src} alt={danangPhotos.cafe.alt} className="w-full max-w-sm object-cover" />
            <div className="flex-1">
              <p className="mb-2 text-[10px] tracking-[0.3em] text-gold">03 — SNS PR</p>
              <h2 className="mb-6 text-2xl font-light tracking-wide">SNS PR事業</h2>
              <div className="space-y-4 text-sm leading-[2.1] text-taupe">
                <p>総フォロワー6万人超の発信力を活かし、企業のSNS PRを企画から運用までサポートします。</p>
                <p>
                  実績例：株式会社アールイーカンパニー、PLAUD株式会社、株式会社トリファ、熊本城北自動車学校 ほか
                </p>
              </div>
              <Link
                href="/results?category=sns"
                className="mt-8 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
              >
                PR実績を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* その他の取り組み */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="mb-10">Other Activities</Eyebrow>
          <h2 className="text-xl font-light tracking-wide">Connect Project</h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-[2.2] text-taupe">
            東京で株式会社Leaportとともに開催する、海外挑戦者と経験者を繋ぎ、次世代の挑戦者を応援する
            イベントシリーズです。（SNS：@connectproject_）
          </p>
        </div>
      </section>
    </>
  );
}
