import loyalBandit from "@/public/assets/images/loyalbandit/loyalbandit2.png";
import Image from "next/image";

const LoyalbanditIntro = () => {
  return (
    <section className="bg-[#003376]">
      <div className="padding-component text-white flex flex-col">
        <h1 className="bold-64 text-center">
          LOYAL BANDIT SINGLE MALT WHISKEY
        </h1>
        <div className="flexCenter">
          <Image src={loyalBandit} alt="" />
        </div>
        <ul className="regular-16 text-white grid grid-cols-1 gap-y-4">
          <li className="">Loyal Bandit, the whiskey of the thug gentlemen!</li>
          <li className="">
            Loyal Bandit is the very expression of French flair, embodying the
            nation&apos;s creative spirit and audacious charm. Crafted with
            meticulous attention to detail, this exceptional Single Malt whiskey
            is a hymn to French impertinence, captivating the senses with its
            bold, complex flavors and rebellious character.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LoyalbanditIntro;
