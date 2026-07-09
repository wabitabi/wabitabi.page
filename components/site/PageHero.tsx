interface PageHeroProps {
  en: string;
  title: string;
  lead?: string;
}

export function PageHero({ en, title, lead }: PageHeroProps) {
  return (
    <section className="border-b border-sand bg-linen">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="animate-tracking-in text-[10px] uppercase tracking-[0.5em] text-gold md:text-xs">
          {en}
        </p>
        <h1 className="animate-fade-up animation-delay-300 mt-5 text-2xl font-light tracking-[0.15em] text-ink md:text-3xl">
          {title}
        </h1>
        {lead && (
          <p className="animate-fade-up animation-delay-600 mx-auto mt-8 max-w-xl text-sm leading-loose text-taupe">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
