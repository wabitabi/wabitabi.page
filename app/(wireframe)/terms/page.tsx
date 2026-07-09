import { Section } from "@/components/wireframe/Section";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";

export const metadata = { title: "利用規約｜株式会社WABITABI" };

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "利用規約" }]} />
      <Section label="ページタイトル" title="利用規約">
        <div className="space-y-6 text-sm text-gray-600">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n}>
              <p className="mb-1 font-bold text-gray-700">第{n}条（[条項見出し]）</p>
              <p>[ダミー本文：利用規約の条文が入ります]</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
