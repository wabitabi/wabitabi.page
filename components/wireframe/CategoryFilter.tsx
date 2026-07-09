import Link from "next/link";
import { BUSINESS_CATEGORY_LABEL, BusinessCategory } from "@/lib/types";

interface CategoryFilterProps {
  basePath: string;
  active?: BusinessCategory;
}

const categories = Object.keys(BUSINESS_CATEGORY_LABEL) as BusinessCategory[];

export function CategoryFilter({ basePath, active }: CategoryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2 text-xs">
      <Link
        href={basePath}
        className={`border px-3 py-1.5 ${!active ? "border-gray-800 bg-gray-800 text-white" : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
      >
        すべて
      </Link>
      {categories.map((c) => (
        <Link
          key={c}
          href={`${basePath}?category=${c}`}
          className={`border px-3 py-1.5 ${active === c ? "border-gray-800 bg-gray-800 text-white" : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
        >
          {BUSINESS_CATEGORY_LABEL[c]}
        </Link>
      ))}
    </div>
  );
}
