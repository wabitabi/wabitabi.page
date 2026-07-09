import Link from "next/link";
import { Section } from "@/components/wireframe/Section";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";
import { ContactForm } from "@/components/wireframe/ContactForm";

export const metadata = { title: "お問い合わせ｜株式会社WABITABI" };

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "お問い合わせ" }]} />

      <Section label="ページタイトル" title="お問い合わせ">
        <p className="mb-4 text-sm text-gray-500">
          Wellbeing留学・SNS PR事業・取材・その他のお問い合わせはこちらのフォームからご連絡ください。
        </p>
        <div className="mb-8 border border-gray-300 bg-gray-50 p-4 text-xs text-gray-600">
          くまもと留学相談室（セブ島留学等）の無料相談をご希望の方は
          <Link href="/contact/ryugaku" className="mx-1 font-bold text-gray-800 hover:underline">
            こちらの無料相談フォーム
          </Link>
          をご利用ください。
        </div>
      </Section>

      <Section label="お問い合わせフォーム">
        <ContactForm thanksHref="/contact/thanks" submitLabel="送信する" />
      </Section>
    </>
  );
}
