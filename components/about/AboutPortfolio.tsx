import React from 'react'
import SwiperImage from '../Swiper';

import portfolio_1 from "@/public/assets/images/about/portfolio_1.png"
import portfolio_2 from "@/public/assets/images/about/portfolio_2.png"
import portfolio_3 from "@/public/assets/images/about/portfolio_3.png"
import portfolio_4 from "@/public/assets/images/about/portfolio_4.png"

const AboutPortfolio = () => {
    const images = [portfolio_1.src, portfolio_2.src, portfolio_3.src, portfolio_4.src];
    
      return (
        <div>
          <h1>Swiper Image Slider</h1>
          <SwiperImage images={images} />
        </div>
      );
    };

export default AboutPortfolio