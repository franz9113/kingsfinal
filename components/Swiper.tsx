"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperImageProps {
  images: string[];
}

const SwiperImage: React.FC<SwiperImageProps> = ({ images }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    console.log('Slide index changed to', swiper.activeIndex);
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSwiper={(s) => setSwiper(s)}
      onSlideChange={handleSlideChange}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImage;