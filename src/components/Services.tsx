import { Send, Globe, Shield, Clock, TrendingUp, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Send,
      title: 'Domestic Money Transfer',
      description: 'Send money instantly to any corner of The Gambia with our extensive network of service points.',
    },
    {
      icon: Clock,
      title: 'Instant Transactions',
      description: 'Real-time money transfers ensuring your funds reach recipients within minutes.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-grade security protocols protecting every transaction backed by Trust Bank Limited.',
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Access our services from almost every corner of The Gambia through our partner network.',
    },
    {
      icon: TrendingUp,
      title: 'Reasonable Rates',
      description: 'Competitive pricing with transparent fees and no hidden charges.',
    },
    {
      icon: Users,
      title: 'Professional Support',
      description: 'Experienced staff ready to assist you with all your money transfer needs.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-aliceblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">Our Services</h2>
          <div className="w-20 sm:w-24 h-1 bg-navy-800 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Comprehensive money transfer solutions designed to meet your financial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 group"
              >
                <div className="bg-navy-800 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Bayba Section */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-800 mb-4 sm:mb-6">Why Choose Bayba?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-navy-800 mb-2">Fast</div>
                <p className="text-gray-600 text-sm sm:text-base">Instant transfers with real-time processing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-navy-800 mb-2">Reliable</div>
                <p className="text-gray-600 text-sm sm:text-base">Backed by Trust Bank Limited's infrastructure</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-navy-800 mb-2">Affordable</div>
                <p className="text-gray-600 text-sm sm:text-base">Competitive rates with transparent pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}