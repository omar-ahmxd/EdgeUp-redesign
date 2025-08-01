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
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      } animate-slide-in-top`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <div className="w-full flex justify-between items-center pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8">
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

          <button
            className="lg:hidden text-gray-900 focus:outline-none transition-transform duration-300 hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : ''}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </span>
            </div>
          </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <Logo />
            <button
              onClick={toggleMenu}
              className="text-gray-900 transition-transform duration-300 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                item.isButton ? (
                  <Link
                    key={index}
                    to={item.path}
                    className="inline-flex items-center justify-center px-6 py-4 bg-[#10ac8b] text-white font-semibold rounded-lg hover:bg-[#0d9488] transition-all duration-300 w-full text-center text-lg min-h-[50px] animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block py-4 text-lg font-medium transition-colors duration-300 min-h-[50px] flex items-center animate-fade-in-left ${
                      location.pathname === item.path 
                        ? 'text-[#094d88]' 
                        : 'text-gray-700 hover:text-[#094d88]'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;