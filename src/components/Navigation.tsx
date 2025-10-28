import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScheduleClick = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Patient Resources', path: '/resources' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-warm-cream shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Bar */}
      <div className="bg-charcoal text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="https://maps.google.com/?q=Oviedo,+FL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Oviedo, FL</span>
            </a>
            <a href="tel:+14073667766" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span>(407) 366-7766</span>
            </a>
          </div>
          <div className="text-xs hidden md:block">
            Latest News
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              className={`font-bold transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}
              whileHover={{ scale: 1.05 }}
            >
              <span style={{ color: 'hsl(14, 85%, 54%)' }}>Oviedo Hearing Center Inc.</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-charcoal transition-colors font-medium ${
                  location.pathname === link.path ? '' : ''
                }`}
                style={location.pathname === link.path ? { color: 'hsl(14, 85%, 54%)' } : undefined}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(14, 85%, 54%)'}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = 'hsl(200, 20%, 20%)';
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={handleScheduleClick}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-charcoal min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden mt-4 pb-4 space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-charcoal hover:text-secondary transition-colors font-medium py-3 min-h-[44px] ${
                      location.pathname === link.path ? 'text-secondary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button
                  onClick={handleScheduleClick}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white min-h-[44px]"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
