import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center font-serif-jp text-ink">
      <p className="animate-tracking-in text-[10px] uppercase tracking-[0.5em] text-gold md:text-xs">
        Not Found
      </p>
      <p className="animate-fade-up animation-delay-300 mt-8 text-5xl font-light tracking-[0.2em] text-sand">
        404
      </p>
      <h1 className="animate-fade-up animation-delay-600 mt-6 text-xl font-light tracking-wide">
        ページが見つかりませんでした
      </h1>
      <p className="animate-fade-up animation-delay-600 mt-6 text-sm leading-loose text-taupe">
        お探しのページは、移動または削除された可能性があります。
      </p>
      <Link
        href="/"
        className="animate-fade-up animation-delay-1200 mt-12 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
