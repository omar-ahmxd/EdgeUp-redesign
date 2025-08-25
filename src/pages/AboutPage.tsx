import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Award,
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';
import AnimatedCounter from '../components/common/AnimatedCounter';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About EdgeUp - Our Story and Mission";
  }, []);

  const { getContentBlocks } = useCMS();
  const aboutPageBlocks = getContentBlocks('about');

  const highlights = [
    { title: 'Innovation', description: 'Leading AI-powered education solutions', icon: Users },
    { title: 'Excellence', description: 'Committed to quality in every solution', icon: TrendingUp },
    { title: 'Impact', description: 'Transforming learning experiences', icon: Target },
    { title: 'Growth', description: 'Expanding across educational sectors', icon: Award }
  ];

  const teamMembers = [
    {
      name: "Jubran Siddique",
      position: "Chief Executive Officer",
      bio: "Visionary CEO and former Forbes Business Council member with expertise across fintech and technology sectors. Dedicated to creating transformative solutions that bridge innovation with real-world impact.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjE2Wy3ZAA_uaEXnz5pvYbmGpxVOhv2q3mg&s",
      linkedin: "https://www.linkedin.com/in/jubransiddique/",
      twitter: "https://www.instagram.com/edgeup_tech/"
    },
    {
      name: "Khalid Mohamed",
      position: "Chairman",
      bio: "Accomplished professional with 24+ years of experience in business development, education, and social entrepreneurship. Passionate about leveraging technology and strategic partnerships to drive educational transformation and community empowerment.",
      image: "/khalid-mohamed.jpeg",
      linkedin: "https://www.linkedin.com/in/omsmakhalid/",
      twitter: "https://www.instagram.com/edgeup_tech/"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "The Beginning",
      description: "EdgeUp was founded with a vision to make education more human, precise, and learner-centric."
    },
    {
      year: "2023",
      title: "First Partnerships",
      description: "Launched successful pilot programs with leading coaching institutes across India."
    },
    {
      year: "2024",
      title: "Seed Funding",
      description: "Secured ₹8 Cr in seed funding from Enlighten Capital and other leading investors."
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Expanding our reach to serve more institutions and learners across India."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in educational technology.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from product development to customer service.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together to achieve extraordinary results.",
      icon: "🤝"
    },
    {
      title: "Impact",
      description: "We measure our success by the positive impact we have on students and educators.",
      icon: "📈"
    }
  ];

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

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
      </div>

      {/* Hero Section - Gridly Style */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium border border-white/30 shadow-lg animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                  About EdgeUp
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight animate-fade-in-up delay-200">
                  Making Education More Human Through AI
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-300">
                  We are building the future of personalized learning, helping institutions 
                  deliver better outcomes through AI-powered precision education.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Link
                  to="/contact?demo=true"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#10ac8b] to-[#0d9488] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join Our Mission
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
                <Link
                  to="/news"
                  className="group border-2 border-[#094d88] text-[#094d88] px-8 py-4 rounded-2xl font-semibold hover:bg-[#094d88] hover:text-white transition-all duration-500 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Our Story
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Highlights Grid - Gridly Style */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right delay-400">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg mb-3 mx-auto">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#094d88] mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-sm text-gray-600 text-center">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent">
                    Our Mission & Vision
                  </h2>
                  <p className="text-xl text-gray-600">
                    To empower educational institutions with AI-driven tools that make learning 
                    more personalized, effective, and accessible for every student.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalization at Scale</h3>
                      <p className="text-gray-600">Using AI to understand and adapt to each learner's unique needs and learning style.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
                      <p className="text-gray-600">Empowering educators with actionable insights to make informed decisions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Accessible Excellence</h3>
                      <p className="text-gray-600">Making quality education more accessible through technology and innovation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Team collaboration"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-2">Digital Marketing Strategy With EdgeUp</h4>
                    <p className="text-gray-600 text-sm">Transforming education through innovative AI solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Values Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at EdgeUp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Team Section - Enhanced with Larger Images */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionaries behind EdgeUp's mission to transform education.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 md:hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Profile Image Section - Centered */}
                  <div className="flex justify-center pt-8 pb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/30 shadow-xl"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="px-6 pb-8 md:px-8">
                    <div className="text-center space-y-4">
                      {/* Name and Title */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-[#094d88] font-semibold text-base md:text-lg">{member.position}</p>
                      </div>
                      
                      {/* Bio */}
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{member.bio}</p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center space-x-4 pt-2">
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 hover:text-[#094d88] hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a 
                          href={member.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 hover:text-[#094d88] hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Journey Timeline - COMPLETELY FIXED */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From idea to impact: The story of EdgeUp's growth and evolution.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Mobile-Optimized Timeline Layout */}
              <div className="relative">
                {/* Vertical Line for Mobile */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#094d88] via-[#10ac8b] to-[#094d88] md:transform md:-translate-x-1/2"></div>
                
                <div className="space-y-12 md:space-y-16">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex items-start md:items-center">
                        {/* Mobile: Left-aligned timeline */}
                        <div className="flex-shrink-0 md:hidden">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">{index + 1}</span>
                          </div>
                        </div>
                        
                        {/* Desktop: Centered timeline */}
                        <div className="hidden md:flex md:flex-1 md:justify-end md:pr-12">
                          <div className="text-right">
                            <div className="text-4xl font-bold text-[#10ac8b]">{milestone.year}</div>
                          </div>
                        </div>
                        
                        {/* Desktop: Center dot */}
                        <div className="hidden md:block flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full border-4 border-white shadow-lg"></div>
                        </div>
                        
                        {/* Content Card */}
                        <div className="flex-1 ml-6 md:ml-12">
                          {/* Mobile Year Display */}
                          <div className="md:hidden text-2xl font-bold text-[#10ac8b] mb-3">{milestone.year}</div>
                          
                          <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-900">{milestone.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
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
                  Ready to Transform Education at Your Institution?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Join the growing network of forward-thinking institutions using EdgeUp to deliver personalized learning experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <Link
                    to="/contact?demo=true"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Book a Demo Today
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <Link
                    to="/institutions"
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
      `}</style>
    </main>
  );
};

export default AboutPage;