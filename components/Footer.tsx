import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import benCockyIcon from "../public/assets/icons/ben_cocky_icon.ico";
import loyalBanditIcon from "../public/assets/icons/loyal_bandit_icon.ico";
import limVodkaIcon from "../public/assets/icons/lim_vodka_icon.ico";

const Footer = () => {
  return (
    <footer className="bg-black text-white padding-component">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-14">
        {/* Left Column */}
        <div className="md:order-1 order-2">
          <p className="regular-16">
            Welcome to Abdawn Limited We are a new force in the world of premium
            spirits, driven by a passion for craftsmanship and a commitment to
            delivering exceptional experiences.
          </p>
        </div>

        {/* Middle Column */}
        <div className="md:order-2 order-3">
          <h3 className="text-center bold-20 mb-4 uppercase">Products</h3>
          {/* textfield */}
          {/* textfield end */}
        </div>

        {/* Right Column */}
        <div className="md:order-3 order-1 flex justify-end space-x-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61560203441677"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={benCockyIcon}
              alt="Image Icon"
              className="h-8 w-8"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61560447602183"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={loyalBanditIcon}
              alt="Image Icon"
              className="h-8 w-8"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61560549747719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={limVodkaIcon}
              alt="Image Icon"
              className="h-8 w-8"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
