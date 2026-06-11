import { Helmet } from "react-helmet-async";
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
  "url": "https://app.eventmagix.com",
  "logo": "https://app.eventmagix.com/favicon.png",
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
    "url": "https://app.eventmagix.com/contact"
  },
  "offers": {
    "@type": "AggregateOffer",
    "description": "Native mobile event app plans for conferences and corporate events",
    "offerCount": 4,
    "priceCurrency": "USD"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Eventmagix | Native Mobile Event Apps for Conferences</title>
        <meta
          name="description"
          content="Create branded native iOS and Android event apps with offline access, live polling, and real-time engagement. Trusted by leading brands worldwide."
        />
        <link rel="canonical" href="https://app.eventmagix.com/" />
        <meta property="og:title" content="Eventmagix | Native Mobile Event App Platform" />
        <meta
          property="og:description"
          content="The all-in-one native mobile app for unforgettable events. Engage attendees, empower sponsors, and simplify management."
        />
        <meta property="og:url" content="https://app.eventmagix.com/" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
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
