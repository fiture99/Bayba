import { Handshake, Building2 } from 'lucide-react';
import riaLogo from '../images/RIA.png';
import moneygramLogo from '../images/moneygram.png';
import kemosonLogo from '../images/Kemoson.jpg';
import smallworldLogo from '../images/smallworld.jpg';
import transfastLogo from '../images/trans-fast.jpg';
import tbl from '../images/tbl.jpg';

export default function Partners() {
  const partners = [
    {
      name: 'Trust Bank',
      description: 'Our parent company and leading financial institution in The Gambia',
      logo: tbl,
      type: 'logo'
    },
    {
      name: 'GBO Network',
      description: 'Strategic partner for extended money transfer services',
      logo: tbl,
      type: 'logo'
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
    <section id="partners" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-aliceblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
            <Handshake className="w-10 h-10 text-navy-800" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-4">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-navy-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to provide exceptional financial services
          </p>
        </div>

        {/* Moving Logos Marquee */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-800 text-center mb-8">
            Money Transfer <span className="text-blue-600">Services</span>
          </h3>
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl py-8">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
            
            <div className="flex animate-marquee whitespace-nowrap">
              {[...transferPartners, ...transferPartners].map((partner, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center mx-6 sm:mx-8 lg:mx-12 min-w-[100px] sm:min-w-[120px] lg:min-w-[150px]"
                >
                  <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-10 sm:h-12 lg:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Show text fallback
                        const parent = target.parentNode as HTMLElement;
                        const fallback = document.createElement('div');
                        fallback.className = 'text-gray-500 font-semibold text-sm sm:text-base text-center';
                        fallback.textContent = partner.name;
                        parent.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Logo or Icon Container */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-br   w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {partner.type === 'logo' ? (
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="bg-gradient-to-br   w-25 h-25 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentNode as HTMLElement;
                            const fallback = document.createElement('div');
                            fallback.className = 'text-white font-semibold text-sm text-center';
                            fallback.textContent = partner.name.split(' ')[0];
                            parent.appendChild(fallback);
                          }}
                        />
                      ) : (
                        <partner.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg sm:text-xl max-w-md">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Opportunities */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 sm:p-12 border border-blue-100">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-6">
              Partnership <span className="text-blue-600">Opportunities</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're always looking to collaborate with organizations that share our commitment to
              financial inclusion and excellent customer service. Get in touch to explore partnership opportunities.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-navy-700 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Contact Us
            </button>
          </div>
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
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Slower animation on mobile for better readability */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 45s;
          }
        }
      `}</style>
    </section>
  );
}