import { useTranslation } from 'react-i18next';
import { ClipboardList, Camera, Brain, FileText } from 'lucide-react';

const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-blue-600" />,
      title: t('process.step1'),
      description: t('process.step1Desc')
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: t('process.step2'),
      description: t('process.step2Desc')
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: t('process.step3'),
      description: t('process.step3Desc')
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: t('process.step4'),
      description: t('process.step4Desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('process.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;