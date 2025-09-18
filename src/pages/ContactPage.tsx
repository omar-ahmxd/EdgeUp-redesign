import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Sparkles, Zap, Brain } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';
import GoogleMapsEmbed from '../components/common/GoogleMapsEmbed';

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

  const faqCategories = [
    {
      title: "General",
      icon: "📚",
      faqs: [
        {
          question: "What is EdgeUp?",
          answer: "EdgeUp is an AI-powered learning platform designed for institutions that train students for competitive exams, school education, and university programs. It personalizes learning journeys, tracks progress through advanced analytics, and provides tools for teachers to manage and improve student outcomes."
        },
        {
          question: "Who can use EdgeUp?",
          answer: "EdgeUp is built for coaching academies, schools, colleges, and universities. Students access EdgeUp through their institution, where it acts as a smart learning companion alongside regular classes."
        },
        {
          question: "Does EdgeUp replace coaching or teachers?",
          answer: "No. EdgeUp does not replace teachers. Instead, it complements classroom learning by providing personalized practice, instant feedback, and AI-driven insights. Teachers focus on mentoring and emotional support, while EdgeUp ensures every student's academic progress is tracked and improved."
        },
        {
          question: "Is EdgeUp only for India or also for overseas institutions?",
          answer: "At present, EdgeUp is focused on Indian institutions and exams. However, the platform is designed to scale globally, and in the near future, it will support overseas institutions and international programs."
        },
        {
          question: "Which exams and courses are covered on EdgeUp?",
          answer: "EdgeUp currently supports: UPSC, State PSCs (like TNPSC, KPSC, MPSC, etc.), SSC, RRB, Banking & others; Schools: Class 8 to Class 12 (all major subjects); Universities & Colleges: General courses with scope to expand into specialized programs."
        }
      ]
    },
    {
      title: "For Students",
      icon: "🎓",
      faqs: [
        {
          question: "How does EdgeUp personalize my learning?",
          answer: "EdgeUp uses PASCO (Performance & Skill Companion) and AI-driven tools to track your strengths, weaknesses, and learning style. Based on this, it creates a personalized study path from topic-level recommendations to practice tests so that you learn at your own pace and improve steadily."
        },
        {
          question: "Is the AI accurate and reliable for exam preparation?",
          answer: "Yes. EdgeUp's AI is trained specifically for competitive exams, school, and college syllabi. Our proprietary Small Language Model (SLM) is built with a focus on accuracy, relevance, and exam-oriented results, ensuring that the guidance you receive is aligned with actual exam patterns."
        },
        {
          question: "Can I use EdgeUp in my regional language?",
          answer: "Yes. EdgeUp supports multilingual learning, so you can study in English, Hindi, Tamil, and other regional languages. This helps students from diverse backgrounds access high-quality learning in a language they are most comfortable with."
        },
        {
          question: "Does EdgeUp work offline or only online?",
          answer: "Currently, EdgeUp is cloud-based and works online to provide real-time analytics and AI-driven support. However, selected features like downloaded materials and past question papers can be accessed offline."
        },
        {
          question: "How is my data protected?",
          answer: "We take data privacy very seriously. All student information is securely encrypted, and EdgeUp follows strict compliance with data protection standards. Your personal details and academic performance are only accessible to you and your institution."
        },
        {
          question: "Will EdgeUp help me score better in exams or just provide practice?",
          answer: "EdgeUp goes beyond practice, it provides adaptive guidance, detailed analytics, and smart assessments that show you exactly where to improve. With consistent usage, EdgeUp helps boost both knowledge retention and exam performance."
        },
        {
          question: "Can I use EdgeUp individually (B2C) or only through my institute?",
          answer: "Right now, EdgeUp is available only through partner institutions (B2B model). Students access the platform via their coaching institute, school, or college. In the future, EdgeUp will also be available directly to individual learners (B2C)."
        }
      ]
    },
    {
      title: "For Institutions",
      icon: "🏫",
      faqs: [
        {
          question: "How does EdgeUp support coaching academies, schools, and universities?",
          answer: "EdgeUp provides institutions with AI-powered tools to improve student learning outcomes, track performance, and manage academic operations efficiently. It helps teachers save time, gives administrators real-time insights, and ensures students get personalized learning support."
        },
        {
          question: "Can EdgeUp be white-labeled with our institution's brand?",
          answer: "Yes. EdgeUp offers white-label solutions so that institutions can run the platform under their own brand name. This means students see your institution's logo, colors, and identity while still benefiting from EdgeUp's technology."
        },
        {
          question: "Can we bulk onboard students and track them easily?",
          answer: "Absolutely. Institutions can bulk-upload student data, assign them to specific courses, and track their progress through role-based dashboards for admins, faculty, and students."
        },
        {
          question: "What analytics and dashboards are available for faculty?",
          answer: "Faculty get access to real-time dashboards showing: Student attendance and engagement, Topic-wise performance reports, Test results and progress trends, and Comparative analytics across batches. This helps teachers identify weak areas quickly and provide targeted support."
        },
        {
          question: "Will EdgeUp provide training for our teachers and staff?",
          answer: "Yes. EdgeUp provides onboarding sessions, training modules, and ongoing support for faculty and admin staff. Our goal is to make the platform simple and effective for everyone in your institution."
        },
        {
          question: "Can EdgeUp integrate with our existing LMS or ERP?",
          answer: "Yes. EdgeUp can integrate with most popular LMS and ERP systems, making it easy to adopt without disrupting your existing workflows."
        },
        {
          question: "Does EdgeUp provide its own LMS and basic ERP tools?",
          answer: "Yes. EdgeUp also includes a built-in LMS for course management and a basic ERP for handling academic operations such as student records, scheduling, and reports."
        }
      ]
    },
    {
      title: "Technology & Features",
      icon: "🚀",
      faqs: [
        {
          question: "What is the difference between EdgeUp's Small Language Model (SLM) and regular Large Language Models (LLMs)?",
          answer: "EdgeUp's SLM (Small Language Model) is purpose-built for education. Unlike generic LLMs, our SLM is: 75x more cost-efficient while maintaining the same learning quality, Trained specifically on competitive exams, school, and college content, Faster and lighter, making it easier for institutions to scale without heavy infrastructure costs. This ensures students and teachers get accurate, exam-relevant, and affordable AI support."
        },
        {
          question: "How does EdgeUp ensure low cost without compromising quality?",
          answer: "By using our proprietary SLM and intelligent system design, EdgeUp reduces computational cost while maintaining accuracy, contextual relevance, and adaptive guidance. Institutions benefit from enterprise-grade AI at a fraction of the cost of traditional systems."
        },
        {
          question: "What unique features does EdgeUp provide?",
          answer: "EdgeUp brings together multiple innovations in one platform: PASCO – Intelligent student profiling and skill optimisation, e-Ustad AI Mentor – 24/7 personalized learning guide, OCR & Document Intelligence – Converts handwritten/printed notes into searchable content, Smart Assessments & Real-Time Analytics – Deeper insights into student performance, Multilingual Learning Support – Regional and national languages for wider accessibility, Role-Based Dashboards – Separate views for admin, faculty, and students."
        },
        {
          question: "What is PASCO and how does it help students?",
          answer: "PASCO stands for Performance, Aptitude, Skills & Character Optimisation. It is EdgeUp's intelligent student profiling and progress companion. Every student begins with a 3-part assessment: VARK Test (identifies learning style), PASCO Assessment (measures personality traits, aptitude levels, skills, and character strengths), and Subject Matter Assessment. With these combined, EdgeUp builds a 360° learner profile, enabling tailored study plans, early identification of strengths and weak areas, targeted practice, and actionable insights for teachers and institutions."
        },
        {
          question: "What is e-Ustad and how does it work?",
          answer: "e-Ustad is EdgeUp's AI-powered mentor—a personal learning guide available 24/7. It answers doubts instantly with step-by-step explanations, suggests practice questions based on weak areas, provides motivation and study tips during preparation, and works in multiple languages so learners feel comfortable. Unlike generic chatbots, e-Ustad is trained only on academic and exam content, making it a reliable and exam-focused mentor."
        },
        {
          question: "How does EdgeUp's OCR & Document Intelligence help?",
          answer: "EdgeUp's OCR (Optical Character Recognition) technology converts handwritten notes, printed books, and question papers into searchable, digital content. Institutions can digitize resources quickly, teachers can create updated material effortlessly, and students get easy access to relevant resources."
        }
      ]
    },
    {
      title: "Pricing & Support",
      icon: "💰",
      faqs: [
        {
          question: "How is EdgeUp priced for institutions?",
          answer: "EdgeUp follows a per student, per course pricing model. The institution subscribes to EdgeUp on behalf of its students, and fees are billed quarterly on a prepaid basis. Pricing may vary depending on the course type (competitive exams, schools, or colleges)."
        },
        {
          question: "Do students pay directly or through institutions?",
          answer: "Currently, EdgeUp is available only in the B2B model. This means students access EdgeUp through their school, college, or coaching institute. The institution collects the student fees, and EdgeUp is paid through the institution. In the future, EdgeUp will also be available as a direct B2C offering for individual learners."
        },
        {
          question: "What kind of support will we receive after onboarding?",
          answer: "Institutions receive end-to-end support including: Dedicated account manager for smooth implementation, Teacher training & onboarding sessions, Office-hours technical support (phone, email, chat) for issue resolution, and Access to our knowledge base and help resources. Our goal is to make sure students, teachers, and administrators get maximum value from EdgeUp."
        },
        {
          question: "Is EdgeUp available for individual purchase (B2C)?",
          answer: "Not yet. At present, EdgeUp is available only through partner institutions. However, we are working towards launching a B2C version that will allow students to subscribe directly in the future."
        }
      ]
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
                              Send Message
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

            <div className="max-w-5xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* FAQ Items in this category */}
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = faqCategories
                        .slice(0, categoryIndex)
                        .reduce((acc, cat) => acc + cat.faqs.length, 0) + faqIndex;

                      return (
                        <div
                          key={globalIndex}
                          className={`group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up`}
                          style={{ animationDelay: `${Math.min(globalIndex * 30, 1500)}ms` }}
                        >
                          <button
                            onClick={() => toggleFaq(globalIndex)}
                            className="w-full text-left p-6 font-semibold text-gray-900 hover:bg-white/10 transition-all duration-300 flex items-center justify-between group-hover:text-[#094d88]"
                          >
                            <span className="text-base md:text-lg pr-4">{faq.question}</span>
                            <div className={`transition-transform duration-500 flex-shrink-0 ${expandedFaq === globalIndex ? 'rotate-180' : ''}`}>
                              {expandedFaq === globalIndex ? (
                                <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-[#10ac8b]" />
                              ) : (
                                <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-gray-500 group-hover:text-[#10ac8b]" />
                              )}
                            </div>
                          </button>
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            expandedFaq === globalIndex ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
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