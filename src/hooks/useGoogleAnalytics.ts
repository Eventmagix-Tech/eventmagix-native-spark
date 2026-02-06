import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-EC0MD6NXEM";

/**
 * Dynamically loads Google Analytics only when analytics cookies are accepted.
 * Tracks page views on route changes via react-router-dom.
 * Respects cookie consent stored in localStorage.
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();
  const isLoaded = useRef(false);

  // Load or remove GA based on cookie consent
  useEffect(() => {
    const analyticsConsent = localStorage.getItem("cookie-analytics");

    if (analyticsConsent === "true" && !isLoaded.current) {
      loadGtagScript();
      isLoaded.current = true;
    }

    // Listen for consent changes (triggered by CookieConsent component)
    const handleStorageChange = () => {
      const consent = localStorage.getItem("cookie-analytics");
      if (consent === "true" && !isLoaded.current) {
        loadGtagScript();
        isLoaded.current = true;
      }
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Also listen for custom event for same-tab updates
    window.addEventListener("cookie-consent-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cookie-consent-updated", handleStorageChange);
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (isLoaded.current && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

function loadGtagScript() {
  // Avoid duplicate script injection
  if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

// Extend Window interface
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
