import React from "react";
import contactBanner from "../../public/assets/images/contact/contact-banner.png";
import Image from "next/image";

const ContactBanner = () => {
  return (
    <section className="home-banner">
      <div className="banner-image">
        <Image src={contactBanner} alt="Home Banner" className="banner-image" />
      </div>
    </section>
  );
};

export default ContactBanner;
