import { Section } from "@/components/wireframe/Section";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";

export const metadata = { title: "プライバシーポリシー｜株式会社WABITABI" };

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "プライバシーポリシー" }]} />
      <Section label="ページタイトル" title="プライバシーポリシー">
        <div className="space-y-6 text-sm text-gray-600">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n}>
              <p className="mb-1 font-bold text-gray-700">第{n}条（[条項見出し]）</p>
              <p>[ダミー本文：個人情報の取り扱いに関する条文が入ります]</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
