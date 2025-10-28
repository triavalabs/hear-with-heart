import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import LogoLoop from "./LogoLoop";
import bcbsLogo from "@/assets/insurance-bcbs.png";
import uhcLogo from "@/assets/insurance-uhc.png";
import aetnaLogo from "@/assets/insurance-aetna.png";
import cignaLogo from "@/assets/insurance-cigna.png";
import humanaLogo from "@/assets/insurance-humana.png";
import medicareLogo from "@/assets/insurance-medicare.png";

const insuranceProviders = [
  { src: bcbsLogo, alt: "Blue Cross Blue Shield" },
  { src: uhcLogo, alt: "UnitedHealthcare" },
  { src: aetnaLogo, alt: "Aetna" },
  { src: cignaLogo, alt: "Cigna" },
  { src: humanaLogo, alt: "Humana" },
  { src: medicareLogo, alt: "Medicare" },
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

          <Card className="border-2 border-muted bg-charcoal p-8 md:p-12 animate-fade-in-up overflow-hidden">
            <div className="relative" style={{ height: '150px' }}>
              <LogoLoop
                logos={insuranceProviders}
                speed={60}
                direction="left"
                logoHeight={80}
                gap={48}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="hsl(var(--charcoal))"
                ariaLabel="Insurance partners"
              />
            </div>
            <p className="text-center text-white mt-8 text-lg">
              Don't see your insurance provider listed? Contact us to verify your coverage.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
