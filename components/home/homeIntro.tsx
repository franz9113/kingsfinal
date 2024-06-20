import { motion } from "framer-motion";
import Button from "../Button";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <section className="padding-component bg-black text-white">
      <p className="max-w-2xl">
        Welcome to Abdawn Limited. We are a new force in the world of premium
        spirits, driven by a passion for craftsmanship and a commitment to
        delivering exceptional experiences. Although we are a startup, our
        ambition is to establish ourselves as a trusted and respected brand,
        renowned for our unwavering dedication to quality and innovation.
      </p>

      <Button
        type="button"
        title="more about us"
        icon={<ChevronRightIcon className="w-6 h-6" />}
        variant="btn_transparent mt-4"
        href="/about"
      >

      </Button>
    </section>
  );
};

export default HomeIntro;
