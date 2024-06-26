import visionIMG from "@/public/assets/images/about/vision.png";
import Image from "next/image";

const AboutVision = () => {
  return (
    <section className="bg-black ">
      <div className="padding-component max-container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <Image src={visionIMG} alt="w-full h-full" />
          </div>
          <div className="flex flex-col my-auto">
            <h2 className="bold-32-w">A Promising Future</h2>
            <p className="regular-16-w">
              At Abdawn Limited, we are just beginning our journey, but our
              ambition knows no bounds. We are committed to continuously
              innovating, expanding our offerings, and exploring new frontiers
              in the world of premium spirits. Join us as we embark on this
              exciting adventure, where every sip is a celebration of
              craftsmanship, and every bottle is a testament to our unwavering
              pursuit of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
