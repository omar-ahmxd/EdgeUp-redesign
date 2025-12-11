import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Sparkles } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import ContactSection from '../components/sections/ContactSection';
const calendlyUrl = 'https://calendly.com/edgeup/demo_booking';

const BookDemoPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Demo - EdgeUp AI Learning Platform";
    setIsLoaded(true);
  }, []);

  return (
    <main className="pt-16 overflow-hidden relative min-h-screen page-surface">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-500"></div>
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

        {/* Floating Geometric Shapes */}
        <div className="geometric-shapes">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="geometric-shape"
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
              <Calendar className="w-4 h-4 mr-2 animate-pulse" />
              Schedule a Demo
              <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Book a Demo
            </h1>
            
            <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Experience the power of AI-driven personalization for your educational institution.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Link (no inline embed) */}
      <IntersectionObserver>
        <section className="relative z-10 pb-6">
          <div className="container-custom">
            <div className="bg-white/75 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl border border-slate-100/80 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/30 p-8 lg:p-12 space-y-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#094d88]/10 text-[#094d88] font-semibold text-sm">
                Live scheduling
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Book a live demo with our team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Pick a time that works for you and we&apos;ll walk you through EdgeUp&apos;s AI-powered learning platform, tailored to your institution.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                {[
                  '30-minute walkthrough of the platform and workflows',
                  'Customized to your institution’s goals and cohorts',
                  'Live Q&A with product and implementation specialists'
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#10ac8b] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Contact content from Contact page */}
      <ContactSection
        initialMessage="I would like to schedule a demo of the EdgeUp platform for my institution."
        initialRole="institution"
      />

      <style jsx>{`
        .geometric-shape {
          position: absolute;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          opacity: 0.1;
          animation: geometricFloat 20s ease-in-out infinite;
        }

        .geometric-shape:nth-child(odd) {
          border-radius: 50%;
        }

        .geometric-shape:nth-child(even) {
          transform: rotate(45deg);
        }

        @keyframes geometricFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(90deg); }
          50% { transform: translateY(-60px) rotate(180deg); }
          75% { transform: translateY(-30px) rotate(270deg); }
        }
      `}</style>
    </main>
  );
};

export default BookDemoPage;
