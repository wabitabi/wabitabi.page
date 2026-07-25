"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/lib/photos";

interface SmartImageProps {
  photo: Photo;
  className?: string;
  alt?: string;
}

/**
 * 実写真（photo.src）がまだアップロードされていない場合は、プレースホルダー
 * （photo.fallback）を表示する画像コンポーネント。
 *
 * 仕組み：初期表示は必ず fallback（＝ビルド済みHTMLにも placeholder が入るので
 * 画像割れが起きない）。マウント後に photo.src の読み込みを試み、成功した時だけ
 * 実写真へ差し替える。これにより「public/images/ に置くだけで反映」を実現する。
 */
export function SmartImage({ photo, className, alt }: SmartImageProps) {
  const initial = photo.fallback ?? photo.src;
  const [src, setSrc] = useState(initial);

  useEffect(() => {
    if (!photo.fallback) return; // 実写真確定（fallback なし）はそのまま表示
    let active = true;
    const probe = new window.Image();
    probe.onload = () => {
      if (active) setSrc(photo.src);
    };
    probe.src = photo.src;
    return () => {
      active = false;
    };
  }, [photo.src, photo.fallback]);

  return <img src={src} alt={alt ?? photo.alt} className={className} />;
}
