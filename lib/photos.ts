// チャットで共有された5枚の写真のメタ情報。
// 現在はSVGプレースホルダーを参照。実写真を public/images/photo-N.jpg として
// 追加したら、src の拡張子を .jpg に変えるだけで全デザイン案に反映される。
export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

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
