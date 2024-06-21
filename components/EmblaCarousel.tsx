"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

import benCockyIMG from "../public/assets/images/bencocky/ben_cocky_img.png";
import limVodkaIMG from "../public/assets/images/limvodka/lim_vodka_img.png";
import loyalBanditIMG from "../public/assets/images/loyalbandit/loyal_bandit_img.png";
import Image from "next/image";

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [slides, setSlides] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (emblaApi) {
      setSlides([
        <div key="slide1" className="embla__slide">
          <div className="embla__slide__inner">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="flex flex-col">
                <h2 className="bold-32 uppercase text-white">ben cocky</h2>
                <p className="regular-16 text-white">
                  Blending the bold flavors of French brandy with the tropical
                  sweetness of coconut, Ben Cocky is a truly unique and
                  innovative spirit. This captivating blend offers a taste of
                  adventure, transporting you to sun-drenched beaches and
                  vibrant island life with every sip.
                </p>
                <Button
                  type="button"
                  title="discover"
                  icon={<ArrowLongRightIcon className="w-6 h-6" />}
                  variant="btn_transparent mt-4"
                  href="/product/bencocky"
                />
              </div>
              <div className="bottle-container">
                <Image src={benCockyIMG} alt="" />
              </div>
              {/* 3rd grid */}
              <div className="md:order-3 order-2 my-auto">
                {/* 1st */}
                <div className="flex items-center w-full mb-4">
                  <div className="flex justify-center items-center w-12 h-12 border-[#D8B270] border-2 rounded-full">
                    <p className="regular-14 text-white font-bold">40% </p>
                  </div>
                  <span className="regular-16 pl-2 text-white">
                    - Alcohol by volume
                  </span>
                </div>
                {/* 2nd */}
                <div className="flex items-center w-full">
                  <div className="flex justify-center items-center w-12 h-12 border-[#D8B270] border-2 rounded-full">
                    <p className="regular-14 text-white font-bold">100% </p>
                  </div>
                  <span className="regular-16 pl-2 text-white">
                    - Made in France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>,
        <div key="slide2" className="embla__slide">
          <div className="embla__slide__inner">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="flex flex-col">
                <h2 className="bold-32 uppercase text-white">lim vodka</h2>
                <p className="regular-16 text-white">
                  Crafted in the heart of France, Lim Vodka is a testament to
                  the art of distillation. Its smooth, refined taste is the
                  result of meticulous attention to detail and a commitment to
                  using only the finest ingredients. Whether enjoyed neat or as
                  the foundation for a signature cocktail, Lim Vodka promises to
                  elevate any occasion.
                </p>
                <Button
                  type="button"
                  title="discover"
                  icon={<ArrowLongRightIcon className="w-6 h-6" />}
                  variant="btn_transparent mt-4"
                  href="/product/limvodka"
                />
              </div>
              <div className="bottle-container">
                <Image src={limVodkaIMG} alt="" />
              </div>
              {/* 3rd grid */}
              <div className="md:order-3 order-2 my-auto">
                {/* 1st */}
                <div className="flex items-center w-full mb-4">
                  <div className="flex justify-center items-center w-12 h-12 border-[#D8B270] border-2 rounded-full">
                    <p className="regular-14 text-white font-bold">40% </p>
                  </div>
                  <span className="regular-16 pl-2 text-white">
                    - Alcohol by volume
                  </span>
                </div>
                {/* 2nd */}
                <div className="flex items-center w-full">
                  <div className="flex justify-center items-center w-12 h-12 border-[#D8B270] border-2 rounded-full">
                    <p className="regular-14 text-white font-bold">100% </p>
                  </div>
                  <span className="regular-16 pl-2 text-white">
                    - Made in France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>,
        <div key="slide3" className="embla__slide">
          <div className="embla__slide__inner">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {/* 1st grid */}
              <div className="flex flex-col">
                <h2 className="bold-32 uppercase text-white">loyal bandit</h2>
                <p className="regular-16 text-white">
                  Loyal Bandit is a small-batch bourbon whiskey that embodies
                  the spirit of adventure and rebellion. Aged to perfection in
                  charred oak barrels, this bourbon boasts a rich, complex
                  flavor profile that is sure to impress even the most
                  discerning whiskey connoisseurs.
                </p>
                <Button
                  type="button"
                  title="discover"
                  icon={<ArrowLongRightIcon className="w-6 h-6" />}
                  variant="btn_transparent mt-4"
                  href="/product/loyalbandit"
                />
              </div>
              {/* 2nd grid */}
              <div className="bottle-container">
                <Image src={loyalBanditIMG} alt="" />
              </div>
              {/* 3rd grid */}
              <div className="md:order-3 order-2 my-auto">
                {/* 1st */}
                <div className="flex items-center w-full mb-4">
                  <div className="flex justify-center items-center w-12 h-12 border-[#D8B270] border-2 rounded-full">
                    <p className="regular-14 text-white font-bold">40% </p>
                  </div>
                  <span className="regular-16 pl-2 text-white">
                    - Alcohol by volume
                  </span>
                </div>
                {/* 2nd */}
                <div className="flex items-center w-full">
                  <div className="flex justify-center items-center w-12 h-12 border-[#D8B270] border-2 rounded-full">
                    <p className="regular-14 text-white font-bold">100% </p>
                  </div>
                  <span className="regular-16 pl-2 text-white">
                    - Made in France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>,
      ]);
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
