import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import hearingAid3D from "@/assets/starkey-exploded-view.png";
import starkeyLogoNew from "@/assets/starkey-logo-new.png";
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
      {/* Wave-based background design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, hsl(165, 75%, 96%) 0%, hsl(14, 65%, 97%) 40%, hsl(20, 80%, 95%) 100%)' 
        }} />
        
        {/* Wave SVG layers */}
        <svg className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.15]" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 C320,500 640,300 960,400 C1280,500 1440,400 1440,400 L1440,800 L0,800 Z" fill="hsl(165, 70%, 45%)" />
        </svg>
        
        <svg className="absolute bottom-0 left-0 w-full h-[50%] opacity-[0.12]" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,500 C360,400 720,600 1080,500 C1320,440 1440,500 1440,500 L1440,800 L0,800 Z" fill="hsl(165, 70%, 45%)" />
        </svg>
        
        <svg className="absolute bottom-0 left-0 w-full h-[40%] opacity-[0.08]" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,600 C400,550 800,650 1200,600 C1320,580 1440,600 1440,600 L1440,800 L0,800 Z" fill="hsl(14, 85%, 54%)" />
        </svg>
        
        {/* Radial gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, hsl(165, 70%, 45%) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, hsl(14, 85%, 54%) 0%, transparent 70%)',
          filter: 'blur(80px)',
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

          {/* Product Image with Floating Effect */}
          <motion.div 
            className="flex flex-col justify-center items-center mt-8 md:mt-0 px-4 pb-4 md:pb-12 overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            {/* Suspended Exploded View Product */}
            <motion.div 
              className="relative z-20 pt-16 md:pt-8"
              style={{
                filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 80px hsla(165, 70%, 45%, 0.2))',
                transform: 'perspective(1500px) rotateY(-5deg) rotateX(2deg)',
              }}
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                filter: 'drop-shadow(0 35px 70px rgba(0, 0, 0, 0.35)) drop-shadow(0 15px 40px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 100px hsla(165, 70%, 45%, 0.3))',
              }}
            >
              {/* Starkey Logo - Centered Above Product */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src={starkeyLogoNew} 
                  alt="Starkey Logo" 
                  className="h-24 md:h-28 lg:h-32 xl:h-36 w-auto"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))' }}
                />
              </motion.div>

              {/* Sound wave decorative elements */}
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, transparent 30%, hsla(165, 70%, 45%, 0.4) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.25, 0.4, 0.25]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, transparent 40%, hsla(14, 85%, 54%, 0.3) 60%, transparent 80%)',
                    filter: 'blur(45px)',
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{ 
                  scale: [1, 1.35, 1],
                  opacity: [0.2, 0.35, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, transparent 50%, hsla(165, 70%, 45%, 0.25) 70%, transparent 90%)',
                    filter: 'blur(50px)',
                  }}
                />
              </motion.div>

              {/* Enhanced glow effect for suspended look */}
              <div 
                className="absolute inset-0 -z-10 scale-125 opacity-40"
                style={{
                  background: 'radial-gradient(ellipse at center, hsla(165, 70%, 45%, 0.5) 0%, hsla(165, 70%, 45%, 0.2) 40%, transparent 70%)',
                  filter: 'blur(50px)',
                }}
              />
              <div 
                className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[80%] h-[30px] -z-20 opacity-25"
                style={{
                  background: 'radial-gradient(ellipse at center, hsla(0, 0%, 0%, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              <img 
                src={hearingAid3D} 
                alt="Starkey exploded view hearing aid components showcasing advanced technology" 
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
