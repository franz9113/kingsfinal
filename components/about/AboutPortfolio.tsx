import SwiperComponent from "../Swiper";
import styles from "./About.module.css";

const AboutPortfolio = () => {
  return (
    <>
      <div className={styles.portfolio_bg}>
        <SwiperComponent />
      </div>
      <div className="bg-black">
        <div className="padding-component flex flex-col">
          <h2 className="bold-32-w">Crafting Exceptional Brands</h2>
          <p className="regular-16-w">
            At the heart of Abdawn Limited lies a relentless pursuit of
            excellence. We meticulously source the finest ingredients and employ
            time-honored techniques, blending tradition with modern innovation
            to craft spirits that are both timeless and ahead of their time.From
            our flagship offerings to future introductions, each brand in our
            portfolio will be a testament to our unwavering commitment to
            quality, authenticity, and the art of distillation.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPortfolio;
