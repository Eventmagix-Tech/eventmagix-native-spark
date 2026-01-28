import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  GraduationCap, 
  Megaphone,
  Building2
} from "lucide-react";
import conferenceImage from "@/assets/events/conference.png";
import corporateImage from "@/assets/events/corporate.png";
import tradeShowsImage from "@/assets/events/trade-shows.png";

const eventFormats = [
  {
    id: "conferences",
    image: conferenceImage,
    title: "Conferences & Congresses",
    description: "Large-scale, multi-session professional events with dynamic agendas and interactive session tracking.",
    highlights: ["Parallel Sessions", "Personal Agenda", "Live Q&A"]
  },
  {
    id: "expos",
    image: tradeShowsImage,
    title: "Trade Shows & Expos",
    description: "Exhibitions and B2B meetings with interactive maps, exhibitor listings, and appointment scheduling.",
    highlights: ["Interactive Floor Map", "Lead Retrieval", "B2B Meetings"]
  },
  {
    id: "corporate",
    image: corporateImage,
    title: "Corporate Events",
    description: "Internal meetings, product launches, and training with custom branding and detailed reporting.",
    highlights: ["White Label", "Multi-Language", "Analytics"]
  }
];

const attendeeTypes = [
  {
    id: "academics",
    icon: GraduationCap,
    title: "Academics & Researchers",
    description: "Follow presentations, view abstracts, and connect with colleagues at congresses and symposiums."
  },
  {
    id: "professionals",
    icon: Users,
    title: "Industry Professionals",
    description: "Network, discover content, and create business opportunities at corporate events."
  },
  {
    id: "sponsors",
    icon: Megaphone,
    title: "Sponsors & Exhibitors",
    description: "Brand visibility, lead collection, and one-on-one meeting opportunities with potential clients."
  },
  {
    id: "organizers",
    icon: Building2,
    title: "Event Organizers",
    description: "Real-time management, analytics, and attendee communication tools for PCOs and agencies."
  }
];

export const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState<"formats" | "attendees">("formats");

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30" id="audience">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Who Is It For?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Every Event & Attendee
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for different event types and attendee profiles.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1.5 rounded-full bg-muted/50 border border-border">
            <button
              onClick={() => setActiveTab("formats")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "formats"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Event Formats
            </button>
            <button
              onClick={() => setActiveTab("attendees")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "attendees"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Attendee Types
            </button>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          {activeTab === "formats" ? (
            <div className="grid md:grid-cols-3 gap-6">
              {eventFormats.map((format, index) => (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={format.image} 
                      alt={format.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {format.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {format.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {format.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {attendeeTypes.map((attendee, index) => (
                <motion.div
                  key={attendee.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <attendee.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {attendee.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {attendee.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
