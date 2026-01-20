import { motion } from "framer-motion";
import dashboard1 from "@/assets/app-mockups/dashboard-1.png";
import brandedExperience from "@/assets/app-mockups/branded-experience.jpg";
import nativeAppHero from "@/assets/app-mockups/native-app-hero.jpg";
import carousel from "@/assets/app-mockups/carousel.jpg";
import abstracts from "@/assets/app-mockups/abstracts.jpg";

export const AppShowcaseHero = () => {
  const stats = [
    { value: "60fps", label: "Smooth Performance" },
    { value: "100%", label: "Offline Access" },
    { value: "<2s", label: "Launch Time" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-accent/20 to-tech-blue/20 border border-accent/30 text-accent text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            100% Native Experience
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Apps That Feel{" "}
            <span className="text-gradient">Truly Native</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of real native performance. No compromises, no web wrappers — just pure, fast, beautiful apps.
          </p>
        </motion.div>

        {/* Main Visual Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-16">
          {/* Left - Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 md:p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">iOS & Android</h3>
                  <p className="text-sm text-muted-foreground">Native on both platforms</p>
                </div>
              </div>
              
              {/* Store Badges */}
              <div className="flex gap-3 mb-6">
                <a 
                  href="https://apps.apple.com/app/eventmagix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-10"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.eventmagix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-10"
                  />
                </a>
              </div>
              
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={nativeAppHero}
                  alt="Native app showcase"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right - Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {/* Top Row - Two Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <div className="h-full bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-5 overflow-hidden">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={dashboard1}
                      alt="Dashboard view"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Seamless Navigation</h4>
                  <p className="text-sm text-muted-foreground">Fluid transitions and instant response</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <div className="h-full bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-5 overflow-hidden">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={brandedExperience}
                      alt="Event layouts"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Branded Experience</h4>
                  <p className="text-sm text-muted-foreground">Fully customizable to match your brand</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom - Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="bg-gradient-to-r from-navy/80 to-navy/60 backdrop-blur-sm rounded-3xl border border-border/50 p-6 md:p-8 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-4">
                      Offline First
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      Works Without Internet
                    </h3>
                    <p className="text-white/70">
                      Full functionality even in areas with poor connectivity. Content syncs automatically when back online.
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <img
                      src={carousel}
                      alt="Carousel feature"
                      className="w-24 h-40 md:w-28 md:h-48 object-cover rounded-xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"
                    />
                    <img
                      src={abstracts}
                      alt="Abstracts feature"
                      className="w-24 h-40 md:w-28 md:h-48 object-cover rounded-xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
