import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import PillNav, { PillNavItem } from './PillNav';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { siteSettings } = useCMS();

  const navItems: PillNavItem[] = [
    { label: 'Features', href: '/features' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about-team' },
    { label: 'Book a Demo', href: '/book-demo' }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = siteSettings?.logoUrl || '/edgeup-logo.png';
  const logoAlt = siteSettings?.siteName || 'EdgeUp';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg'
          : 'bg-white/50 dark:bg-slate-900/60 backdrop-blur-md'
      }`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Home" className="inline-flex">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center gap-3">
          <PillNav
            logo={logoSrc}
            logoAlt={logoAlt}
            logoHref="/"
            showLogo={false}
            frameless
            containerClassName="align-right"
            items={navItems}
            activeHref={location.pathname}
            className=""
            ease="power2.out"
            baseColor="#0b1f3a"
            accentColor="#10ac8b"
            pillColor="#ffffff"
            hoveredPillTextColor="#0b1f3a"
            pillTextColor="#0b1f3a"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
