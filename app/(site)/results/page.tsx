import { Suspense } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ResultsList } from "@/components/site/ResultsList";

export const metadata = { title: "実績紹介｜株式会社WABITABI" };

export default function ResultsPage() {
  return (
    <>
      <PageHero
        en="Works"
        title="実績紹介"
        lead="プログラムの開催実績、参加者の声、企業さまとのPR実績をご紹介します。"
      />
      <section className="py-20">
        <Suspense>
          <ResultsList />
        </Suspense>
      </section>
    </>
  );
}
