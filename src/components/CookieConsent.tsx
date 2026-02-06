import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CookiePreference = "all" | "essential" | null;

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem("cookie-consent");
    if (!preference) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-analytics", "true");
    localStorage.setItem("cookie-marketing", "true");
    localStorage.setItem("cookie-functionality", "true");
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("cookie-analytics", "false");
    localStorage.setItem("cookie-marketing", "false");
    localStorage.setItem("cookie-functionality", "false");
    setIsVisible(false);
  };

  const handleSaveSettings = (settings: {
    analytics: boolean;
    marketing: boolean;
    functionality: boolean;
  }) => {
    localStorage.setItem("cookie-consent", settings.analytics || settings.marketing ? "all" : "essential");
    localStorage.setItem("cookie-analytics", String(settings.analytics));
    localStorage.setItem("cookie-marketing", String(settings.marketing));
    localStorage.setItem("cookie-functionality", String(settings.functionality));
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setIsVisible(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full mx-4 sm:mx-0"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-5 py-4 border-b border-border/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Cookie className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">We value your privacy</h3>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  aria-label="Close cookie consent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {!showSettings ? (
                <>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    We use cookies to enhance your browsing experience and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>

                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={handleAcceptAll}
                      className="w-full"
                      size="sm"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleRejectNonEssential}
                      variant="outline"
                      className="w-full"
                      size="sm"
                    >
                      Reject Non-Essential
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="min-h-[44px] px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                    >
                      <Settings className="w-4 h-4" />
                      Cookie Settings
                    </button>
                    <Link
                      to="/cookie-policy"
                      className="min-h-[44px] px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors flex items-center"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                </>
              ) : (
                <CookieSettings
                  onSave={handleSaveSettings}
                  onBack={() => setShowSettings(false)}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CookieSettings = ({
  onSave,
  onBack,
}: {
  onSave: (settings: { analytics: boolean; marketing: boolean; functionality: boolean }) => void;
  onBack: () => void;
}) => {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [functionality, setFunctionality] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="space-y-3 mb-5">
        {/* Strictly Necessary - Always On */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 min-h-[56px]">
          <div>
            <p className="text-base font-medium text-foreground">Strictly Necessary</p>
            <p className="text-sm text-muted-foreground">Required for the website to function</p>
          </div>
          <div className="text-sm text-accent font-medium">Always On</div>
        </div>

        {/* Analytics */}
        <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors min-h-[56px]">
          <div>
            <p className="text-base font-medium text-foreground">Analytics</p>
            <p className="text-sm text-muted-foreground">Help us improve our website</p>
          </div>
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="w-5 h-5 rounded border-border text-primary focus:ring-primary/50"
          />
        </label>

        {/* Marketing */}
        <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors min-h-[56px]">
          <div>
            <p className="text-base font-medium text-foreground">Marketing</p>
            <p className="text-sm text-muted-foreground">Personalized advertisements</p>
          </div>
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
            className="w-5 h-5 rounded border-border text-primary focus:ring-primary/50"
          />
        </label>

        {/* Functionality */}
        <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors min-h-[56px]">
          <div>
            <p className="text-base font-medium text-foreground">Functionality</p>
            <p className="text-sm text-muted-foreground">Remember your preferences</p>
          </div>
          <input
            type="checkbox"
            checked={functionality}
            onChange={(e) => setFunctionality(e.target.checked)}
            className="w-5 h-5 rounded border-border text-primary focus:ring-primary/50"
          />
        </label>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="flex-1"
        >
          Back
        </Button>
        <Button
          onClick={() => onSave({ analytics, marketing, functionality })}
          size="sm"
          className="flex-1"
        >
          Save Settings
        </Button>
      </div>
    </motion.div>
  );
};
