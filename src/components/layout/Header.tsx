import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Mobile menu removed - imports no longer needed
import { useCMS } from '../../context/CMSContext';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  // Mobile menu removed - state no longer needed
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

  // Mobile menu removed - toggle function no longer needed

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu removed - body class effects no longer needed

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      } animate-slide-in-top`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="animate-pulse-slow">
              <Logo />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Mobile menu button removed */}
        </div>
      </div>

      {/* Mobile Menu removed */}
    </header>
  );
};

export default Header;