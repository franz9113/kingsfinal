import React from "react";
import EmblaCarousel from "../EmblaCarousel";

const HomeProducts = () => {
  return (
    <section className="bg-black padding-component">
      {/* <div className="padding-component max-container"> */}
        <h1 className="md:bold-64 bold-40 text-center text-white mb-4">OUR PRODUCTS</h1>
        <EmblaCarousel />
      {/* </div> */}
    </section>
  );
};

export default HomeProducts;
