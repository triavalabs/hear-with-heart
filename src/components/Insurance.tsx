import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "UnitedHealthcare", 
  "Aetna",
  "Cigna",
  "Humana",
  "Medicare",
  "Tricare",
  "VSP Vision Care"
];

const Insurance = () => {
  return (
    <section id="insurance" className="py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-secondary text-white shadow-lg">
              → We Accept Most Insurance
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'hsl(14, 85%, 54%)' }}>
              Making Quality Care Accessible
            </h2>
            <p className="text-xl text-body-gray max-w-2xl mx-auto">
              We work with most major insurance providers to make quality hearing care accessible
            </p>
          </div>

          <Card className="border-2 border-muted bg-gradient-to-br from-charcoal via-charcoal to-secondary p-12 md:p-16 animate-fade-in-up overflow-hidden relative">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse"></div>
            
            <div className="relative">
              {/* First row - scrolling left */}
              <div className="overflow-hidden mb-8">
                <div className="flex gap-12 animate-[scroll_30s_linear_infinite]">
                  {[...insuranceProviders, ...insuranceProviders].map((provider, index) => (
                    <div 
                      key={`row1-${index}`}
                      className="flex-shrink-0 text-3xl md:text-4xl font-bold text-white hover:scale-110 transition-transform duration-300 whitespace-nowrap"
                      style={{ 
                        textShadow: '0 0 20px rgba(77, 193, 184, 0.5)',
                      }}
                    >
                      {provider}
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row - scrolling right */}
              <div className="overflow-hidden">
                <div className="flex gap-12 animate-[scroll_35s_linear_infinite_reverse]">
                  {[...insuranceProviders.slice().reverse(), ...insuranceProviders.slice().reverse()].map((provider, index) => (
                    <div 
                      key={`row2-${index}`}
                      className="flex-shrink-0 text-2xl md:text-3xl font-semibold hover:scale-110 transition-transform duration-300 whitespace-nowrap"
                      style={{ 
                        color: 'hsl(14, 85%, 54%)',
                        textShadow: '0 0 15px rgba(236, 91, 40, 0.4)',
                      }}
                    >
                      {provider}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-white mt-12 text-lg relative z-10 font-medium">
              Don't see your insurance provider listed? <span className="text-secondary font-bold">Contact us</span> to verify your coverage.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
