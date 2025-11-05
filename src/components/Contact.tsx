import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animationVariants";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with GHL form
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-16 sm:py-20" style={{
    background: 'linear-gradient(135deg, hsl(20, 80%, 95%) 0%, hsl(38, 42%, 98%) 50%, hsl(165, 35%, 95%) 100%)'
  }}>
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
                → Schedule Your Free Consultation
              </Badge>
            </motion.div>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" variants={staggerItem}>
              <span className="text-burnt-orange">Contact</span> <span className="text-main-teal">Oviedo Hearing Center</span>
            </motion.h2>
            <motion.p className="text-lg sm:text-xl text-dark-warm-gray max-w-2xl mx-auto" variants={staggerItem}>
              Schedule your free hearing consultation today. We're here to help you hear better.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <motion.div className="space-y-4 sm:space-y-6" initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={staggerContainer}>
              <motion.div variants={staggerItem}>
                <Card className="border-2 border-border-gray bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-burnt-orange">
                    <MapPin className="w-6 h-6 text-main-teal" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-warm-gray text-lg">
                    110 Burnsed Pl Suite 1000<br />
                    Oviedo, FL 32765
                  </CardDescription>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
              <Card className="border-2 border-border-gray bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-burnt-orange">
                    <Phone className="w-6 h-6 text-main-teal" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-warm-gray text-lg">
                    <a href="tel:+14073667766" className="hover:text-main-teal transition-colors">
                      (407) 366-7766
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
              <Card className="border-2 border-border-gray bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-burnt-orange">
                    <Mail className="w-6 h-6 text-main-teal" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-warm-gray text-lg">
                    <a href="mailto:info@oviedohearing.com" className="hover:text-main-teal transition-colors">oviedohearing@gmail.com
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
              <Card className="border-2 border-border-gray bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-burnt-orange">
                    <Clock className="w-6 h-6 text-main-teal" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-warm-gray text-lg">
                    Monday - Thursday: 9:00 AM - 3:00 PM<br />
                    Friday - Saturday: Closed<br />
                    Sunday: Closed
                  </CardDescription>
                </CardContent>
              </Card>
              </motion.div>

              {/* Google Review Button */}
              <motion.div variants={staggerItem}>
              <Card className="border-2 border-border-gray bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-burnt-orange">
                    <Mail className="w-6 h-6 text-main-teal" />
                    Leave Us a Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-warm-gray text-base mb-4">
                    Share your experience to help others in Seminole County find quality hearing care
                  </CardDescription>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                    <a href="https://www.google.com/maps?cid=14472029919860026218" target="_blank" rel="noopener noreferrer">
                      Write a Google Review
                    </a>
                  </Button>
                </CardContent>
              </Card>
              </motion.div>

              {/* Map Embed */}
              <motion.div variants={staggerItem}>
              <Card className="border-2 border-border-gray bg-white shadow-md overflow-hidden">
                <div className="h-64 bg-muted">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d-81.20873!3d28.66997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76a3a75d9a7d9%3A0x6c3b7a5e1d2f8c4a!2s110%20Burnsed%20Pl%20Suite%201000%2C%20Oviedo%2C%20FL%2032765!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Oviedo Hearing Center Location - 110 Burnsed Pl Suite 1000, Oviedo, FL 32765" />
                </div>
              </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInRight}>
            <Card className="border-2 border-border-gray bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-burnt-orange">Send Us a Message</CardTitle>
                <CardDescription className="text-lg text-dark-warm-gray">
                  Fill out the form below and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-burnt-orange text-base font-semibold">
                      Full Name *
                    </Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="text-lg py-6 border-2 border-border-gray focus:border-main-teal min-h-[44px]" placeholder="John Smith" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-burnt-orange text-base font-semibold">
                      Email Address *
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="text-lg py-6 border-2 border-border-gray focus:border-main-teal min-h-[44px]" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-burnt-orange text-base font-semibold">
                      Phone Number
                    </Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="text-lg py-6 border-2 border-border-gray focus:border-main-teal min-h-[44px]" placeholder="(407) 555-0123" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-burnt-orange text-base font-semibold">
                      Message *
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="min-h-[150px] text-lg border-2 border-border-gray focus:border-main-teal" placeholder="Tell us how we can help..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground min-h-[44px]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;