import { PageHero } from "@/components/site/PageHero";

export const metadata = { title: "プライバシーポリシー｜株式会社WABITABI" };

const articles = [
  { title: "1. 個人情報の定義", body: "本ポリシーにおける個人情報とは、個人情報保護法にいう「個人情報」を指します。（正式な条文は制定後に掲載します）" },
  { title: "2. 個人情報の収集方法", body: "当社は、お問い合わせ・無料相談のお申し込みの際に、氏名・メールアドレス・電話番号等をお尋ねすることがあります。（正式な条文は制定後に掲載します）" },
  { title: "3. 利用目的", body: "収集した個人情報は、ご相談への対応、サービスのご案内、お問い合わせへの回答のために利用します。（正式な条文は制定後に掲載します）" },
  { title: "4. 第三者提供", body: "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。（正式な条文は制定後に掲載します）" },
  { title: "5. お問い合わせ窓口", body: "本ポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。（正式な条文は制定後に掲載します）" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero en="Privacy Policy" title="プライバシーポリシー" />
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
