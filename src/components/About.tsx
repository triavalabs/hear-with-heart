import { Badge } from "@/components/ui/badge";
import teamPhoto from "@/assets/team-photo-final.png";
import officeInterior from "@/assets/office-photo-upscaled.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-soft-seafoam">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → Meet Your Local Experts
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'hsl(14, 85%, 54%)' }}>
              Your Hearing Care Partner Since 2002
            </h2>
            <p className="text-xl text-body-gray max-w-2xl mx-auto">
              Compassionate, experienced care from a team that knows you by name
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Cynthia Quinn, Licensed Hearing Aid Specialist
              </h3>
              <p className="text-lg text-body-gray mb-4 leading-relaxed">
                With over 20 years of experience serving the Oviedo community, Cynthia Quinn has built lasting relationships with patients who trust her expertise and genuine care.
              </p>
              <p className="text-lg text-body-gray mb-4 leading-relaxed">
                Cynthia specializes in comprehensive hearing evaluations, custom hearing aid fittings, and ongoing patient support. Her commitment to staying current with the latest hearing aid technology ensures you receive the best care available.
              </p>
              <p className="text-lg text-body-gray leading-relaxed">
                At Oviedo Hearing Center, we believe hearing care is more than just technology—it's about understanding your unique lifestyle and helping you reconnect with the sounds that matter most.
              </p>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up">
              <img 
                src={teamPhoto} 
                alt="Cynthia Quinn, Licensed Hearing Aid Specialist at Oviedo Hearing Center"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img 
                src={officeInterior} 
                alt="Modern and welcoming Oviedo Hearing Center office interior"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                A Welcoming Environment
              </h3>
              <p className="text-lg text-body-gray mb-4 leading-relaxed">
                Our office is designed with your comfort in mind. From the moment you walk through our doors, you'll experience a warm, professional atmosphere where you're treated like family.
              </p>
              <p className="text-lg text-body-gray leading-relaxed">
                We take pride in creating a relaxed setting where you can discuss your hearing concerns openly and receive the personalized attention you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
