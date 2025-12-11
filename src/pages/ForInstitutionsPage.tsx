import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, TrendingUp, Award, Zap, Shield, Layers } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { useCMS } from '../context/CMSContext';

const ForInstitutionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp for Institutions - AI-Powered Learning Platform";
  }, []);

  const { getContentBlocks } = useCMS();
  const institutionsPageBlocks = getContentBlocks('institutions');

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Outcomes",
      description: "Our partner institutions report up to 32% improvement in student performance and higher success rates in competitive exams.",
      stat: { value: 32, suffix: '%', label: 'Performance Improvement' }
    },
    {
      icon: Users,
      title: "Faculty Empowerment",
      description: "Give your teachers powerful tools and insights to support each student's unique learning journey effectively.",
      stat: { value: 95, suffix: '%', label: 'Teacher Satisfaction' }
    },
    {
      icon: Award,
      title: "Competitive Edge",
      description: "Stand out in the market with cutting-edge AI technology that delivers personalized learning at scale.",
      stat: { value: 150, suffix: '+', label: 'Partner Institutions' }
    }
  ];

  const integrationFeatures = [
    {
      title: 'LMS Integration',
      description: 'Compatible with all major learning management systems including Moodle, Canvas, and custom solutions.',
      icon: Layers,
      features: ['Single Sign-On', 'Grade Passback', 'Content Sync', 'Real-time Data']
    },
    {
      title: 'Flexible API',
      description: 'Comprehensive REST APIs for custom integrations and third-party applications.',
      icon: Zap,
      features: ['RESTful APIs', 'Webhooks', 'Custom Integration', 'Developer Support']
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with data protection regulations.',
      icon: Shield,
      features: ['SOC 2 Compliant', 'GDPR Ready', 'Data Encryption', '24/7 Monitoring']
    }
  ];


  const implementationSteps = [
    {
      step: "1",
      title: "Initial Setup",
      description: "System integration and configuration tailored to your needs"
    },
    {
      step: "2",
      title: "Data Migration",
      description: "Secure transfer of existing content and student data"
    },
    {
      step: "3",
      title: "Staff Training",
      description: "Comprehensive training sessions for faculty and administrators"
    },
    {
      step: "4",
      title: "Go Live",
      description: "Launch with ongoing support and monitoring"
    }
  ];

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-blue-50 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                  For Educational Institutions
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up delay-200">
                  Transform Your Institution with AI-Powered Learning
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-300">
                  Empower your faculty and students with personalized learning experiences powered by advanced AI technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Link
                  to="/contact?demo=true"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#10ac8b] text-white font-semibold rounded-lg hover:bg-[#0d9488] transition-all duration-300 hover:scale-105"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#094d88] text-[#094d88] font-semibold rounded-lg hover:bg-[#094d88] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-6 animate-fade-in-right delay-400">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integration with Your Systems</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EdgeUp works with your existing infrastructure, making implementation fast and hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>


      {/* Implementation Process - FIXED HORIZONTAL LINES */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with EdgeUp in just a few weeks with our proven implementation methodology.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* COMPLETELY FIXED HORIZONTAL TIMELINE */}
              <div className="relative">
                {/* Continuous horizontal line connecting all circles */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88]" style={{ 
                  left: 'calc(12.5% + 2rem)', 
                  right: 'calc(12.5% + 2rem)' 
                }}></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {implementationSteps.map((step, index) => (
                    <div key={index} className="text-center animate-fade-in-up relative" style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Step Circle */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto transition-transform duration-300 hover:scale-110 relative z-10 border-4 border-white shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding bg-[#10ac8b] text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in-up">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Join the growing network of forward-thinking institutions using EdgeUp to deliver personalized learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/contact?demo=true"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#094d88] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Book a Demo Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#10ac8b] transition-all duration-300 hover:scale-105"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>
    </main>
  );
};

export default ForInstitutionsPage;