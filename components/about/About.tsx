import aboutIMG from "@/public/assets/images/about/about_img.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-black padding-component text-white">
      <h2 className="lg:bold-64 bold-40 uppercase pt-12">who we are</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 pt-4 gap-8">
        <div className="">
          <Image src={aboutIMG} alt="" />
        </div>
        <div className="my-auto">
          <h2 className="bold-32">A Visionary Approach</h2>
          <p className="regular-16">
            Abdawn Limited was founded on the belief that every sip should be a
            celebration of the art of distillation. We are a company built on a
            bold vision – to curate a portfolio of extraordinary spirits that
            captivate the senses and elevate the moments that matter most.Our
            team comprises industry veterans and visionary minds, united by a
            shared passion for pushing boundaries and redefining what it means
            to create truly remarkable spirits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
