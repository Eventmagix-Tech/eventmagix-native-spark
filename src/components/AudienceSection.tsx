import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Megaphone,
  CalendarDays,
  Store,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const eventFormats = [
  {
    id: "conferences",
    icon: CalendarDays,
    title: "Konferanslar & Kongreler",
    description: "Büyük ölçekli, çok oturumlu profesyonel etkinlikler için tasarlandı. Dinamik ajanda, konuşmacı profilleri ve interaktif oturum takibi ile katılımcı deneyimini üst seviyeye taşıyın.",
    highlights: ["Paralel Oturum Yönetimi", "Kişisel Ajanda", "Canlı Q&A"]
  },
  {
    id: "expos",
    icon: Store,
    title: "Fuarlar & Expo'lar",
    description: "Sergiler, standlar ve B2B buluşmalar için optimize edildi. İnteraktif haritalar, exhibitor listeleri ve randevu sistemi ile networking'i kolaylaştırın.",
    highlights: ["İnteraktif Stand Haritası", "Lead Retrieval", "B2B Toplantı"]
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Kurumsal Toplantılar",
    description: "Şirket içi etkinlikler, ürün lansmanları ve eğitim programları için ideal. Özel branding, güvenli erişim ve detaylı raporlama imkanı.",
    highlights: ["White Label", "Çoklu Dil", "Detaylı Analytics"]
  }
];

const attendeeTypes = [
  {
    id: "academics",
    icon: GraduationCap,
    title: "Akademisyenler & Araştırmacılar",
    description: "Kongre ve sempozyum katılımcıları için sunumları takip etme, abstrakt görüntüleme ve meslektaşlarla bağlantı kurma imkanı."
  },
  {
    id: "professionals",
    icon: Users,
    title: "Sektör Profesyonelleri",
    description: "Kurumsal karar vericiler ve uzmanlar için networking, içerik keşfi ve iş fırsatları oluşturma platformu."
  },
  {
    id: "sponsors",
    icon: Megaphone,
    title: "Sponsorlar & Exhibitor'lar",
    description: "Marka görünürlüğü, lead toplama ve potansiyel müşterilerle birebir görüşme fırsatları."
  },
  {
    id: "organizers",
    icon: Building2,
    title: "Etkinlik Organizatörleri",
    description: "PCO'lar ve etkinlik ajansları için gerçek zamanlı yönetim, analitik ve katılımcı iletişimi araçları."
  }
];

export const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState<"formats" | "attendees">("formats");
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { id: "formats" as const, label: "Etkinlik Formatları" },
    { id: "attendees" as const, label: "Katılımcı Türleri" }
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30" id="audience">
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
            Kimler İçin?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Her Etkinlik Formatı, Her Katılımcı
          </h2>
          <p className="text-lg text-muted-foreground">
            Eventmagix, farklı etkinlik türleri ve katılımcı profilleri için özelleştirilmiş çözümler sunar.
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
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        {(() => {
                          const Icon = eventFormats[currentSlide].icon;
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
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
