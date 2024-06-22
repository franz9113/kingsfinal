import DiscoverMore from "@/components/DiscoverMore";
import LimvodkaBanner from "@/components/limvodka/LimvodkaBanner";
import LimvodkaIngredients from "@/components/limvodka/LimvodkaIngredients";
import LimvodkaIntro from "@/components/limvodka/LimvodkaIntro";

const LimvodkaPage = () => {
  return (
    <>
      <LimvodkaBanner />
      <LimvodkaIntro />
      <LimvodkaIngredients />
      <DiscoverMore />
    </>
  );
};

export default LimvodkaPage;
