import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "@/lib/data/news";
import { BUSINESS_CATEGORY_LABEL } from "@/lib/types";
import { Eyebrow } from "@/components/site/Eyebrow";

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
    <article className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <Eyebrow className="animate-tracking-in text-center">News</Eyebrow>
        <p className="mt-8 text-center text-[10px] tracking-[0.25em] text-gold">
          {item.date} — {BUSINESS_CATEGORY_LABEL[item.category]}
        </p>
        <h1 className="animate-fade-up animation-delay-300 mt-4 text-center text-2xl font-light leading-relaxed tracking-wide">
          {item.title}
        </h1>

        <div className="animate-fade-up animation-delay-600 mt-14 border-t border-sand pt-12 text-sm leading-[2.4] text-taupe">
          <p>{item.body}</p>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/news"
            className="inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
          >
            お知らせ一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}
