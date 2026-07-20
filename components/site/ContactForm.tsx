"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";

interface ContactFormProps {
  thanksHref: string;
  submitLabel: string;
  subject: string;
  formType: string;
  showProgramField?: boolean;
}

const inputClass =
  "w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-taupe/60 focus:border-gold focus:outline-none";

export function ContactForm({
  thanksHref,
  submitLabel,
  subject,
  formType,
  showProgramField,
}: ContactFormProps) {
  const router = useRouter();
  const [state, handleSubmit] = useForm("xzdnrkny");

  // 送信成功したら完了ページへ遷移
  useEffect(() => {
    if (state.succeeded) router.push(thanksHref);
  }, [state.succeeded, router, thanksHref]);

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Formspree用の隠しフィールド（件名・種別の出し分け） */}
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="お問い合わせ種別" value={formType} />

      <div>
        <label htmlFor="name" className="mb-2 block text-xs tracking-widest text-ink">
          お名前 <span className="text-gold">※必須</span>
        </label>
        <input id="name" type="text" name="name" required className={inputClass} placeholder="山田 花子" />
        <ValidationError prefix="お名前" field="name" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs tracking-widest text-ink">
          メールアドレス <span className="text-gold">※必須</span>
        </label>
        <input id="email" type="email" name="email" required className={inputClass} placeholder="example@wabitabi.com" />
        <ValidationError prefix="メールアドレス" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-xs tracking-widest text-ink">
          電話番号 <span className="text-gold">※必須</span>
        </label>
        <input id="phone" type="tel" name="phone" required className={inputClass} placeholder="090-0000-0000" />
        <ValidationError prefix="電話番号" field="phone" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>
      {showProgramField && (
        <div>
          <label htmlFor="program" className="mb-2 block text-xs tracking-widest text-ink">
            ご希望の留学先
          </label>
          <select id="program" name="program" className={inputClass} defaultValue="セブ島">
            <option>セブ島</option>
            <option>ハワイ</option>
            <option>バリ</option>
            <option>フィジー</option>
            <option>その他・未定</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-2 block text-xs tracking-widest text-ink">
          {showProgramField ? "相談したいこと" : "お問い合わせ内容"} <span className="text-gold">※必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className={`${inputClass} h-36`}
          placeholder={
            showProgramField
              ? "例：留学に興味はあるけれど、何から始めればいいか分からない…など、なんでもどうぞ"
              : "お問い合わせ内容をご記入ください"
          }
        />
        <ValidationError prefix="内容" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>
      <label className="flex items-start gap-3 text-xs text-taupe">
        <input type="checkbox" name="プライバシーポリシー同意" value="同意" required className="mt-0.5 accent-gold" />
        <span>プライバシーポリシーに同意する</span>
      </label>
      <ValidationError errors={state.errors} className="text-xs text-red-600" />
      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="border border-ink bg-ink px-14 py-3.5 text-sm tracking-[0.2em] text-paper transition hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.submitting ? "送信中…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
