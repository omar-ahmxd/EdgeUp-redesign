import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { siteSettings } = useCMS();

  const navItems = [
    { title: 'Product', path: '/product' },
    { title: 'For Institutions', path: '/for-institutions' },
    { title: 'About Us', path: '/about' },
    { title: 'News', path: '/news' },
    { title: 'Contact', path: '/contact', isButton: false },
    { title: 'Book a Demo', path: '/book-demo', isButton: true }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add/remove menu-open class to body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      } animate-slide-in-top`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '64px' }}
    >
      <div className="w-full h-full flex justify-between items-center pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8">
          <Link to="/" className="flex items-center group">
            <div className="animate-pulse-slow">
              <Logo />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Link
                  key={index}
                  to={item.path}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#10ac8b] text-white font-semibold rounded-lg hover:bg-[#0d9488] transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-gray-700 hover:text-[#094d88] transition-colors duration-300 font-medium animate-fade-in-up ${
                    location.pathname === item.path ? 'text-[#094d88]' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            className={`lg:hidden relative p-2 focus:outline-none ${isOpen ? 'z-[10000]' : 'z-50'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
      </div>

      {/* Mobile Menu Overlay - Full Screen */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[9999] bg-white animate-slide-in-right"
        >
          <div className="flex flex-col h-full">
          {/* Menu Header with Close Button */}
          <div className="flex justify-between items-center px-6 py-6">
            <Link to="/" onClick={toggleMenu}>
              <Logo />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-8 w-8 text-gray-800" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center px-8">
            <div className="space-y-8">
              <Link
                to="/product"
                className="block text-2xl font-medium text-gray-800 hover:text-[#094d88] transition-colors duration-200"
                onClick={toggleMenu}
              >
                Product
              </Link>
              <Link
                to="/for-institutions"
                className="block text-2xl font-medium text-gray-800 hover:text-[#094d88] transition-colors duration-200"
                onClick={toggleMenu}
              >
                For Institutions
              </Link>
              <Link
                to="/about"
                className="block text-2xl font-medium text-gray-800 hover:text-[#094d88] transition-colors duration-200"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/news"
                className="block text-2xl font-medium text-gray-800 hover:text-[#094d88] transition-colors duration-200"
                onClick={toggleMenu}
              >
                News
              </Link>
              <Link
                to="/contact"
                className="block text-2xl font-medium text-gray-800 hover:text-[#094d88] transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Book a Demo Button */}
          <div className="px-8 pb-12">
            <Link
              to="/book-demo"
              onClick={toggleMenu}
              className="block w-full"
            >
              <button className="w-full py-4 bg-[#10ac8b] hover:bg-[#0d9488] text-white font-semibold text-lg rounded-lg transition-colors duration-200">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
        </div>
      )}

    </header>
  );
};

export default Header;