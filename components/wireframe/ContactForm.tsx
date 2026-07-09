"use client";

import { useRouter } from "next/navigation";

interface ContactFormProps {
  thanksHref: string;
  submitLabel: string;
  showProgramField?: boolean;
}

export function ContactForm({ thanksHref, submitLabel, showProgramField }: ContactFormProps) {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(thanksHref);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-sm">
      <div>
        <label className="mb-1 block font-bold text-gray-700">お名前 [必須]</label>
        <input type="text" className="w-full border border-gray-300 px-3 py-2" placeholder="山田 太郎" />
      </div>
      <div>
        <label className="mb-1 block font-bold text-gray-700">メールアドレス [必須]</label>
        <input type="email" className="w-full border border-gray-300 px-3 py-2" placeholder="example@wabitabi.com" />
      </div>
      <div>
        <label className="mb-1 block font-bold text-gray-700">電話番号</label>
        <input type="tel" className="w-full border border-gray-300 px-3 py-2" placeholder="090-0000-0000" />
      </div>
      {showProgramField && (
        <div>
          <label className="mb-1 block font-bold text-gray-700">ご希望の留学先・相談内容</label>
          <select className="w-full border border-gray-300 px-3 py-2">
            <option>セブ島</option>
            <option>ハワイ</option>
            <option>バリ</option>
            <option>フィジー</option>
            <option>その他・未定</option>
          </select>
        </div>
      )}
      <div>
        <label className="mb-1 block font-bold text-gray-700">お問い合わせ内容 [必須]</label>
        <textarea className="h-32 w-full border border-gray-300 px-3 py-2" placeholder="[ダミー：お問い合わせ内容を入力]" />
      </div>
      <div className="flex items-start gap-2 text-xs text-gray-500">
        <input type="checkbox" className="mt-0.5" />
        <span>
          プライバシーポリシーに同意する
        </span>
      </div>
      <button type="submit" className="bg-gray-800 px-6 py-2.5 text-sm text-white hover:bg-gray-700">
        {submitLabel}
      </button>
      <p className="text-xs text-gray-400">[※ワイヤーフレーム版：送信すると完了ページへ遷移するモック動作です]</p>
    </form>
  );
}
