import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, BrainCircuit, FileText, Wrench, Plane } from 'lucide-react';
import droneInspection from '../assets/drone-inspection.jpg';
import step1 from '../assets/step1.jpg';
import step2 from '../assets/step2.jpg';
import step3 from '../assets/step3.jpg';
import step4 from '../assets/step4.jpg';

const ServicesPage: FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Plane className="h-10 w-10 text-blue-600" />,
      title: t('services.droneInspection'),
      description: t('services.droneInspectionDesc'),
      features: [
        t('services.droneInspectionFeature1'),
        t('services.droneInspectionFeature2'),
        t('services.droneInspectionFeature3'),
        t('services.droneInspectionFeature4')
      ]
    },
    {
      icon: <Camera className="h-10 w-10 text-blue-600" />,
      title: t('services.visualAnalysis'),
      description: t('services.visualAnalysisDesc'),
      features: [
        t('services.visualAnalysisFeature1'),
        t('services.visualAnalysisFeature2'),
        t('services.visualAnalysisFeature3'),
        t('services.visualAnalysisFeature4')
      ]
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-blue-600" />,
      title: t('services.aiAnalysis'),
      description: t('services.aiAnalysisDesc'),
      features: [
        t('services.aiAnalysisFeature1'),
        t('services.aiAnalysisFeature2'),
        t('services.aiAnalysisFeature3'),
        t('services.aiAnalysisFeature4')
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: t('services.detailedReporting'),
      description: t('services.detailedReportingDesc'),
      features: [
        t('services.detailedReportingFeature1'),
        t('services.detailedReportingFeature2'),
        t('services.detailedReportingFeature3'),
        t('services.detailedReportingFeature4')
      ]
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: t('services.maintenancePlanning'),
      description: t('services.maintenancePlanningDesc'),
      features: [
        t('services.maintenancePlanningFeature1'),
        t('services.maintenancePlanningFeature2'),
        t('services.maintenancePlanningFeature3'),
        t('services.maintenancePlanningFeature4')
      ]
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('services.subtitle')}
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('services.technologyTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('services.technologyDesc1')}
              </p>
              <p className="text-lg text-gray-700">
                {t('services.technologyDesc2')}
              </p>
            </div>
            <div>
              <img 
                src={droneInspection} 
                alt={t('services.droneImageAlt')} 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-50 rounded-full p-3 mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-blue-500 to-blue-700' : 'from-green-500 to-green-700'
                  } p-8 flex items-center justify-center text-white`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold">{t('services.advanced')} {service.title}</h4>
                      <p className="mt-4">
                        {t('services.advancedDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0"></div>
            
            <div className="space-y-12">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('process.step1')}</h3>
                    <p className="text-gray-700">
                      {t('process.step1Desc')}
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold shadow-lg">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img 
                      src={step1} 
                      alt={t('process.step1ImageAlt')} 
                      className="rounded-lg shadow-md w-full h-auto"
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                    <img 
                      src={step2} 
                      alt={t('process.step2ImageAlt')} 
                      className="rounded-lg shadow-md w-full h-auto"
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0 order-2 md:order-2">
                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold shadow-lg">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('process.step2')}</h3>
                    <p className="text-gray-700">
                      {t('process.step2Desc')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('process.step3')}</h3>
                    <p className="text-gray-700">
                      {t('process.step3Desc')}
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold shadow-lg">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img 
                      src={step3} 
                      alt={t('process.step3ImageAlt')} 
                      className="rounded-lg shadow-md w-full h-auto"
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                    <img 
                      src={step4} 
                      alt={t('process.step4ImageAlt')} 
                      className="rounded-lg shadow-md w-full h-auto"
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0 order-2 md:order-2">
                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold shadow-lg">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('process.step4')}</h3>
                    <p className="text-gray-700">
                      {t('process.step4Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('services.ctaTitle')}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {t('services.ctaDesc')}
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            {t('services.ctaButton')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;