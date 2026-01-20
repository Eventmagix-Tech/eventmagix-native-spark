import { motion } from "framer-motion";
import dashboard1 from "@/assets/app-mockups/dashboard-1.png";
import dashboard2 from "@/assets/app-mockups/dashboard-2.png";
import dashboard5 from "@/assets/app-mockups/dashboard-5.png";

export const AppShowcaseHero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
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
            100% Native Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Beautiful Apps for Every Event
          </h2>
          <p className="text-lg text-muted-foreground">
            Fully customizable native apps that match your brand and deliver exceptional performance.
          </p>
        </motion.div>

        {/* Main Showcase - 3 Mockup Groups */}
        <div className="relative">
          {/* Desktop View - Side by Side */}
          <div className="hidden lg:flex justify-center items-end gap-8 xl:gap-12">
            {/* Left Group */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative transform hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-tech-blue/20 rounded-3xl blur-2xl opacity-60" />
              <img
                src={dashboard1}
                alt="Event app dashboard screens showing multiple events"
                className="relative w-auto h-[450px] xl:h-[500px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Center Group - Larger */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 transform hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl opacity-70" />
              <img
                src={dashboard5}
                alt="Various branded event apps"
                className="relative w-auto h-[520px] xl:h-[580px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Right Group */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative transform hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-tech-blue/20 rounded-3xl blur-2xl opacity-60" />
              <img
                src={dashboard2}
                alt="Event app with different layouts"
                className="relative w-auto h-[450px] xl:h-[500px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Mobile/Tablet View - Stacked */}
          <div className="lg:hidden space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={dashboard5}
                alt="Various branded event apps"
                className="w-full max-w-md object-contain drop-shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center"
            >
              <img
                src={dashboard1}
                alt="Event app dashboard screens"
                className="w-full max-w-md object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["Fully Branded", "iOS & Android", "Offline Mode", "Push Notifications", "White Label"].map((feature) => (
            <span
              key={feature}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground"
            >
              {feature}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
