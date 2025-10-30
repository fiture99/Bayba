import { Handshake, Building2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Trust Bank Limited',
      description: 'Our parent company and leading financial institution in The Gambia',
      icon: Building2,
    },
    {
      name: 'GBO Network',
      description: 'Strategic partner for extended money transfer services',
      icon: Handshake,
    },
  ];

  // Money transfer partners logos - replace with actual logo paths
  const transferPartners = [
    { name: 'RIA', logo: '/src/images/ria.png' },
    { name: 'MoneyGram', logo: '/src/images/moneygram.png' },
    { name: 'Kemoson', logo: '/src/images/kemoson.jpg' },
    { name: 'Small World', logo: '/src/images/smallworld.jpg' },
    { name: 'Trans Fast', logo: '/src/images/trans-fast.jpg' },
    // { name: 'Remitly', logo: '../images/partners/remitly-logo.png' },
    // { name: 'Wise', logo: '../images/partners/wise-logo.png' },
    // { name: 'Xoom', logo: '../images/partners/xoom-logo.png' },
  ];

  return (
    <section id="partners" className="py-20 bg-aliceblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Collaborating with industry leaders to provide exceptional service
          </p>
        </div>

        {/* Moving Logos Marquee */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-800 text-center mb-8">
            Money Transfer Services
          </h3>
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg py-8">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-aliceblue to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-aliceblue to-transparent z-10"></div>
            
            <div className="flex animate-marquee whitespace-nowrap">
              {[...transferPartners, ...transferPartners].map((partner, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center mx-8 min-w-[120px]"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show text fallback
                      const fallback = document.createElement('div');
                      fallback.className = 'text-gray-500 font-semibold text-sm text-center';
                      fallback.textContent = partner.name;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-navy-800 w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">{partner.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-navy-800 mb-4">Partnership Opportunities</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            We're always looking to collaborate with organizations that share our commitment to
            financial inclusion and excellent customer service. Get in touch to explore partnership opportunities.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-navy-800 text-white rounded-lg font-semibold text-lg hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}