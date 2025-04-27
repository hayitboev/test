import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg')",
          backgroundPosition: "50% 70%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            {t('hero.title')}
          </h1>
          <p 
            className="text-lg md:text-xl text-blue-100 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('hero.subtitle')}
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link 
              to="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              {t('hero.exploreServices')}
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium border-2 border-white hover:bg-blue-50 transition-colors"
            >
              {t('hero.requestQuote')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;