import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { CategoryFilter } from "@/components/site/CategoryFilter";
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
      <PageHero
        en="News"
        title="お知らせ"
        lead="プログラムの募集情報、活動レポート、プレスリリースなどをお届けします。"
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <CategoryFilter basePath="/news" active={activeCategory} />
          <ul className="border-t border-sand">
            {items.map((item) => (
              <li key={item.slug} className="border-b border-sand">
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex flex-col gap-2 py-7 md:flex-row md:items-baseline md:gap-8"
                >
                  <span className="shrink-0 text-[10px] tracking-[0.25em] text-gold md:w-24">
                    {item.date}
                  </span>
                  <span className="shrink-0 text-[10px] tracking-[0.2em] text-taupe md:w-36">
                    {BUSINESS_CATEGORY_LABEL[item.category]}
                  </span>
                  <span className="text-sm leading-relaxed transition group-hover:text-gold">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {items.length === 0 && (
            <p className="py-10 text-center text-sm text-taupe">該当するお知らせがありません。</p>
          )}
        </div>
      </section>
    </>
  );
}
