import { motion } from "framer-motion";
import Button from "../Button";

import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <section className="bg-black text-white">
      <div className="padding-component max-container">
        <p className="regular-16 max-w-3xl">
          Welcome to Abdawn Limited. We are a new force in the world of premium
          spirits, driven by a passion for craftsmanship and a commitment to
          delivering exceptional experiences. Although we are a startup, our
          ambition is to establish ourselves as a trusted and respected brand,
          renowned for our unwavering dedication to quality and innovation.
        </p>

        <Button
          type="button"
          title="more about us"
          icon={<ArrowLongRightIcon className="w-6 h-6" />}
          variant="btn_transparent mt-4"
          href="/about"
        />
      </div>
    </section>
  );
};

export default HomeIntro;
