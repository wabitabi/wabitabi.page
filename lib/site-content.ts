// サイト全体で共通利用するコンテンツ
export const VISION = "どこに生まれても、誰もが自分らしい人生を選べる社会へ";
export const MISSION = "海外挑戦というきっかけで、自分らしく生きる人を増やす。";

// /designs 参照用（2行表示のデザインモックで使用）
export const VISION_LINES = ["どこに生まれても、", "誰もが自分らしい人生を選べる社会へ"] as const;

export const SUB_COPY =
  "熊本から、心理学にもとづく体験設計で「はじめての一歩」に伴走します。";

export const PILLARS = [
  {
    id: "wellbeing",
    title: "Wellbeing留学",
    en: "Wellbeing Ryugaku",
    desc: "18〜25歳の女性を対象にした、2週間のキャリア育成プログラム。舞台はベトナム・ダナン。実践型インターンシップで、起業家精神（アントレプレナーシップ）を育みながら、自分のキャリアと本気で向き合います。",
    photoIndex: 4,
  },
  {
    id: "ryugaku",
    title: "くまもと留学相談室",
    en: "Kumamoto Ryugaku Soudan",
    desc: "熊本の中高大と連携する、無料の留学相談窓口。セブ島を中心に、ハワイ・バリ・フィジーの語学留学を専門にサポートします。",
    photoIndex: 3,
  },
  {
    id: "shucchou",
    title: "出張授業",
    en: "Guest Lectures",
    desc: "実際に海外挑戦をして自分らしく生きる身近な先輩から子どもたちへ。海外挑戦という選択肢を自分ごとにし、全ての子どもたちの可能性を広げます。",
    photoIndex: 0,
  },
  {
    id: "sns",
    title: "SNS PR事業",
    en: "SNS PR",
    desc: "総フォロワー6万人超の発信力で、企業のSNSのPRを行います。分析・調査・企画・撮影・編集まで、すべてサポートします。",
    photoIndex: 2,
  },
] as const;

export const CEO_MESSAGE =
  "世界を見ることは、自分自身の可能性を広げ、自分自身を知ることができます。海外挑戦をきっかけに、自分らしい道を切り開いていきましょう。";

export const CEO_NAME = "島添日花李";
export const CEO_TITLE = "代表取締役";

export const STATS = [
  { value: "33", unit: "カ国", label: "代表の渡航経験" },
  { value: "6", unit: "万人+", label: "SNS総フォロワー" },
  { value: "10", unit: "名", label: "Wellbeing留学 第1期" },
  { value: "0", unit: "円", label: "留学相談はすべて無料" },
] as const;
