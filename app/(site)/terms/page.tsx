import { PageHero } from "@/components/site/PageHero";

export const metadata = { title: "利用規約｜株式会社WABITABI" };

const articles = [
  { title: "第1条（適用）", body: "本規約は、株式会社WABITABI（以下「当社」）が提供するサービスの利用に関する条件を定めるものです。（正式な条文は制定後に掲載します）" },
  { title: "第2条（利用登録）", body: "サービスの利用を希望する方は、本規約に同意のうえ、当社の定める方法によって申込を行うものとします。（正式な条文は制定後に掲載します）" },
  { title: "第3条（禁止事項）", body: "利用者は、法令または公序良俗に違反する行為をしてはなりません。（正式な条文は制定後に掲載します）" },
  { title: "第4条（免責事項）", body: "当社は、サービスに事実上または法律上の瑕疵がないことを保証するものではありません。（正式な条文は制定後に掲載します）" },
  { title: "第5条（規約の変更）", body: "当社は、必要と判断した場合には、利用者に通知することなく本規約を変更することができるものとします。（正式な条文は制定後に掲載します）" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero en="Terms of Service" title="利用規約" />
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <div className="space-y-12">
            {articles.map((a) => (
              <div key={a.title}>
                <h2 className="border-b border-sand pb-3 text-sm tracking-widest">{a.title}</h2>
                <p className="mt-4 text-sm leading-[2.2] text-taupe">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
