import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";

const insuranceProviders = [
  "UnitedHealthcare",
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "HealthSpring"
];

const Insurance = () => {
  return (
    <section id="insurance" className="py-16 sm:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
                → We Accept Most Insurance
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" 
              style={{ color: 'hsl(14, 85%, 54%)' }}
              variants={staggerItem}
            >
              Making Quality Care Accessible
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-body-gray max-w-2xl mx-auto"
              variants={staggerItem}
            >
              We work with most major insurance providers to make quality hearing care accessible
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Card className="border border-border-gray p-8 sm:p-12 md:p-16 overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #FFF8F4 0%, #E8F3F2 50%, #CCE7E4 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}>
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative">
              {/* First row - scrolling left */}
              <div className="overflow-hidden mb-8">
                <div className="flex gap-8 animate-[scroll_20s_linear_infinite]">
                  {[...insuranceProviders, ...insuranceProviders, ...insuranceProviders].map((provider, index) => (
                    <div 
                       key={`row1-${index}`}
                       className="flex-shrink-0 px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderColor: '#278C8C',
                        boxShadow: '0 4px 16px rgba(39, 140, 140, 0.2)',
                      }}
                    >
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#278C8C' }}>
                        {provider}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row - scrolling right */}
              <div className="overflow-hidden">
                <div className="flex gap-8 animate-[scroll_25s_linear_infinite_reverse]">
                  {[...insuranceProviders.slice().reverse(), ...insuranceProviders.slice().reverse(), ...insuranceProviders.slice().reverse()].map((provider, index) => (
                    <div 
                       key={`row2-${index}`}
                       className="flex-shrink-0 px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderColor: '#D45A2C',
                        boxShadow: '0 4px 16px rgba(212, 90, 44, 0.2)',
                      }}
                    >
                      <span 
                        className="text-xl sm:text-2xl md:text-3xl font-bold"
                        style={{ 
                          color: '#D45A2C',
                        }}
                      >
                        {provider}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-charcoal mt-8 sm:mt-12 text-base sm:text-lg relative z-10 font-medium">
              Don't see your insurance provider listed? <span className="font-bold" style={{ color: '#278C8C' }}>Contact us</span> to verify your coverage.
            </p>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
