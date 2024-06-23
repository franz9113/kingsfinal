import NewsletterInput from "../NewsletterInput";
import styles from "./Home.module.css";

const HomeNewsletter = () => {
  return (
    <section className={`${styles.newsletter}`}>
      <div className="min-h-96 bg-black opacity-60 padding-component">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 justify-center items-center ">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="border-t border-[#cba563] w-8 md:w-16 mr-2 md:mr-4"></div>
              <h2 className="text-[#cba563] text-base md:text-xl font-bold capitalize">
                subscribe
              </h2>
            </div>
            <p className="bold-20 text-white uppercase">
              sign up for our newsletter now
            </p>
          </div>
          <div>
            <NewsletterInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
