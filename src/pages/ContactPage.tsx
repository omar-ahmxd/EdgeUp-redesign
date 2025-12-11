import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact EdgeUp - Get in Touch";
    setIsLoaded(true);
    
  }, [isDemo]);

  return (
    <main className="pt-16 overflow-hidden relative min-h-screen page-surface">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-500"></div>
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`inline-flex items-center px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full text-slate-900 dark:text-white text-sm font-semibold mb-8 border border-white/60 dark:border-slate-700 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Get in Touch
              <div className="ml-2 w-2 h-2 bg-[#10ac8b] rounded-full animate-pulse"></div>
            </div>

            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Get in Touch
            </h1>
            
            <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Have questions or want to learn more about EdgeUp? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section - Enhanced */}
      <ContactSection
        initialMessage={
          isDemo ? 'I would like to schedule a demo of the EdgeUp platform for my institution.' : ''
        }
        initialRole={isDemo ? 'institution' : 'individual'}
      />

      {/* FAQ Section - Smooth Accordion Animations (currently hidden) */}
      {/* FAQ intentionally hidden for now */}

      <style jsx>{`
        .particle-float {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          border-radius: 50%;
          animation: float 25s ease-in-out infinite;
          opacity: 0.4;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
          50% { transform: translateY(-60px) translateX(-20px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(30px) rotate(270deg); }
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

      `}</style>
    </main>
  );
};

export default ContactPage;
