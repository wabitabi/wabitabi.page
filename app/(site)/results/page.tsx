import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { CategoryFilter } from "@/components/site/CategoryFilter";
import { photos, danangPhotos, Photo } from "@/lib/photos";
import { resultItems } from "@/lib/data/results";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";

export const metadata = { title: "実績紹介｜株式会社WABITABI" };

// カテゴリごとの代表写真（wellbeingは写真なし、ryugakuは実写真が届くまでプレースホルダー）
const categoryPhoto: Partial<Record<BusinessCategory, Photo>> = {
  ryugaku: photos[3],
  sns: danangPhotos.cafe,
};

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
      <PageHero
        en="Works"
        title="実績紹介"
        lead="プログラムの開催実績、参加者の声、企業さまとのPR実績をご紹介します。"
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <CategoryFilter basePath="/results" active={activeCategory} />
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {items.map((item) => {
              const photo = categoryPhoto[item.category];
              return (
                <Link
                  key={item.slug}
                  href={`/results/${item.slug}`}
                  className={`group block ${!photo ? "border-t border-gold pt-6" : ""}`}
                >
                  {photo && (
                    <div className="overflow-hidden">
                      <img
                        src={photo.src}
                        alt={item.title}
                        className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <p className={`text-[10px] tracking-[0.25em] text-gold ${photo ? "mt-5" : ""}`}>
                    {item.date} — {BUSINESS_CATEGORY_LABEL[item.category]}
                  </p>
                  <h2 className="mt-2 text-base leading-relaxed transition group-hover:text-gold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs leading-loose text-taupe">{item.summary}</p>
                </Link>
              );
            })}
          </div>
          {items.length === 0 && (
            <p className="py-10 text-center text-sm text-taupe">該当する実績がありません。</p>
          )}
        </div>
      </section>
    </>
  );
}
