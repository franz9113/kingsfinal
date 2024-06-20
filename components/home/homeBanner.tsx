import Image from "next/image";
import React from "react";

import homeBanner from "../../public/assets/images/home-banner.png"

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <Image
        src={homeBanner}
        alt="Home Banner"
        className="banner-image"
      />
      <div className="banner-image"></div>
    </section>
  );
};

export default HomeBanner;
