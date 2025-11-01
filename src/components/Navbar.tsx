import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#management', label: 'Management' },
    { href: '#partners', label: 'Partners' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, '#home')}
                className="flex items-center"
              >
                <img
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-auto"
                  src={logo}
                  alt="Company Logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                {/* Text fallback */}
                <span className="ml-2 text-lg sm:text-xl font-bold text-navy-800 hidden">
                  Your Company
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-navy-800 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-800 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-navy-800 hover:bg-gray-50 rounded-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}