import { Linkedin } from "lucide-react";
import eventmagixLogoWhite from "@/assets/eventmagix-logo-white.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" id="footer">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Content - Centered */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src={eventmagixLogoWhite}
            alt="Eventmagix"
            className="h-10 w-auto object-contain mb-4"
          />
          <p className="text-sm text-white/60 max-w-md">
            The all-in-one native mobile app platform for unforgettable events.
          </p>
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#audience" className="text-sm text-white/60 hover:text-white transition-colors">
            Who Is It For
          </a>
          <a href="https://eventmagix.com/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center mb-10">
          <a
            href="https://www.linkedin.com/company/eventmagixglobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-white/40">
            <p>© 2026 Eventmagix. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <p>A VERUS Group company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
