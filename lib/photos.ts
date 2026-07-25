export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  // 実写真が無い間に表示する代替画像（SmartImageが src の読み込み失敗時に使用）
  fallback?: string;
}

// ===== 実写真アップロード用の名前付きスロット =====
// src は最終的なファイル名を指す。ファイルを public/images/ に置くだけで自動反映され、
// 未アップロードの間は fallback のプレースホルダーを表示（コード変更不要）。

// 代表写真（私たちについて：プロフィール・創業ストーリー）
export const ceoPhoto: Photo = {
  id: 200,
  src: "/images/ceo.jpg",
  fallback: "/images/photo-2.svg",
  alt: "代表取締役 島添日花李",
  caption: "代表取締役 島添日花李",
};

// くまもと留学相談室（トップ・サービス・実績）
export const ryugakuPhoto: Photo = {
  id: 201,
  src: "/images/ryugaku.jpg",
  fallback: "/images/photo-4.svg",
  alt: "くまもと留学相談室の相談風景",
  caption: "くまもと留学相談室",
};

// 出張授業（トップ・サービス）
export const guestLecturePhoto: Photo = {
  id: 202,
  src: "/images/guest-lecture.jpg",
  fallback: "/images/photo-1.svg",
  alt: "学校での出張授業の様子",
  caption: "出張授業",
};

// 無料相談ページ上部
export const soudanPhoto: Photo = {
  id: 203,
  src: "/images/soudan.jpg",
  fallback: "/images/photo-1.svg",
  alt: "無料相談の様子",
  caption: "まずは気軽に、無料相談から",
};

// アップロード済みの実写真
export const heroPhoto: Photo = {
  id: 100,
  src: "/images/hero-sky.jpg",
  alt: "夕暮れの空を飛行機雲を残して上昇していく飛行機",
  caption: "空へ、世界へ",
};

export const danangPhotos = {
  market: {
    id: 101,
    src: "/images/danang-market.png",
    alt: "ベトナムの市場で果物を手に微笑む女性",
    caption: "ベトナムの市場にて",
  },
  street: {
    id: 102,
    src: "/images/danang-street.png",
    alt: "ヘルメットをかぶってバイクに乗り振り返る女性",
    caption: "ダナンの街を駆ける",
  },
  cafe: {
    id: 103,
    src: "/images/danang-cafe.png",
    alt: "ベトナムのカフェで現地の女性と笑い合う女性",
    caption: "カフェでの語らい",
  },
  beach: {
    id: 104,
    src: "/images/danang-beach.png",
    alt: "夕陽のダナンビーチで両手を広げる女性",
    caption: "ダナンビーチの夕暮れ",
  },
} satisfies Record<string, Photo>;

export const photos: Photo[] = [
  {
    id: 1,
    src: "/images/photo-1.svg",
    alt: "和室の窓辺で世界地図を広げて外を見つめる女性",
    caption: "和室で世界地図を見る",
  },
  {
    id: 2,
    src: "/images/photo-2.svg",
    alt: "本棚のそばで地球儀に触れる女性",
    caption: "地球儀と夕陽の書斎",
  },
  {
    id: 3,
    src: "/images/photo-3.svg",
    alt: "カフェでノートPCの世界地図を開いて微笑む女性",
    caption: "カフェで旅を計画する",
  },
  {
    id: 4,
    src: "/images/photo-4.svg",
    alt: "夕焼けの熊本城を背に空を見上げる女性",
    caption: "熊本城とゴールデンアワー",
  },
  {
    id: 5,
    src: "/images/photo-5.svg",
    alt: "ランタンが飾られたベトナムの路地で振り返り微笑む女性",
    caption: "ベトナムの路地にて",
  },
];
