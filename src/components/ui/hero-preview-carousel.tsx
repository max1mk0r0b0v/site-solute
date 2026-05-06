"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/sitesolute-background.png",
    alt: "Sitesolute visual identity preview",
    isIdentitySlide: true,
  },
  {
    src: "/images/portfolio/beauty-by-maya-preview.png",
    alt: "Beauty By Maya project preview",
  },
  {
    src: "/images/portfolio/lawyer-yonatan-rozen-preview.png",
    alt: "Lawyer Yonatan Rozen project preview",
  },
  {
    src: "/images/portfolio/original-thai-massage-preview.png",
    alt: "Original Thai Massage Jerusalem project preview",
  },
];

export function HeroPreviewCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative mx-auto w-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/7 p-5 shadow-[0_20px_50px_rgba(2,6,23,0.34)] backdrop-blur-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto aspect-[16/9] min-h-[10rem] w-full overflow-hidden rounded-[1.25rem]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={activeSlide !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 460px, 100vw"
              className={
                slide.isIdentitySlide
                  ? "object-cover object-center opacity-55"
                  : "object-cover object-top"
              }
            />
            {slide.isIdentitySlide ? (
              <div className="absolute inset-0 bg-slate-950/34" />
            ) : null}
            {slide.isIdentitySlide ? (
              <div className="relative grid h-full content-center gap-4 p-4">
                <div className="h-3 w-28 rounded-full bg-white/30" />
                <div className="grid gap-3 rounded-[1.25rem] border border-white/12 bg-white/10 p-4">
                  <div className="h-4 w-3/4 rounded-full bg-white/70" />
                  <div className="h-3 w-2/3 rounded-full bg-sky-200/70" />
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl bg-white/16 sm:h-20" />
                    <div className="h-16 rounded-2xl bg-sky-300/20 sm:h-20" />
                    <div className="h-16 rounded-2xl bg-violet-300/20 sm:h-20" />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="relative mt-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSlide === index ? "w-6 bg-sky-200" : "w-1.5 bg-white/28"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
