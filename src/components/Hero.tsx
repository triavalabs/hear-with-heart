import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import hearingAid3D from "@/assets/starkey-omega-hero.png";
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
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Dynamic gradient background with geometric accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, hsl(165, 75%, 96%) 0%, hsl(14, 65%, 97%) 40%, hsl(20, 80%, 95%) 100%)' 
        }} />
        
        {/* Radial gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, hsl(165, 70%, 45%) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, hsl(14, 85%, 54%) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
        
        {/* Subtle geometric circles */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.06] border-2" style={{
          borderColor: 'hsl(165, 70%, 45%)',
        }} />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.05] border-2" style={{
          borderColor: 'hsl(14, 85%, 54%)',
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
            className="flex justify-center items-center mt-8 md:mt-0 px-4 pb-4 md:pb-12 overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
          <motion.div 
            className="relative z-20"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 60px hsla(165, 70%, 45%, 0.15))',
              transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)',
            }}
            whileHover={{ 
              scale: 1.05,
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 80px hsla(165, 70%, 45%, 0.25))',
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Subtle glow effect behind product */}
            <div 
              className="absolute inset-0 -z-10 scale-110 opacity-30"
              style={{
                background: 'radial-gradient(ellipse at center, hsla(165, 70%, 45%, 0.4) 0%, transparent 60%)',
                filter: 'blur(40px)',
              }}
            />
              <img 
                src={hearingAid3D} 
                alt="Starkey OMEGA AI hearing aids - Rediscover the Sounds You Love with next generation hearing clarity" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-cream to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
