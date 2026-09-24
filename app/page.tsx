import Hero from "@/components/sections/Hero";
import EquationStrip from "@/components/sections/EquationStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductFeatures from "@/components/sections/ProductFeatures";
import MarketSection from "@/components/sections/MarketSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <EquationStrip />
      <HowItWorks />
      <ProductFeatures />
      <MarketSection />
      <FinalCta />
    </>
  );
}
