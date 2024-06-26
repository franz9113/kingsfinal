"use client";
import benCockyIMG from "../public/assets/images/bencocky/ben_cocky_img.png";
import limVodkaIMG from "../public/assets/images/limvodka/lim_vodka_img.png";
import loyalBanditIMG from "../public/assets/images/loyalbandit/loyal_bandit_img.png";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const DiscoverMore = () => {
  const pathname = usePathname();

  let backgroundColor = "";
  let textColor = "";
  let image1 = null;
  let image2 = null;
  let text1 = "";
  let text2 = "";
  let link1 = "";
  let link2 = "";

  switch (pathname) {
    case "/product/bencocky":
      backgroundColor = "#FFD252";
      textColor = "black";
      image1 = limVodkaIMG;
      image2 = loyalBanditIMG;
      text1 = "lim vodka";
      text2 = "loyal bandit";
      link1 = "/product/limvodka";
      link2 = "/product/loyalbandit";
      break;
    case "/product/loyalbandit":
      backgroundColor = "#003376";
      textColor = "white";
      image1 = benCockyIMG;
      image2 = limVodkaIMG;
      text1 = "ben cocky";
      text2 = "lim vodka";
      link1 = "/product/bencocky";
      link2 = "/product/limvodka";
      break;
    default:
      backgroundColor = "#EDD6C0";
      textColor = "black";
      image1 = benCockyIMG;
      image2 = loyalBanditIMG;
      text1 = "ben cocky";
      text2 = "loyal bandit";
      link1 = "/product/bencocky";
      link2 = "/product/loyalbandit";
      break;
  }

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        fontWeight: "bold",
      }}
    >
      <div className="padding-component max-container">
        <h1 className="md:bold-64 bold-40 text-center">Discover more</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          <div className="flex flex-col">
            <div className="bottle-container">
              {image1 && <Image src={image1} alt="Bottle 1" />}
            </div>
            <p className="bold-32 text-center mt-2 uppercase">
              <Link href={link2}>{text1}</Link>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="bottle-container">
              {image2 && <Image src={image2} alt="Bottle 2" />}
            </div>

            <p className="bold-32 text-center mt-2 uppercase">
              <Link href={link2}>{text2}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
