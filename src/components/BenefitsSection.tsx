import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      id: 1,
      title: t('benefits.timeEfficiency'),
      description: t('benefits.timeEfficiencyDesc'),
      metric: t('benefits.timeEfficiencyMetric'),
      icon: '⏱️',
    },
    {
      id: 2,
      title: t('benefits.accuracy'),
      description: t('benefits.accuracyDesc'),
      metric: t('benefits.accuracyMetric'),
      icon: '🎯',
    },
    {
      id: 3,
      title: t('benefits.safety'),
      description: t('benefits.safetyDesc'),
      metric: t('benefits.safetyMetric'),
      icon: '🛡️',
    },
    {
      id: 4,
      title: t('benefits.costEffectiveness'),
      description: t('benefits.costEffectivenessDesc'),
      metric: t('benefits.costEffectivenessMetric'),
      icon: '💰',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('benefits.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <p className="text-sm font-medium text-blue-600">
                {benefit.metric}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;