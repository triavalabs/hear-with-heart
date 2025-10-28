import { Badge } from "@/components/ui/badge";
import evaluationImg from "@/assets/service-evaluation.jpg";
import fittingImg from "@/assets/service-fitting.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import careImg from "@/assets/service-care.jpg";

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
    <section id="services" className="py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → WHAT WE OFFER
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
              Our <span className="text-main-teal">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-2xl font-semibold text-main-teal">
                  ({service.price})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
