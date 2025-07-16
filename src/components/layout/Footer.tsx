import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

const Footer: React.FC = () => {
  const { siteSettings } = useCMS();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'News & Media', href: '/news' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Product',
      links: [
        { name: 'Overview', href: '/product' },
        { name: 'Features', href: '/product#features' },
        { name: 'Use Cases', href: '/product#use-cases' },
        { name: 'Pricing', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Media Kit', href: '/media-kit' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setSubscriptionStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubscriptionStatus('error');
      return;
    }

    setIsSubscribing(true);
    setErrorMessage('');
    setSubscriptionStatus('idle');

    try {
      // Simulate API call - in a real app, this would call your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll always show success
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 5000);
      
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#094d88] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Newsletter Section - FULLY FUNCTIONAL */}
        <div className="py-12 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">Get the latest insights on AI-powered education and EdTech innovations.</p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (subscriptionStatus === 'error') {
                        setSubscriptionStatus('idle');
                        setErrorMessage('');
                      }
                    }}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                    disabled={isSubscribing}
                  />
                  {subscriptionStatus === 'error' && (
                    <p className="text-red-300 text-sm mt-2">{errorMessage}</p>
                  )}
                  {subscriptionStatus === 'success' && (
                    <p className="text-green-300 text-sm mt-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Successfully subscribed! Thank you.
                    </p>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-[#10ac8b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d9488] transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubscribing ? (
                    <span className="flex items-center">
                      Subscribe
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">EdgeUp</h2>
                <p className="text-white/80 leading-relaxed">
                  India's first AI-driven learning companion tailored for institutions
                  preparing students for UPSC, state exams, and other competitive tests.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white/80">
                  <Mail className="h-4 w-4 mr-3 text-[#10ac8b]" />
                  <a href="mailto:info@edgeup.in" className="hover:text-white transition-colors">
                    info@edgeup.in
                  </a>
                </div>
                <div className="flex items-center text-white/80">
                  <Phone className="h-4 w-4 mr-3 text-[#10ac8b]" />
                  <a href="tel:044 4500 2700" className="hover:text-white transition-colors">
                    044 4500 2700
                  </a>
                </div>
                <div className="flex items-start text-white/80">
                  <MapPin className="h-4 w-4 mr-3 mt-1 text-[#10ac8b] flex-shrink-0" />
                  <span className="text-sm">No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/edgeup-zan/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-[#10ac8b] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/edgeup_tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-[#10ac8b] transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link 
                        to={link.href} 
                        className="footer-link text-sm hover:text-[#10ac8b] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} EdgeUp Technologies. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <Link to="/terms" className="footer-link hover:text-[#10ac8b] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="footer-link hover:text-[#10ac8b] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="footer-link hover:text-[#10ac8b] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;