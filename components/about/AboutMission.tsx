import missionIMG from "@/public/assets/images/about/mission.png";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="bg-black padding-component ">
      <div className="bg-[#BD9B35] p-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="md:order-1 order-2 flex flex-col m-auto">
            <h2 className="bold-32 ">A Trusted Partner</h2>
            <p className="regular-16">
              While we may be a new player in the industry, we are built on a
              foundation of integrity and transparency. We understand that trust
              is earned, and we are dedicated to forging lasting partnerships
              with our customers, suppliers, and the communities we
              serve.Through open communication, ethical business practices, and
              a steadfast commitment to our values, we aim to establish Abdawn
              Limited as a trusted and respected brand, one that consumers can
              rely on for exceptional products and unparalleled service.
            </p>
          </div>
          <div className="md:order-2 order-1">
            <Image src={missionIMG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
