import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import hearingAid3D from "@/assets/hearing-aid-3d.png";

const Hero = () => {
  const handleScheduleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+14073657555';
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-warm-cream">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-warm-cream" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl animate-fade-in-up">
            <Badge 
              className="mb-3 px-4 py-1.5 text-sm font-medium w-fit bg-secondary text-white shadow-lg"
            >
              → Focused on Hearing Health
            </Badge>
            <p className="text-lg md:text-xl font-semibold mb-4 tracking-wide" style={{ color: 'hsl(14, 85%, 54%)' }}>
              CARING & PROFESSIONAL
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span style={{ color: 'hsl(14, 85%, 54%)' }}>TRUSTED<br />HEARING CARE</span>
              <br />
              <span className="text-charcoal">IN OVIEDO<br />SINCE 2002</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal mb-8 leading-relaxed">
              Experience personalized, professional hearing care from a team that treats you like family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleScheduleClick}
              >
                Schedule Your Hearing Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 bg-white hover:bg-white/90 transition-all duration-300"
                style={{ borderColor: 'hsl(14, 85%, 54%)', color: 'hsl(14, 85%, 54%)' }}
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Our Office
              </Button>
            </div>
          </div>

          {/* 3D Hearing Aid Image */}
          <div className="hidden md:flex justify-center items-center animate-fade-in">
            <div 
              className="relative animate-[float_6s_ease-in-out_infinite]"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
              }}
            >
              <img 
                src={hearingAid3D} 
                alt="Premium Hearing Aid Device" 
                className="w-full max-w-md object-contain"
                style={{
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-cream to-transparent" />
    </section>
  );
};

export default Hero;
