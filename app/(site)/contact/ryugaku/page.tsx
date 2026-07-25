import Link from "next/link";
import { soudanPhoto } from "@/lib/photos";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { SmartImage } from "@/components/site/SmartImage";

export const metadata = { title: "無料相談申込｜くまもと留学相談室" };

const points = [
  { title: "何度でも無料", desc: "ご相談に費用は一切かかりません。" },
  { title: "決まっていなくてOK", desc: "「なんとなく気になる」の段階から歓迎です。" },
  { title: "熊本に根ざした窓口", desc: "県内の学校・自治体と連携した安心のサポート。" },
];

export default function RyugakuContactPage() {
  return (
    <>
      <PageHero
        en="Free Consultation"
        title="まずは気軽に、無料相談から"
        lead="留学は、特別なことじゃない。セブ島・ハワイ・バリ・フィジーへの語学留学を、くまもと留学相談室が無料でサポートします。"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SmartImage photo={soudanPhoto} className="mx-auto aspect-video w-full max-w-2xl object-cover" />
          <div className="mx-auto mt-16 grid max-w-3xl gap-8 md:grid-cols-3">
            {points.map((pt) => (
              <div key={pt.title} className="border-t border-gold pt-5 text-center md:text-left">
                <h2 className="text-sm tracking-widest">{pt.title}</h2>
                <p className="mt-3 text-xs leading-loose text-taupe">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand bg-linen py-20">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="mb-3 text-center text-xl font-light tracking-wide">無料相談を申し込む</h2>
          <p className="mb-12 text-center text-xs leading-loose text-taupe">
            送信後、担当者より日程調整のご連絡をいたします。オンラインでも、熊本での対面でも。
          </p>
          <ContactForm
            thanksHref="/contact/ryugaku/thanks"
            submitLabel="無料相談を申し込む"
            subject="【WABITABI】無料相談のお申し込み"
            formType="くまもと留学相談室 無料相談"
            showProgramField
          />
        </div>
      </section>

      <section className="py-14 text-center">
        <p className="text-xs text-taupe">
          Wellbeing留学・SNS PR事業に関するお問い合わせは
          <Link href="/contact" className="mx-1.5 border-b border-gold pb-0.5 text-ink transition hover:text-gold">
            こちらのフォーム
          </Link>
          をご利用ください。
        </p>
      </section>
    </>
  );
}
