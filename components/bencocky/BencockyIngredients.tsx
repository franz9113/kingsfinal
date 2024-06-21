import React from "react";

const BencockyIngredients = () => {
  return (
    <section className="bg-black padding-component">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col">
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
      </div>
    </section>
  );
};

export default BencockyIngredients;
