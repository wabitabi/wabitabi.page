import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/wireframe/Section";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";
import { newsItems } from "@/lib/data/news";
import { BUSINESS_CATEGORY_LABEL } from "@/lib/types";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "お知らせ", href: "/news" },
          { label: item.title },
        ]}
      />

      <Section label="お知らせ詳細">
        <p className="mb-2 font-mono text-xs text-gray-400">
          {item.date} ／ {BUSINESS_CATEGORY_LABEL[item.category]}
        </p>
        <h1 className="mb-6 text-2xl font-bold text-gray-800">{item.title}</h1>
        <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>

        <Link href="/news" className="mt-8 inline-block text-sm font-bold text-gray-700 hover:underline">
          ← お知らせ一覧へ戻る
        </Link>
      </Section>
    </>
  );
}
