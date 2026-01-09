import { NewHero } from "../components/home/NewHero";
import { Stats } from "../components/home/Stats";
import { HowItWorks } from "../components/home/HowItWorks";
import { StrategyMarketplace } from "../components/home/StrategyMarketplace";
import { PlatformFeatures } from "../components/home/PlatformFeatures";
import { Features } from "../components/Features";
import { Integrations } from "../components/home/Integrations";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <>
      <NewHero />
      <Stats />
      <HowItWorks />
      <StrategyMarketplace />
      <PlatformFeatures />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
