import React from 'react';
import { ArrowRight, Check, XCircle } from 'lucide-react';

const BenefitsPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Benefits & Advantages</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover how our drone and AI-powered inspection services outperform traditional methods and deliver exceptional ROI.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">A Transformative Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                Traditional solar panel inspection methods are time-consuming, labor-intensive, and often miss critical issues that impact energy production. Our technology-driven approach revolutionizes this process with faster, more accurate, and more cost-effective inspections.
              </p>
              <p className="text-lg text-gray-700">
                By combining advanced drone technology with sophisticated AI analysis, we identify problems that would otherwise go undetected until they cause significant energy losses or catastrophic failures.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2745255/pexels-photo-2745255.jpeg" 
                alt="Drone inspecting solar panels" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Comparison with Traditional Methods</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-gray-800 border-b border-gray-200">
                Feature/Capability
              </div>
              <div className="p-4 font-semibold text-center text-blue-900 border-b border-gray-200 bg-blue-50">
                PATtechs Drone & AI Inspection
              </div>
              <div className="p-4 font-semibold text-center text-gray-700 border-b border-gray-200 bg-gray-50">
                Traditional Manual Inspection
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Inspection Speed
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">1-2 days for 50MW plant</div>
                <div className="text-sm text-gray-600 mt-1">Rapid drone coverage of large areas</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">7-14 days for 50MW plant</div>
                <div className="text-sm text-gray-600 mt-1">Slow manual panel-by-panel inspection</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Detection Accuracy
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">Up to 99.7% fault detection</div>
                <div className="text-sm text-gray-600 mt-1">AI algorithms trained on millions of panel images</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">60-80% fault detection</div>
                <div className="text-sm text-gray-600 mt-1">Limited by human vision and fatigue</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Microcrack Detection
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="flex justify-center text-green-600">
                  <Check className="h-6 w-6" />
                </div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="flex justify-center text-red-600">
                  <XCircle className="h-6 w-6" />
                </div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Early-Stage Hotspot Detection
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="flex justify-center text-green-600">
                  <Check className="h-6 w-6" />
                </div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="flex justify-center text-red-600">
                  <XCircle className="h-6 w-6" />
                </div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Personnel Safety Risk
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">Minimal</div>
                <div className="text-sm text-gray-600 mt-1">No need to access hazardous areas</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">High</div>
                <div className="text-sm text-gray-600 mt-1">Workers on rooftops or in electrical areas</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Data Collection
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">Comprehensive</div>
                <div className="text-sm text-gray-600 mt-1">RGB + thermal imagery of all panels</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">Limited</div>
                <div className="text-sm text-gray-600 mt-1">Spot checks and selective sampling</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Report Detail
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">Precise panel-level location</div>
                <div className="text-sm text-gray-600 mt-1">Exact fault positions with severity ratings</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">General area notes</div>
                <div className="text-sm text-gray-600 mt-1">Approximations based on visual observation</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                Cost per MW
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">Lower</div>
                <div className="text-sm text-gray-600 mt-1">Efficient technology-driven process</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">Higher</div>
                <div className="text-sm text-gray-600 mt-1">Labor-intensive process</div>
              </div>
              
              {/* Row */}
              <div className="p-4">
                Energy Production Impact
              </div>
              <div className="p-4 text-center bg-blue-50">
                <div className="font-medium text-green-700">5-12% improvement</div>
                <div className="text-sm text-gray-600 mt-1">Through early fault detection and repair</div>
              </div>
              <div className="p-4 text-center bg-gray-50">
                <div className="font-medium text-red-700">1-3% improvement</div>
                <div className="text-sm text-gray-600 mt-1">Limited by detection capabilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology delivers significant advantages across multiple dimensions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 text-blue-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Time Efficiency</h3>
              <p className="text-gray-700 mb-4">
                Reduce inspection time by up to 80% compared to traditional methods. Our drones can scan large installations in a fraction of the time required for manual inspections.
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>Typical inspection time: 1-2 days for 50MW</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-green-100 text-green-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Superior Accuracy</h3>
              <p className="text-gray-700 mb-4">
                Our AI technology identifies faults with up to 99.7% accuracy, detecting issues that are invisible to the human eye, including microcracks and early-stage hotspots.
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>AI trained on millions of panel images</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-yellow-100 text-yellow-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Enhanced Safety</h3>
              <p className="text-gray-700 mb-4">
                Eliminate the need for personnel to access potentially hazardous areas or work at heights. Our drones safely navigate the entire installation without human risk.
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>Zero personnel in hazardous areas</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 text-blue-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Cost-Effectiveness</h3>
              <p className="text-gray-700 mb-4">
                Our inspections deliver a strong ROI by preventing major failures, reducing maintenance costs, and increasing energy production through early intervention.
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>Typical ROI period: 3-6 months</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-green-100 text-green-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Energy Production Boost</h3>
              <p className="text-gray-700 mb-4">
                Customers typically see a 5-12% improvement in energy production after addressing the issues identified by our inspection and implementing our recommendations.
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>Average improvement: 8.3%</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-yellow-100 text-yellow-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Actionable Reporting</h3>
              <p className="text-gray-700 mb-4">
                Receive detailed reports with precise fault locations, severity classifications, and prioritized maintenance recommendations to optimize your resources.
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>Interactive digital reports with exact coordinates</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Customer Success Story</h2>
              <p className="text-xl text-blue-100 mb-4">
                "After implementing PATtechs' recommendations from a single inspection, we saw our energy production increase by 9.2% within the first month. The ROI was immediate, and the detailed fault mapping allowed us to optimize our maintenance team's workflow."
              </p>
              <p className="text-blue-300 mb-6">
                - Michael Chen, Technical Director at GreenField Energy (25MW Solar Farm)
              </p>
              <a 
                href="/contact" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                Get Similar Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" 
                alt="Solar farm" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Ready to Experience These Benefits?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our drone and AI inspection services can transform your solar power plant's performance.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block shadow-md"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;