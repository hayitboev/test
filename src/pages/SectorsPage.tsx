import { type FC } from 'react';
import { Sun, Building2, Factory, ChevronRight, ArrowRight } from 'lucide-react';

const sectors = [
  {
    icon: <Sun className="h-12 w-12 text-yellow-500" />,
    title: "Utility-Scale Solar Farms",
    description: "Comprehensive inspection solutions for large-scale solar installations spanning hundreds of acres.",
    benefits: [
      "Complete coverage of massive installations in minimal time",
      "Early identification of performance-limiting issues",
      "Detailed reporting for efficient maintenance planning",
      "Integration with existing O&M workflows"
    ],
    imageUrl: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    cta: "Learn how we helped a 100MW solar farm increase production by 8.7%"
  },
  {
    icon: <Building2 className="h-12 w-12 text-blue-500" />,
    title: "Commercial Rooftop Installations",
    description: "Specialized inspection services for solar panels installed on commercial and institutional buildings.",
    benefits: [
      "Safe inspection without roof access requirements",
      "Minimal disruption to business operations",
      "Identification of building-specific issues (shading, ventilation)",
      "Custom reporting for facility managers"
    ],
    imageUrl: "https://images.pexels.com/photos/159160/solar-panel-array-power-sun-electricity-159160.jpeg",
    cta: "See how we helped a retail chain optimize their rooftop solar assets"
  },
  {
    icon: <Factory className="h-12 w-12 text-green-500" />,
    title: "Industrial Facilities",
    description: "Tailored inspection and monitoring solutions for manufacturing and industrial complexes with solar installations.",
    benefits: [
      "Integration with industrial energy management systems",
      "Inspection schedules designed around production cycles",
      "Analysis of energy consumption vs. production patterns",
      "Focus on maximizing self-consumption efficiency"
    ],
    imageUrl: "https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg",
    cta: "Discover how our industrial clients achieved 12% greater energy independence"
  }
];

const SectorsPage: FC = () => {
  return (
    <div className="pt-24">
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Sectors We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our drone and AI inspection services are optimized for various solar installation types across multiple sectors.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Expertise Across Multiple Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              We've developed specialized inspection approaches for different types of solar installations, each with unique challenges and requirements.
            </p>
            
            <div className="space-y-16">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-8">
                      <div className="mb-6">
                        {sector.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">{sector.title}</h3>
                      <p className="text-gray-700 mb-6">{sector.description}</p>
                      
                      <h4 className="font-semibold text-blue-800 mb-4">Key Benefits:</h4>
                      <ul className="space-y-2 mb-6">
                        {sector.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group transition-colors">
                        <span className="border-b border-blue-600 group-hover:border-blue-800">{sector.cta}</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <div className="bg-gray-100">
                      <img 
                        src={sector.imageUrl}
                        alt={sector.title}
                        className="w-full h-full object-cover object-center"
                        style={{ minHeight: '300px' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Approach to Different Installations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We tailor our inspection methodology based on the specific characteristics of each installation type
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Ground-Mounted Arrays</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Grid pattern flight paths for maximum coverage</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Optimized altitude for maximum detail capture</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Special attention to row-end panels (most exposed)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Terrain-adaptive flight planning</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Vegetation encroachment analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-800 mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Rooftop Installations</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Building-specific flight plans respecting structures</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Detection of building-specific issues (HVAC shadows, etc.)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Proximity analysis for roof vents and obstacles</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Urban environment sensor calibration</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Roof integrity assessment (optional add-on)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-800 mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Carport/Canopy Installations</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Multi-angle inspection for under-canopy issues</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Special attention to water drainage points</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Traffic pattern analysis for pollution impact</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Structure integrity assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Bird nesting detection and mitigation advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Interested in Our Services for Your Sector?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We adapt our technologies and methodologies to meet the specific needs of your solar installation, regardless of its type or scale.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;