import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import AnimatedCounter from '../components/common/AnimatedCounter';

const CaseStudiesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp Case Studies - Success Stories";
    setIsLoaded(true);
  }, []);

  const caseStudies = [
    {
      id: '1',
      title: 'Delhi IAS Academy: 28% Improvement in UPSC Success Rate',
      institution: 'Delhi IAS Academy',
      location: 'New Delhi, India',
      students: 500,
      improvement: 28,
      timeframe: '12 months',
      category: 'UPSC Preparation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      challenge: 'Delhi IAS Academy was struggling with inconsistent student performance and high dropout rates. Traditional one-size-fits-all teaching methods weren\'t addressing individual student needs.',
      solution: 'Implementation of EdgeUp\'s PASCO framework with personalized learning paths, adaptive assessments, and real-time performance tracking.',
      results: [
        '28% increase in UPSC selection rate',
        '40% reduction in student dropout rate',
        '60% improvement in mock test scores',
        '85% student satisfaction rate'
      ],
      testimonial: {
        quote: "EdgeUp has transformed how we prepare students for UPSC. The personalized insights give our teachers powerful tools to support each student's journey.",
        author: "Rajiv Sharma",
        position: "Director, Delhi IAS Academy"
      },
      featured: true
    },
    {
      id: '2',
      title: 'NextGen Learning: Revolutionizing Assessment with AI',
      institution: 'NextGen Learning Solutions',
      location: 'Mumbai, India',
      students: 750,
      improvement: 35,
      timeframe: '8 months',
      category: 'Adaptive Assessment',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1600',
      challenge: 'NextGen Learning faced challenges in accurately assessing student capabilities and providing meaningful feedback to improve learning outcomes.',
      solution: 'Deployed EdgeUp\'s adaptive testing engine with psychometric profiling to create personalized assessment experiences.',
      results: [
        '35% improvement in assessment accuracy',
        '50% reduction in test anxiety',
        '70% increase in student engagement',
        '90% teacher satisfaction with insights'
      ],
      testimonial: {
        quote: "The adaptive testing technology has transformed how we assess and support our students. We're seeing unprecedented engagement levels.",
        author: "Priya Patel",
        position: "CEO, NextGen Learning Solutions"
      },
      featured: false
    },
    {
      id: '3',
      title: 'Achievers NEET Academy: Personalized Medical Entrance Prep',
      institution: 'Achievers NEET Academy',
      location: 'Bangalore, India',
      students: 300,
      improvement: 42,
      timeframe: '10 months',
      category: 'Medical Entrance',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600',
      challenge: 'High competition in NEET preparation required more targeted and efficient study methods to help students achieve better results.',
      solution: 'Implemented EdgeUp\'s AI-powered study plans with subject-specific adaptive learning and performance analytics.',
      results: [
        '42% improvement in NEET scores',
        '65% increase in medical college admissions',
        '55% reduction in study time',
        '95% student retention rate'
      ],
      testimonial: {
        quote: "Our students' performance improved significantly with EdgeUp's personalized learning paths. The results speak for themselves.",
        author: "Dr. Anil Kumar",
        position: "Founder, Achievers NEET Academy"
      },
      featured: false
    },
    {
      id: '4',
      title: 'State Exam Coaching Hub: Scaling Success Across Multiple Exams',
      institution: 'State Exam Coaching Hub',
      location: 'Chennai, India',
      students: 1200,
      improvement: 31,
      timeframe: '15 months',
      category: 'State Exams',
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      challenge: 'Managing diverse student needs across multiple state-level competitive exams while maintaining quality education standards.',
      solution: 'Comprehensive EdgeUp platform deployment with multi-exam support, personalized curricula, and advanced analytics dashboard.',
      results: [
        '31% average improvement across all exams',
        '80% increase in operational efficiency',
        '45% growth in student enrollment',
        '92% faculty adoption rate'
      ],
      testimonial: {
        quote: "EdgeUp enabled us to scale our operations while maintaining personalized attention for each student. It's been a game-changer.",
        author: "Meera Krishnan",
        position: "Academic Director, State Exam Coaching Hub"
      },
      featured: false
    }
  ];

  const stats = [
    { number: 2750, suffix: '+', label: 'Students Impacted', icon: Users },
    { number: 34, suffix: '%', label: 'Average Improvement', icon: TrendingUp },
    { number: 4, suffix: '', label: 'Success Stories', icon: Award },
    { number: 92, suffix: '%', label: 'Satisfaction Rate', icon: Award }
  ];

  const featuredCase = caseStudies.find(study => study.featured);
  const regularCases = caseStudies.filter(study => !study.featured);

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
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
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Success Stories
              <div className="ml-2 w-2 h-2 bg-[#10ac8b] rounded-full animate-pulse"></div>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Case Studies
            </h1>
            
            <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Real results from institutions that have transformed their educational outcomes with EdgeUp's AI-powered learning platform.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl mb-4 mx-auto">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#094d88] mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Featured Case Study */}
      {featuredCase && (
        <IntersectionObserver>
          <section className="section-padding relative z-10">
            <div className="container-custom">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-gradient-to-r from-[#10ac8b] to-[#094d88] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
                          Featured Case Study
                        </span>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin size={14} />
                          <span>{featuredCase.location}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent leading-tight">
                        {featuredCase.title}
                      </h2>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#10ac8b]">
                            <AnimatedCounter end={featuredCase.students} />
                          </div>
                          <div className="text-sm text-gray-600">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#094d88]">
                            <AnimatedCounter end={featuredCase.improvement} suffix="%" />
                          </div>
                          <div className="text-sm text-gray-600">Improvement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#10ac8b]">{featuredCase.timeframe}</div>
                          <div className="text-sm text-gray-600">Duration</div>
                        </div>
                      </div>
                      
                      <p className="text-xl text-gray-600 leading-relaxed">{featuredCase.challenge}</p>
                    </div>

                    <Link
                      to={`/case-studies/${featuredCase.id}`}
                      className="group relative overflow-hidden bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 inline-flex items-center"
                    >
                      <span className="relative z-10 flex items-center">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    </Link>
                  </div>

                  <div className="relative group">
                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-2 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                          src={featuredCase.image}
                          alt={featuredCase.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                            <blockquote className="text-white italic mb-2">
                              "{featuredCase.testimonial.quote}"
                            </blockquote>
                            <div className="text-white/90 text-sm">
                              - {featuredCase.testimonial.author}, {featuredCase.testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </IntersectionObserver>
      )}

      {/* Case Studies Grid */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how institutions across India are achieving remarkable results with EdgeUp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCases.map((caseStudy, index) => (
                <div 
                  key={caseStudy.id} 
                  className={`group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      src={caseStudy.image}
                      alt={caseStudy.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm mb-4">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin size={12} />
                        <span>{caseStudy.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar size={12} />
                        <span>{caseStudy.timeframe}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#094d88] transition-colors duration-300 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#10ac8b]">
                          <AnimatedCounter end={caseStudy.improvement} suffix="%" />
                        </div>
                        <div className="text-xs text-gray-600">Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#094d88]">
                          <AnimatedCounter end={caseStudy.students} />
                        </div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{caseStudy.challenge}</p>
                    
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center text-[#094d88] font-semibold hover:text-[#10ac8b] transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read Case Study
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="relative bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Join these successful institutions and transform your educational outcomes with EdgeUp's AI-powered platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <Link
                    to="/contact?demo=true"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Book a Demo
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <Link
                    to="/for-institutions"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    Learn More
                  </Link>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default CaseStudiesPage;