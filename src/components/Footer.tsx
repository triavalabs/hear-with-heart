import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soft-warm-neutral text-dark-warm-gray py-12">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* About */}
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-bold mb-4 text-burnt-orange">Oviedo Hearing Center</h3>
              <p className="text-dark-warm-gray leading-relaxed mb-4">
                Providing exceptional hearing care to the Oviedo community since 2002.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-main-teal/10 flex items-center justify-center hover:bg-main-teal hover:text-white transition-colors duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-main-teal/10 flex items-center justify-center hover:bg-main-teal hover:text-white transition-colors duration-300"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={staggerItem}>
              <h3 className="text-xl font-bold mb-4 text-main-teal">Quick Links</h3>
              <nav className="space-y-2">
                <a href="#about" className="block text-dark-warm-gray hover:text-main-teal transition-colors">
                  About Us
                </a>
                <a href="#services" className="block text-dark-warm-gray hover:text-main-teal transition-colors">
                  Services
                </a>
                <a href="#testimonials" className="block text-dark-warm-gray hover:text-main-teal transition-colors">
                  Testimonials
                </a>
                <a href="#insurance" className="block text-dark-warm-gray hover:text-main-teal transition-colors">
                  Insurance
                </a>
                <a href="#contact" className="block text-dark-warm-gray hover:text-main-teal transition-colors">
                  Contact
                </a>
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={staggerItem}>
              <h3 className="text-xl font-bold mb-4 text-main-teal">Contact Info</h3>
              <div className="space-y-3 text-dark-warm-gray">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-main-teal" />
                  <span>110 Burnsed Pl Suite 1000<br />Oviedo, FL 32765</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-main-teal" />
                  <a href="tel:+14073667766" className="hover:text-main-teal transition-colors">
                    (407) 366-7766
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-main-teal" />
                  <a href="mailto:info@oviedohearing.com" className="hover:text-main-teal transition-colors">
                    info@oviedohearing.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-border-gray pt-8 text-center text-dark-warm-gray/60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>© {currentYear} Oviedo Hearing Center. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
