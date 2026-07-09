import Link from "next/link";
import { Section } from "@/components/wireframe/Section";

export const metadata = { title: "送信完了｜株式会社WABITABI" };

export default function ContactThanksPage() {
  return (
    <Section label="送信完了ページ">
      <div className="py-12 text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-800">お問い合わせありがとうございました</h1>
        <p className="mb-8 text-sm text-gray-500">
          [ダミー本文：内容を確認の上、担当者より折り返しご連絡いたします、といった案内文]
        </p>
        <Link href="/" className="text-sm font-bold text-gray-700 hover:underline">
          トップページへ戻る
        </Link>
      </div>
    </Section>
  );
}
