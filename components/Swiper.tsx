"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import portfolio_1 from "@/public/assets/images/about/portfolio_1.png";
import portfolio_2 from "@/public/assets/images/about/portfolio_2.png";
import portfolio_3 from "@/public/assets/images/about/portfolio_3.png";
import portfolio_4 from "@/public/assets/images/about/portfolio_4.png";

const SwiperComponent = () => {

  return (
    <section className="padding-component">
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <Image src={portfolio_1} alt="1" className="m-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={portfolio_2} alt="2" className="m-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={portfolio_3} alt="3" className="m-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={portfolio_4} alt="4" className="m-auto"/>
      </SwiperSlide>
    </Swiper>
  </section>
  );
};

export default SwiperComponent;
