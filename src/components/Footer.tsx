import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../images/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info - Full width on mobile, spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, '#home')}
                className="flex items-center"
              >
                <img
                  className="h-10 sm:h-12 md:h-14 w-auto"
                  src={logo}
                  alt="Bayba Financial Services Logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                {/* Text fallback */}
                <span className="ml-2 text-lg sm:text-xl font-bold text-white hidden">
                  Bayba Financial
                </span>
              </a>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              Bayba Financial Services - Your trusted partner for fast, secure, and reliable money
              transfer services across The Gambia since 2011.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@mybayba.com"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={(e) => scrollToSection(e, `#${item.toLowerCase().replace(' ', '')}`)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="pb-1">West Field, Serrekunda</li>
              <li className="pb-2">The Gambia</li>
              <li className="pt-1">
                <a 
                  href="tel:+220XXXXXXX" 
                  className="hover:text-white transition-colors duration-200 block py-1"
                >
                  +220 XXX XXXX
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@mybayba.com" 
                  className="hover:text-white transition-colors duration-200 block py-1"
                >
                  info@mybayba.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="mb-2 text-sm sm:text-base">
            &copy; {currentYear} Bayba Financial Services. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm">
            Website designed by{' '}
            <a 
              href="https://nyakoi-services.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white font-semibold hover:underline transition-colors duration-200"
            >
              Nyakoi Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}