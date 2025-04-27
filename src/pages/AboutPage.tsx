import { useTranslation } from 'react-i18next';
import { Target, Eye } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h1 
            className="text-4xl font-bold text-center mb-16 text-blue-900"
            data-aos="fade-up"
          >
            {t('about.title')}
          </h1>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div 
              className="bg-white rounded-xl shadow-lg p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900 ml-4">{t('about.mission.title')}</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                {t('about.mission.content').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            <div 
              className="bg-white rounded-xl shadow-lg p-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900 ml-4">{t('about.vision.title')}</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                {t('about.vision.content').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;