import Link from "next/link";
import { Section } from "@/components/wireframe/Section";
import { PlaceholderBox } from "@/components/wireframe/PlaceholderBox";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";

export const metadata = { title: "サービス｜株式会社WABITABI" };

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "サービス" }]} />

      <Section label="ページタイトル" title="サービス">
        <p className="text-sm text-gray-500">[リード文：3本柱の事業を俯瞰で紹介するイントロダクション]</p>
      </Section>

      <Section label="事業① 詳細" title="Wellbeing留学">
        <div id="wellbeing" className="scroll-mt-24">
          <PlaceholderBox label="[Wellbeing留学 イメージ画像]" aspect="wide" className="mb-4" />
          <div className="space-y-3 text-sm text-gray-600">
            <p>対象：女性（18〜25歳）／期間：2週間の起業・インターンプログラム</p>
            <p>開催地：ベトナム・ダナン（第1期実施済み・10名参加、第2期 8/26〜9/8 最大12名 計画中）</p>
            <p>内容：ライフデザインワークショップ、事業立ち上げインターン、SNS研修など</p>
            <p>特徴：卒業生（アルムナイ）が次期プログラムをサポートする紹介・還元の仕組み</p>
          </div>
          <Link href="/contact" className="mt-4 inline-block text-sm font-bold text-gray-700 hover:underline">
            Wellbeing留学について問い合わせる →
          </Link>
        </div>
      </Section>

      <Section label="事業② 詳細" title="くまもと留学相談室">
        <div id="ryugaku" className="scroll-mt-24">
          <PlaceholderBox label="[くまもと留学相談室 イメージ画像]" aspect="wide" className="mb-4" />
          <div className="space-y-3 text-sm text-gray-600">
            <p>地域に根ざした無料の留学相談窓口。熊本県内の中学校・高校・大学と連携</p>
            <p>セブ島を中心とした語学留学専門（セブ、ハワイ、バリ、フィジー）</p>
            <p>公式サイト：ryugaku.wabitabi.com（別サイトで運用中）</p>
            <p>Instagram・TikTokでの情報発信、教育委員会・高校生サミット登壇実績あり</p>
          </div>
          <div className="mt-4 border border-gray-300 bg-gray-50 p-4">
            <p className="mb-2 text-xs text-gray-500">まずは無料相談から、気軽にご相談ください</p>
            <Link href="/contact/ryugaku" className="inline-block bg-gray-800 px-4 py-2 text-xs text-white hover:bg-gray-700">
              無料相談を申し込む
            </Link>
          </div>
        </div>
      </Section>

      <Section label="事業③ 詳細" title="SNS PR事業">
        <div id="sns" className="scroll-mt-24">
          <PlaceholderBox label="[SNS PR事業 イメージ画像]" aspect="wide" className="mb-4" />
          <div className="space-y-3 text-sm text-gray-600">
            <p>総フォロワー6万人超、数々のPR実績</p>
            <p>実績例：株式会社アールイーカンパニー、PLAUD株式会社、株式会社トリファ、熊本城北自動車学校 等</p>
          </div>
          <Link href="/results?category=sns" className="mt-4 inline-block text-sm font-bold text-gray-700 hover:underline">
            SNS PR事業の実績を見る →
          </Link>
        </div>
      </Section>

      <Section label="関連の取り組み" title="その他の取り組み：Connect Project">
        <PlaceholderBox label="[Connect Project イメージ画像]" aspect="wide" className="mb-4" />
        <p className="text-sm text-gray-600">
          [ダミー本文：東京で株式会社Leaportと共同開催する、海外挑戦者と経験者を繋ぐイベントシリーズ
          （SNSアカウント：@connectproject_）についての紹介]
        </p>
      </Section>
    </>
  );
}
