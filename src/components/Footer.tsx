import { Linkedin } from "lucide-react";
import eventmagixLogoWhite from "@/assets/eventmagix-logo-white.png";

const siteLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Why Eventmagix", href: "#differentiators" },
    { name: "Pricing", href: "#pricing" },
  ],
  solutions: [
    { name: "Conferences", href: "#audience" },
    { name: "Trade Shows", href: "#audience" },
    { name: "Corporate Events", href: "#audience" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "https://eventmagix.com/privacy-policy.html" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" id="footer">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <img
              src={eventmagixLogoWhite}
              alt="Eventmagix"
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-sm text-white/60 max-w-xs mb-4">
              The all-in-one native mobile app platform for unforgettable events.
            </p>
            <a
              href="https://www.linkedin.com/company/eventmagixglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-9 h-9 rounded-full bg-white/10 items-center justify-center hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              {siteLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {siteLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {siteLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {siteLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
            <p>© 2026 Eventmagix. All rights reserved.</p>
            <p>A VERUS Group company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
