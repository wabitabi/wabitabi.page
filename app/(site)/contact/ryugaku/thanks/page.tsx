import Link from "next/link";
import { Eyebrow } from "@/components/site/Eyebrow";

export const metadata = { title: "申込完了｜くまもと留学相談室" };

export default function RyugakuThanksPage() {
  return (
    <section className="py-32 text-center">
      <div className="mx-auto max-w-xl px-6">
        <Eyebrow className="animate-tracking-in mb-10">Thank You</Eyebrow>
        <h1 className="animate-fade-up animation-delay-300 text-2xl font-light tracking-wide">
          無料相談のお申し込み、
          <br className="md:hidden" />
          ありがとうございます
        </h1>
        <p className="animate-fade-up animation-delay-600 mt-8 text-sm leading-[2.2] text-taupe">
          一歩を踏み出してくださって、うれしいです。
          <br />
          担当者より、日程調整のご連絡をいたしますので、今しばらくお待ちください。
        </p>
        <div className="animate-fade-up animation-delay-1200 mt-12">
          <Link
            href="/"
            className="inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
