import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animationVariants";

const testimonials = [
  {
    name: "Sherry Young",
    text: "Cynthia truly wants to help the hearing impaired. She works hard to find the perfect hearing aids based on your hearing loss and affordability. Her prices are very reasonable too! She is always kind and patient as well. I highly recommend her services🙂",
    rating: 5,
    initials: "SY",
  },
  {
    name: "Lisa Neu",
    text: "After 22 yrs of dealing with my special needs daughters hearing aids, I have FINALLY found a TRUE licensed hearing aid specialist that does not rip the patient off like the big chains! (Belltone, etc) Once you buy from them, the hearing aids are serviced for life at no extra charge!",
    rating: 5,
    initials: "LN",
  },
  {
    name: "Rocky Roads",
    text: "We were on vacation out of the state and left a message that one of my wife's hearing aids just stopped outputting any sound. OHC called us back after hours and walked us through a temporary fix until we got home to make an appointment. Thanks so much.",
    rating: 5,
    initials: "RR",
  },
  {
    name: "John Larsen",
    text: "Fantastic service. Great knowledgeable staff. Reasonable prices.",
    rating: 5,
    initials: "JL",
  },
  {
    name: "John Gingrich",
    text: "I was very pleased to find them and have them repair my broken hearing aid while far from home on vacation. Same day service and a fair price. Thank you!",
    rating: 5,
    initials: "JG",
  },
  {
    name: "Linda",
    text: "Friendly staff, highly recommended. Actually listen (no pun intended) to your needs",
    rating: 5,
    initials: "L",
  },
  {
    name: "Roger Baird",
    text: "I've owned my hearing aids almost 2 years and have needed assistance with a couple of issues. Cynthia and Linda have always been very helpful in getting the issues corrected in addition to being a pleasure to work with. I highly recommend them.",
    rating: 5,
    initials: "RB",
  },
  {
    name: "Gretchen Hyde",
    text: "I've been with several hearing places and audiologists for 15 years. Cynthia Quinn is the best. She is so knowledgeable and helpful. No high power sales. Just very pleasant to work with. Very likable and reasonable. I recommend her over all the audiologists I've seen and definitely better than any of the hearing centers.",
    rating: 5,
    initials: "GH",
  },
];

const ReviewCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div 
    className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-6 border border-border-gray hover:shadow-xl transition-all duration-300"
    style={{
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    }}
  >
    <div className="flex items-start gap-4 mb-4">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
        style={{ 
          background: 'linear-gradient(135deg, hsl(174, 44%, 53%), hsl(174, 44%, 63%))',
        }}
      >
        {testimonial.initials}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-charcoal text-lg mb-1">{testimonial.name}</h4>
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-burnt-orange text-burnt-orange" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-body-gray leading-relaxed">
      {testimonial.text}
    </p>
  </div>
);

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 4);
  const secondColumn = testimonials.slice(4);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-soft-seafoam overflow-hidden">
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
                → GOOGLE REVIEWS
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-charcoal"
              variants={staggerItem}
            >
              What Our <span className="text-main-teal">Patients Say</span>
            </motion.h2>
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              variants={staggerItem}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-burnt-orange text-burnt-orange" />
                ))}
              </div>
              <span className="text-lg sm:text-xl font-bold text-charcoal">5.0</span>
              <span className="text-sm sm:text-base text-body-gray">· average reviews</span>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* First column - scrolling up */}
            <div className="flex gap-6 mb-6">
              <div className="overflow-hidden flex-1">
                <div 
                  className="flex gap-6"
                  style={{
                    animation: 'scroll 40s linear infinite',
                  }}
                >
                  {[...firstColumn, ...firstColumn, ...firstColumn].map((testimonial, index) => (
                    <ReviewCard key={`col1-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>

            {/* Second column - scrolling down */}
            <div className="flex gap-6">
              <div className="overflow-hidden flex-1">
                <div 
                  className="flex gap-6"
                  style={{
                    animation: 'scroll 45s linear infinite reverse',
                  }}
                >
                  {[...secondColumn, ...secondColumn, ...secondColumn].map((testimonial, index) => (
                    <ReviewCard key={`col2-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 4 - 6rem * 4));
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
