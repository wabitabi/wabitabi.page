import Link from "next/link";
import { Section } from "@/components/wireframe/Section";

export default function NotFound() {
  return (
    <Section label="404ページ">
      <div className="py-16 text-center">
        <p className="mb-2 font-mono text-4xl text-gray-300">404</p>
        <h1 className="mb-4 text-xl font-bold text-gray-800">ページが見つかりませんでした</h1>
        <p className="mb-8 text-sm text-gray-500">
          [ダミー本文：お探しのページは移動または削除された可能性があります]
        </p>
        <Link href="/" className="text-sm font-bold text-gray-700 hover:underline">
          トップページへ戻る
        </Link>
      </div>
    </Section>
  );
}
