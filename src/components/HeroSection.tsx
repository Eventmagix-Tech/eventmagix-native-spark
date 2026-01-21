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

      <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
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
          </motion.div>

          {/* Single Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <div className="relative group">
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-[2.5rem] border border-dashed border-white/20"
              />
              
              {/* Outer Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-accent via-tech-blue/50 to-accent/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              
              {/* Inner Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 via-accent/40 to-tech-blue/30 rounded-[2rem] blur-sm opacity-80" />
              
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative p-1 rounded-[1.8rem] bg-gradient-to-br from-white/40 via-white/10 to-transparent">
                  <img
                    src={abstracts}
                    alt="Event app content access"
                    className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-cover rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
                  />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-white/5 rounded-3xl" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-60" />
                </div>
              </motion.div>
              
              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-2xl blur-sm opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-tech-blue to-tech-blue/40 rounded-full blur-md opacity-50"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-10 w-4 h-4 bg-white/60 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/4 -left-8 w-3 h-3 bg-accent/80 rounded-full"
              />
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
