import React from "react";

const BencockyIngredients = () => {
  return (
    <section className="bg-black padding-x-component">
      {/* <div className=" max-container"> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:pb-0 pb-8">
          <div className="md:order-1 order-2 flex flex-col my-auto">
            <h2 className="bold-32 text-[#FFD252]">
              Barley honey cocktail by Les Cocktails de Charles
            </h2>
            <ul className="regular-16 text-[#FFD252]">
              <li>15 ml Honey syrup</li>
              <li>30 ml Verjus Cognacais</li>
              <li>45 ml of Ben Cocky Scotch Whisky</li>
              <li>70 ml of Ginger Ale</li>
              <li>2 bitter Angostura dashes</li>
              <li>1 peat spray</li>
            </ul>
          </div>
          <div className="md:order-2 order-1 video-container m-auto">
          <video
            src="../assets/videos/Bencocky.mp4"
            autoPlay={true}
            controls={false}
            loop={true}
            muted={true}
            height={400}
            width={300}
            className=""
          />
        </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default BencockyIngredients;
