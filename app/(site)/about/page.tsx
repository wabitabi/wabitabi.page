import { ceoPhoto } from "@/lib/photos";
import { VISION, MISSION, CEO_NAME, CEO_TITLE } from "@/lib/site-content";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SmartImage } from "@/components/site/SmartImage";

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
        lead="世界を見ることは、人生の選択肢を自分の手で広げること。情報の格差を、挑戦の格差にしないために——。私たちの原点をご紹介します。"
      />

      {/* ビジョン */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="mb-8">Vision</Eyebrow>
          <h2 className="text-2xl font-light leading-[2] tracking-wider md:text-3xl">{VISION}</h2>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-[2.2] text-taupe">
            留学や海外挑戦を、特別な人だけのものではなく、誰もが自分らしさを見つけるための手段として届けたい。
            私たちはそう考えています。
          </p>
        </div>
      </section>

      {/* ミッション */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="mb-8">Mission</Eyebrow>
          <h2 className="text-2xl font-light leading-[2] tracking-wider md:text-3xl">{MISSION}</h2>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-[2.2] text-taupe">
            ポジティブ心理学・行動分析の知見をベースに、単なる語学留学ではなく「自己理解」と「行動変容」に
            つながる体験を設計すること。それが、WABITABIのすべての事業に共通する軸です。
          </p>
        </div>
      </section>

      {/* 代表プロフィール */}
      <section className="border-t border-sand bg-linen py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow className="mb-14 text-center">Profile</Eyebrow>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
            <div className="w-full max-w-xs shrink-0">
              <SmartImage photo={ceoPhoto} className="w-full" />
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

          <div className="mt-16 text-center">
            <p className="text-2xl font-light leading-[2] tracking-wider md:text-3xl">
              「こんな生き方があるんだ。」
            </p>
            <p className="mt-4 text-sm tracking-[0.2em] text-taupe">海外に出て、衝撃を受けた。</p>
          </div>

          <div className="mt-16 space-y-8 text-sm leading-[2.4] text-taupe">
            <p>
              高校時代、偏差値の高い大学に入ることが正解だと信じて疑わなかった。周りの友人も、先生も、
              大人たちも、それが当たり前に目指すべき姿だと言っていたから。
            </p>
            <p>
              目標にしていた大学に合格した時、これでもう安心だと思った。けれど大学生活を過ごすうちに、
              自分はその大学に所属しているだけで、何者でもないことに気づいていく。大学に入ることを
              ゴールにしていた私は、合格した瞬間に試合が終わったつもりでいた。でも、人生はまだ始まった
              ばかりで、その4分の1にも満たなかった。
            </p>
            <p>
              東京に出て、満員電車に揺られる人たちの表情を見た。新社会人になった先輩たちの話を聞いた。
              日常の一部のように感じてしまうほど頻繁に起きる、駅のホームでの出来事もあった。そんな景色の
              中で過ごすうちに、「社会人ってきつくて、辛くて、楽しくないものなんだ」と思うようになって
              いった。
            </p>
            <p>
              良い大学に行き、名の知れた企業に就職することが人生における「正解」だと、ずっと疑わずに
              生きてきた。でも実際に働く大人たちを目の当たりにして、このまま周りに流されて卒業していいの
              だろうかと、初めて自分の将来に不安を抱いた。
            </p>
            <p className="border-l-2 border-gold pl-6 text-ink">そこで大学を休学し、海外に出ることにした。</p>
            <p>
              海外で暮らす中で、さまざまな働き方、さまざまな生き方をしている人たちに出会った。目を輝かせ
              ながら、心から楽しそうに働く社会人たちと関わる中で、はじめて実感した。「良い大学に行き、
              良い企業に就くことだけが正解じゃない」——頭ではなく、体でそれを理解した瞬間だった。
            </p>
            <p>
              その経験がきっかけで、世界にはまだ知らないだけで、こんなにも多様な生き方があるのだと感じ、
              学生時代のうちに33カ国を旅することになった。
            </p>
            <p className="text-ink">
              世界を見るということは、ただ新しい景色に出会うことではない。自分の人生の選択肢を、自分の手で
              広げていくということだ。
            </p>
            <p>
              けれど、地方ではまだ「海外は怖い、危ない」というイメージが根強く、リアルな情報になかなか
              出会えない。その情報の格差が、そのまま挑戦の格差になってしまっている。
            </p>
            <p>
              だから私は、自分らしく生きるための選択肢を広げる挑戦を、もっと多くの人に届けたいと思った。
            </p>
            <p className="text-ink">
              生まれ育ったこの熊本で、その一歩をサポートしたいと思い、会社を立ち上げた。
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-md">
            <SmartImage photo={ceoPhoto} className="w-full" />
            <p className="mt-3 text-right text-[10px] tracking-widest text-gold">
              — {ceoPhoto.caption}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
