import Link from "next/link";

export default function DesignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Link
        href="/designs"
        className="fixed bottom-4 right-4 z-50 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-bold text-gray-700 shadow-lg backdrop-blur hover:bg-white"
      >
        ← デザイン案一覧
      </Link>
    </>
  );
}
