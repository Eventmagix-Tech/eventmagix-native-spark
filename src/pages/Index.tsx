import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Eventmagix | Native Mobile Event Apps for Conferences";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AudienceSection />
        <DifferentiatorsSection />
        <FeaturesSection />
        <PricingSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
