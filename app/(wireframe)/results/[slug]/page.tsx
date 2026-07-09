import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/wireframe/Section";
import { PlaceholderBox } from "@/components/wireframe/PlaceholderBox";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";
import { resultItems } from "@/lib/data/results";
import { BUSINESS_CATEGORY_LABEL } from "@/lib/types";

interface ResultDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resultItems.map((item) => ({ slug: item.slug }));
}

export default async function ResultDetailPage({ params }: ResultDetailPageProps) {
  const { slug } = await params;
  const item = resultItems.find((r) => r.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "実績紹介", href: "/results" },
          { label: item.title },
        ]}
      />

      <Section label="実績詳細">
        <p className="mb-2 font-mono text-xs text-gray-400">
          {item.date} ／ {BUSINESS_CATEGORY_LABEL[item.category]}
        </p>
        <h1 className="mb-6 text-2xl font-bold text-gray-800">{item.title}</h1>
        <PlaceholderBox label="[実績 メイン画像]" aspect="wide" className="mb-6" />
        <p className="mb-6 text-sm leading-relaxed text-gray-600">{item.body}</p>

        <div className="border-t border-gray-200 pt-6">
          <p className="mb-2 text-xs font-mono uppercase text-gray-400">[参加者の声 エリア]</p>
          <PlaceholderBox label="[参加者インタビュー／写真]" aspect="video" />
        </div>

        <Link href="/results" className="mt-8 inline-block text-sm font-bold text-gray-700 hover:underline">
          ← 実績紹介一覧へ戻る
        </Link>
      </Section>
    </>
  );
}
