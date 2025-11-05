import { Badge } from "@/components/ui/badge";
import evaluationImg from "@/assets/service-evaluation.jpg";
import fittingImg from "@/assets/service-fitting.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import careImg from "@/assets/service-care.jpg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";
const services = [{
  image: evaluationImg,
  title: "Comprehensive Hearing Evaluations",
  description: "Professional hearing tests to assess your hearing health and needs",
  alt: "Hearing evaluation and testing services - comprehensive hearing assessment at Oviedo Hearing Center, FL"
}, {
  image: fittingImg,
  title: "Expert Hearing Aid Fittings",
  description: "Custom hearing aid selection and programming tailored to your lifestyle",
  alt: "Hearing aid fitting services - personalized hearing aid customization in Oviedo, Florida"
}, {
  image: maintenanceImg,
  title: "Hearing Aid Maintenance & Repairs",
  description: "Professional maintenance and repair services for all hearing aid brands",
  alt: "Hearing aid maintenance and repair services - expert hearing aid care in Oviedo, FL"
}, {
  image: careImg,
  title: "Ongoing Hearing Care Support",
  description: "Continuous support and adjustments to ensure optimal hearing performance",
  alt: "Ongoing hearing care support services - long-term hearing health management at Oviedo Hearing Center"
}];
const Services = () => {
  return <section id="services" className="py-16 sm:py-20" style={{
    background: 'linear-gradient(135deg, hsl(38, 42%, 98%) 0%, hsl(20, 80%, 95%) 100%)'
  }}>
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={fadeInUp}>
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → WHAT WE OFFER
            </Badge>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" variants={staggerItem}>
              <span className="text-burnt-orange">Hearing Care</span> <span className="text-main-teal">Services in Oviedo, FL</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.1
        }} variants={staggerContainer}>
            {services.map((service, index) => <motion.div key={index} className="flex flex-col items-center text-center" variants={staggerItem} whileHover={{
            scale: 1.05,
            y: -5
          }} transition={{
            duration: 0.3
          }}>
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 sm:mb-6 shadow-xl">
                  <img src={service.image} alt={service.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-burnt-orange mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-warm-gray text-sm sm:text-base px-4">
                  {service.description}
                </p>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Services;