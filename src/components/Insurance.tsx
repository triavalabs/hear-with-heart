import { Card } from "@/components/ui/card";

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "UnitedHealthcare",
  "Aetna",
  "Cigna",
  "Humana",
  "Medicare",
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
              <div className="flex gap-8 animate-scroll">
                {[...insuranceProviders, ...insuranceProviders].map((provider, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0"
                  >
                    <div className="w-40 h-24 flex items-center justify-center bg-soft-seafoam rounded-lg p-4 hover:shadow-md transition-all duration-300">
                      <p className="text-sm font-semibold text-charcoal text-center">
                        {provider}
                      </p>
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
