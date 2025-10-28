import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Thompson",
    text: "Dr. Smith and her team have been wonderful. They took the time to understand my needs and found the perfect hearing aids for me. I can finally enjoy conversations with my grandchildren again!",
    rating: 5,
  },
  {
    name: "Robert Jenkins",
    text: "After 20 years of struggling with my hearing, I finally visited Oviedo Hearing Center. The difference has been life-changing. Professional, caring, and always available when I need adjustments.",
    rating: 5,
  },
  {
    name: "Linda Martinez",
    text: "The level of care and attention I receive here is outstanding. They treat me like family and always make sure my hearing aids are working perfectly. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Wilson",
    text: "I've been a patient for over 10 years. Dr. Smith's expertise and genuine concern for her patients is evident in everything she does. I wouldn't go anywhere else.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-soft-seafoam">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-body-gray max-w-2xl mx-auto">
              Real stories from real people in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 border-border-gray bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-burnt-orange text-burnt-orange" />
                    ))}
                  </div>
                  <p className="text-lg text-body-gray leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-charcoal">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
