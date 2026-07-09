interface SectionProps {
  label: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Section({ label, title, children, className = "" }: SectionProps) {
  return (
    <section className={`border-t border-gray-300 py-10 first:border-t-0 ${className}`}>
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-2 text-xs font-mono uppercase tracking-wide text-gray-400">{label}</p>
        {title && <h2 className="mb-6 text-xl font-bold text-gray-800">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
