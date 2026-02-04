import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Zap, Bell, Wifi, Palette, ArrowRight } from "lucide-react";
import dashboard1 from "@/assets/app-mockups/dashboard-1.png";
import brandedExperience from "@/assets/app-mockups/branded-experience.jpg";
import agendaNative from "@/assets/app-mockups/agenda-native.jpg";
import offlineAirplane from "@/assets/app-mockups/offline-airplane.jpg";
import livePollingEngagement from "@/assets/app-mockups/live-polling-engagement.jpg";

const reasons = [
  {
    number: "01",
    icon: Smartphone,
    title: "100% Native Performance",
    shortDesc: "Built for iOS & Android using native code — not web wrappers.",
    description:
      "Experience buttery-smooth 60fps animations, instant response times, and the polished feel users expect from premium apps.",
    image: agendaNative,
    alt: "Native mobile app showing smooth agenda interface with 60fps performance",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Offline-First Architecture",
    shortDesc: "Your event never stops, even without internet.",
    description:
      "Full functionality in airplane mode, conference centers with poor WiFi, or remote venues. Content syncs automatically when connectivity returns.",
    image: offlineAirplane,
    alt: "Event app working offline during airplane flight with full functionality",
  },
  {
    number: "03",
    icon: Zap,
    title: "Flexible Publishing",
    shortDesc: "Quick launch or fully custom white label — your choice.",
    description:
      "Choose Eventmagix Multi-App for fast deployment, or go fully custom with your own branded app. Both deliver the same native experience.",
    image: dashboard1,
    alt: "Eventmagix dashboard showing app publishing and deployment options",
  },
  {
    number: "04",
    icon: Bell,
    title: "Real-Time Engagement",
    shortDesc: "Push notifications, live polling, Q&A, and instant updates.",
    description:
      "Drive participation and create memorable interactive experiences throughout your event with powerful engagement tools.",
    image: livePollingEngagement,
    alt: "Live polling feature showing real-time audience engagement and voting",
  },
  {
    number: "05",
    icon: Palette,
    title: "Fully Branded Experience",
    shortDesc: "Customize colors, logos, fonts, and layouts.",
    description:
      "Create a seamless extension of your brand that attendees will remember. Your event, your identity.",
    image: brandedExperience,
    alt: "Custom branded event app with personalized colors, logos, and styling",
  },
];

export const DifferentiatorsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden" id="why">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.03),transparent_60%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why Eventmagix?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            5 Reasons to Choose
          </h2>
          <p className="text-muted-foreground">
            True native apps that perform like nothing else on the market.
          </p>
        </motion.div>

        {/* Compact Interactive Layout - Same Row */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 max-w-6xl mx-auto items-stretch">
          {/* Left: Reason Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                onClick={() => setActiveIndex(index)}
                className={`p-3 rounded-xl cursor-pointer transition-all duration-300 border flex-1 flex items-center ${
                  activeIndex === index
                    ? "bg-accent/10 border-accent/30 shadow-md"
                    : "bg-card/50 border-border hover:bg-muted/50 hover:border-muted-foreground/20"
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      activeIndex === index
                        ? "bg-accent text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <reason.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold ${
                          activeIndex === index ? "text-accent" : "text-muted-foreground/50"
                        }`}
                      >
                        {reason.number}
                      </span>
                      <h3
                        className={`font-semibold text-sm ${
                          activeIndex === index ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {reason.shortDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Active Card Detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
              {/* Image */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex-1 min-h-[280px] bg-gradient-to-br from-muted to-muted/50"
              >
                <img
                  src={reasons[activeIndex].image}
                  alt={reasons[activeIndex].alt}
                  width={600}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </motion.div>

              {/* Content */}
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="p-5 -mt-6 relative bg-gradient-to-t from-card via-card to-transparent"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                    {(() => {
                      const Icon = reasons[activeIndex].icon;
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent">
                      {reasons[activeIndex].number}
                    </span>
                    <h3 className="font-bold text-foreground text-sm">
                      {reasons[activeIndex].title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reasons[activeIndex].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
