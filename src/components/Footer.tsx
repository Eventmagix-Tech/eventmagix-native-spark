import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import eventmagixLogoWhite from "@/assets/eventmagix-logo-white.png";

const footerLinks = [
  { name: "Features", href: "/#features", type: "hash" },
  { name: "Pricing", href: "/#pricing", type: "hash" },
  { name: "Contact", href: "#", type: "contact" },
  { name: "Privacy Policy", href: "https://eventmagix.com/privacy-policy.html", type: "external" },
  { name: "Cookie Policy", href: "/cookie-policy", type: "route" },
];

export const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  return (
    <footer className="bg-primary text-primary-foreground" id="footer">
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/">
              <img
                src={eventmagixLogoWhite}
                alt="Eventmagix - Native Mobile Event App Platform"
                width={120}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 text-center md:text-left">
              Native mobile apps for unforgettable events
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {footerLinks.map((link) =>
              link.type === "contact" ? (
                <button
                  key={link.name}
                  onClick={() => setIsContactOpen(true)}
                  className="text-base text-white/60 hover:text-white transition-colors min-h-[48px] px-3 py-2 flex items-center"
                >
                  {link.name}
                </button>
              ) : link.type === "external" ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-white/60 hover:text-white transition-colors min-h-[48px] px-3 py-2 flex items-center"
                >
                  {link.name}
                </a>
              ) : link.type === "hash" ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className="text-base text-white/60 hover:text-white transition-colors min-h-[48px] px-3 py-2 flex items-center"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base text-white/60 hover:text-white transition-colors min-h-[48px] px-3 py-2 flex items-center"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Social */}
          <a
            href="https://www.linkedin.com/company/eventmagixglobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[48px] min-h-[48px] rounded-full bg-white/10 items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Visit Eventmagix on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-sm text-white/40">
            <p>© 2026 Eventmagix. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p>A <a href="https://verus.group/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors min-h-[48px] inline-flex items-center px-1">VERUS Group</a> company</p>
          </div>
        </div>
      </div>

      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </footer>
  );
};
