import Link from "next/link";
import { Section } from "@/components/wireframe/Section";
import { PlaceholderBox } from "@/components/wireframe/PlaceholderBox";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";
import { CategoryFilter } from "@/components/wireframe/CategoryFilter";
import { resultItems } from "@/lib/data/results";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";

export const metadata = { title: "実績紹介｜株式会社WABITABI" };

interface ResultsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as BusinessCategory | undefined;
  const items = activeCategory
    ? resultItems.filter((item) => item.category === activeCategory)
    : resultItems;

  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "実績紹介" }]} />

      <Section label="ページタイトル" title="実績紹介">
        <p className="mb-6 text-sm text-gray-500">
          [リード文：事業別の実績・プログラムレポート一覧であることの説明。CMSで更新可能]
        </p>
        <CategoryFilter basePath="/results" active={activeCategory} />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/results/${item.slug}`}
              className="block border border-gray-300 p-4 transition hover:border-gray-500 hover:bg-gray-50"
            >
              <PlaceholderBox label="[実績 サムネイル画像]" aspect="video" className="mb-3" />
              <p className="mb-1 font-mono text-xs text-gray-400">
                {item.date} ／ {BUSINESS_CATEGORY_LABEL[item.category]}
              </p>
              <h3 className="mb-2 text-sm font-bold text-gray-800">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.summary}</p>
            </Link>
          ))}
          {items.length === 0 && (
            <p className="text-sm text-gray-400">該当する実績がありません。</p>
          )}
        </div>
      </Section>
    </>
  );
}
