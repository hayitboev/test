import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check, XCircle, DollarSign, Shield, Target, Clock, BarChart, FileText, Zap } from 'lucide-react';
import benefitsImage from '../assets/benefits.jpg';

const BenefitsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24">
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{t('benefits.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('benefits.subtitle')}
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('benefits.approachTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('benefits.approachDesc1')}
              </p>
              <p className="text-lg text-gray-700">
                {t('benefits.approachDesc2')}
              </p>
            </div>
            <div>
              <img 
                src={benefitsImage} 
                alt={t('benefits.imageAlt')} 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">{t('benefits.comparisonTitle')}</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-gray-800 border-b border-gray-200">
                {t('benefits.feature')}
              </div>
              <div className="p-4 font-semibold text-center text-blue-900 border-b border-gray-200 bg-blue-50">
                {t('benefits.ourSolution')}
              </div>
              <div className="p-4 font-semibold text-center text-gray-700 border-b border-gray-200 bg-gray-50">
                {t('benefits.traditionalMethod')}
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                {t('benefits.inspectionSpeed')}
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.speedOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.speedOurDesc')}</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.speedTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.speedTraditionalDesc')}</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                {t('benefits.detectionAccuracy')}
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.accuracyOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.accuracyOurDesc')}</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.accuracyTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.accuracyTraditionalDesc')}</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                {t('benefits.microcrackDetection')}
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
                {t('benefits.hotspotDetection')}
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
                {t('benefits.safetyRisk')}
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.safetyOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.safetyOurDesc')}</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.safetyTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.safetyTraditionalDesc')}</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                {t('benefits.dataCollection')}
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.dataOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.dataOurDesc')}</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.dataTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.dataTraditionalDesc')}</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                {t('benefits.reportDetail')}
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.reportOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.reportOurDesc')}</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.reportTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.reportTraditionalDesc')}</div>
              </div>
              
              {/* Row */}
              <div className="p-4 border-b border-gray-200">
                {t('benefits.costPerMW')}
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.costOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.costOurDesc')}</div>
              </div>
              <div className="p-4 text-center border-b border-gray-200 bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.costTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.costTraditionalDesc')}</div>
              </div>
              
              {/* Row */}
              <div className="p-4">
                {t('benefits.energyProduction')}
              </div>
              <div className="p-4 text-center bg-blue-50">
                <div className="font-medium text-green-700">{t('benefits.energyOur')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.energyOurDesc')}</div>
              </div>
              <div className="p-4 text-center bg-gray-50">
                <div className="font-medium text-red-700">{t('benefits.energyTraditional')}</div>
                <div className="text-sm text-gray-600 mt-1">{t('benefits.energyTraditionalDesc')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('benefits.keyBenefitsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.keyBenefitsSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 text-blue-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('benefits.timeEfficiency')}</h3>
              <p className="text-gray-700 mb-4">
                {t('benefits.timeEfficiencyDesc')}
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>{t('benefits.timeEfficiencyMetric')}</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-green-100 text-green-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('benefits.accuracy')}</h3>
              <p className="text-gray-700 mb-4">
                {t('benefits.accuracyDesc')}
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>{t('benefits.accuracyMetric')}</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-yellow-100 text-yellow-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('benefits.safety')}</h3>
              <p className="text-gray-700 mb-4">
                {t('benefits.safetyDesc')}
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>{t('benefits.safetyMetric')}</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 text-blue-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('benefits.costEffectiveness')}</h3>
              <p className="text-gray-700 mb-4">
                {t('benefits.costEffectivenessDesc')}
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>{t('benefits.costEffectivenessMetric')}</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-green-100 text-green-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('benefits.energyProductionBoost')}</h3>
              <p className="text-gray-700 mb-4">
                {t('benefits.energyProductionBoostDesc')}
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>{t('benefits.energyProductionBoostMetric')}</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="bg-yellow-100 text-yellow-800 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{t('benefits.reporting')}</h3>
              <p className="text-gray-700 mb-4">
                {t('benefits.reportingDesc')}
              </p>
              <div className="mt-2 flex items-center text-sm font-medium text-blue-600">
                <span>{t('benefits.reportingMetric')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('benefits.successStoryTitle')}</h2>
              <p className="text-xl text-blue-100 mb-4">
                {t('benefits.successStory')}
              </p>
              <p className="text-blue-300 mb-6">
                {t('benefits.successStoryAuthor')}
              </p>
              <a 
                href="/contact" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                {t('benefits.ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div>
              <img 
                src={benefitsImage} 
                alt={t('benefits.successStoryImageAlt')} 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">{t('benefits.readyTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('benefits.readyDesc')}
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block shadow-md"
          >
            {t('benefits.contactButton')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;