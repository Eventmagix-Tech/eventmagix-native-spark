import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Bell,
  LayoutDashboard,
  Mic2,
  MessageCircleQuestion,
  MapPin,
  Share2,
  FileText,
  Building2,
  Award,
  Video,
  Images,
  ClipboardList,
  Users,
  Lock,
  UserCircle,
  MessageSquare,
  MessagesSquare,
  Target,
  Vote,
  BookOpen,
  Gamepad2,
  CalendarClock,
  Star,
  Briefcase,
  Radio,
  Handshake,
  QrCode,
  ScanLine,
  BadgeCheck,
  Sparkles,
  Network,
  Zap,
  Info,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Features grouped by category
const featureCategories = [
  {
    name: "Networking",
    description: "Connect attendees and build meaningful relationships",
    icon: Network,
    accentColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: [
      {
        icon: Users,
        title: "Attendee List",
        description: "Comprehensive directory of all event participant profiles.",
        gradient: "from-blue-500/20 to-sky-500/20",
        iconColor: "text-blue-500",
      },
      {
        icon: MessageSquare,
        title: "Private Messages",
        description: "In-app messaging for direct attendee communication.",
        gradient: "from-purple-500/20 to-fuchsia-500/20",
        iconColor: "text-purple-500",
      },
      {
        icon: Target,
        title: "Matching",
        description: "Define interests to find and connect with compatible peers.",
        gradient: "from-rose-500/20 to-pink-500/20",
        iconColor: "text-rose-500",
      },
      {
        icon: CalendarClock,
        title: "1:1 Online Meetings",
        description: "Request meetings in-person or via in-app video call.",
        gradient: "from-cyan-500/20 to-sky-500/20",
        iconColor: "text-cyan-500",
      },
      {
        icon: Handshake,
        title: "B2B Meetings",
        description: "Schedule appointments with exhibitors and buyers.",
        gradient: "from-blue-600/20 to-indigo-500/20",
        iconColor: "text-blue-600",
      },
      {
        icon: Lock,
        title: "User Login",
        description: "Private access with secure personal credentials.",
        gradient: "from-slate-500/20 to-gray-500/20",
        iconColor: "text-slate-500",
      },
      {
        icon: QrCode,
        title: "QR Code",
        description: "Personalized QR for access control or digital business card.",
        gradient: "from-gray-500/20 to-slate-500/20",
        iconColor: "text-gray-600",
      },
    ],
  },
  {
    name: "Interaction",
    description: "Engage your audience with real-time tools",
    icon: Zap,
    accentColor: "text-amber-500",
    bgColor: "bg-amber-500/10",
    features: [
      {
        icon: MessageCircleQuestion,
        title: "Q&A",
        description: "Submit questions to speakers or moderators instantly from any device.",
        gradient: "from-indigo-500/20 to-violet-500/20",
        iconColor: "text-indigo-500",
      },
      {
        icon: Vote,
        title: "Live Voting",
        description: "Real-time polling during sessions for instant audience voting.",
        gradient: "from-indigo-500/20 to-blue-500/20",
        iconColor: "text-indigo-500",
      },
      {
        icon: MessagesSquare,
        title: "Comment Wall",
        description: "Open group chats for public discussions about the event.",
        gradient: "from-orange-500/20 to-amber-500/20",
        iconColor: "text-orange-500",
      },
      {
        icon: Gamepad2,
        title: "Gamification",
        description: "Quizzes with live rankings rewarding fastest correct answers.",
        gradient: "from-green-500/20 to-lime-500/20",
        iconColor: "text-green-500",
      },
      {
        icon: Star,
        title: "Top Rated Questions",
        description: "Upvote questions to create a prioritized topic list.",
        gradient: "from-yellow-500/20 to-amber-500/20",
        iconColor: "text-yellow-500",
      },
      {
        icon: ClipboardList,
        title: "Surveys",
        description: "Share surveys with diverse question types for feedback.",
        gradient: "from-emerald-500/20 to-green-500/20",
        iconColor: "text-emerald-500",
      },
      {
        icon: Bell,
        title: "Push Notifications",
        description: "Send instant notifications to attendees on their devices.",
        gradient: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-500",
      },
    ],
  },
  {
    name: "Accreditation",
    description: "Manage the entire attendee journey from registration to exit",
    icon: ScanLine,
    accentColor: "text-violet-500",
    bgColor: "bg-violet-500/10",
    features: [
      {
        icon: ClipboardList,
        title: "Registration & RSVP",
        description: "Collect registrations and manage RSVPs via integrated forms.",
        gradient: "from-violet-500/20 to-purple-500/20",
        iconColor: "text-violet-500",
      },
      {
        icon: BadgeCheck,
        title: "Smart Badge Generation",
        description: "Design and generate digital/printable attendee badges instantly.",
        gradient: "from-purple-500/20 to-fuchsia-500/20",
        iconColor: "text-purple-500",
      },
      {
        icon: QrCode,
        title: "QR Access Control",
        description: "Track movements in real-time with QR-based check-ins for sessions and VIP zones.",
        gradient: "from-indigo-500/20 to-violet-500/20",
        iconColor: "text-indigo-500",
      },
      {
        icon: UserCircle,
        title: "Live Accreditation",
        description: "Manage onsite registration desks and check-in flow with live data sync.",
        gradient: "from-fuchsia-500/20 to-pink-500/20",
        iconColor: "text-fuchsia-500",
      },
    ],
  },
  {
    name: "Information",
    description: "Deliver content and resources seamlessly",
    icon: Info,
    accentColor: "text-teal-500",
    bgColor: "bg-teal-500/10",
    features: [
      {
        icon: Calendar,
        title: "Agenda",
        description: "Display event agenda with session filtering by category or day.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
      },
      {
        icon: Mic2,
        title: "Speakers",
        description: "Speaker profiles with bios and scheduled sessions.",
        gradient: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
      },
      {
        icon: LayoutDashboard,
        title: "Dashboard & Menu",
        description: "Customizable dashboard with icons and sections matching your brand.",
        gradient: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
      },
      {
        icon: MapPin,
        title: "Maps & Floor Plans",
        description: "Display geolocated maps and multi-room venue layouts.",
        gradient: "from-teal-500/20 to-cyan-500/20",
        iconColor: "text-teal-500",
      },
      {
        icon: FileText,
        title: "Documents & Files",
        description: "Share resources for users to view and download.",
        gradient: "from-slate-500/20 to-zinc-500/20",
        iconColor: "text-slate-400",
      },
      {
        icon: BookOpen,
        title: "Scientific Abstracts",
        description: "Publish and sort Oral and Poster abstracts by category.",
        gradient: "from-teal-500/20 to-emerald-500/20",
        iconColor: "text-teal-500",
      },
      {
        icon: Video,
        title: "Video Gallery",
        description: "Access on-demand event content directly within the app.",
        gradient: "from-red-500/20 to-rose-500/20",
        iconColor: "text-red-500",
      },
      {
        icon: Images,
        title: "Photo Gallery",
        description: "Organize and display images by category.",
        gradient: "from-violet-500/20 to-purple-500/20",
        iconColor: "text-violet-500",
      },
      {
        icon: Share2,
        title: "Social Media",
        description: "Connect social links and external resources seamlessly.",
        gradient: "from-pink-500/20 to-rose-500/20",
        iconColor: "text-pink-500",
      },
      {
        icon: Briefcase,
        title: "Personal Area",
        description: "Private documents linked to each attendee (e.g., travel tickets).",
        gradient: "from-zinc-500/20 to-slate-500/20",
        iconColor: "text-zinc-500",
      },
      {
        icon: Radio,
        title: "Live Broadcasting",
        description: "Watch live sessions directly from the schedule in-app.",
        gradient: "from-red-500/20 to-orange-500/20",
        iconColor: "text-red-600",
      },
    ],
  },
  {
    name: "Monetization",
    description: "Maximize sponsor and exhibitor value",
    icon: DollarSign,
    accentColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    features: [
      {
        icon: Award,
        title: "Sponsors",
        description: "Showcase sponsors by category with logo carousels on dashboard.",
        gradient: "from-amber-500/20 to-yellow-500/20",
        iconColor: "text-amber-600",
      },
      {
        icon: Building2,
        title: "Exhibitors",
        description: "Manage company details, representatives, documents, and videos.",
        gradient: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-600",
      },
      {
        icon: ScanLine,
        title: "Access Control",
        description: "Control access to your event or specific locations.",
        gradient: "from-violet-500/20 to-indigo-500/20",
        iconColor: "text-violet-600",
      },
      {
        icon: BadgeCheck,
        title: "Accreditation",
        description: "Send and print personalized badges for every attendee.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-600",
      },
    ],
  },
];

export const FeaturesSection = () => {
  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-20 bg-background relative overflow-hidden" id="features">
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
            From networking to monetization, our platform covers every aspect of modern event management.
          </p>
        </motion.div>

        {/* Feature Categories as Accordion */}
        <Accordion type="multiple" defaultValue={[]} className="space-y-4">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <AccordionItem 
                value={category.name} 
                className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]>div>.chevron]:rotate-180">
                  <div className="flex items-center gap-4 w-full">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center shrink-0`}>
                      <category.icon className={`w-6 h-6 ${category.accentColor}`} />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className={`text-xl font-bold ${category.accentColor}`}>
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {category.features.length} features
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4">
                    {category.features.map((feature, index) => (
                      <div
                        key={feature.title}
                        className="group relative"
                      >
                        <div className="h-full p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                          {/* Gradient Background on Hover */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          
                          {/* Content */}
                          <div className="relative">
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                              <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                            </div>

                            {/* Title */}
                            <h4 className="text-base font-bold text-foreground mb-1.5 group-hover:text-accent transition-colors duration-300">
                              {feature.title}
                            </h4>

                            {/* Description */}
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
