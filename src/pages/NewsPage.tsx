import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Calendar, User, ArrowRight, Sparkles, Zap } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import { useCMS } from '../context/CMSContext';

const NewsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp News & Media";
    setIsLoaded(true);
  }, []);

  const { getContentBlocks } = useCMS();
  const newsPageBlocks = getContentBlocks('news');

  const newsItems = [
    {
      id: '1',
      title: 'EdgeUp Raises ₹8 Crore in Seed Funding',
      date: 'March 15, 2024',
      author: 'EdgeUp Team',
      category: 'Funding',
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Leading EdTech startup EdgeUp has secured ₹8 crore in seed funding from Enlighten Capital and other prominent investors to accelerate its mission of transforming competitive exam preparation through AI.',
      content: `EdgeUp, India's innovative AI-powered learning platform, today announced the successful completion of its seed funding round, raising ₹8 crore from a group of strategic investors led by Enlighten Capital.

The funding will be used to enhance EdgeUp's AI capabilities, expand its institutional partnerships, and strengthen its presence across India. The company plans to focus on developing more specialized modules for various competitive exams and improving its psychometric assessment tools.

"This investment validates our vision of transforming how institutions prepare students for competitive exams," said Jubran Siddique, CEO of EdgeUp. "With this funding, we'll be able to reach more institutions and impact millions of students across India."

The round saw participation from several notable angel investors and education sector veterans, highlighting the industry's confidence in EdgeUp's innovative approach to personalized learning.`,
      featured: true
    },
    {
      id: '2',
      title: 'EdgeUp Partners with Leading UPSC Coaching Institutes',
      date: 'March 1, 2024',
      author: 'Marketing Team',
      category: 'Partnerships',
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Strategic partnerships with top coaching institutes mark a significant milestone in EdgeUp\'s mission to revolutionize UPSC preparation through AI-powered personalization.',
      content: `EdgeUp today announced partnerships with several leading UPSC coaching institutes across Delhi, Mumbai, and Bangalore. These partnerships will bring EdgeUp's AI-powered learning platform to thousands of UPSC aspirants.

The collaboration will enable these institutes to offer personalized learning experiences to their students, leveraging EdgeUp's advanced psychometric profiling and adaptive testing capabilities.

"Our partnership with these prestigious institutes marks a significant step in our journey," said Khalid Mohamed, Chairman of EdgeUp. "Together, we're setting new standards in UPSC preparation."

Initial results from pilot programs show significant improvements in student engagement and test scores, with some institutes reporting up to 30% better results in mock tests.`,
      featured: false
    },
    {
      id: '3',
      title: 'AI in Education: The Future is Here',
      date: 'February 20, 2024',
      author: 'Jubran Siddique',
      category: 'Insights',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Exploring how artificial intelligence is reshaping the educational landscape and what it means for students and institutions.',
      content: `The integration of artificial intelligence in education represents one of the most significant shifts in how we approach learning and teaching. As we stand at the forefront of this revolution, it's important to understand both the opportunities and challenges that lie ahead.

AI-powered educational platforms are not just about automation; they're about creating more human, more personalized learning experiences. By understanding each student's unique learning patterns, strengths, and areas for improvement, AI can help educators provide targeted support that was previously impossible at scale.

At EdgeUp, we've seen firsthand how our PASCO framework can transform learning outcomes. Students who previously struggled with traditional one-size-fits-all approaches are now thriving with personalized learning paths that adapt to their individual needs.`,
      featured: false
    }
  ];

  const resources = [
    {
      title: 'EdgeUp Brand Guidelines',
      description: 'Complete brand guidelines including logos, colors, and typography',
      type: 'PDF',
      size: '2.4 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-resolution screenshots of the EdgeUp platform',
      type: 'ZIP',
      size: '15.2 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information',
      type: 'PDF',
      size: '1.1 MB'
    }
  ];

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Enhanced */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Latest News & Updates
              <div className="ml-2 w-2 h-2 bg-[#10ac8b] rounded-full animate-pulse"></div>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              News & Media
            </h1>
            
            <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Stay updated with the latest developments at EdgeUp as we transform
              the future of education through AI innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article - 3D Enhanced */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            {newsItems.filter(item => item.featured).map((item, index) => (
              <div key={item.id} className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={`space-y-8 transition-all duration-1000 delay-${index * 200}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-gradient-to-r from-[#10ac8b] to-[#094d88] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <User size={14} />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">{item.summary}</p>
                    </div>

                    <a
                      href="https://timesofindia.indiatimes.com/city/chennai/using-ai-to-make-exam-coaching-competitive/articleshow/121083911.cms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 inline-flex items-center"
                    >
                      <span className="relative z-10 flex items-center">
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#10ac8b] to-[#094d88] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                  </div>

                  <div className="relative group">
                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-2 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:rotate-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                            <span className="text-white font-semibold text-lg flex items-center">
                              <Zap className="mr-2 h-5 w-5" />
                              Featured Story
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#10ac8b]/30 to-[#094d88]/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#094d88]/30 to-[#10ac8b]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </IntersectionObserver>

      {/* News Grid - Staggered Animations */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, updates, and stories from the EdgeUp team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => !item.featured).map((item, index) => (
                <article 
                  key={item.id} 
                  className={`group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm mb-4">
                      <span className="bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#094d88] transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{item.summary}</p>
                    
                    <a
                      href="https://timesofindia.indiatimes.com/city/chennai/using-ai-to-make-exam-coaching-competitive/articleshow/121083911.cms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#094d88] font-semibold hover:text-[#10ac8b] transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read more
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#094d88]/5 to-[#10ac8b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Media Kit Section - Glassmorphism Enhanced */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Media Kit & Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download our media kit for brand assets, company information, and press materials.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mx-auto mb-16">
                <div className="relative group">
                  <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-4">
                          EdgeUp Press Kit 2024
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Complete media package including logos, brand guidelines, product screenshots, and company information.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {resources.map((resource, index) => (
                          <div 
                            key={index} 
                            className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                          >
                            <div>
                              <div className="font-semibold text-gray-900">{resource.title}</div>
                              <div className="text-sm text-gray-600">{resource.description}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-medium text-[#094d88]">{resource.type}</div>
                              <div className="text-xs text-gray-500">{resource.size}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="group relative overflow-hidden w-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                        <span className="relative z-10 flex items-center justify-center">
                          <Download size={20} className="mr-3" />
                          Download Complete Kit
                          <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#10ac8b] to-[#094d88] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </div>
                  </div>
                </div>

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
              <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                  Want to Learn More About EdgeUp?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Schedule a demo to see how our AI-powered platform can transform learning at your institution.
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
                    to="/contact"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    Contact Press Team
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

export default NewsPage;