import React from "react";
import bencockyBanner from "../../public/assets/images/bencocky/ben-cocky-banner.png";
import bencockyLogo from "../../public/assets/images/bencocky/ben-cocky-logo.png";
import Image from "next/image";
import styles from "./Bencocky.module.css";

const BencockyBanner = () => {
  return (
    <section className={styles.home_banner}>
      <div className={styles.banner_image_wrapper}>
        <Image
          src={bencockyBanner}
          alt="Home Banner"
          className="banner-image"
        />
        {/* <div className={styles.small_image_wrapper}>
          <Image
            src={bencockyLogo}
            alt="Small Image"
            className={styles.small_image}
          />
        </div> */}
      </div>
    </section>
  );
};

export default BencockyBanner;
