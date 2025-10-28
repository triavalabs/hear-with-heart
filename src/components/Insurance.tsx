import { Card } from "@/components/ui/card";
import bcbsLogo from "@/assets/insurance-bcbs.png";
import uhcLogo from "@/assets/insurance-uhc.png";
import aetnaLogo from "@/assets/insurance-aetna.png";
import cignaLogo from "@/assets/insurance-cigna.png";
import humanaLogo from "@/assets/insurance-humana.png";
import medicareLogo from "@/assets/insurance-medicare.png";

const insuranceProviders = [
  { name: "Blue Cross Blue Shield", logo: bcbsLogo },
  { name: "UnitedHealthcare", logo: uhcLogo },
  { name: "Aetna", logo: aetnaLogo },
  { name: "Cigna", logo: cignaLogo },
  { name: "Humana", logo: humanaLogo },
  { name: "Medicare", logo: medicareLogo },
];

const Insurance = () => {
  return (
    <section id="insurance" className="py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Insurance Partners
            </h2>
            <p className="text-xl text-body-gray max-w-2xl mx-auto">
              We work with most major insurance providers to make quality hearing care accessible
            </p>
          </div>

          <Card className="border-2 border-border-gray p-8 md:p-12 animate-fade-in-up overflow-hidden">
            <div className="relative">
              <div className="flex gap-12 animate-scroll items-center">
                {[...insuranceProviders, ...insuranceProviders].map((provider, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0"
                  >
                    <div className="w-48 h-28 flex items-center justify-center bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border-gray">
                      <img 
                        src={provider.logo} 
                        alt={`${provider.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-body-gray mt-8 text-lg">
              Don't see your insurance provider listed? Contact us to verify your coverage.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
