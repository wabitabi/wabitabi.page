import Link from "next/link";
import { Eyebrow } from "@/components/site/Eyebrow";

export const metadata = { title: "送信完了｜株式会社WABITABI" };

export default function ContactThanksPage() {
  return (
    <section className="py-32 text-center">
      <div className="mx-auto max-w-xl px-6">
        <Eyebrow className="animate-tracking-in mb-10">Thank You</Eyebrow>
        <h1 className="animate-fade-up animation-delay-300 text-2xl font-light tracking-wide">
          お問い合わせありがとうございました
        </h1>
        <p className="animate-fade-up animation-delay-600 mt-8 text-sm leading-[2.2] text-taupe">
          内容を確認のうえ、担当者より折り返しご連絡いたします。
          <br />
          今しばらくお待ちください。
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
