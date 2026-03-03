import { AboutUs } from "@/components/about us/AboutUs";
import { Danger } from "@/components/danger/Danger";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { StatsSection } from "@/components/stats/Stats";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutUs />
      <StatsSection />
      <Danger />
    </div>
  );
}
