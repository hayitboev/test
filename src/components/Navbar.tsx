import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="relative">
              <img 
                src={logo} 
                alt="PATtechs Logo" 
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-600 shadow-md transition-transform hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900">
                PATtechs
              </span>
              <span className="text-xs text-gray-500">{t('nav.subtitle')}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              {t('nav.about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              {t('nav.services')}
            </NavLink>
            <NavLink 
              to="/benefits" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              {t('nav.benefits')}
            </NavLink>
            <NavLink 
              to="/sectors" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              {t('nav.sectors')}
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50 transition-all"
            >
              <Globe className="h-5 w-5" />
              <span className="font-medium">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              {t('nav.contact')}
            </Link>
          </div>

          <button 
            className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-md hover:bg-blue-50 transition-all" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-4 space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={closeMenu}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={closeMenu}
            >
              {t('nav.about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={closeMenu}
            >
              {t('nav.services')}
            </NavLink>
            <NavLink 
              to="/benefits" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={closeMenu}
            >
              {t('nav.benefits')}
            </NavLink>
            <NavLink 
              to="/sectors" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={closeMenu}
            >
              {t('nav.sectors')}
            </NavLink>
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md hover:bg-blue-50 transition-all"
              >
                <Globe className="h-5 w-5" />
                <span className="font-medium">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
              </button>
              <Link 
                to="/contact" 
                className="block mt-2 bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-all text-center"
                onClick={closeMenu}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;