import Hero from "@/components/Hero";
import HomeBanner from "@/components/home/homeBanner";
import HomeIntro from "@/components/home/homeIntro";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HomeBanner />
      <HomeIntro />
    </>
  );
}
