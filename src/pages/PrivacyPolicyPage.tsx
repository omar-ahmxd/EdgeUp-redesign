import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Sparkles } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const PrivacyPolicyPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - EdgeUp";
    setIsLoaded(true);
  }, []);

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FileText,
      content: `
        <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
        
        <h4>Personal Information</h4>
        <ul>
          <li>Name, email address, and contact information</li>
          <li>Educational institution and role</li>
          <li>Learning preferences and assessment data</li>
          <li>Usage patterns and performance metrics</li>
        </ul>

        <h4>Automatically Collected Information</h4>
        <ul>
          <li>Device information and IP address</li>
          <li>Browser type and operating system</li>
          <li>Pages visited and time spent on our platform</li>
          <li>Interaction data with our AI systems</li>
        </ul>
      `
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Users,
      content: `
        <p>We use the information we collect to provide, maintain, and improve our services.</p>
        
        <h4>Primary Uses</h4>
        <ul>
          <li>Provide personalized learning experiences through our PASCO framework</li>
          <li>Generate adaptive assessments and learning recommendations</li>
          <li>Analyze learning patterns to improve our AI algorithms</li>
          <li>Communicate with you about your account and our services</li>
        </ul>

        <h4>Educational Analytics</h4>
        <ul>
          <li>Create psychometric profiles for personalized learning</li>
          <li>Track progress and identify areas for improvement</li>
          <li>Generate insights for educators and institutions</li>
          <li>Develop new features and improve existing ones</li>
        </ul>
      `
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Eye,
      content: `
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
        
        <h4>Authorized Sharing</h4>
        <ul>
          <li>With your educational institution (teachers, administrators)</li>
          <li>With service providers who assist in our operations</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or acquisition</li>
        </ul>

        <h4>Educational Context</h4>
        <ul>
          <li>Learning progress and assessment results with authorized educators</li>
          <li>Aggregated, anonymized data for research purposes</li>
          <li>Performance analytics with institutional administrators</li>
        </ul>
      `
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h4>Security Measures</h4>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security audits and penetration testing</li>
          <li>Access controls and authentication systems</li>
          <li>Employee training on data protection practices</li>
        </ul>

        <h4>Data Retention</h4>
        <ul>
          <li>Personal data retained only as long as necessary</li>
          <li>Learning data preserved for educational continuity</li>
          <li>Anonymized data may be retained for research</li>
          <li>Account deletion available upon request</li>
        </ul>
      `
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Shield,
      content: `
        <p>You have certain rights regarding your personal information, and we provide tools and controls to help you exercise these rights.</p>
        
        <h4>Access and Control</h4>
        <ul>
          <li>Access and download your personal data</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Delete your account and associated data</li>
          <li>Opt out of certain data processing activities</li>
        </ul>

        <h4>Communication Preferences</h4>
        <ul>
          <li>Unsubscribe from marketing communications</li>
          <li>Control notification settings</li>
          <li>Manage data sharing preferences</li>
          <li>Request data portability</li>
        </ul>
      `
    }
  ];

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
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

        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <Link 
                to="/" 
                className="inline-flex items-center text-[#094d88] hover:text-[#10ac8b] font-medium transition-colors duration-300 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>

            <div className="text-center mb-16">
              <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Privacy & Data Protection
                <div className="ml-2 w-2 h-2 bg-[#10ac8b] rounded-full animate-pulse"></div>
              </div>
              
              <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                Privacy Policy
              </h1>
              
              <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-600 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>

              <div className={`mt-8 text-sm text-gray-500 transition-all duration-1000 delay-800 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                Last updated: March 15, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    At EdgeUp, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                    AI-powered learning platform and related services.
                  </p>
                  
                  <p>
                    We understand that trust is fundamental to the educational process, and we take our responsibility to protect 
                    student and educator data seriously. This policy applies to all users of our platform, including students, 
                    educators, and institutional administrators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Policy Sections */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <div 
                  key={section.id}
                  className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-gray-700 prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Contact Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About This Policy?</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <h4 className="font-semibold text-gray-900 mb-3">Privacy Officer</h4>
                    <p className="text-gray-600 mb-4">For privacy-related inquiries and data protection matters</p>
                    <a 
                      href="mailto:privacy@edgeup.in" 
                      className="text-[#094d88] hover:text-[#10ac8b] font-medium transition-colors"
                    >
                      privacy@edgeup.in
                    </a>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <h4 className="font-semibold text-gray-900 mb-3">General Contact</h4>
                    <p className="text-gray-600 mb-4">For general questions and support</p>
                    <a 
                      href="mailto:info@edgeup.in" 
                      className="text-[#094d88] hover:text-[#10ac8b] font-medium transition-colors"
                    >
                      info@edgeup.in
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-500">
                    This Privacy Policy may be updated from time to time. We will notify you of any material changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      <style jsx>{`
        .particle-float {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
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

export default PrivacyPolicyPage;