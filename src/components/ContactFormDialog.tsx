import { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate submission — replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch {
      setErrors({ name: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (value: boolean) => {
    onOpenChange(value);
    if (!value) {
      // Reset form when closing
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setErrors({});
        setIsSuccess(false);
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg w-[calc(100%-2rem)] rounded-xl bg-background p-0 overflow-hidden">
        {/* Header with brand accent */}
        <div className="bg-primary px-6 pt-6 pb-4">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary-foreground">
              Get in Touch
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/70 text-sm">
              Tell us about your event — we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4">
          {isSuccess ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="rounded-full bg-accent/10 p-3">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Thanks for reaching out. Our team will contact you shortly.
                </p>
              </div>
              <Button variant="outline" onClick={() => handleOpenChange(false)} className="mt-2">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p id="contact-name-error" className="text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p id="contact-email-error" className="text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-company">Company / Organization</Label>
                <Input
                  id="contact-company"
                  placeholder="Optional"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your event and requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p id="contact-message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="accent" className="w-full mt-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
