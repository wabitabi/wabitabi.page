import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata = { title: "お問い合わせ｜株式会社WABITABI" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        en="Contact"
        title="お問い合わせ"
        lead="Wellbeing留学・SNS PR事業・取材などのお問い合わせは、こちらのフォームからご連絡ください。"
      />

      <section className="py-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="mb-12 border border-gold/40 bg-linen p-6 text-center">
            <p className="text-xs leading-loose text-taupe">
              くまもと留学相談室の<span className="text-ink">無料相談</span>をご希望の方は、
              <br className="hidden md:block" />
              専用のフォームをご用意しています。
            </p>
            <Link
              href="/contact/ryugaku"
              className="mt-4 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] text-ink transition hover:text-gold"
            >
              無料相談フォームへ
            </Link>
          </div>
          <ContactForm
            thanksHref="/contact/thanks"
            submitLabel="送信する"
            subject="【WABITABI】お問い合わせ"
            formType="お問い合わせ"
          />
        </div>
      </section>
    </>
  );
}
