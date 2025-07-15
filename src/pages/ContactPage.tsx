import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Sparkles, Zap, Brain } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';

type EnquirerRole = 'individual' | 'institution' | 'partner';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
    role: 'individual' as EnquirerRole
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { siteSettings, addFormSubmission } = useCMS();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact EdgeUp - Get in Touch";
    setIsLoaded(true);
    
    if (isDemo) {
      setFormData(prev => ({
        ...prev,
        message: "I would like to schedule a demo of the EdgeUp platform for my institution.",
        role: 'institution'
      }));
    }
  }, [isDemo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    if (!formData.name || !formData.email || !formData.institution || !formData.message || !formData.role) {
      setError('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      addFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution,
        message: formData.message,
        role: formData.role
      });

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: '',
        role: 'individual'
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How quickly can we implement EdgeUp?",
      answer: "Most institutions can be fully onboarded within 2-4 weeks, depending on the scale of implementation and existing systems integration."
    },
    {
      question: "Does EdgeUp integrate with our existing LMS?",
      answer: "Yes, EdgeUp is designed to integrate seamlessly with most popular LMS platforms, including Moodle, Canvas, and custom solutions."
    },
    {
      question: "How is EdgeUp priced?",
      answer: "We offer flexible pricing models based on institution size and feature requirements. Contact us for a custom quote tailored to your needs."
    },
    {
      question: "Is training provided for our staff?",
      answer: "Absolutely. We provide comprehensive training for faculty and staff as part of our implementation process, ensuring everyone can maximize the platform's potential."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main className="pt-16 overflow-hidden relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
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
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
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
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
              {/* Contact Information - Enhanced Blue Sidebar */}
              <div className="relative bg-gradient-to-br from-[#094d88] to-[#10ac8b] text-white p-12 rounded-l-3xl lg:rounded-r-none rounded-r-3xl lg:rounded-br-none overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Floating Animation Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-10 animate-fade-in-up">Contact Information</h2>
                  
                  <div className="space-y-8">
                    {[
                      { icon: Mail, title: 'Email Us', content: 'info@edgeup.in', href: 'mailto:info@edgeup.in' },
                      { icon: Phone, title: 'Call Us', content: '044 4500 2700', href: 'tel:044 4500 2700' },
                      { icon: MapPin, title: 'Visit Us', content: 'No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032', href: null }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`group flex items-start space-x-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-white/90 hover:text-white transition-colors duration-300 text-base"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <address className="not-italic text-white/90 text-base leading-relaxed">
                              {item.content}
                            </address>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Interactive Map */}
                  <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 group">
                    <div className="relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8290740215574!2d80.24673147573892!3d13.0603399902862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267376515b75f%3A0x4afd61c7c0de4f78!2sEdgeUp!5e0!3m2!1sen!2sin!4v1710850058953!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      ></iframe>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Glassmorphism Enhanced */}
              <div className="bg-white/10 backdrop-blur-md p-12 rounded-r-3xl lg:rounded-l-none rounded-l-3xl lg:rounded-bl-none border border-white/20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23094d88' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                <div className="relative z-10">
                  {submitSuccess ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-scale-in">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                        <p className="text-gray-600 mb-8 text-lg">
                          Your message has been received. We will get back to you shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="group relative overflow-hidden bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                      >
                        <span className="relative z-10">Send Another Message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#10ac8b] to-[#094d88] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">Send Us a Message</h2>
                      </div>
                      
                      {error && (
                        <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-700 p-4 rounded-xl animate-shake">
                          {error}
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="floating-label-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="floating-input peer"
                            placeholder=" "
                          />
                          <label htmlFor="name" className="floating-label">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                        </div>
                        
                        <div className="floating-label-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="floating-input peer"
                            placeholder=" "
                          />
                          <label htmlFor="email" className="floating-label">
                            Email <span className="text-red-500">*</span>
                          </label>
                        </div>
                        
                        <div className="floating-label-group">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="floating-input peer"
                            placeholder=" "
                          />
                          <label htmlFor="phone" className="floating-label">
                            Phone Number
                          </label>
                        </div>
                        
                        <div className="floating-label-group">
                          <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            required
                            className="floating-input peer"
                            placeholder=" "
                          />
                          <label htmlFor="institution" className="floating-label">
                            Institution <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="floating-label-group">
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          className="floating-input peer"
                        >
                          <option value="individual">An Individual Learner</option>
                          <option value="institution">An Institution</option>
                          <option value="partner">Looking to Partner with EdgeUp</option>
                        </select>
                        <label htmlFor="role" className="floating-label">
                          I am <span className="text-red-500">*</span>
                        </label>
                      </div>
                      
                      <div className="floating-label-group">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                          className="floating-input peer resize-none"
                          placeholder=" "
                        />
                        <label htmlFor="message" className="floating-label">
                          Message <span className="text-red-500">*</span>
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative overflow-hidden w-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#10ac8b] to-[#094d88] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* FAQ Section - Smooth Accordion Animations */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about EdgeUp and our implementation process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-8 font-semibold text-gray-900 hover:bg-white/10 transition-all duration-300 flex items-center justify-between group-hover:text-[#094d88]"
                    >
                      <span className="text-lg pr-4">{faq.question}</span>
                      <div className={`transition-transform duration-500 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        {expandedFaq === index ? (
                          <ChevronUp className="h-6 w-6 text-[#10ac8b]" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-[#10ac8b]" />
                        )}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section - Enhanced */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="relative bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Join hundreds of institutions already transforming education with EdgeUp.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <a
                    href="/for-institutions"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      For Institutions
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </a>
                  <a
                    href="/product"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    Explore Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

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

        .floating-label-group {
          position: relative;
        }

        .floating-input {
          width: 100%;
          padding: 1rem 1rem 1rem 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: #1f2937;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .floating-input:focus {
          border-color: #10ac8b;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 0 3px rgba(16, 172, 139, 0.1);
          transform: translateY(-2px);
        }

        .floating-input:focus + .floating-label,
        .floating-input:not(:placeholder-shown) + .floating-label {
          transform: translateY(-2.5rem) scale(0.85);
          color: #10ac8b;
          font-weight: 600;
        }

        .floating-label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          color: #6b7280;
          font-size: 1rem;
          transition: all 0.3s ease;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.8);
          padding: 0 0.5rem;
          border-radius: 0.25rem;
          backdrop-filter: blur(10px);
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </main>
  );
};

export default ContactPage;