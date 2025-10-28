import { Badge } from "@/components/ui/badge";
import evaluationImg from "@/assets/service-evaluation.jpg";
import fittingImg from "@/assets/service-fitting.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import careImg from "@/assets/service-care.jpg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";

const services = [
  {
    image: evaluationImg,
    title: "Hearing Evaluations",
    price: "$78",
  },
  {
    image: fittingImg,
    title: "Hearing Aid Fittings",
    price: "$111",
  },
  {
    image: maintenanceImg,
    title: "Maintenance & Repairs",
    price: "$55",
  },
  {
    image: careImg,
    title: "Ongoing Care & Support",
    price: "$89",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → WHAT WE OFFER
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-burnt-orange">Our</span> <span className="text-main-teal">Services</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 sm:mb-6 shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-burnt-orange mb-2">
                  {service.title}
                </h3>
                <p className="text-xl sm:text-2xl font-semibold text-main-teal">
                  ({service.price})
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
