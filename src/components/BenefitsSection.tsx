import { useTranslation } from 'react-i18next';
import { Zap, DollarSign, Shield, Target } from 'lucide-react';

const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          {t('benefits.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">{t('benefits.efficiency')}</h3>
            </div>
            <p className="text-gray-600">
              {t('benefits.efficiencyDesc')}
            </p>
          </div>

          <div 
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">{t('benefits.cost')}</h3>
            </div>
            <p className="text-gray-600">
              {t('benefits.costDesc')}
            </p>
          </div>

          <div 
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">{t('benefits.safety')}</h3>
            </div>
            <p className="text-gray-600">
              {t('benefits.safetyDesc')}
            </p>
          </div>

          <div 
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">{t('benefits.accuracy')}</h3>
            </div>
            <p className="text-gray-600">
              {t('benefits.accuracyDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;