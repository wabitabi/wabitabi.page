import Link from "next/link";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";

interface CategoryFilterProps {
  basePath: string;
  active?: BusinessCategory;
}

const categories = Object.keys(BUSINESS_CATEGORY_LABEL) as BusinessCategory[];

export function CategoryFilter({ basePath, active }: CategoryFilterProps) {
  const base = "border px-5 py-2 text-xs tracking-widest transition";
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      <Link
        href={basePath}
        className={`${base} ${!active ? "border-ink bg-ink text-paper" : "border-sand text-taupe hover:border-gold hover:text-ink"}`}
      >
        すべて
      </Link>
      {categories.map((c) => (
        <Link
          key={c}
          href={`${basePath}?category=${c}`}
          className={`${base} ${active === c ? "border-ink bg-ink text-paper" : "border-sand text-taupe hover:border-gold hover:text-ink"}`}
        >
          {BUSINESS_CATEGORY_LABEL[c]}
        </Link>
      ))}
    </div>
  );
}
