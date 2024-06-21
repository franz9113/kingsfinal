import Hero from "@/components/Hero";

import HomeBanner from "@/components/home/HomeBanner";
import HomeBrands from "@/components/home/HomeBrands";
import HomeIntro from "@/components/home/HomeIntro";
import HomeProducts from "@/components/home/HomeProducts";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HomeBanner />
      <HomeIntro />
      <HomeProducts />
      <HomeBrands />
    </>
  );
}
