import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Megaphone,
  LucideIcon
} from "lucide-react";
import conferenceImage from "@/assets/events/conference.png";
import corporateImage from "@/assets/events/corporate.png";
import tradeShowsImage from "@/assets/events/trade-shows.png";

interface EventFormat {
  id: string;
  image: string;
  title: string;
  description: string;
  highlights: string[];
}

interface AttendeeType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const eventFormats: EventFormat[] = [
  {
    id: "conferences",
    image: conferenceImage,
    title: "Conferences & Congresses",
    description: "Designed for large-scale, multi-session professional events. Elevate attendee experience with dynamic agendas, speaker profiles, and interactive session tracking.",
    highlights: ["Parallel Sessions", "Personal Agenda", "Live Q&A", "Speaker Profiles"]
  },
  {
    id: "expos",
    image: tradeShowsImage,
    title: "Trade Shows & Expos",
    description: "Optimized for exhibitions, booths, and B2B meetings. Facilitate networking with interactive maps, exhibitor listings, and appointment scheduling.",
    highlights: ["Interactive Floor Map", "Lead Retrieval", "B2B Meetings", "V-Card Exchange"]
  },
  {
    id: "corporate",
    image: corporateImage,
    title: "Corporate Events",
    description: "Ideal for internal meetings, product launches, and training programs. Custom branding, secure access, and detailed reporting capabilities.",
    highlights: ["White Label", "Multi-Language", "Detailed Analytics", "Secure Access"]
  }
];

const attendeeTypes: AttendeeType[] = [
  {
    id: "academics",
    icon: GraduationCap,
    title: "Academics & Researchers",
    description: "Follow presentations, view abstracts, and connect with colleagues at congresses and symposiums.",
    benefits: ["Abstract browsing", "Session bookmarking", "Peer networking", "Certificate access"]
  },
  {
    id: "professionals",
    icon: Users,
    title: "Industry Professionals",
    description: "A platform for corporate decision-makers and experts to network, discover content, and create business opportunities.",
    benefits: ["Personalized agenda", "Meeting scheduler", "Content library", "Lead exchange"]
  },
  {
    id: "sponsors",
    icon: Megaphone,
    title: "Sponsors & Exhibitors",
    description: "Brand visibility, lead collection, and one-on-one meeting opportunities with potential clients.",
    benefits: ["Lead capture", "Brand placement", "Analytics dashboard", "ROI tracking"]
  },
  {
    id: "organizers",
    icon: Building2,
    title: "Event Organizers",
    description: "Real-time management, analytics, and attendee communication tools for PCOs and event agencies.",
    benefits: ["Live analytics", "Push notifications", "Content management", "Reporting tools"]
  }
];

export const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState<"formats" | "attendees">("formats");
  const [activeFormatIndex, setActiveFormatIndex] = useState(0);
  const [activeAttendeeIndex, setActiveAttendeeIndex] = useState(0);

  const tabs = [
    { id: "formats" as const, label: "Event Formats" },
    { id: "attendees" as const, label: "Attendee Types" }
  ];

  const currentItems = activeTab === "formats" ? eventFormats : attendeeTypes;
  const currentIndex = activeTab === "formats" ? activeFormatIndex : activeAttendeeIndex;
  const setCurrentIndex = activeTab === "formats" ? setActiveFormatIndex : setActiveAttendeeIndex;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30" id="audience">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Who Is It For?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Every Event Format & Attendee Type
          </h2>
          <p className="text-lg text-muted-foreground">
            Eventmagix offers tailored solutions for different event types and attendee profiles.
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
          <div className="inline-flex p-1 rounded-full bg-muted/50 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tabbed Panel Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel - Selection Cards */}
            <div className="lg:col-span-4 space-y-3">
              {currentItems.map((item, index) => {
                const isActive = currentIndex === index;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-primary to-navy-light border-accent/50 shadow-lg shadow-accent/10"
                        : "bg-card/50 border-border hover:border-accent/30 hover:bg-card"
                    }`}
                    whileHover={{ scale: isActive ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      {activeTab === "formats" ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={(item as EventFormat).image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isActive 
                            ? "bg-white/20" 
                            : "bg-gradient-to-br from-accent/20 to-accent/5"
                        }`}>
                          {(() => {
                            const Icon = (item as AttendeeType).icon;
                            return <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-accent"}`} />;
                          })()}
                        </div>
                      )}
                      <div className="flex-grow min-w-0">
                        <h4 className={`font-semibold truncate ${
                          isActive ? "text-white" : "text-foreground"
                        }`}>
                          {item.title}
                        </h4>
                        <p className={`text-sm truncate ${
                          isActive ? "text-white/70" : "text-muted-foreground"
                        }`}>
                          {activeTab === "formats" 
                            ? `${(item as EventFormat).highlights.length} key features`
                            : `${(item as AttendeeType).benefits.length} benefits`
                          }
                        </p>
                      </div>
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        isActive ? "bg-accent" : "bg-transparent"
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Panel - Detail View */}
            <div className="lg:col-span-8">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                {activeTab === "formats" ? (
                  <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-navy-light to-primary border border-accent/20">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={eventFormats[activeFormatIndex].image}
                        alt={eventFormats[activeFormatIndex].title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8 md:p-10 flex flex-col justify-end min-h-[320px]">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {eventFormats[activeFormatIndex].title}
                      </h3>
                      <p className="text-white/80 mb-6 leading-relaxed max-w-xl">
                        {eventFormats[activeFormatIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {eventFormats[activeFormatIndex].highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-navy-light to-primary border border-accent/20 p-8 md:p-10 flex flex-col justify-center min-h-[320px]">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-tech-blue-dark flex items-center justify-center mb-6 shadow-lg shadow-accent/30">
                      {(() => {
                        const Icon = attendeeTypes[activeAttendeeIndex].icon;
                        return <Icon className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {attendeeTypes[activeAttendeeIndex].title}
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed max-w-xl">
                      {attendeeTypes[activeAttendeeIndex].description}
                    </p>
                    
                    {/* Benefits Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {attendeeTypes[activeAttendeeIndex].benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-white/90 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
