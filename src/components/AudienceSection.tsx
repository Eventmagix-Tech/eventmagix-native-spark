import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Megaphone,
  Store,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import conferenceImage from "@/assets/events/conference.png";

interface EventFormat {
  id: string;
  icon?: LucideIcon;
  image?: string;
  title: string;
  description: string;
  highlights: string[];
}

const eventFormats: EventFormat[] = [
  {
    id: "conferences",
    image: conferenceImage,
    title: "Conferences & Congresses",
    description: "Designed for large-scale, multi-session professional events. Elevate attendee experience with dynamic agendas, speaker profiles, and interactive session tracking.",
    highlights: ["Parallel Sessions", "Personal Agenda", "Live Q&A"]
  },
  {
    id: "expos",
    icon: Store,
    title: "Trade Shows & Expos",
    description: "Optimized for exhibitions, booths, and B2B meetings. Facilitate networking with interactive maps, exhibitor listings, and appointment scheduling.",
    highlights: ["Interactive Floor Map", "Lead Retrieval", "B2B Meetings"]
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Events",
    description: "Ideal for internal meetings, product launches, and training programs. Custom branding, secure access, and detailed reporting capabilities.",
    highlights: ["White Label", "Multi-Language", "Detailed Analytics"]
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
    description: "A platform for corporate decision-makers and experts to network, discover content, and create business opportunities."
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
    description: "Real-time management, analytics, and attendee communication tools for PCOs and event agencies."
  }
];

export const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState<"formats" | "attendees">("formats");
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { id: "formats" as const, label: "Event Formats" },
    { id: "attendees" as const, label: "Attendee Types" }
  ];

  const currentItems = activeTab === "formats" ? eventFormats : attendeeTypes;
  const maxSlide = currentItems.length - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-20 bg-gradient-to-b from-background to-muted/30" id="audience">
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
            Every Event Format, Every Attendee
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
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentSlide(0);
                }}
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

        {/* Carousel Content */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Slides */}
          <div className="overflow-hidden">
            <motion.div
              key={`${activeTab}-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "formats" ? (
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      {eventFormats[currentSlide].image ? (
                        <div className="w-20 h-20 rounded-xl overflow-hidden">
                          <img 
                            src={eventFormats[currentSlide].image} 
                            alt={eventFormats[currentSlide].title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          {(() => {
                            const Icon = eventFormats[currentSlide].icon;
                            return Icon ? <Icon className="w-8 h-8 text-white" /> : null;
                          })()}
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {eventFormats[currentSlide].title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {eventFormats[currentSlide].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {eventFormats[currentSlide].highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        {(() => {
                          const Icon = attendeeTypes[currentSlide].icon;
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {attendeeTypes[currentSlide].title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {attendeeTypes[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {currentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
