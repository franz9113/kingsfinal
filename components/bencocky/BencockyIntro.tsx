import timeTocelebrate from "@/public/assets/images/bencocky/time-to-celebrate.png";
import Image from "next/image";

const BencockyIntro = () => {
  return (
    <section className="bg-black padding-component">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div>
          <h2 className="bold-32 text-[#FFD252]">
            BEN COCKY BLENDED SCOTCH WHISKEY
          </h2>
        </div>
        <div></div>
        <div className="flex flex-col justify-end">
          <ul className="text-[#FFD252]">
            <Image src={timeTocelebrate} alt="" />

            <li>
              <span className="font-bold">BEN COCKY</span>, the Whiskey that
              brings people together.
            </li>
            <li>
              Whether you are toasting to a hard-earned victory, drowning the
              sorrows of a tough defeat, or simply yearning to relive the
              carefree spirit of the 90s, Ben Cocky is the perfect companion to
              gather your crew and extend the festivities late into the night.
            </li>
            <li> Let the good times flow with Ben Cocky!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BencockyIntro;
