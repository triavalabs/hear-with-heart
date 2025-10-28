import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with GHL form
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-soft-seafoam">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → Let's Get Started
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'hsl(14, 85%, 54%)' }}>
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-body-gray max-w-2xl mx-auto">
              Take the first step toward better hearing. We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="border-2 border-border-gray">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-charcoal">
                    <MapPin className="w-6 h-6 text-main-teal" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body-gray text-lg">
                    123 Heritage Drive<br />
                    Oviedo, FL 32765
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-border-gray">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-charcoal">
                    <Phone className="w-6 h-6 text-main-teal" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body-gray text-lg">
                    <a href="tel:+14073657555" className="hover:text-main-teal transition-colors">
                      (407) 365-7555
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-border-gray">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-charcoal">
                    <Mail className="w-6 h-6 text-main-teal" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body-gray text-lg">
                    <a href="mailto:info@oviedohearing.com" className="hover:text-main-teal transition-colors">
                      info@oviedohearing.com
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-border-gray">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-charcoal">
                    <Clock className="w-6 h-6 text-main-teal" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body-gray text-lg">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Map Embed */}
              <Card className="border-2 border-border-gray overflow-hidden">
                <div className="h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d-81.20873!3d28.66997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzEyLjAiTiA4McKwMTInMzEuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Oviedo Hearing Center Location"
                  />
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-border-gray animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal">Send Us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-charcoal text-base">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-lg py-6 border-2 border-border-gray focus:border-main-teal"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-charcoal text-base">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-lg py-6 border-2 border-border-gray focus:border-main-teal"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-charcoal text-base">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-lg py-6 border-2 border-border-gray focus:border-main-teal"
                      placeholder="(407) 555-0123"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] text-lg border-2 border-border-gray focus:border-main-teal"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
