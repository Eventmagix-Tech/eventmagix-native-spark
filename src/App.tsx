import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Lazy load non-critical pages for better initial load performance
const Contact = lazy(() => import("./pages/Contact"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load cookie consent as it's not critical for initial render
const CookieConsent = lazy(() => import("./components/CookieConsent").then(m => ({ default: m.CookieConsent })));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
