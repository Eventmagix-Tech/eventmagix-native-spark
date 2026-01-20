import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { AddonsSection } from "@/components/AddonsSection";
import { Footer } from "@/components/Footer";
import { AppShowcaseHero } from "@/components/AppShowcaseHero";
import { AppJourneySection } from "@/components/AppJourneySection";
import { AppFeaturesShowcase } from "@/components/AppFeaturesShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AppShowcaseHero />
        <DifferentiatorsSection />
        <FeaturesSection />
        <AppJourneySection />
        <AppFeaturesShowcase />
        <TrustSection />
        <PricingSection />
        <AddonsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
