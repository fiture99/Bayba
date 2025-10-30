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
    <section id="services" className="py-20 bg-aliceblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive money transfer solutions designed to meet your financial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-navy-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-navy-800 mb-6">Why Choose Bayba?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-800 mb-2">Fast</div>
                <p className="text-gray-600">Instant transfers with real-time processing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-800 mb-2">Reliable</div>
                <p className="text-gray-600">Backed by Trust Bank Limited's infrastructure</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-800 mb-2">Affordable</div>
                <p className="text-gray-600">Competitive rates with transparent pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
