import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import eventNetworking from "@/assets/event-networking.jpg";
import eventKeynote from "@/assets/event-keynote.jpg";
import eventExpo from "@/assets/event-expo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden gradient-hero">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          {/* Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px] md:h-[550px] lg:h-[600px]">
              {/* Main Large Image - Keynote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="col-span-7 row-span-4 relative group"
              >
                <div className="absolute inset-0 bg-tech-blue/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <img
                  src={eventKeynote}
                  alt="Conference keynote speaker"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Keynote Sessions
                  </span>
                </div>
              </motion.div>

              {/* Networking Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="col-span-5 row-span-3 relative group"
              >
                <div className="absolute inset-0 bg-tech-blue/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <img
                  src={eventNetworking}
                  alt="Professional networking"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Networking
                  </span>
                </div>
              </motion.div>

              {/* Expo Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="col-span-5 row-span-3 col-start-8 row-start-4 relative group"
              >
                <div className="absolute inset-0 bg-tech-blue/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <img
                  src={eventExpo}
                  alt="Exhibition hall"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Exhibitions
                  </span>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="col-span-7 row-span-2 row-start-5 relative"
              >
                <div className="h-full glass-card rounded-2xl p-4 flex items-center justify-around bg-white/10 backdrop-blur-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                    <div className="text-xs text-white/60">Countries</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                    <div className="text-xs text-white/60">Sessions</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                    <div className="text-xs text-white/60">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
