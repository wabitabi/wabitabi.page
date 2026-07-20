"use client";

import { useEffect, useRef } from "react";
import { heroPhoto } from "@/lib/photos";

export function HeroParallax() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        // スクロール量に応じて背景をゆっくり下へ動かす（視差）
        const offset = Math.min(window.scrollY * 0.4, 240);
        img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 背景画像（初期はズームインし、スクロールで視差） */}
      <img
        ref={imgRef}
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        className="animate-hero-zoom absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        style={{ transform: "scale(1.15)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/45" />

      {/* コピー */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <p className="animate-fade-up animation-delay-1200 mb-6 text-[10px] tracking-[0.5em] text-white/80 md:text-xs">
          WABITABI — KUMAMOTO, JAPAN
        </p>
        <h1 className="animate-blur-in font-serif-jp text-2xl font-light leading-[1.9] tracking-[0.15em] drop-shadow-md md:text-4xl lg:text-5xl">
          海外挑戦を、
          <br className="md:hidden" />
          自分らしく生きるきっかけに
        </h1>
        <span className="animate-fade-up animation-delay-1200 mt-8 h-px w-16 bg-white/60" aria-hidden />
      </div>

      {/* スクロール誘導 */}
      <div className="animate-fade-up animation-delay-1200 absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-white/70">
        <span className="text-[9px] tracking-[0.4em]">SCROLL</span>
        <span className="animate-scroll-cue block h-8 w-px bg-white/50" aria-hidden />
      </div>
    </section>
  );
}
