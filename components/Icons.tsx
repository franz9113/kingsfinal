"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import benCockyIcon from "@/public/assets/images/bencocky/bencocky_icon_bg.png";
import loyalBanditIcon from "@/public/assets/images/limvodka/limvodka_icon_bg.jpg";
import limVodkaIcon from "@/public/assets/images/loyalbandit/loyalbandit_icon_bg.png";

import { usePathname } from "next/navigation";

const Icons = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isBencockyPage = pathname === "/product/bencocky";
  const isLimvodkaPage = pathname === "/product/limvodka";
  const isLoyalbanditPage = pathname === "/product/loyalbandit";

  let facebookLink = "https://www.facebook.com";

  if (isBencockyPage) {
    facebookLink = "https://www.facebook.com/profile.php?id=61560203441677";
  } else if (isLimvodkaPage) {
    facebookLink = "https://www.facebook.com/profile.php?id=61560549747719";
  } else if (isLoyalbanditPage) {
    facebookLink = "https://www.facebook.com/profile.php?id=61560447602183";
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        {isBencockyPage || isLimvodkaPage || isLoyalbanditPage ? (
          <div className="flex space-x-4">
            <div className="icon-container">
              <Link
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-full h-full" />
              </Link>
            </div>

            <div className="icon-container">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-full h-full " />
              </Link>
            </div>
          </div>
        ) : null}

        {isHomePage || isAboutPage || isContactPage ? (
          <div className="flex space-x-4">
            <div className="icon-container">
              <Link
                href="https://www.facebook.com/profile.php?id=61560203441677"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={benCockyIcon}
                  alt="Image Icon"
                  className="w-full h-full rounded-md"
                />
              </Link>
            </div>
            <div className="icon-container">
              <Link
                href="https://www.facebook.com/profile.php?id=61560447602183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={loyalBanditIcon}
                  alt="Image Icon"
                  className="w-full h-full rounded-md"
                />
              </Link>
            </div>

            <div className="icon-container">
              <Link
                href="https://www.facebook.com/profile.php?id=61560549747719"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={limVodkaIcon}
                  alt="Image Icon"
                  className="w-full h-full rounded-md"
                />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <h2 className="bold-20 italic uppercase text-right pt-4">follow us</h2>
    </div>
  );
};

export default Icons;
