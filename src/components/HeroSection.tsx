import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import iphoneMockup from "@/assets/iphone-mockup.png";
import androidMockup from "@/assets/android-mockup.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden gradient-hero">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-tech-blue animate-pulse" />
              100% Native Performance
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              The All-in-One{" "}
              <span className="text-gradient">Native Mobile App</span> for
              Unforgettable Events
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8">
              Engage attendees, empower sponsors, and simplify management with a
              100% native platform built for performance on iOS and Android.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="group">
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Play className="mr-2 w-4 h-4" />
                View Plans
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Events Powered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-white/60">App Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* iPhone */}
            <div className="relative z-10 animate-float">
              <div className="absolute inset-0 bg-tech-blue/30 rounded-3xl blur-2xl scale-90" />
              <img
                src={iphoneMockup}
                alt="Eventmagix iOS App"
                className="relative w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
              />
            </div>

            {/* Android */}
            <div className="relative -ml-16 md:-ml-20 lg:-ml-24 mt-8 animate-float-delayed">
              <div className="absolute inset-0 bg-tech-blue/20 rounded-3xl blur-2xl scale-90" />
              <img
                src={androidMockup}
                alt="Eventmagix Android App"
                className="relative w-44 md:w-52 lg:w-60 h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
