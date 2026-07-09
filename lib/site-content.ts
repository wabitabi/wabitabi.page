// デザイン案10パターンで共通利用するサイトコンテンツ
export const VISION = "海外挑戦を通じて、自分らしく生きる人を増やす";

export const VISION_LINES = ["海外挑戦を通じて、", "自分らしく生きる人を増やす"] as const;

export const SUB_COPY =
  "熊本から、心理学にもとづく体験設計で「はじめての一歩」に伴走します。";

export const PILLARS = [
  {
    id: "wellbeing",
    title: "Wellbeing留学",
    en: "Wellbeing Ryugaku",
    desc: "18〜25歳の女性を対象にした2週間の起業・インターンプログラム。ベトナム・ダナンで自己理解と実践的な挑戦を。",
    photoIndex: 4, // photo-5: ベトナムの路地
  },
  {
    id: "ryugaku",
    title: "くまもと留学相談室",
    en: "Kumamoto Ryugaku Soudan",
    desc: "熊本の中高大と連携する無料の留学相談窓口。セブ島を中心に、ハワイ・バリ・フィジーの語学留学を専門にサポート。",
    photoIndex: 3, // photo-4: 熊本城
  },
  {
    id: "sns",
    title: "SNS PR事業",
    en: "SNS PR",
    desc: "総フォロワー6万人超の発信力で、企業のSNS PRを企画から運用まで。数々のPR実績。",
    photoIndex: 2, // photo-3: カフェPC
  },
] as const;

export const CEO_MESSAGE =
  "33カ国を旅し、ハンガリーで学び、インドで働いた原体験から確信しています。海外挑戦は特別な人のものではなく、自分らしさに出会うための、いちばん確かな方法だということを。";

export const CEO_NAME = "島添日花李";
export const CEO_TITLE = "代表取締役";

export const STATS = [
  { value: "33", unit: "カ国", label: "代表の渡航経験" },
  { value: "6", unit: "万人+", label: "SNS総フォロワー" },
  { value: "10", unit: "名", label: "Wellbeing留学 第1期" },
  { value: "0", unit: "円", label: "留学相談はすべて無料" },
] as const;
