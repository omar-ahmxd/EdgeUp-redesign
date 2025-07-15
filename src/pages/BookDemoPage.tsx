import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, ExternalLink, CheckCircle, ArrowRight, Sparkles, Zap, Brain, Target } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';

type EnquirerRole = 'individual' | 'institution' | 'partner';

const BookDemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: 'I would like to schedule a demo of the EdgeUp platform for my institution.',
    role: 'institution' as EnquirerRole
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { siteSettings, addFormSubmission } = useCMS();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Demo - EdgeUp AI Learning Platform";
    setIsLoaded(true);
  }, []);

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
    
    if (!formData.name || !formData.email || !formData.institution || !formData.message) {
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
        message: 'I would like to schedule a demo of the EdgeUp platform for my institution.',
        role: 'institution'
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <main className="pt-16 overflow-hidden relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
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
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
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

      {/* Split Screen Layout */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
              {/* Left Side - Contact Information with Animations */}
              <div className="relative bg-gradient-to-br from-[#094d88] to-[#10ac8b] text-white p-12 rounded-l-3xl lg:rounded-r-none rounded-r-3xl lg:rounded-br-none">
                <div className="absolute inset-0 bg-black/10 rounded-l-3xl lg:rounded-r-none rounded-r-3xl lg:rounded-br-none"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Contact Information</h2>
                  
                  <div className="space-y-8">
                    {[
                      { icon: Mail, title: 'Email Us', content: 'info@edgeup.in', href: 'mailto:info@edgeup.in' },
                      { icon: Phone, title: 'Call Us', content: '044 4500 2700', href: 'tel:044 4500 2700' },
                      { icon: MapPin, title: 'Visit Us', content: 'No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032', href: null }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`group flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-white/90 hover:text-white transition-colors duration-300"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <address className="not-italic text-white/90">
                              {item.content}
                            </address>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Map */}
                  <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8290740215574!2d80.24673147573892!3d13.0603399902862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267376515b75f%3A0x4afd61c7c0de4f78!2sEdgeUp!5e0!3m2!1sen!2sin!4v1710850058953!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl hover:scale-105 transition-transform duration-500"
                    ></iframe>
                  </div>

                  {/* Floating Animation Elements */}
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Right Side - Progressive Form */}
              <div className="bg-white/10 backdrop-blur-md p-12 rounded-r-3xl lg:rounded-l-none rounded-l-3xl lg:rounded-bl-none border border-white/20">
                {submitSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-scale-in">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                      <p className="text-gray-600 mb-8 text-lg">
                        Your demo request has been received. We will get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="group relative overflow-hidden bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <span className="relative z-10">Send Another Request</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#10ac8b] to-[#094d88] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                      
                      {/* Progress Indicator */}
                      <div className="flex items-center space-x-4 mb-8">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${
                              currentStep >= step 
                                ? 'bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white shadow-lg' 
                                : 'bg-gray-200 text-gray-500'
                            }`}>
                              {step}
                            </div>
                            {step < 3 && (
                              <div className={`w-16 h-1 mx-2 rounded-full transition-all duration-500 ${
                                currentStep > step ? 'bg-gradient-to-r from-[#094d88] to-[#10ac8b]' : 'bg-gray-200'
                              }`}></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl animate-shake">
                        {error}
                      </div>
                    )}
                    
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in-up">
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
                        </div>
                        
                        <button
                          type="button"
                          onClick={nextStep}
                          className="group relative overflow-hidden w-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Next Step
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                          </span>
                        </button>
                      </div>
                    )}

                    {/* Step 2: Institution Details */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            className="group relative overflow-hidden flex-1 bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                          >
                            <span className="relative z-10 flex items-center justify-center">
                              Next Step
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                            </span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Message */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="floating-label-group">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            required
                            className="floating-input peer resize-none"
                            placeholder=" "
                          />
                          <label htmlFor="message" className="floating-label">
                            Message <span className="text-red-500">*</span>
                          </label>
                        </div>
                        
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
                          >
                            Previous
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative overflow-hidden flex-1 bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

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

export default BookDemoPage;