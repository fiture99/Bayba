import { Handshake, Building2 } from 'lucide-react';
import riaLogo from '../images/RIA.png';
import moneygramLogo from '../images/moneygram.png';
import kemosonLogo from '../images/Kemoson.jpg';
import smallworldLogo from '../images/smallworld.jpg';
import transfastLogo from '../images/trans-fast.jpg';

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

  const transferPartners = [
    { name: 'RIA', logo: riaLogo },
    { name: 'MoneyGram', logo: moneygramLogo },
    { name: 'Kemoson', logo: kemosonLogo },
    { name: 'Small World', logo: smallworldLogo },
    { name: 'Trans Fast', logo: transfastLogo },
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 lg:py-20 bg-aliceblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">Our Partners</h2>
          <div className="w-20 sm:w-24 h-1 bg-navy-800 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Collaborating with industry leaders to provide exceptional service
          </p>
        </div>

        {/* Moving Logos Marquee */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-800 text-center mb-6 sm:mb-8">
            Money Transfer Services
          </h3>
          <div className="relative overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-lg py-6 sm:py-8">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-aliceblue to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-aliceblue to-transparent z-10"></div>
            
            <div className="flex animate-marquee whitespace-nowrap">
              {[...transferPartners, ...transferPartners].map((partner, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show text fallback
                      const fallback = document.createElement('div');
                      fallback.className = 'text-gray-500 font-semibold text-xs sm:text-sm text-center';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-navy-800 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-800 mb-3 sm:mb-4">{partner.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Opportunities */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-lg text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-800 mb-3 sm:mb-4">Partnership Opportunities</h3>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            We're always looking to collaborate with organizations that share our commitment to
            financial inclusion and excellent customer service. Get in touch to explore partnership opportunities.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-navy-800 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Slower animation on mobile for better readability */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 50s;
          }
        }
      `}</style>
    </section>
  );
}