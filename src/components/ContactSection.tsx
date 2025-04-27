import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-4 text-blue-900"
            data-aos="fade-up"
          >
            {t('contact.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('contact.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div 
              className="bg-white rounded-xl shadow-lg p-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <ContactForm />
            </div>
            
            <div 
              className="space-y-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Telefon</h3>
                    <a href="tel:+90 546 783 59 31" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
                      +90 546 783 59 31
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">E-posta</h3>
                    <a href="mailto:info@pattechs.com" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
                      info@pattechs.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Adres</h3>
                    <address className="text-gray-600 not-italic text-lg">
                      123 Solar Street<br />
                      Renewable City, RC 12345<br />
                      Türkiye
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;