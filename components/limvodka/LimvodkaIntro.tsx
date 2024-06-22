import React from "react";

import limvodka_img1 from "@/public/assets/images/limvodka/lim_vodka_img_1.png";
import limvodka_img2 from "@/public/assets/images/limvodka/lim_vodka_img_2.png";
import Image from "next/image";

const LimvodkaIntro = () => {
  return (
    <section className="bg-[#EDD6C0] py-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-8">
        <div className="padding-l-component flex flex-col md:order-1 order-2 my-auto md:pr-6 md:pb-0 pb-8">
          <h2 className="bold-32 md:text-right">LESS IS MORE</h2>
          <p className="regular-16 md:text-right">
            Lim stands for ‘Less Is More”. Committed to the new art of living,
            LIM VODKA invites people to be satisfied with little, to advocate
            anti-radicalism and to return to basics to evolve towards a more
            ethical and sustainable world. LIM, behind these 3 letters hides a
            new way of approaching world, another philosophy of life and a
            desire to share it with those who matter.
          </p>
        </div>
        <div className="md:order-2 order-1">
          <Image src={limvodka_img1} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-8">
        <div className="">
          <Image src={limvodka_img2} alt="" className="w-full h-full" />
        </div>
        <div className="padding-r-component flex flex-col my-auto md:pl-6">
          <h2 className="bold-32 uppercase"> made in france</h2>
          <p className="lg:regular-16 regular-14">
            Distilled in Cognac and made from 100% French winter wheat , our
            vodka is the result of a column distillation process, meticulously
            carried out five times. This method gives our vodka exceptional
            roundness and delicacy. To preserve its purity , it is carefully
            reduced with pure water from Charente sources . The result is a
            crystal clear vodka, whose color shines with a thousand sparkles.
          </p>
          <h2 className="bold-32 uppercase pt-4">TASTING NOTES</h2>
          <p className="lg:regular-16">
            You will appreciate the soft and smooth side of this vodka. The
            aroma is fine and delicate, while the mouth offers a soft warmth and
            roundness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimvodkaIntro;
