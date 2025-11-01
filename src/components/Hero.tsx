import { Send, ArrowRight } from 'lucide-react';
import backgroundImage from '../images/image.png';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Responsive icon container */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-10 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <Send className="text-white w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Responsive heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-gray-200 font-bold mb-4 sm:mb-6 leading-tight">
            Send and Receive Money
            <span className="block text-blue-300 mt-1 sm:mt-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
              Instantly
            </span>
          </h1>

          {/* Responsive paragraph */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 leading-relaxed max-w-2xl mx-auto px-4">
            Fast, reliable, and secure money transfer services across The Gambia
          </p>

          {/* Responsive buttons */}
          {/* Responsive buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={scrollToContact}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-navy-800 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
                
            <button
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient - hidden on very small screens */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}