import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import IntersectionObserver from '../common/IntersectionObserver';
import GoogleMapsEmbed from '../common/GoogleMapsEmbed';
import { useCMS } from '../../context/CMSContext';

type EnquirerRole = 'individual' | 'institution' | 'partner';

type ContactSectionProps = {
  initialMessage?: string;
  initialRole?: EnquirerRole;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  initialMessage = '',
  initialRole = 'individual'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: initialMessage,
    role: initialRole as EnquirerRole
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const { addFormSubmission } = useCMS();

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      message: initialMessage,
      role: initialRole
    }));
  }, [initialMessage, initialRole]);

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
        message: initialMessage,
        role: initialRole
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <IntersectionObserver>
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="relative bg-gradient-to-br from-[#094d88] to-[#10ac8b] text-white p-12 rounded-l-3xl lg:rounded-r-none rounded-r-3xl lg:rounded-br-none overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-10 animate-fade-in-up">Contact Information</h2>

                <div className="space-y-8">
                  {[
                    { icon: Mail, title: 'Email Us', content: 'info@edgeup.in', href: 'mailto:info@edgeup.in' },
                    { icon: Phone, title: 'Call Us', content: '+91 95856 26626', href: 'tel:+919585626626' },
                    { icon: MapPin, title: 'Visit Us', content: 'No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032', href: null }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
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

                <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 group">
                  <div className="relative">
                    <GoogleMapsEmbed
                      width="100%"
                      height="300"
                      className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      location="EdgeUp, Chennai"
                      zoom={15}
                      showFallback={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/60 dark:bg-transparent backdrop-blur-md p-12 rounded-r-3xl lg:rounded-l-none rounded-l-3xl lg:rounded-bl-none border border-white/40 dark:border-slate-700/60 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23094d88' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                {submitSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-scale-in">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                      <p className="text-gray-600 mb-8 text-lg">Your message has been received. We will get back to you shortly.</p>
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
                      className="group relative overflow-hidden w-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-normal shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />}
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

      <style jsx>{`
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

        .dark .floating-input {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(15, 23, 42, 0.8);
          color: #e2e8f0;
        }

        .dark .floating-input:focus {
          border-color: #10ac8b;
          background: rgba(15, 23, 42, 0.9);
          box-shadow: 0 0 0 3px rgba(16, 172, 139, 0.15);
        }

        .dark .floating-label {
          color: #cbd5e1;
          background: rgba(15, 23, 42, 0.85);
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
    </IntersectionObserver>
  );
};

export default ContactSection;
