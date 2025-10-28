import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Thompson",
    text: "Dr. Smith and her team have been wonderful. They took the time to understand my needs and found the perfect hearing aids for me. I can finally enjoy conversations with my grandchildren again!",
    rating: 5,
    date: "2 weeks ago",
    initials: "MT",
  },
  {
    name: "Robert Jenkins",
    text: "After 20 years of struggling with my hearing, I finally visited Oviedo Hearing Center. The difference has been life-changing. Professional, caring, and always available when I need adjustments.",
    rating: 5,
    date: "1 month ago",
    initials: "RJ",
  },
  {
    name: "Linda Martinez",
    text: "The level of care and attention I receive here is outstanding. They treat me like family and always make sure my hearing aids are working perfectly. Highly recommend!",
    rating: 5,
    date: "3 weeks ago",
    initials: "LM",
  },
  {
    name: "James Wilson",
    text: "I've been a patient for over 10 years. Dr. Smith's expertise and genuine concern for her patients is evident in everything she does. I wouldn't go anywhere else.",
    rating: 5,
    date: "1 week ago",
    initials: "JW",
  },
  {
    name: "Susan Patterson",
    text: "Outstanding service! The staff is knowledgeable, friendly, and patient. They answered all my questions and made me feel comfortable throughout the entire process.",
    rating: 5,
    date: "4 days ago",
    initials: "SP",
  },
  {
    name: "Michael Chen",
    text: "I was hesitant about getting hearing aids, but the team made it so easy. The technology is amazing and the support is unmatched. Thank you for giving me my confidence back!",
    rating: 5,
    date: "2 months ago",
    initials: "MC",
  },
  {
    name: "Barbara Davis",
    text: "Professional, compassionate, and thorough. They took the time to find exactly what I needed. My hearing has improved dramatically and I couldn't be happier!",
    rating: 5,
    date: "5 days ago",
    initials: "BD",
  },
  {
    name: "Thomas Anderson",
    text: "Excellent experience from start to finish. The hearing evaluation was comprehensive and the fitting was perfect. Highly recommend to anyone experiencing hearing loss.",
    rating: 5,
    date: "3 months ago",
    initials: "TA",
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
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-burnt-orange text-burnt-orange" />
            ))}
          </div>
          <span className="text-sm text-body-gray">{testimonial.date}</span>
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
    <section id="testimonials" className="py-20 bg-soft-seafoam overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → GOOGLE REVIEWS
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
              What Our <span className="text-main-teal">Patients Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-burnt-orange text-burnt-orange" />
                ))}
              </div>
              <span className="text-xl font-bold text-charcoal">5.0</span>
              <span className="text-body-gray">· 100+ reviews</span>
            </div>
          </div>

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
