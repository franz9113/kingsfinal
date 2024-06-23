"use client";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import NewsletterInput from "./NewsletterInput";
import Icons from "./Icons";

import { usePathname } from "next/navigation";
import { ArrowLongRightIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  let backgroundColor = "";
  let textColor = "";

  switch (pathname) {
    case "/about":
    case "/contact":
      backgroundColor = "#BD9B35";
      textColor = "black";
      break;
    case "/product/limvodka":
      backgroundColor = "#74A2A8";
      textColor = "white";
    default:
      backgroundColor = "black";
      textColor = "white";
  }
  return (
    <footer
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
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
            <div>
              <p
                className="bold-20 underline"
                style={{ textDecorationColor: "#BD9B35" }}
              >
                <Link href="/contact" className="flex items-center">
                  Contact us <ArrowLongRightIcon className="ml-2 w-6 h-6" />
                </Link>
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col">
            <h3 className="text-center bold-20 mb-4 uppercase">Products</h3>
            {!isHomePage && <NewsletterInput />}
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
