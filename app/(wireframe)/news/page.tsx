import Link from "next/link";
import { Section } from "@/components/wireframe/Section";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";
import { CategoryFilter } from "@/components/wireframe/CategoryFilter";
import { newsItems } from "@/lib/data/news";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";

export const metadata = { title: "お知らせ｜株式会社WABITABI" };

interface NewsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as BusinessCategory | undefined;
  const items = activeCategory
    ? newsItems.filter((item) => item.category === activeCategory)
    : newsItems;

  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "お知らせ" }]} />

      <Section label="ページタイトル" title="お知らせ">
        <p className="mb-6 text-sm text-gray-500">
          [リード文：お知らせ・ニュース・プレスリリース一覧であることの説明。CMSで更新可能]
        </p>
        <CategoryFilter basePath="/news" active={activeCategory} />

        <ul className="divide-y divide-gray-200 border-t border-gray-200">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/news/${item.slug}`}
                className="flex flex-col gap-1 py-4 hover:bg-gray-50 md:flex-row md:items-center md:gap-6"
              >
                <span className="font-mono text-xs text-gray-400 md:w-28 md:shrink-0">{item.date}</span>
                <span className="text-xs text-gray-500 md:w-40 md:shrink-0">
                  {BUSINESS_CATEGORY_LABEL[item.category]}
                </span>
                <span className="text-sm text-gray-800">{item.title}</span>
              </Link>
            </li>
          ))}
          {items.length === 0 && (
            <li className="py-6 text-sm text-gray-400">該当するお知らせがありません。</li>
          )}
        </ul>
      </Section>
    </>
  );
}
