import { Send, ArrowRight } from 'lucide-react';

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
          backgroundImage: 'url("/src/images/image.png")', // Replace with your background image path
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-70"></div>
        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br  "></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-10 rounded-full mb-8 backdrop-blur-sm">
            <Send size={40} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl text-gray-200 font-bold mb-6 leading-tight">
            Send and Receive Money
            <span className="block text-blue-300 mt-2">Instantly</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
            Fast, reliable, and secure money transfer services across The Gambia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-white text-navy-800 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}