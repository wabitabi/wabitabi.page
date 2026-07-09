export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.4em] text-gold md:text-xs ${className}`}>
      {children}
    </p>
  );
}
