import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
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
