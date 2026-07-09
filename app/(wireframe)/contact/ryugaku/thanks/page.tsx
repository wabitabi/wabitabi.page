import Link from "next/link";
import { Section } from "@/components/wireframe/Section";

export const metadata = { title: "申込完了｜くまもと留学相談室" };

export default function RyugakuThanksPage() {
  return (
    <Section label="無料相談 申込完了ページ">
      <div className="py-12 text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-800">無料相談のお申し込みありがとうございました</h1>
        <p className="mb-8 text-sm text-gray-500">
          [ダミー本文：「一緒に一歩を踏み出しましょう」といった安心感のある一言と、
          相談員から改めて日程調整の連絡が来る旨の案内]
        </p>
        <Link href="/" className="text-sm font-bold text-gray-700 hover:underline">
          トップページへ戻る
        </Link>
      </div>
    </Section>
  );
}
