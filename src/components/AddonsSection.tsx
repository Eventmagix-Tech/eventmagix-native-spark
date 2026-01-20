import { motion } from "framer-motion";
import { Handshake, Radio, ScanLine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const addons = [
  {
    icon: Handshake,
    title: "B2B Meetings",
    description:
      "Advanced meeting scheduler with availability management, auto-suggestions, and table assignments for effective B2B networking.",
    benefits: ["Automated Scheduling", "Smart Matching", "Meeting Analytics"],
  },
  {
    icon: Radio,
    title: "Live Broadcasting",
    description:
      "Stream your sessions live with integrated chat, real-time Q&A, and on-demand replay for hybrid and virtual events.",
    benefits: ["Multi-platform Streaming", "Real-time Chat", "Recording & Replay"],
  },
  {
    icon: ScanLine,
    title: "Lead Retrieval",
    description:
      "Empower exhibitors with QR scanning tools to capture leads, add notes, and export data for seamless follow-up.",
    benefits: ["Instant QR Scan", "Custom Notes", "CRM Export"],
  },
];

export const AddonsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="addons">
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
            Specialized Modules
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Add-Ons
          </h2>
          <p className="text-lg text-muted-foreground">
            Extend your event app with specialized modules designed for specific
            use cases.
          </p>
        </motion.div>

        {/* Add-ons Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <addon.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {addon.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {addon.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2">
                  {addon.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
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
          <Button variant="accent" size="lg" className="group">
            Explore All Add-Ons
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
