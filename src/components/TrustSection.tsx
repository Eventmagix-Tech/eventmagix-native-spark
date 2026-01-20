import { motion } from "framer-motion";

// Import client logos
import wissenLogo from "@/assets/clients/wissen.png";
import sadberkLogo from "@/assets/clients/sadberk.jpg";
import esnrLogo from "@/assets/clients/esnr.jpg";
import boschLogo from "@/assets/clients/bosch.jpg";
import yamahaLogo from "@/assets/clients/yamaha.jpg";
import cciLogo from "@/assets/clients/cci.png";
import medtronicLogo from "@/assets/clients/medtronic.png";
import audiLogo from "@/assets/clients/audi.jpg";
import adfLogo from "@/assets/clients/adf.webp";
import isbankLogo from "@/assets/clients/isbank.jpeg";

const clients = [
  { name: "Wissen", logo: wissenLogo },
  { name: "Sadberk Hanım Museum", logo: sadberkLogo },
  { name: "ESNR", logo: esnrLogo },
  { name: "Bosch", logo: boschLogo },
  { name: "Yamaha", logo: yamahaLogo },
  { name: "CCI", logo: cciLogo },
  { name: "Medtronic", logo: medtronicLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Antalya Diplomacy Forum", logo: adfLogo },
  { name: "İş Bankası", logo: isbankLogo },
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Trusted Worldwide
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Powering Events for Industry Leaders
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 md:gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border/50 shadow-sm p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-primary/30">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-xs font-medium text-muted-foreground bg-popover px-2 py-1 rounded-md shadow-sm border border-border/50">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
        <p className="text-muted-foreground text-sm">
            And many more organizations worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};
