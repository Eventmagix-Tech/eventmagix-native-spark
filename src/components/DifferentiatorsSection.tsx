import { motion } from "framer-motion";
import { Smartphone, Zap, Bell, CheckCircle2, ArrowRight } from "lucide-react";

const differentiators = [
  {
    icon: Smartphone,
    title: "Native Performance",
    description:
      "Built specifically for iOS and Android. Unrivaled speed and full offline capability—your event in your pocket, anywhere.",
    features: ["60 FPS Smooth UI", "Full Offline Mode", "Instant Load Times"],
    accent: true,
  },
  {
    icon: Zap,
    title: "Flexible Publishing",
    description:
      "Choose your path: Quick launch with Eventmagix Multi-App or go fully custom with your own White Label App.",
    features: [
      "Multi-App: Fast launch, low cost",
      "White Label: Your brand, your identity",
      "Both: 100% native experience",
    ],
    accent: false,
  },
  {
    icon: Bell,
    title: "Real-Time Engagement",
    description:
      "Keep attendees connected and engaged with instant notifications, live interactions, and seamless communication.",
    features: ["Live Voting & Q&A", "Push Notifications", "Instant Updates"],
    accent: false,
  },
];

export const DifferentiatorsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="why">
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
            Why Eventmagix?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built Different.{" "}
            <span className="text-gradient">Built Native.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            While others rely on web wrappers, we deliver true native apps that
            perform like nothing else on the market.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={
                item.accent
                  ? "bento-card-accent flex flex-col"
                  : "bento-card flex flex-col"
              }
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.accent
                    ? "bg-white/20"
                    : "bg-accent/10"
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    item.accent ? "text-white" : "text-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-2 ${
                  item.accent ? "text-white" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm mb-4 flex-grow ${
                  item.accent ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {item.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mt-auto">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 ${
                        item.accent ? "text-tech-blue-light" : "text-accent"
                      }`}
                    />
                    <span
                      className={
                        item.accent ? "text-white/80" : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Explore all features
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
