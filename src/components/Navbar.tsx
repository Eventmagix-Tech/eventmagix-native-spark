import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/BookDemoDialog";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import eventmagixLogo from "@/assets/eventmagix-logo-white.png";

const navLinks = [
  { name: "Features", href: "/#features", type: "hash" },
  { name: "Pricing", href: "/#pricing", type: "hash" },
  { name: "Contact", href: "#", type: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.replace("/", "");
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const showSolidBackground = !isHomePage || isScrolled;

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to main content
      </a>

      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidBackground
            ? "bg-navy/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/" className="flex items-center gap-2 relative group">
                <img
                  src={eventmagixLogo}
                  alt="Eventmagix - Native Mobile Event App Platform"
                  width={140}
                  height={44}
                  fetchPriority="high"
                  className="h-9 md:h-11 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                {navLinks.map((link) =>
                  link.type === "contact" ? (
                    <motion.button
                      key={link.name}
                      onClick={() => setIsContactOpen(true)}
                      className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleHashClick(e, link.href)}
                      className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {link.name}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="accent"
                  size="sm"
                  className="group relative overflow-hidden"
                  onClick={() => setIsDemoOpen(true)}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    Book a Demo
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
                {navLinks.map((link, index) =>
                  link.type === "contact" ? (
                    <motion.button
                      key={link.name}
                      onClick={() => {
                        setIsContactOpen(true);
                        setIsOpen(false);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-base font-medium text-white/70 hover:text-white transition-colors min-h-[48px] py-3 px-4 rounded-lg hover:bg-white/10 flex items-center text-left"
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        handleHashClick(e, link.href);
                        setIsOpen(false);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-base font-medium text-white/70 hover:text-white transition-colors min-h-[48px] py-3 px-4 rounded-lg hover:bg-white/10 flex items-center"
                    >
                      {link.name}
                    </motion.a>
                  )
                )}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <Button
                    variant="accent"
                    className="w-full"
                    onClick={() => {
                      setIsDemoOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <BookDemoDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} />
        <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      </motion.nav>
    </header>
  );
};
