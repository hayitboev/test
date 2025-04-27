import { type FC } from 'react';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import BenefitsSection from '../components/BenefitsSection';
import FaultTypesSection from '../components/FaultTypesSection';
import ContactSection from '../components/ContactSection';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <FaultTypesSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;