import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CEO_NAME, CEO_TITLE } from "@/lib/site-content";

export const metadata = { title: "会社情報｜株式会社WABITABI" };

const companyInfo = [
  { label: "会社名", value: "株式会社WABITABI" },
  { label: "代表者", value: `${CEO_NAME}（${CEO_TITLE}）` },
  { label: "所在地", value: "熊本県熊本市中央区子飼本町1-5 リバーサイドルミカ102号室" },
  { label: "設立", value: "2026年5月18日" },
  { label: "事業内容", value: "Wellbeing留学の企画・運営 / くまもと留学相談室の運営 / SNS PR事業" },
];

const history = [
  { date: "2026年3月", text: "代表・島添日花李が早稲田大学人間情報学科を卒業、熊本へUターン" },
  { date: "2026年5月", text: "株式会社WABITABI 設立（5月18日）" },
  { date: "2026年", text: "Wellbeing留学 第1期（ベトナム・ダナン）開催、10名参加" },
  { date: "2026年", text: "くまもと留学相談室 開設、県内教育機関との連携を開始" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero en="Company" title="会社情報" />

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow className="mb-12 text-center">Overview</Eyebrow>
          <dl>
            {companyInfo.map((row) => (
              <div key={row.label} className="flex flex-col border-b border-sand py-6 md:flex-row">
                <dt className="shrink-0 text-xs tracking-[0.25em] text-gold md:w-40">{row.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed md:mt-0">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-sand bg-linen py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow className="mb-12 text-center">History</Eyebrow>
          <ul className="space-y-0">
            {history.map((h, i) => (
              <li key={i} className="flex gap-8 border-b border-sand py-6 last:border-b-0">
                <span className="w-28 shrink-0 text-xs tracking-[0.15em] text-gold">{h.date}</span>
                <span className="text-sm leading-relaxed text-taupe">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="mb-12">Access</Eyebrow>
          <div className="flex h-64 flex-col items-center justify-center gap-3 border border-sand bg-linen text-xs tracking-widest text-taupe">
            <p className="text-ink">熊本県熊本市中央区子飼本町1-5 リバーサイドルミカ102号室</p>
            <p>（地図の埋め込みは後日掲載します）</p>
          </div>
        </div>
      </section>
    </>
  );
}
