"use client";

import Image from "next/image";
import { useState } from "react";

export function DeferredHeroVideo() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <button
        type="button"
        onClick={() => setReady(true)}
        aria-label="Odtwórz film o Polanie Przygody"
        className="absolute inset-0 z-10 flex items-center justify-center bg-polana-dark-green/10 hover:bg-polana-dark-green/20 transition-colors cursor-pointer"
      >
        <Image
          src="/images/posters/polana-intro.webp"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 360px"
        />
        <span className="relative z-10 w-16 h-16 rounded-full bg-polana-lime text-polana-dark-green flex items-center justify-center shadow-xl">
          <svg aria-hidden="true" className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/images/posters/polana-intro.webp"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/polana-intro-web.mp4" type="video/mp4" />
    </video>
  );
}
