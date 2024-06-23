import lbGray from "@/public/assets/images/loyalbandit/lbgray.png";
import Image from "next/image";

const LoyalbanditLogo = () => {
  return (
    <section className="bg-black padding-component">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="video-container m-auto">
          <video
            src="../assets/videos/Loyalbandit.mp4"
            autoPlay={true}
            controls={false}
            loop={true}
            muted={true}
            // height={400}
            // width={300}
            className="px-8"
          />
        </div>
        <div className="img_container">
          <Image src={lbGray} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default LoyalbanditLogo;
