import { motion } from "framer-motion";
import { Smartphone, Zap, Bell, Wifi, Palette, ArrowRight } from "lucide-react";
import dashboard1 from "@/assets/app-mockups/dashboard-1.png";
import brandedExperience from "@/assets/app-mockups/branded-experience.jpg";
import nativeAppHero from "@/assets/app-mockups/native-app-hero.jpg";
import offlineAirplane from "@/assets/app-mockups/offline-airplane.jpg";
import livePollingEngagement from "@/assets/app-mockups/live-polling-engagement.jpg";

const reasons = [
  {
    number: "01",
    icon: Smartphone,
    title: "100% Native Performance",
    description:
      "Built specifically for iOS and Android using native code — not web wrappers. Experience buttery-smooth 60fps animations, instant response times, and the polished feel users expect from premium apps.",
    image: nativeAppHero,
    imageAlt: "Native app performance showcase",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Offline-First Architecture",
    description:
      "Your event never stops, even without internet. Full functionality in airplane mode, conference centers with poor WiFi, or remote venues. Content syncs automatically when connectivity returns.",
    image: offlineAirplane,
    imageAlt: "App working offline on airplane",
  },
  {
    number: "03",
    icon: Zap,
    title: "Flexible Publishing Options",
    description:
      "Choose your path: Quick launch with Eventmagix Multi-App for fast deployment at low cost, or go fully custom with your own White Label App for complete brand ownership. Both deliver the same native experience.",
    image: dashboard1,
    imageAlt: "Dashboard and publishing options",
  },
  {
    number: "04",
    icon: Bell,
    title: "Real-Time Engagement Tools",
    description:
      "Keep attendees connected with instant push notifications, live polling, Q&A sessions, and real-time updates. Drive participation and create memorable interactive experiences throughout your event.",
    image: livePollingEngagement,
    imageAlt: "Live polling and interactive voting features",
  },
  {
    number: "05",
    icon: Palette,
    title: "Fully Branded Experience",
    description:
      "Your event, your identity. Customize every aspect — colors, logos, fonts, and layouts — to create a seamless extension of your brand that attendees will remember.",
    image: brandedExperience,
    imageAlt: "Branded app experience",
  },
];

export const DifferentiatorsSection = () => {
  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-background relative overflow-hidden" id="why">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05),transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why Eventmagix?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            5 Reasons to Choose
          </h2>
          <p className="text-lg text-muted-foreground">
            While others rely on web wrappers, we deliver true native apps that perform like nothing else on the market.
          </p>
        </motion.div>

        {/* Reasons List */}
        <div className="space-y-12 lg:space-y-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                  <span className="text-5xl md:text-6xl font-black text-accent/15">
                    {reason.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Image Side */}
              {reason.image && (
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-tech-blue/10 rounded-3xl blur-3xl opacity-50" />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="relative p-1 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                      <img
                        src={reason.image}
                        alt={reason.imageAlt}
                        className="w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Placeholder for items without image */}
              {!reason.image && (
                <div className="flex-1 relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-accent/20 via-tech-blue/10 to-accent/5 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <reason.icon className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                      <span className="text-muted-foreground text-sm">Real-Time Engagement</span>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
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
