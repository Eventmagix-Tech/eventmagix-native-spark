import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Eventmagix</title>
        <meta
          name="description"
          content="Get in touch with Eventmagix. Request a demo, ask questions, or learn how our native event apps can elevate your next conference or event."
        />
        <link rel="canonical" href="https://app.eventmagix.com/contact" />
        <meta property="og:title" content="Contact Us | Eventmagix" />
        <meta
          property="og:description"
          content="Get in touch with Eventmagix. Request a demo or learn how our native event apps can elevate your next conference."
        />
        <meta property="og:url" content="https://app.eventmagix.com/contact" />
      </Helmet>
      <Navbar />
      
      <main id="main-content" className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about Eventmagix? We'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <iframe 
              src="https://app.hellobonsai.com/f/c87817592a1b51c?embed=true" 
              frameBorder="0" 
              width="100%" 
              height="1200px"
              style={{ border: 'none' }}
              title="Contact Form"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
