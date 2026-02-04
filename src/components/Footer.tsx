import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import eventmagixLogoWhite from "@/assets/eventmagix-logo-white.png";

const footerLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "https://eventmagix.com/privacy-policy.html", external: true },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export const Footer = () => {
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
                alt="Eventmagix"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 text-center md:text-left">
              Native mobile apps for unforgettable events
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://www.linkedin.com/company/eventmagixglobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-9 h-9 rounded-full bg-white/10 items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-xs text-white/40">
            <p>© 2026 Eventmagix. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p>A VERUS Group company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};