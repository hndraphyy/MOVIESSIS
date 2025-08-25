"use clients";
import HeroSection from "@/components/sections/home/HeroSections";
import StatistikSection from "@/components/sections/home/StatistikSection";
import CoreBusinesSection from "@/components/sections/home/CoreBusinesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatistikSection />
      <CoreBusinesSection />
    </>
  );
}
