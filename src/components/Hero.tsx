import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import hearingAid3D from "@/assets/hearing-aid-starkey-omega.png";
import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, scaleIn, staggerContainer, staggerItem } from "@/lib/animationVariants";

const Hero = () => {
  const handleScheduleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+14073657555';
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, hsl(14, 60%, 98%) 0%, hsl(20, 75%, 96%) 50%, hsl(165, 35%, 95%) 100%)' 
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Badge 
                className="mb-3 px-4 py-1.5 text-sm font-medium w-fit bg-secondary text-white shadow-lg"
              >
                → Focused on Hearing Health
              </Badge>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 tracking-wide" 
              style={{ color: 'hsl(14, 85%, 54%)' }}
              variants={staggerItem}
            >
              CARING & PROFESSIONAL
            </motion.p>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              variants={staggerItem}
            >
              <span style={{ color: 'hsl(14, 85%, 54%)' }}>TRUSTED<br />HEARING CARE</span>
              <br />
              <span className="text-main-teal">IN OVIEDO<br />SINCE 2002</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-dark-warm-gray mb-6 sm:mb-8 leading-relaxed"
              variants={staggerItem}
            >
              Experience personalized, professional hearing care from a team that treats you like family.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={staggerItem}
            >
              <Button 
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px]"
                onClick={handleScheduleClick}
              >
                Schedule Your Hearing Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 bg-white hover:bg-white/90 transition-all duration-300 min-h-[44px]"
                style={{ borderColor: 'hsl(14, 85%, 54%)', color: 'hsl(14, 85%, 54%)' }}
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Our Office
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Hearing Aid Image - Now visible on mobile */}
          <motion.div 
            className="flex justify-center items-center mt-8 md:mt-0 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.div 
              className="relative animate-[float_6s_ease-in-out_infinite]"
              style={{
                filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2)) md:drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Pedestal Shadow */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 40%, transparent 70%)',
                  filter: 'blur(8px)',
                  zIndex: -1,
                }}
              />
              <img 
                src={hearingAid3D} 
                alt="Starkey OMEGA AI rechargeable hearing aids - premium hearing technology with AI-powered clarity" 
                className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-cream to-transparent" />
    </section>
  );
};

export default Hero;
