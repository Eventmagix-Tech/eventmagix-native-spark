import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { AddonsSection } from "@/components/AddonsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DifferentiatorsSection />
        <FeaturesSection />
        <TrustSection />
        <PricingSection />
        <AddonsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
