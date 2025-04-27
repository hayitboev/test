import { type FC } from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: FC = () => {
  return (
    <div className="pt-24">
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch to discuss how our drone and AI inspection services can optimize your solar power plant's performance.
          </p>
        </div>
      </section>
      
      <ContactSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a typical inspection take?</h3>
                  <p className="text-gray-700">
                    The duration depends on the size of your installation. A 10MW plant typically requires 1 day for data collection, with analysis and reporting completed within 3-5 business days.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you need to shut down the plant during inspection?</h3>
                  <p className="text-gray-700">
                    No, our drone inspections can be performed while your plant remains fully operational, causing zero production downtime.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of faults can your technology detect?</h3>
                  <p className="text-gray-700">
                    Our system can identify hotspots, microcracks, soiling, bypass diode failures, cell degradation, PID (potential induced degradation), delamination, and various connection issues.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate is your fault detection?</h3>
                  <p className="text-gray-700">
                    Our AI algorithms achieve up to 99.7% accuracy in fault detection, significantly outperforming traditional manual inspection methods.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What information is included in your reports?</h3>
                  <p className="text-gray-700">
                    Our comprehensive reports include precise fault locations, classification by type and severity, thermal and visual imagery evidence, performance impact estimates, and prioritized maintenance recommendations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should we schedule inspections?</h3>
                  <p className="text-gray-700">
                    We recommend quarterly inspections for optimal performance monitoring, though many clients opt for bi-annual inspections (spring and fall) at minimum. Specific recommendations can be provided based on your installation's characteristics and environmental conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;