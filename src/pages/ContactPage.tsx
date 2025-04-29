import { type FC } from 'react';
import ContactSection from '../components/ContactSection';
import { useTranslation } from 'react-i18next';

const ContactPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24">
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{t('contactPage.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('contactPage.subtitle')}
          </p>
        </div>
      </section>
      
      <ContactSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">{t('contactPage.faq.title')}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactPage.faq.inspectionDuration.question')}</h3>
                  <p className="text-gray-700">
                    {t('contactPage.faq.inspectionDuration.answer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactPage.faq.shutdown.question')}</h3>
                  <p className="text-gray-700">
                    {t('contactPage.faq.shutdown.answer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactPage.faq.faultTypes.question')}</h3>
                  <p className="text-gray-700">
                    {t('contactPage.faq.faultTypes.answer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactPage.faq.accuracy.question')}</h3>
                  <p className="text-gray-700">
                    {t('contactPage.faq.accuracy.answer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactPage.faq.reports.question')}</h3>
                  <p className="text-gray-700">
                    {t('contactPage.faq.reports.answer')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactPage.faq.frequency.question')}</h3>
                  <p className="text-gray-700">
                    {t('contactPage.faq.frequency.answer')}
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