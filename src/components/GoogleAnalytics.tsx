import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";

/**
 * Component that initializes Google Analytics tracking.
 * Must be rendered inside BrowserRouter to access route location.
 */
const GoogleAnalytics = () => {
  useGoogleAnalytics();
  return null;
};

export default GoogleAnalytics;
