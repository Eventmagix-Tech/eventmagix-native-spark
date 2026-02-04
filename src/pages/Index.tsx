import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eventmagix",
  "description": "Native mobile event apps for conferences, trade shows, and corporate events. Featuring offline access, live polling, networking, and real-time engagement tools.",
  "url": "https://eventmagix-native-spark.lovable.app",
  "logo": "https://eventmagix-native-spark.lovable.app/favicon.png",
  "sameAs": [
    "https://www.linkedin.com/company/eventmagixglobal/"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "VERUS Group",
    "url": "https://verus.group/"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://eventmagix-native-spark.lovable.app/contact"
  },
  "offers": {
    "@type": "AggregateOffer",
    "description": "Native mobile event app plans for conferences and corporate events",
    "offerCount": 4,
    "priceCurrency": "USD"
  }
};

const Index = () => {
  useEffect(() => {
    document.title = "Eventmagix | Native Mobile Event Apps for Conferences";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Create branded native iOS and Android event apps with offline access, live polling, and real-time engagement. Trusted by leading brands worldwide.";
    if (metaDescription) {
      metaDescription.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }

    // Organization Schema (JSON-LD)
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(organizationSchema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup schema on unmount
      const schema = document.querySelector('script[type="application/ld+json"]');
      if (schema) {
        schema.remove();
      }
    };
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
