import { Sparkles, Cloud, Bird, Snowflake, AlertTriangle, Zap } from 'lucide-react';

const FaultTypesSection = () => {
  const faultTypes = [
    {
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      title: "Temiz Paneller",
      description: "Optimum performans için temiz ve bakımlı güneş panelleri"
    },
    {
      icon: <Cloud className="h-8 w-8 text-gray-600" />,
      title: "Tozlu Paneller",
      description: "Toz birikimi nedeniyle verimliliği düşen paneller"
    },
    {
      icon: <Bird className="h-8 w-8 text-brown-600" />,
      title: "Kuş Pisliği",
      description: "Kuş pisliği nedeniyle performansı etkilenen paneller"
    },
    {
      icon: <Snowflake className="h-8 w-8 text-blue-600" />,
      title: "Kar Birikimi",
      description: "Kar birikimi nedeniyle enerji üretimi engellenen paneller"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "Fiziksel Hasar",
      description: "Çatlak, kırık veya mekanik hasar görmüş paneller"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Elektrik Hasarı",
      description: "Elektrik bağlantılarında veya devrelerinde sorun olan paneller"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Tespit Ettiğimiz Hata Türleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faultTypes.map((fault, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={`${index * 100 + 100}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {fault.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{fault.title}</h3>
              </div>
              <p className="text-gray-600">{fault.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaultTypesSection;