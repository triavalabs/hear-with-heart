import { Badge } from "@/components/ui/badge";
import teamPhoto from "@/assets/team-photo-final.png";
import officeInterior from "@/assets/office-photo-upscaled.jpg";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animationVariants";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-soft-seafoam">
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
                → Meet Your Local Experts
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" 
              style={{ color: 'hsl(14, 85%, 54%)' }}
              variants={staggerItem}
            >
              Your Hearing Care Partner Since 2002
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-body-gray max-w-2xl mx-auto"
              variants={staggerItem}
            >
              Compassionate, experienced care from a team that knows you by name
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
            <motion.div 
              className="order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4 sm:mb-6">
                Cynthia Quinn, Licensed Hearing Aid Specialist
              </h3>
              <p className="text-base sm:text-lg text-body-gray mb-4 leading-relaxed">
                With over 20 years of experience serving the Oviedo community, Cynthia Quinn has built lasting relationships with patients who trust her expertise and genuine care.
              </p>
              <p className="text-base sm:text-lg text-body-gray mb-4 leading-relaxed">
                Cynthia specializes in comprehensive hearing evaluations, custom hearing aid fittings, and ongoing patient support. Her commitment to staying current with the latest hearing aid technology ensures you receive the best care available.
              </p>
              <p className="text-base sm:text-lg text-body-gray leading-relaxed">
                At Oviedo Hearing Center, we believe hearing care is more than just technology—it's about understanding your unique lifestyle and helping you reconnect with the sounds that matter most.
              </p>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <img 
                src={teamPhoto} 
                alt="Cynthia Quinn, Licensed Hearing Aid Specialist at Oviedo Hearing Center"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <img 
                src={officeInterior} 
                alt="Modern and welcoming Oviedo Hearing Center office interior"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4 sm:mb-6">
                A Welcoming Environment
              </h3>
              <p className="text-base sm:text-lg text-body-gray mb-4 leading-relaxed">
                Our office is designed with your comfort in mind. From the moment you walk through our doors, you'll experience a warm, professional atmosphere where you're treated like family.
              </p>
              <p className="text-base sm:text-lg text-body-gray leading-relaxed">
                We take pride in creating a relaxed setting where you can discuss your hearing concerns openly and receive the personalized attention you deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
