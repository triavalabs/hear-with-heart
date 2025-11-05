import { Badge } from "@/components/ui/badge";
import teamPhoto from "@/assets/team-photo-final.png";
import lindaPhoto from "@/assets/linda-office-manager.png";
import officeInterior from "@/assets/office-photo-upscaled.jpg";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animationVariants";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20" style={{ 
      background: 'linear-gradient(180deg, hsl(174, 40%, 92%) 0%, hsl(165, 35%, 95%) 100%)' 
    }}>
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
              Meet Your Oviedo Hearing Specialist
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-dark-warm-gray max-w-2xl mx-auto"
              variants={staggerItem}
            >
              Over 20 years of trusted hearing care serving Oviedo and Seminole County, Florida
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-burnt-orange mb-4 sm:mb-6">
                Cynthia Quinn - Licensed Hearing Aid Specialist, Oviedo FL
              </h3>
              <p className="text-base sm:text-lg text-dark-warm-gray mb-4 leading-relaxed">
                Hi, I'm Cynthia. For over 20 years, I've been Oviedo's trusted hearing aid specialist, building lasting relationships with patients throughout Seminole County who value expert, personalized hearing care.
              </p>
              <p className="text-base sm:text-lg text-dark-warm-gray mb-4 leading-relaxed">
                As a Florida licensed hearing aid specialist, I provide comprehensive hearing tests, advanced hearing aid fittings, and ongoing support. I stay current with the latest hearing aid technology from leading brands like Starkey, Phonak, and Oticon to ensure you receive the best hearing solutions available.
              </p>
              <p className="text-base sm:text-lg text-dark-warm-gray leading-relaxed">
                At Oviedo Hearing Center, hearing care is about more than technology—it's about understanding your unique lifestyle needs and helping you reconnect with sounds and moments that matter most to you and your family.
              </p>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              style={{ 
                boxShadow: '0 0 50px 15px rgba(77, 182, 172, 0.7), 0 0 100px 40px rgba(77, 182, 172, 0.5), 0 0 150px 60px rgba(77, 182, 172, 0.3), 0 20px 50px rgba(0, 0, 0, 0.25)'
              }}
            >
              <img 
                src={teamPhoto} 
                alt="Cynthia Quinn - Licensed Hearing Aid Specialist and audiologist at Oviedo Hearing Center in Oviedo, Florida"
                className="rounded-2xl w-full"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
            <motion.div 
              className="rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              style={{ 
                boxShadow: '0 0 50px 15px rgba(77, 182, 172, 0.7), 0 0 100px 40px rgba(77, 182, 172, 0.5), 0 0 150px 60px rgba(77, 182, 172, 0.3), 0 20px 50px rgba(0, 0, 0, 0.25)'
              }}
            >
              <img 
                src={lindaPhoto} 
                alt="Linda - Office Manager at Oviedo Hearing Center providing friendly patient care in Oviedo, FL"
                className="rounded-2xl w-full"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-burnt-orange mb-4 sm:mb-6">
                Linda, Office Manager
              </h3>
              <p className="text-base sm:text-lg text-dark-warm-gray mb-4 leading-relaxed">
                Hi, I'm Linda, a retired elementary school teacher who relocated from NJ to hot and humid Florida nine years ago for my husband's job. Retirement was not for me, so I looked for a part-time job where I could still use my skills from 30+ years of teaching and working with the public.
              </p>
              <p className="text-base sm:text-lg text-dark-warm-gray mb-4 leading-relaxed">
                My friend had just purchased hearing aids from Oviedo Hearing Center and told me how impressed she was with the owner who just happened to need an office manager. Almost four years later, I still enjoy this position and helping to create a welcoming, comfortable, and reassuring atmosphere for our clientele.
              </p>
              <p className="text-base sm:text-lg text-dark-warm-gray leading-relaxed">
                Give us a call for an appointment so we can help you hear what you are missing.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-burnt-orange mb-4 sm:mb-6">
                A Welcoming Environment
              </h3>
              <p className="text-base sm:text-lg text-dark-warm-gray mb-4 leading-relaxed">
                Our office is designed with your comfort in mind. From the moment you walk through our doors, you'll experience a warm, professional atmosphere where you're treated like family.
              </p>
              <p className="text-base sm:text-lg text-dark-warm-gray leading-relaxed">
                We take pride in creating a relaxed setting where you can discuss your hearing concerns openly and receive the personalized attention you deserve.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <img 
                src={officeInterior} 
                alt="Modern, welcoming Oviedo Hearing Center office interior - comfortable hearing clinic in Oviedo, Florida"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
