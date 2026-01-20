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
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Networking",
    description:
      "1:1 Meetings, Private Messaging, and AI-powered Matchmaking to connect the right people at the right time.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Calendar,
    title: "Dynamic Agenda",
    description:
      "Personalized schedules with speaker profiles, session bookmarks, and real-time updates.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Award,
    title: "Sponsor Showcases",
    description:
      "Digital booths with banners, video galleries, document downloads, and lead retrieval.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description:
      "Live quizzes, challenges, and leaderboards to boost attendee participation and engagement.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: QrCode,
    title: "Access Control",
    description:
      "Integrated QR Code badges for fast check-in and session access management.",
    gradient: "from-slate-500/20 to-zinc-500/20",
    iconColor: "text-slate-400",
  },
  {
    icon: Video,
    title: "Live Streaming",
    description:
      "Broadcast sessions with real-time chat, Q&A, and on-demand replay capabilities.",
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: MessageSquare,
    title: "Live Q&A & Polling",
    description:
      "Engage your audience with interactive polls, questions, and real-time voting.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-500",
  },
  {
    icon: Map,
    title: "Interactive Maps",
    description:
      "Indoor navigation and venue maps to help attendees find their way.",
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-background relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_60%)]" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-tech-blue/10 to-accent/10 border border-accent/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground">Connections Made</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Match Success</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">10M+</div>
              <div className="text-sm text-muted-foreground">Sessions Streamed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
