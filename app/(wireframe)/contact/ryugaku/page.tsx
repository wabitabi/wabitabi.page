import Link from "next/link";
import { Section } from "@/components/wireframe/Section";
import { PlaceholderBox } from "@/components/wireframe/PlaceholderBox";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";
import { ContactForm } from "@/components/wireframe/ContactForm";

export const metadata = { title: "無料相談申込｜くまもと留学相談室" };

export default function RyugakuContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "サービス", href: "/services" },
          { label: "くまもと留学相談室 無料相談" },
        ]}
      />

      <Section label="無料相談 専用ページ（一般問い合わせと動線・文言を分離）" className="bg-gray-50">
        <PlaceholderBox label="[安心感を伝えるイメージ画像：気軽な相談の様子]" aspect="wide" className="mb-6" />
        <h1 className="mb-3 text-2xl font-bold text-gray-800">まずは気軽に、無料相談から</h1>
        <p className="text-sm text-gray-600">
          [ダミー本文：「留学は特別なことじゃない」というトーンで、費用は一切かからないこと、
          セブ・ハワイ・バリ・フィジーへの留学相談を熊本の地域に根ざしてサポートしてきた実績を伝え、
          心理的ハードルを下げるコピー]
        </p>
      </Section>

      <Section label="無料相談フォーム" title="無料相談を申し込む">
        <ContactForm thanksHref="/contact/ryugaku/thanks" submitLabel="無料相談を申し込む" showProgramField />
      </Section>

      <Section label="一般問い合わせへの導線（分離）">
        <p className="text-xs text-gray-500">
          Wellbeing留学・SNS PR事業に関するお問い合わせは
          <Link href="/contact" className="mx-1 font-bold text-gray-700 hover:underline">
            通常のお問い合わせフォーム
          </Link>
          をご利用ください。
        </p>
      </Section>
    </>
  );
}
