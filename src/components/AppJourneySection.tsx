import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import abstracts from "@/assets/app-mockups/abstracts.jpg";
import carousel from "@/assets/app-mockups/carousel.jpg";
import questionsToSpeakers from "@/assets/app-mockups/questions-speakers.png";

const journeySteps = [
  {
    step: "01",
    title: "Discover & Browse",
    description: "Attendees explore the agenda, speakers, and exhibitors with an intuitive interface designed for quick navigation.",
    image: carousel,
    imageAlt: "App screens showing event agenda and content browsing",
  },
  {
    step: "02", 
    title: "Access Content",
    description: "Download presentations, view abstracts, and access all event materials directly from the app.",
    image: abstracts,
    imageAlt: "App screens displaying abstracts and document downloads",
  },
  {
    step: "03",
    title: "Engage & Interact",
    description: "Ask questions to speakers, network with attendees, and participate in real-time discussions.",
    image: questionsToSpeakers,
    imageAlt: "App screens showing speaker Q&A and networking features",
  },
];

export const AppJourneySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
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
            User Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Complete Event Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            From registration to post-event content, guide your attendees through every step.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="space-y-20 lg:space-y-32">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-5xl font-black text-accent/20">{step.step}</span>
                  <ArrowRight className="w-6 h-6 text-accent hidden lg:block" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-tech-blue/10 rounded-3xl blur-3xl opacity-50" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full max-w-lg mx-auto object-contain drop-shadow-xl rounded-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
