import Link from "next/link";
import { notFound } from "next/navigation";
import { photos, danangPhotos, Photo } from "@/lib/photos";
import { resultItems } from "@/lib/data/results";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";
import { Eyebrow } from "@/components/site/Eyebrow";

const categoryPhoto: Partial<Record<BusinessCategory, Photo>> = {
  ryugaku: photos[3],
  sns: danangPhotos.cafe,
};

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
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Eyebrow className="animate-tracking-in text-center">Works</Eyebrow>
        <p className="mt-8 text-center text-[10px] tracking-[0.25em] text-gold">
          {item.date} — {BUSINESS_CATEGORY_LABEL[item.category]}
        </p>
        <h1 className="animate-fade-up animation-delay-300 mt-4 text-center text-2xl font-light leading-relaxed tracking-wide">
          {item.title}
        </h1>

        {categoryPhoto[item.category] && (
          <img
            src={categoryPhoto[item.category]!.src}
            alt={item.title}
            className="animate-fade-up animation-delay-600 mt-14 aspect-video w-full object-cover"
          />
        )}

        <div className="animate-fade-up animation-delay-600 mt-12 space-y-6 border-t border-sand pt-10 text-sm leading-[2.3] text-taupe">
          <p>{item.summary}</p>
          <p>{item.body}</p>
        </div>

        <div className="mt-16 border-t border-sand pt-10">
          <Eyebrow className="mb-6">Voice</Eyebrow>
          <blockquote className="border-l-2 border-gold pl-6 text-sm italic leading-[2.2] text-taupe">
            「参加者の声をここに掲載します。プログラムを通じて感じた変化や、挑戦のきっかけになった
            出来事などを、実際の言葉で紹介する予定です。」
          </blockquote>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/results"
            className="inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
          >
            実績紹介一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}
