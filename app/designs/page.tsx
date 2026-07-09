import Link from "next/link";

export const metadata = { title: "デザイン案一覧｜株式会社WABITABI" };

const designs = [
  {
    slug: "01-warm-minimal",
    name: "01. Warm Minimal",
    ja: "余白と生成り",
    desc: "生成り×焦茶、細身の明朝と広い余白。写真を大きく静かに見せる王道ミニマル。",
    colors: ["#faf7f0", "#b08b5e", "#3d3229"],
  },
  {
    slug: "02-golden-hour",
    name: "02. Golden Hour",
    ja: "夕焼けの没入型",
    desc: "熊本城の夕焼け写真を全画面ヒーローに。白抜きコピーで物語が進む情緒型。",
    colors: ["#2b1a12", "#f2994a", "#ffe9c4"],
  },
  {
    slug: "03-editorial",
    name: "03. Editorial",
    ja: "雑誌・エディトリアル",
    desc: "多段グリッドとセリフ見出し。写真をレイアウトの主役にした雑誌風。",
    colors: ["#ffffff", "#1a1a1a", "#c1502e"],
  },
  {
    slug: "04-wabi-sabi",
    name: "04. Wabi-Sabi",
    ja: "和モダン",
    desc: "縦書き・和紙調の背景・墨色×朱。社名の世界観と響き合う日本的意匠。",
    colors: ["#f3efe6", "#1f1d1a", "#b3402a"],
  },
  {
    slug: "05-pop-friendly",
    name: "05. Pop & Friendly",
    ja: "明るいラウンド",
    desc: "暖色パステルと角丸カード、丸ゴシック。10〜20代女性への親しみやすさ最優先。",
    colors: ["#fff8ec", "#ff8a5c", "#ffd9a8"],
  },
  {
    slug: "06-bold-type",
    name: "06. Bold Typography",
    ja: "タイポグラフィ主導",
    desc: "極太の巨大見出し、テラコッタ×クリームの2色。写真は切り抜き的に挿入。",
    colors: ["#f5ead8", "#c1502e", "#2e2018"],
  },
  {
    slug: "07-scrapbook",
    name: "07. Scrapbook",
    ja: "旅ノート・コラージュ",
    desc: "ポラロイド風の写真をテープ留め。旅の手帳のようなあたたかいコラージュ。",
    colors: ["#e8dcc3", "#ffffff", "#d97f4e"],
  },
  {
    slug: "08-corporate-trust",
    name: "08. Corporate Trust",
    ja: "誠実コーポレート",
    desc: "深緑×ベージュの整然グリッド。法人研修展開も見据えた信頼感重視の王道。",
    colors: ["#1e3a2f", "#f3efe4", "#c9a86a"],
  },
  {
    slug: "09-soft-gradient",
    name: "09. Soft Gradient",
    ja: "淡グラデ×ガラス",
    desc: "サンセットカラーの淡いグラデーションにガラス調カード。現代的なスタートアップ調。",
    colors: ["#ffe4d1", "#fdf1e0", "#e77e55"],
  },
  {
    slug: "10-film-gallery",
    name: "10. Film Gallery",
    ja: "写真ギャラリー主導",
    desc: "暗い背景に写真を展示のように並べる。フィルム粒子感とキャプションで魅せる。",
    colors: ["#171310", "#f3e9d8", "#c98d4e"],
  },
];

export default function DesignsIndexPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
          WABITABI Corporate Site — Design Direction
        </p>
        <h1 className="mb-2 mt-2 text-3xl font-bold text-gray-900">デザイン方向性 10案</h1>
        <p className="mb-10 text-sm text-gray-500">
          トップページを10とおりの方向性でデザインしました。気に入った案（または組み合わせ）をお知らせください。
          写真は5枚の共有写真と同じ構図・色調のプレースホルダーです。
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {designs.map((d) => (
            <Link
              key={d.slug}
              href={`/designs/${d.slug}`}
              className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex gap-1.5">
                {d.colors.map((c) => (
                  <span
                    key={c}
                    className="h-6 w-6 rounded-full border border-black/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:underline">{d.name}</h2>
              <p className="mb-2 text-sm font-bold text-gray-500">{d.ja}</p>
              <p className="text-xs leading-relaxed text-gray-500">{d.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
