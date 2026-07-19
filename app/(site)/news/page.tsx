import { Suspense } from "react";
import { PageHero } from "@/components/site/PageHero";
import { NewsList } from "@/components/site/NewsList";

export const metadata = { title: "お知らせ｜株式会社WABITABI" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        en="News"
        title="お知らせ"
        lead="プログラムの募集情報、活動レポート、プレスリリースなどをお届けします。"
      />
      <section className="py-20">
        <Suspense>
          <NewsList />
        </Suspense>
      </section>
    </>
  );
}
