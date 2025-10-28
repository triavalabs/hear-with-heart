import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "UnitedHealthcare", 
  "Aetna",
  "Cigna",
  "Humana",
  "Medicare",
  "Tricare",
  "VSP Vision Care"
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
            <Card className="border-2 border-muted bg-gradient-to-br from-charcoal via-charcoal to-secondary p-8 sm:p-12 md:p-16 overflow-hidden relative">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse"></div>
            
            <div className="relative">
              {/* First row - scrolling left */}
              <div className="overflow-hidden mb-8">
                <div className="flex gap-6 animate-[scroll_30s_linear_infinite]">
                  {[...insuranceProviders, ...insuranceProviders].map((provider, index) => (
                    <div 
                       key={`row1-${index}`}
                       className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-md border-2 hover:scale-110 transition-all duration-300 whitespace-nowrap"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(77, 193, 184, 0.3)',
                        boxShadow: '0 8px 32px 0 rgba(77, 193, 184, 0.37), inset 0 0 20px rgba(77, 193, 184, 0.2)',
                      }}
                    >
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white" style={{ textShadow: '0 0 20px rgba(77, 193, 184, 0.8)' }}>
                        {provider}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row - scrolling right */}
              <div className="overflow-hidden">
                <div className="flex gap-6 animate-[scroll_35s_linear_infinite_reverse]">
                  {[...insuranceProviders.slice().reverse(), ...insuranceProviders.slice().reverse()].map((provider, index) => (
                    <div 
                       key={`row2-${index}`}
                       className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-md border-2 hover:scale-110 transition-all duration-300 whitespace-nowrap"
                      style={{ 
                        background: 'rgba(236, 91, 40, 0.15)',
                        borderColor: 'rgba(236, 91, 40, 0.4)',
                        boxShadow: '0 8px 32px 0 rgba(236, 91, 40, 0.4), inset 0 0 20px rgba(236, 91, 40, 0.2)',
                      }}
                    >
                      <span 
                        className="text-base sm:text-xl md:text-2xl font-semibold"
                        style={{ 
                          color: 'hsl(14, 85%, 54%)',
                          textShadow: '0 0 15px rgba(236, 91, 40, 0.8)',
                        }}
                      >
                        {provider}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-white mt-8 sm:mt-12 text-base sm:text-lg relative z-10 font-medium">
              Don't see your insurance provider listed? <span className="text-secondary font-bold">Contact us</span> to verify your coverage.
            </p>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
