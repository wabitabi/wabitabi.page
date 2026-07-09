import Link from "next/link";
import { Section } from "@/components/wireframe/Section";
import { PlaceholderBox } from "@/components/wireframe/PlaceholderBox";

const pillars = [
  {
    id: "wellbeing",
    title: "Wellbeing留学",
    desc: "18〜25歳女性対象・2週間の起業/インターンプログラム（ベトナム・ダナン）",
    href: "/services#wellbeing",
  },
  {
    id: "ryugaku",
    title: "くまもと留学相談室",
    desc: "熊本の中高大と連携する無料留学相談窓口（セブ・ハワイ・バリ・フィジー）",
    href: "/services#ryugaku",
  },
  {
    id: "sns",
    title: "SNS PR事業",
    desc: "総フォロワー6万人超、企業様向けSNS PR実績多数",
    href: "/services#sns",
  },
];

export default function TopPage() {
  return (
    <>
      <Section label="ヒーローエリア：ビジョンメッセージ" className="bg-gray-50">
        <PlaceholderBox label="[メインビジュアル：熊本の自然／挑戦する人のイメージ]" aspect="wide" className="mb-6" />
        <p className="text-2xl font-bold leading-relaxed text-gray-800">
          海外挑戦を通じて、
          <br />
          自分らしく生きる人を増やす
        </p>
        <p className="mt-4 max-w-2xl text-sm text-gray-500">
          [サブコピー：熊本発、心理学的アプローチで挑戦を後押しする会社であることを一言で伝える]
        </p>
      </Section>

      <Section label="事業紹介：3本柱への導線" title="私たちの事業">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="block border border-gray-300 p-5 transition hover:border-gray-500 hover:bg-gray-50"
            >
              <PlaceholderBox label={`[${p.title} 画像]`} aspect="square" className="mb-4" />
              <h3 className="mb-2 font-bold text-gray-800">{p.title}</h3>
              <p className="text-xs text-gray-500">{p.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section label="代表挨拶フック" title="代表からのメッセージ">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <PlaceholderBox label="[代表 島添日花李 写真]" aspect="square" className="w-full md:w-48 shrink-0" />
          <div>
            <p className="mb-3 text-sm text-gray-600">
              [ダミー本文：33カ国渡航・ハンガリー留学・インドインターンの原体験から、熊本にUターン起業した想いの抜粋]
            </p>
            <Link href="/about" className="text-sm font-bold text-gray-700 hover:underline">
              代表プロフィール・創業ストーリーを見る →
            </Link>
          </div>
        </div>
      </Section>

      <Section label="実績紹介への導線" title="実績紹介">
        <PlaceholderBox label="[実績紹介 一覧カード：3〜4件のプレビュー]" aspect="wide" className="mb-4" />
        <Link href="/results" className="text-sm font-bold text-gray-700 hover:underline">
          実績紹介一覧を見る →
        </Link>
      </Section>

      <Section label="お知らせへの導線" title="お知らせ">
        <PlaceholderBox label="[お知らせ 一覧カード：3〜4件のプレビュー]" aspect="wide" className="mb-4" />
        <Link href="/news" className="text-sm font-bold text-gray-700 hover:underline">
          お知らせ一覧を見る →
        </Link>
      </Section>

      <Section label="CTAエリア" title="お問い合わせ・無料相談">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-gray-300 p-5">
            <p className="mb-2 text-sm font-bold text-gray-700">まずは無料相談から</p>
            <p className="mb-4 text-xs text-gray-500">くまもと留学相談室（セブ島留学など）は無料でご相談いただけます</p>
            <Link href="/contact/ryugaku" className="inline-block bg-gray-800 px-4 py-2 text-xs text-white hover:bg-gray-700">
              無料相談を申し込む
            </Link>
          </div>
          <div className="border border-gray-300 p-5">
            <p className="mb-2 text-sm font-bold text-gray-700">その他のお問い合わせ</p>
            <p className="mb-4 text-xs text-gray-500">Wellbeing留学・SNS PR事業・取材等のお問い合わせはこちら</p>
            <Link href="/contact" className="inline-block border border-gray-500 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
