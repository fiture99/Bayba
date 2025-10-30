import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../images/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
              {/* Logo Image */}
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, '#home')}
                className="flex items-center"
              >
                <img
                  className="h-14 w-auto" // Adjust height as needed
                  src={logo} // Your logo path
                  alt="Company Logo"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Show text fallback if image fails
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                {/* Text fallback that shows only if image fails to load */}
                <span className="ml-2 text-xl font-bold text-navy-800 hidden">
                  Your Company
                </span>
              </a>
            </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bayba Financial Services - Your trusted partner for fast, secure, and reliable money
              transfer services across The Gambia since 2011.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@mybayba.com"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>West Field, Serrekunda</li>
              <li>The Gambia</li>
              <li className="pt-2">
                <a href="tel:+220XXXXXXX" className="hover:text-white transition-colors duration-200">
                  +220 XXX XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@mybayba.com" className="hover:text-white transition-colors duration-200">
                  info@mybayba.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="mb-2">
            &copy; {currentYear} Bayba Financial Services. All rights reserved.
          </p>
          <p className="text-sm">
            Website designed by{' '}
            
             <a href="https://fiture99.github.io/Nyakoi-Services/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
             <span className="text-white font-semibold">Nykoi Services</span>
             </a>

          </p>
        </div>
      </div>
    </footer>
  );
}
