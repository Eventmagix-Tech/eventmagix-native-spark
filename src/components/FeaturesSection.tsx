import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Award,
  Gamepad2,
  QrCode,
  Video,
  MessageSquare,
  Map,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Networking",
    description:
      "1:1 Meetings, Private Messaging, and AI-powered Matchmaking to connect the right people at the right time.",
    size: "large",
  },
  {
    icon: Calendar,
    title: "Dynamic Agenda",
    description:
      "Personalized schedules with speaker profiles, session bookmarks, and real-time updates.",
    size: "small",
  },
  {
    icon: Award,
    title: "Sponsor Showcases",
    description:
      "Digital booths with banners, video galleries, document downloads, and lead retrieval.",
    size: "small",
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description:
      "Live quizzes, challenges, and leaderboards to boost attendee participation and engagement.",
    size: "medium",
  },
  {
    icon: QrCode,
    title: "Access Control",
    description:
      "Integrated QR Code badges for fast check-in and session access management.",
    size: "small",
  },
  {
    icon: Video,
    title: "Live Streaming",
    description:
      "Broadcast sessions with real-time chat, Q&A, and on-demand replay capabilities.",
    size: "medium",
  },
  {
    icon: MessageSquare,
    title: "Live Q&A & Polling",
    description:
      "Engage your audience with interactive polls, questions, and real-time voting.",
    size: "small",
  },
  {
    icon: Map,
    title: "Interactive Maps",
    description:
      "Indoor navigation and venue maps to help attendees find their way.",
    size: "small",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="features">
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
            Comprehensive Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything Your Event Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            From networking to gamification, our platform covers every aspect of
            modern event management.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const gridClass =
              feature.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : feature.size === "medium"
                ? "md:col-span-2 lg:col-span-2"
                : "";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className={`bento-card group ${gridClass}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Large card extra content */}
                {feature.size === "large" && (
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <div className="text-2xl font-bold text-accent">50K+</div>
                        <div className="text-xs text-muted-foreground">
                          Connections Made
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <div className="text-2xl font-bold text-accent">95%</div>
                        <div className="text-xs text-muted-foreground">
                          Match Success
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
