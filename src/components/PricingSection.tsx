import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/BookDemoDialog";

const plans = [
  {
    name: "Basic",
    description: "Essential features for small events",
    price: "",
    period: "per event",
    features: [
      "Dynamic Agenda",
      "Speaker Profiles",
      "Interactive Maps",
      "Push Notifications",
      "Ask to Speaker",
      "Multi-language",
      "Basic Analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Advanced tools for growing events",
    price: "",
    period: "per event",
    features: [
      "Everything in Basic",
      "Exhibitor Listings",
      "Sponsor Showcases",
      "Video Galleries",
      "Surveys",
      "Image Galleries",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Networking",
    description: "Full attendee engagement suite",
    price: "",
    period: "per event",
    features: [
      "Everything in Basic",
      "User Login & Profiles",
      "Private Messaging",
      "Video / Image Gallery",
      "Comment Wall",
      "Attendee List",
      "Surveys",
    ],
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Complete",
    description: "The all-in-one powerhouse",
    price: "",
    period: "per event",
    features: [
      "Everything in Pro",
      "Everything in Networking",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export const PricingSection = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Plans & Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible pricing that scales with your event. All plans include native
            iOS and Android apps.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-br from-primary to-navy-light text-primary-foreground ring-2 ring-accent shadow-glow"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-3xl font-bold ${
                    plan.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    plan.popular ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-tech-blue-light" : "text-accent"
                      }`}
                    />
                    <span
                      className={plan.popular ? "text-white/90" : "text-foreground"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "accent" : "outline"}
                className="w-full"
                onClick={() => setIsDemoOpen(true)}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Additional add-ons available: B2B Meetings, Live Broadcasting, Lead
          Retrieval, and more.
        </motion.p>
      </div>

      <BookDemoDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </section>
  );
};
