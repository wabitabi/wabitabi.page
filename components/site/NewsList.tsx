"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CategoryFilter } from "@/components/site/CategoryFilter";
import { newsItems } from "@/lib/data/news";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";

export function NewsList() {
  const activeCategory = (useSearchParams().get("category") ?? undefined) as
    | BusinessCategory
    | undefined;
  const items = activeCategory
    ? newsItems.filter((item) => item.category === activeCategory)
    : newsItems;

  return (
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
  );
}
