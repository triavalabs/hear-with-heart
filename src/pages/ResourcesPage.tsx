import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";
const ResourcesPage = () => {
  return <div className="min-h-screen">
      <section className="py-16 md:py-24" style={{
      background: 'linear-gradient(180deg, hsl(165, 35%, 95%) 0%, hsl(174, 40%, 92%) 100%)'
    }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
                  → Hearing Health Resources
                </Badge>
              </motion.div>
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: 'hsl(14, 85%, 54%)'
            }} variants={staggerItem}>
                Patient Resources for Hearing Care in Oviedo, FL
              </motion.h1>
              <motion.p className="text-lg text-dark-warm-gray" variants={staggerItem}>
                Everything you need to know about our hearing services and insurance coverage
              </motion.p>
            </motion.div>
            
            {/* FAQs Section */}
            <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-burnt-orange mb-6">Frequently Asked Questions About Hearing Care</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-border-gray">
                  <h3 className="text-xl font-semibold text-burnt-orange mb-2">How often should I get my hearing tested in Oviedo, FL?</h3>
                  <p className="text-dark-warm-gray">Adults should have comprehensive hearing evaluations every 3-5 years. If you're experiencing hearing loss symptoms or are over 60, our licensed hearing specialist in Oviedo recommends annual hearing tests for early detection and treatment.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-border-gray">
                  <h3 className="text-xl font-semibold text-burnt-orange mb-2">Does insurance cover hearing aids in Florida?</h3>
                  <p className="text-dark-warm-gray">Coverage varies by plan. Oviedo Hearing Center accepts most major insurance providers including UnitedHealthcare, Blue Cross Blue Shield, Aetna, and Cigna. We'll verify your benefits and work to maximize your hearing aid insurance coverage.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-border-gray">
                  <h3 className="text-xl font-semibold text-burnt-orange mb-2">What should I expect at my first hearing appointment in Oviedo?</h3>
                  <p className="text-dark-warm-gray">Your first visit includes a comprehensive hearing evaluation with our licensed specialist, a discussion of your lifestyle and hearing needs, and a personalized review of hearing aid options if needed. Most appointments take 45-60 minutes.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-border-gray">
                  <h3 className="text-xl font-semibold text-burnt-orange mb-2">What types of hearing aids are available at your Oviedo clinic?</h3>
                  <p className="text-dark-warm-gray">We offer the latest hearing aid technology from leading brands including Starkey, Phonak, and Oticon. Options include behind-the-ear (BTE), in-the-ear (ITE), completely-in-canal (CIC), and rechargeable models tailored to your hearing loss and budget.</p>
                </div>
              </div>
            </motion.div>

            {/* Insurance Info */}
            <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-burnt-orange mb-6">Hearing Aid Insurance Coverage in Seminole County</h2>
              <div className="bg-white border-2 border-border-gray p-6 rounded-lg shadow-md">
                <p className="text-dark-warm-gray mb-4">Oviedo Hearing Center accepts most major health insurance plans for hearing evaluations and hearing aid services, including:</p>
                <ul className="list-disc list-inside text-dark-warm-gray space-y-2 mb-4">
                  <li>UnitedHealthcare </li>
                  <li>Blue Cross Blue Shield of Florida</li>
                  <li>Aetna</li>
                  <li>Cigna</li>
                  <li>HealthSpring</li>
                </ul>
                <p className="text-dark-warm-gray font-semibold">Call our Oviedo office at (407) 366-7766 to verify your specific hearing aid insurance coverage and benefits.</p>
              </div>
            </motion.div>

            {/* Financing Options */}
            

            {/* What to Expect */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">What to Expect at Your Appointment</h2>
              <div className="space-y-4 text-body-gray">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Health History Review</h3>
                    <p>We'll discuss your medical history and any hearing concerns you may have.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Comprehensive Hearing Test</h3>
                    <p>A thorough evaluation to determine your hearing ability across different frequencies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Results Discussion</h3>
                    <p>We'll explain your results in detail and answer all your questions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Treatment Plan</h3>
                    <p>If needed, we'll recommend solutions tailored to your lifestyle and budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default ResourcesPage;