import First from "@/public/assets/images/loyalbandit/1.png";
import Second from "@/public/assets/images/loyalbandit/2.png";
import Third from "@/public/assets/images/loyalbandit/3.png";
import lbSmoothness from "@/public/assets/images/loyalbandit/loyal_bandit_smoothness.png";

import styles from "./Loyalbandit.module.css";
import Image from "next/image";

const LoyalbanditSmoothness = () => {
  return (
    <section className="bg-[#003376]">
      <div className="padding-component">
        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 mb-20">
          {/* 1st */}
          <div className="">
            <Image src={First} alt="" className={styles.circle_container} />
            <p className="regular-16-w text-center pt-4">
              Fruity aromas of banana with citrus notes
            </p>
          </div>
          {/* 2nd */}
          <div className="">
            <Image src={Second} alt="" className={styles.circle_container} />
            <p className="regular-16-w text-center pt-4">
              Slightly spicy on the palate
            </p>
          </div>
          {/* 3rd */}
          <div className="">
            <Image src={Third} alt="" className={styles.circle_container} />
            <p className="regular-16-w text-center pt-4">Velvety finish</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="m-auto">
            <Image src={lbSmoothness} alt="" />
          </div>
          <div className="flex flex-col m-auto">
            <h2 className="bold-32-w">SMOOTHNESS PERFECTED</h2>
            <p className="regular-16-w">
              Our Single Malt is distilled twice, aged and blended in Cognac.
              Aging is done for three years in new American oak barrels, in
              ex-Bourbon barrels, then in old Cognac barrels which makes it very
              easy to drink and will please a very wide audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyalbanditSmoothness;
