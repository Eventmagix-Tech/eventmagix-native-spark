import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookDemoDialog } from "@/components/BookDemoDialog";
import nativeAppHero from "@/assets/app-mockups/native-app-hero.jpg";
import abstracts from "@/assets/app-mockups/abstracts.jpg";

export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

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
              <Button variant="accent" size="lg" className="group" onClick={() => setIsDemoOpen(true)}>
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => setIsVideoOpen(true)}>
                <Play className="mr-2 w-4 h-4" />
                Video
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

          {/* Two Featured Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex gap-6 justify-center items-center h-[500px] md:h-[550px] lg:h-[600px]">
              {/* Access Content Image */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="relative group w-[45%] h-[85%]"
              >
                <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <img
                  src={abstracts}
                  alt="Access event content and abstracts"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-2">
                    Access Content
                  </span>
                  <p className="text-white/70 text-sm">Browse abstracts & materials</p>
                </div>
              </motion.div>

              {/* Accreditation Image */}
              <motion.div
                initial={{ opacity: 0, y: -30, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="relative group w-[45%] h-[85%]"
              >
                <div className="absolute inset-0 bg-tech-blue/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <img
                  src={nativeAppHero}
                  alt="Event accreditation and check-in"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-2">
                    Accreditation
                  </span>
                  <p className="text-white/70 text-sm">Fast QR check-in & badges</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-white/10">
          <DialogHeader className="sr-only">
            <DialogTitle>Native Mobile Event App</DialogTitle>
          </DialogHeader>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1040018209?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Native Mobile Event App"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Book Demo Dialog */}
      <BookDemoDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </section>
  );
};
