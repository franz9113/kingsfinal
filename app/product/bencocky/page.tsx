import BencockyBanner from "@/components/bencocky/BencockyBanner";
import BencockyIngredients from "@/components/bencocky/BencockyIngredients";
import BencockyIntro from "@/components/bencocky/BencockyIntro";
import BencockyVersatile from "@/components/bencocky/BencockyVersatile";
import DiscoverMore from "@/components/DiscoverMore";

const BencockyPage = () => {
  return (
    <>
      <BencockyBanner />
      <BencockyIntro />
      <BencockyVersatile />
      <BencockyIngredients />
      <DiscoverMore />
    </>
  );
};

export default BencockyPage;
