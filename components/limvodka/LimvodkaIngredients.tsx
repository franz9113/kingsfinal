// import limVideo from "@/public/assets/videos/Limvodka.mp4";

const LimvodkaIngredients = () => {
  return (
    <section className="bg-[#74A2A8] ">
      <div className="padding-x-component max-container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="video-container m-auto">
            <video
              src="../assets/videos/Limvodka.mp4"
              autoPlay={true}
              controls={false}
              loop={true}
              muted={true}
              height={400}
              width={300}
              className=""
            />
          </div>
          <div className="my-auto md:pb-0 pb-8">
            <h2 className="bold-32">THE SIGNATURE “LIM MULE” COCKTAIL</h2>
            <ul className="regular-16">
              <li>1- Fill the mug with crushed ice or ice cubes</li>
              <li>2- Mix the Lim Vodka, lemon juice and ginger beer</li>
              <li>3- Stir gently with a cocktail spoon.</li>
              <li>4- Add a slice of lime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimvodkaIngredients;
