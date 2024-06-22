import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import benCockyIcon from "@/public/assets/icons/ben_cocky_icon.ico";
import loyalBanditIcon from "@/public/assets/icons/loyal_bandit_icon.ico";
import limVodkaIcon from "@/public/assets/icons/lim_vodka_icon.ico";
import logo from "@/public/assets/images/logo.png";
import NewsletterInput from "./NewsletterInput";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="padding-component max-container">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 pb-14">
          {/* Left Column */}

          <div className="">
            <Image src={logo} alt="" className="pb-4" />
            <p className="regular-16">
              Welcome to Abdawn Limited We are a new force in the world of
              premium spirits, driven by a passion for craftsmanship and a
              commitment to delivering exceptional experiences.
            </p>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col">
            <h3 className="text-center bold-20 mb-4 uppercase">Products</h3>
            <NewsletterInput />
            {/* textfield */}
            {/* textfield end */}
          </div>

          {/* Right Column */}
            <Icons />
           
        </div>
        {/* end grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div></div>
          <p className="flex flex-col regular-12 md:text-right text-center">
            Please do not share alcoholic beverages with anyone under the legal
            purchase age. Drink responsibly and consume in moderation.
            <span className="pt-4">&copy; Abdawn Limited 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
