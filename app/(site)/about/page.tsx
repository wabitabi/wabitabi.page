import { photos } from "@/lib/photos";
import { VISION, CEO_NAME, CEO_TITLE } from "@/lib/site-content";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";

export const metadata = { title: "私たちについて｜株式会社WABITABI" };

const profile = [
  "熊本県出身。早稲田大学人間情報学科（行動分析）を2026年3月に卒業。",
  "33カ国の渡航経験、ハンガリー留学、インドでの海外インターンを経て、東京から地元・熊本にUターンして起業。",
  "ポジティブ心理学インストラクター資格を持ち、心理学の知見を活かした「行動変容につながる体験設計」を専門とする。",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        en="About Us"
        title="私たちについて"
        lead="「留学」や「海外挑戦」を、特別な人だけのものにしない。私たちの原点と、大切にしている考え方をご紹介します。"
      />

      {/* ビジョン・ミッション */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mb-10">Vision / Mission</Eyebrow>
          <h2 className="text-2xl font-light leading-[2.2] tracking-wider md:text-3xl">{VISION}</h2>
          <div className="mx-auto mt-12 max-w-2xl space-y-6 text-left text-sm leading-[2.2] text-taupe">
            <p>
              留学や海外挑戦を、特別な人だけのものではなく、誰もが自分らしさを見つけるための手段として届けたい。
              私たちはそう考えています。
            </p>
            <p>
              ポジティブ心理学・行動分析の知見をベースに、単なる語学留学ではなく「自己理解」と「行動変容」に
              つながる体験を設計すること。それが、WABITABIのすべての事業に共通する軸です。
            </p>
          </div>
        </div>
      </section>

      {/* 代表プロフィール */}
      <section className="border-t border-sand bg-linen py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow className="mb-14 text-center">Profile</Eyebrow>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
            <div className="w-full max-w-xs shrink-0">
              <img src={photos[1].src} alt="代表 島添日花李" className="w-full" />
              <p className="mt-3 text-right text-[10px] tracking-widest text-gold">— {CEO_TITLE}</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-light tracking-wide">{CEO_NAME}</h2>
              <p className="mt-1 text-xs tracking-[0.2em] text-taupe">{CEO_TITLE}</p>
              <div className="mt-8 space-y-5 text-sm leading-[2.2] text-taupe">
                {profile.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 創業ストーリー */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow className="mb-12 text-center">Our Story</Eyebrow>
          <h2 className="text-center text-xl font-light tracking-wide">創業ストーリー</h2>
          <div className="mt-12 space-y-8 text-sm leading-[2.4] text-taupe">
            <p>
              はじめての海外で感じた心細さと、それを超えた先にあった「世界の広さ」。33カ国を旅するなかで
              出会った人たちは、誰もが自分の物差しで人生を選んでいました。
            </p>
            <p>
              ハンガリーでの留学、インドでのインターン。日常の外に出るたびに、自分の輪郭がはっきりして
              いく感覚がありました。この体験を、地元・熊本の若い人たちに届けたい——。
            </p>
            <p>
              その想いから、東京ではなく熊本で起業することを選びました。地域の学校や自治体と連携しながら、
              「海外挑戦」を誰にとっても身近な選択肢にしていきます。
            </p>
          </div>
          <div className="mt-14">
            <img src={photos[0].src} alt={photos[0].alt} className="w-full" />
            <p className="mt-3 text-right text-[10px] tracking-widest text-gold">— {photos[0].caption}</p>
          </div>
        </div>
      </section>
    </>
  );
}
