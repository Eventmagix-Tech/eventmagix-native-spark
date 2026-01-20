import { motion } from "framer-motion";
import { Gamepad2, BarChart3, Bell } from "lucide-react";
import gamification from "@/assets/app-mockups/gamification.png";
import livePolling from "@/assets/app-mockups/live-polling.jpg";
import livePolling2 from "@/assets/app-mockups/live-polling-2.png";
import notifications from "@/assets/app-mockups/notifications.png";

const featureShowcases = [
  {
    icon: Gamepad2,
    title: "Gamification & Quizzes",
    description: "Boost engagement with interactive quizzes, leaderboards, and challenges that keep attendees actively participating throughout your event.",
    image: gamification,
    imageAlt: "App screens showing gamification features with quizzes and rankings",
    stats: [
      { value: "3x", label: "Higher Engagement" },
      { value: "85%", label: "Participation Rate" },
    ],
  },
  {
    icon: BarChart3,
    title: "Live Polling & Voting",
    description: "Capture real-time feedback with interactive polls and voting sessions. Display results instantly on screen to drive discussions.",
    images: [livePolling, livePolling2],
    imageAlt: "App screens showing live polling and real-time voting results",
    stats: [
      { value: "Real-time", label: "Results Display" },
      { value: "100%", label: "Data Export" },
    ],
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Keep attendees informed with targeted push notifications. Send session reminders, announcements, and personalized messages.",
    image: notifications,
    imageAlt: "Phone showing push notifications from various event apps",
    stats: [
      { value: "98%", label: "Delivery Rate" },
      { value: "Instant", label: "Updates" },
    ],
  },
];

export const AppFeaturesShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 overflow-hidden">
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
            Engagement Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Drive Attendee Engagement
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools to create unforgettable interactive experiences.
          </p>
        </motion.div>

        {/* Feature Showcases */}
        <div className="space-y-24">
          {featureShowcases.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="bento-card-accent p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {feature.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-xl bg-background/50 border border-border"
                      >
                        <div className="text-2xl font-bold text-accent">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image(s) */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-tech-blue/10 rounded-3xl blur-3xl opacity-40" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {feature.images ? (
                    <div className="flex gap-4 justify-center">
                      {feature.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={feature.imageAlt}
                          className="w-1/2 max-w-xs object-contain drop-shadow-xl"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full max-w-lg mx-auto object-contain drop-shadow-xl"
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
