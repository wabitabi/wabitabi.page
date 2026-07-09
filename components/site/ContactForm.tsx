"use client";

import { useRouter } from "next/navigation";

interface ContactFormProps {
  thanksHref: string;
  submitLabel: string;
  showProgramField?: boolean;
}

const inputClass =
  "w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-taupe/60 focus:border-gold focus:outline-none";

export function ContactForm({ thanksHref, submitLabel, showProgramField }: ContactFormProps) {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(thanksHref);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label className="mb-2 block text-xs tracking-widest text-ink">
          お名前 <span className="text-gold">※必須</span>
        </label>
        <input type="text" className={inputClass} placeholder="山田 花子" />
      </div>
      <div>
        <label className="mb-2 block text-xs tracking-widest text-ink">
          メールアドレス <span className="text-gold">※必須</span>
        </label>
        <input type="email" className={inputClass} placeholder="example@wabitabi.com" />
      </div>
      <div>
        <label className="mb-2 block text-xs tracking-widest text-ink">電話番号</label>
        <input type="tel" className={inputClass} placeholder="090-0000-0000" />
      </div>
      {showProgramField && (
        <div>
          <label className="mb-2 block text-xs tracking-widest text-ink">ご希望の留学先</label>
          <select className={inputClass}>
            <option>セブ島</option>
            <option>ハワイ</option>
            <option>バリ</option>
            <option>フィジー</option>
            <option>その他・未定</option>
          </select>
        </div>
      )}
      <div>
        <label className="mb-2 block text-xs tracking-widest text-ink">
          {showProgramField ? "相談したいこと" : "お問い合わせ内容"} <span className="text-gold">※必須</span>
        </label>
        <textarea
          className={`${inputClass} h-36`}
          placeholder={showProgramField ? "例：留学に興味はあるけれど、何から始めればいいか分からない…など、なんでもどうぞ" : "お問い合わせ内容をご記入ください"}
        />
      </div>
      <label className="flex items-start gap-3 text-xs text-taupe">
        <input type="checkbox" className="mt-0.5 accent-gold" />
        <span>プライバシーポリシーに同意する</span>
      </label>
      <div className="pt-2 text-center">
        <button
          type="submit"
          className="border border-ink bg-ink px-14 py-3.5 text-sm tracking-[0.2em] text-paper transition hover:bg-paper hover:text-ink"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
