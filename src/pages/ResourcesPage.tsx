import Footer from "@/components/Footer";
const ResourcesPage = () => {
  return <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 text-center">
              Patient Resources
            </h1>
            
            {/* FAQs Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-soft-seafoam p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">How often should I get my hearing tested?</h3>
                  <p className="text-body-gray">Adults should have their hearing tested every 3-5 years. If you notice changes in your hearing or are over 60, annual testing is recommended.</p>
                </div>
                <div className="bg-soft-seafoam p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Does insurance cover hearing aids?</h3>
                  <p className="text-body-gray">Coverage varies by plan. We accept most major insurance providers and will work with you to maximize your benefits.</p>
                </div>
                <div className="bg-soft-seafoam p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">What should I expect at my first appointment?</h3>
                  <p className="text-body-gray">Your first visit includes a comprehensive hearing evaluation, a discussion of your lifestyle needs, and a review of treatment options if necessary.</p>
                </div>
              </div>
            </div>

            {/* Insurance Info */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Insurance Information</h2>
              <div className="bg-white border border-border-gray p-6 rounded-lg">
                <p className="text-body-gray mb-4">We accept most major insurance plans, including:</p>
                <ul className="list-disc list-inside text-body-gray space-y-2 mb-4">
                  <li>United</li>
                  <li>Blue Cross Blue Shield</li>
                  <li>UnitedHealthcare</li>
                  <li>Aetna</li>
                  <li>Cigna</li>
                  
                </ul>
                <p className="text-body-gray">Please contact our office to verify your specific coverage.</p>
              </div>
            </div>

            {/* Financing Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Financing Options</h2>
              <div className="bg-soft-seafoam p-6 rounded-lg">
                <p className="text-body-gray mb-4">We offer flexible payment plans to make quality hearing care affordable for everyone. Our financing options include:</p>
                <ul className="list-disc list-inside text-body-gray space-y-2">
                  <li>0% interest financing for qualified patients</li>
                  <li>Monthly payment plans</li>
                  <li>No credit check options available</li>
                </ul>
              </div>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">What to Expect at Your Appointment</h2>
              <div className="space-y-4 text-body-gray">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Health History Review</h3>
                    <p>We'll discuss your medical history and any hearing concerns you may have.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Comprehensive Hearing Test</h3>
                    <p>A thorough evaluation to determine your hearing ability across different frequencies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Results Discussion</h3>
                    <p>We'll explain your results in detail and answer all your questions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Treatment Plan</h3>
                    <p>If needed, we'll recommend solutions tailored to your lifestyle and budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default ResourcesPage;