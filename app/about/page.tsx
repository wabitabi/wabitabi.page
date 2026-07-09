import { Section } from "@/components/wireframe/Section";
import { PlaceholderBox } from "@/components/wireframe/PlaceholderBox";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";

export const metadata = { title: "私たちについて｜株式会社WABITABI" };

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "私たちについて" }]} />

      <Section label="ページタイトル" title="私たちについて">
        <p className="text-sm text-gray-500">
          [リード文：ビジョン・ミッションを一言で伝えるイントロダクション]
        </p>
      </Section>

      <Section label="ビジョン・ミッション" title="ビジョン / ミッション">
        <PlaceholderBox label="[ビジョンステートメント画像 or 大見出し]" aspect="wide" className="mb-4" />
        <p className="text-sm text-gray-600">
          [ダミー本文：「海外挑戦を通じて、自分らしく生きる人を増やす」の背景にある考え方、
          ポジティブ心理学・行動分析の知見をどう活かしているかの説明]
        </p>
      </Section>

      <Section label="代表者プロフィール" title="代表者プロフィール">
        <div className="flex flex-col gap-6 md:flex-row">
          <PlaceholderBox label="[代表 島添日花李 写真]" aspect="square" className="w-full md:w-56 shrink-0" />
          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-bold text-gray-800">島添日花李（代表取締役）</p>
            <p>[ダミー本文：早稲田大学人間情報学科（行動分析）卒業、33カ国渡航経験、
              ハンガリー留学、インドインターン経験などの経歴詳細]</p>
            <p>[ダミー本文：ポジティブ心理学インストラクター資格についての説明]</p>
          </div>
        </div>
      </Section>

      <Section label="創業ストーリー" title="創業ストーリー">
        <PlaceholderBox label="[創業ストーリー イメージ画像]" aspect="wide" className="mb-4" />
        <p className="text-sm text-gray-600">
          [ダミー本文：東京から熊本にUターンし起業した経緯、原体験から事業に至るまでのストーリー]
        </p>
      </Section>
    </>
  );
}
