import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy | Eventmagix";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-12">Last Updated: February 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to the Eventmagix website. This Cookie Policy explains how Eventmagix ("we", "us", or "our") uses cookies, pixel tags, and similar technologies when you visit our website or interact with our online services. We are committed to protecting your digital privacy while providing a functional and personalized experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. What are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small data files stored on your browser or device. They allow our servers to recognize your device, remember your preferences (such as language or login status), and analyze how you interact with our content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Why We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use cookies for several reasons:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">To keep the site working:</strong> Essential for navigation and access to secure areas (e.g., Client Login / Dashboard).</li>
                <li><strong className="text-foreground">To improve performance:</strong> Helping us understand which pages are visited most and where errors occur.</li>
                <li><strong className="text-foreground">To measure marketing effectiveness:</strong> Tracking conversions when users click "Download App" or "Book a Demo".</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Categories of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These are essential for the website to function. Without these, services like the "Client Login" or "Request a Demo" forms cannot be provided.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Performance & Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use tools like Google Analytics to collect anonymous data on website usage. This helps us understand visitor behavior (e.g., how many users click on the App Store badges) to improve our app's presentation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These allow the website to remember choices you make (such as your preferred language or region) and provide enhanced features.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Marketing & Targeting Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use these cookies to deliver advertisements relevant to your interests on other platforms (e.g., LinkedIn or Google) based on your visits to our site. They also help limit the number of times you see an ad.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please note that our website includes links to third-party platforms, such as the Apple App Store, Google Play Store, and social media channels. We do not control the cookies used by these external services. We suggest checking their respective privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    To manage cookies in Chrome, click here.
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    To manage cookies in Safari, click here.
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies or our privacy practices, please{" "}
                <a href="/contact" className="text-accent hover:underline">contact us</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
