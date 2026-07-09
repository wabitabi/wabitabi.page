import { Section } from "@/components/wireframe/Section";
import { Breadcrumb } from "@/components/wireframe/Breadcrumb";

export const metadata = { title: "会社情報｜株式会社WABITABI" };

const companyInfo = [
  { label: "会社名", value: "株式会社WABITABI" },
  { label: "代表者", value: "島添日花李（代表取締役）" },
  { label: "所在地", value: "熊本県 [番地等は本実装時に確定]" },
  { label: "設立", value: "[設立年月日：本実装時に確定]" },
  { label: "事業内容", value: "Wellbeing留学 / くまもと留学相談室 / SNS PR事業" },
];

const history = [
  { date: "[2026年3月]", text: "代表 早稲田大学人間情報学科 卒業" },
  { date: "[2026年X月]", text: "株式会社WABITABI 設立" },
  { date: "[2026年X月]", text: "Wellbeing留学 第1期（ダナン）実施" },
  { date: "[2026年X月]", text: "くまもと留学相談室 開設" },
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "会社情報" }]} />

      <Section label="ページタイトル" title="会社情報">
        <p className="text-sm text-gray-500">[リード文：会社概要ページのイントロダクション]</p>
      </Section>

      <Section label="会社概要テーブル" title="概要">
        <table className="w-full border-collapse text-sm text-gray-600">
          <tbody>
            {companyInfo.map((row) => (
              <tr key={row.label} className="border-b border-gray-200">
                <th className="w-1/4 py-3 pr-4 text-left align-top font-bold text-gray-700">{row.label}</th>
                <td className="py-3">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section label="沿革" title="沿革">
        <ul className="space-y-3 text-sm text-gray-600">
          {history.map((h, i) => (
            <li key={i} className="flex gap-4 border-b border-gray-200 pb-3">
              <span className="w-32 shrink-0 font-mono text-gray-500">{h.date}</span>
              <span>{h.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="アクセス" title="所在地・アクセス">
        <div className="flex h-56 items-center justify-center border border-dashed border-gray-400 bg-gray-100 text-sm text-gray-500">
          [地図埋め込みエリア]
        </div>
      </Section>
    </>
  );
}
