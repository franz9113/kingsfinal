import First from "@/public/assets/images/bencocky/1.png";
import Second from "@/public/assets/images/bencocky/2.png";
import Third from "@/public/assets/images/bencocky/3.png";
import bencockyIngredients from "@/public/assets/images/bencocky/ben_cocky_ingredients.png";

import Image from "next/image";
import styles from "./Bencocky.module.css";

const BencockyVersatile = () => {
  return (
    <section className="bg-[#FFD252] ">
      <div className="padding-component max-container">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 mb-20">
          {/* 1st */}
          <div className="">
            <Image src={First} alt="" className={`m-auto ${styles.circle_container}`} />
            <p className="regular-16 text-center pt-4">
              Fruity aromas of banana with citrus notes
            </p>
          </div>
          {/* 2nd */}
          <div className="">
            <Image src={Second} alt="" className={`m-auto ${styles.circle_container}`}  />
            <p className="regular-16 text-center pt-4">
              Slightly spicy on the palate
            </p>
          </div>
          {/* 3rd */}
          <div className="">
            <Image src={Third} alt="" className={`m-auto ${styles.circle_container}`}  />
            <p className="regular-16 text-center pt-4">Velvety finish</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="md:order-1 order-2 flex flex-col md:text-right m-auto">
            <h2 className="bold-32">VERSATILE & DELICIOUS</h2>
            <p>
              Our Blended Scotch is distilled in the Scottish Highlands then
              transported to our cellars in Cognac. The batches are then
              assembled and reduced with pure water from Charentes. It can be
              enjoyed with cola, in tonic, or in a cocktail for a fresh and
              balanced long drink.
            </p>
          </div>
          <div className="md:order-2 order-1 m-auto">
            <Image src={bencockyIngredients} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BencockyVersatile;
