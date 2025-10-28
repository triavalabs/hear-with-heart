import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import hearingAidImage from "@/assets/hearing-aid-hero.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <nav className="sticky top-0 z-50 bg-warm-cream shadow-md">
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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img 
              src={hearingAidImage} 
              alt="Premium hearing aid device" 
              className="h-16 w-16 object-contain"
            />
            <div className="text-2xl font-bold">
              <span style={{ color: 'hsl(14, 85%, 54%)' }}>Oviedo Hearing Center Inc.</span>
            </div>
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
          <button
            className="lg:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-charcoal hover:text-secondary transition-colors font-medium py-2 ${
                  location.pathname === link.path ? 'text-secondary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={handleScheduleClick}
              className="w-full bg-secondary hover:bg-secondary/90 text-white"
            >
              Schedule Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
