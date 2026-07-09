export type BusinessCategory = "wellbeing" | "ryugaku" | "sns";

export const BUSINESS_CATEGORY_LABEL: Record<BusinessCategory, string> = {
  wellbeing: "Wellbeing留学",
  ryugaku: "くまもと留学相談室",
  sns: "SNS PR事業",
};

export interface NewsItem {
  slug: string;
  category: BusinessCategory;
  date: string;
  title: string;
  body: string;
}

export interface ResultItem {
  slug: string;
  category: BusinessCategory;
  date: string;
  title: string;
  summary: string;
  body: string;
}
