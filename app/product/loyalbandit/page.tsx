import DiscoverMore from "@/components/DiscoverMore";
import LoyalbanditBanner from "@/components/loyalbandit/LoyalbanditBanner";
import LoyalbanditIntro from "@/components/loyalbandit/LoyalbanditIntro";
import LoyalbanditLogo from "@/components/loyalbandit/LoyalbanditLogo";
import LoyalbanditSmoothness from "@/components/loyalbandit/LoyalbanditSmoothness";

const LoyalbanditPage = () => {
  return (
    <>
      <LoyalbanditBanner />
      <LoyalbanditIntro />
      <LoyalbanditLogo />
      <LoyalbanditSmoothness />
      <DiscoverMore />
    </>
  );
};

export default LoyalbanditPage;
