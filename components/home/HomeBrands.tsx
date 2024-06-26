import extraOrdinary1 from "@/public/assets/images/extraordinary_1.png";
import extraOrdinary2 from "@/public/assets/images/extraordinary_2.png";
import Image from "next/image";

const HomeBrands = () => {
  return (
    <section className="bg-[#BD9B35]">
      <div className="padding-component max-container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 mb-4">
          <Image src={extraOrdinary1} alt="" priority/>
          <Image src={extraOrdinary2} alt="" />
        </div>
        <h2 className="bold-32">EXTRAORDINARY BRANDS IN EXPERT HANDS</h2>
        <p className="regular-16 max-w-3xl">
          Abdawn Limited. expertly curates extraordinary spirit brands,
          providing partners and patrons access to superior, locally-loved and
          internationally-recognized drinks.
        </p>
      </div>
    </section>
  );
};

export default HomeBrands;
