import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Ear, Wrench, Heart } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Comprehensive Hearing Evaluations",
    description: "Thorough assessments using state-of-the-art diagnostic equipment to understand your unique hearing profile and needs.",
  },
  {
    icon: Ear,
    title: "Custom Hearing Aid Fittings",
    description: "Personalized selection and precise fitting of hearing aids tailored to your lifestyle, preferences, and hearing requirements.",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Expert repair services and routine maintenance to keep your hearing aids performing at their best for years to come.",
  },
  {
    icon: Heart,
    title: "Ongoing Care & Support",
    description: "Continuous follow-up appointments, adjustments, and counseling to ensure your long-term hearing health and satisfaction.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → Comprehensive Care
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'hsl(14, 85%, 54%)' }}>
              Services Tailored to Your Needs
            </h2>
            <p className="text-xl text-body-gray max-w-2xl mx-auto">
              From evaluation to ongoing care, we're with you every step of your hearing journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 border-border-gray hover:border-light-teal transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-very-light-teal flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-main-teal" />
                    </div>
                    <CardTitle className="text-2xl text-charcoal">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-body-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
