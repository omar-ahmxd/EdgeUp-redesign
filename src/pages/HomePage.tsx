import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight,
  Brain,
  Target,
  Layers,
  Zap,
  Users,
  TrendingUp,
  Award,
  Globe,
  Play,
  Building,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import AnimatedCounter from '../components/common/AnimatedCounter';
import IntersectionObserver from '../components/common/IntersectionObserver';
import SplineViewer from '../components/common/SplineViewer';

const HomePage: React.FC = () => {
  const { getContentBlocks } = useCMS();
  const homePageBlocks = getContentBlocks('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp - AI-Powered Learning Platform for Institutions";
  }, []);

  // Stats data
  const stats = [
    { number: 32, suffix: '%', label: 'Improvement in Test Scores', icon: TrendingUp },
    { number: 150, suffix: '+', label: 'Partner Institutions', icon: Users },
    { number: 50000, suffix: '+', label: 'Students Impacted', icon: Globe },
    { number: 95, suffix: '%', label: 'Success Rate', icon: Award }
  ];


  // Features data
  const features = [
    {
      icon: Brain,
      title: "Psychometric Profiling",
      description: "Understand each learner's unique cognitive profile, learning style, and motivation patterns to create tailored study paths."
    },
    {
      icon: Target,
      title: "Adaptive Testing Engine",
      description: "Advanced algorithms that adjust question difficulty based on student performance, maximizing assessment effectiveness."
    },
    {
      icon: Layers,
      title: "Smart Study Plans",
      description: "AI-generated study schedules that optimize learning and retention based on individual strengths and weaknesses."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Works with your existing LMS or as a standalone platform, making implementation fast and hassle-free."
    }
  ];

  // Learning paths data
  const learningPaths = [
    {
      icon: Building,
      title: "UPSC & Competitive Exams",
      description: "Adaptive study plans tailored to UPSC syllabus with personalized content delivery, mock tests, and performance analytics to maximize success rates."
    },
    {
      icon: GraduationCap,
      title: "Colleges & Universities",
      description: "Customized learning experiences for undergraduate and graduate programs with curriculum alignment and individualized academic support."
    },
    {
      icon: BookOpen,
      title: "Schools & K-12",
      description: "Age-appropriate personalized learning journeys that adapt to each student's pace, learning style, and academic goals across all subjects."
    }
  ];


  return (
    <main className="overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
          
          {/* Static Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

          {/* Floating Particles - Synchronized with Robot */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => {
              // Create grouped particles that follow the robot's rhythm
              const isLeaderGroup = i < 6; // First 6 dots are leaders
              const isFollowerGroup = i >= 6 && i < 14; // Next 8 are followers
              const isIndependentGroup = i >= 14; // Last 6 are independent but responsive
              
              // Robot-synchronized timing (assuming 4s cycles)
              const robotCycleDuration = 4;
              const baseDelay = isLeaderGroup ? 0 : 
                               isFollowerGroup ? 0.5 : 
                               1.0;
              const variationDelay = (i % 3) * 0.2; // Subtle stagger
              
              // Position some dots closer to robot area (right side)
              const robotAreaInfluence = isLeaderGroup || (isFollowerGroup && i % 2 === 0);
              const leftPosition = robotAreaInfluence ? 
                45 + Math.random() * 50 : // Right side concentration
                Math.random() * 100; // Full area
              
              const topPosition = robotAreaInfluence ?
                20 + Math.random() * 60 : // Middle-focused for robot area
                Math.random() * 100; // Full area
              
              return (
                <div
                  key={i}
                  className={`particle-float ${isLeaderGroup ? 'robot-leader' : isFollowerGroup ? 'robot-follower' : 'robot-independent'}`}
                  style={{
                    left: `${leftPosition}%`,
                    top: `${topPosition}%`,
                    animationDelay: `${baseDelay + variationDelay}s`,
                    animationDuration: `${robotCycleDuration}s`
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Hero Section with Dashboard */}
        <section className="min-h-screen relative z-10">
          <div className="container-custom">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-20">
              
              {/* Mobile: Animation first, Desktop: Content first */}
              <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 relative z-20 w-full text-center lg:text-left hero-text-content">
                <div className="space-y-6 lg:space-y-8">
                  <div className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium border border-white/30 shadow-lg animate-fade-in-up mt-8 md:mt-12 lg:mt-16 xl:mt-20" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                    <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                    Your Path to Digital Success
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight relative z-30 animate-fade-in-up delay-200" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    AI-Powered Learning Platform Built for Institutions and Personalised for Learners
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-300 relative z-30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    EdgeUp functions as an embedded study companion, enabling partners to offer adaptive learning journeys, smart content delivery, and real-time learner support. Our Agentic AI proactively anticipates learning needs and autonomously adjusts to optimize student outcomes
                  </p>
                </div>

                <div className="flex flex-col gap-4 animate-fade-in-up delay-500 relative z-30 hero-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                  <Link
                    to="/book-demo"
                    className="group relative overflow-hidden bg-gradient-to-r from-[#10ac8b] to-[#0d9488] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Book a Demo
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <Link
                    to="/product"
                    className="group relative overflow-hidden border-2 border-[#094d88] text-[#094d88] px-6 py-3 lg:px-8 lg:py-4 rounded-2xl font-semibold hover:bg-[#094d88] hover:text-white transition-all duration-500 hover:scale-105 text-center w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4" />
                      Discover Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Mobile: Animation first, Desktop: Animation last */}
              <div className="order-1 lg:order-2 relative animate-fade-in-right delay-400 z-10 h-[300px] md:h-[400px] lg:h-[600px] w-full spline-container" style={{ background: 'transparent' }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <SplineViewer
                  sceneUrl="https://prod.spline.design/rMylZE0LtWz1dT3B/scene.splinecode"
                  className="w-full h-full"
                  height="100%"
                  interactionPrompt={false}
                  onSceneReady={(app) => {
                    console.log('Spline scene ready in HomePage');
                  }}
                />
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <IntersectionObserver>
          <section className="section-padding relative z-10">
            <div className="container-custom">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                  Transform Learning with AI-Powered Precision
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our platform helps institutions prepare students for UPSC, state exams, and other competitive tests with personalized learning experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100}>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </IntersectionObserver>

        {/* Personalized Learning Section */}
        <IntersectionObserver>
          <section className="section-padding relative z-10">
            <div className="container-custom">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                  Personalized Learning for Every Path
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our agentic AI adapts to create personalized syllabi and learning paths for every educational need
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {learningPaths.map((path, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} data-aos="zoom-in" data-aos-duration="800" data-aos-delay={index * 150}>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mb-4">
                      <path.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{path.title}</h3>
                    <p className="text-gray-600">{path.description}</p>
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
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 animate-fade-in-up" data-aos="fade-up" data-aos-duration="800">
                    Ready to Transform Education at Your Institution?
                  </h2>
                  <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    Join the growing network of forward-thinking institutions using EdgeUp to deliver personalized learning experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <Link
                      to="/book-demo"
                      className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Book a Demo Today
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
      <style>{`
        /* Additional fixes for this page specifically */
        
        /* Spline iframe transparent styles */
        .spline-iframe {
          background: transparent !important;
          background-color: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
          width: 100% !important;
          height: 100% !important;
          min-height: 600px !important;
          display: block !important;
          position: relative !important;
          z-index: 10 !important;
        }
        
        /* Target iframe body and content */
        .spline-iframe body,
        .spline-iframe html {
          background: transparent !important;
          background-color: transparent !important;
        }
        
        /* Remove Spline watermark background if present */
        .spline-iframe .spline-watermark {
          background: transparent !important;
          background-color: transparent !important;
        }
        
        /* Ensure the iframe container is transparent */
        .spline-iframe::-webkit-scrollbar {
          display: none !important;
        }
        
        /* Additional selectors for Spline elements */
        iframe[src*="spline.design"] {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        /* Remove any potential wrapper backgrounds */
        div:has(> .spline-iframe) {
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
        }
        
        /* Synchronized Robot-Dot Animation System */
        .particle-float {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          border-radius: 50%;
          opacity: 0.6;
        }
        
        /* Leader dots follow robot directly */
        .robot-leader {
          animation: robotLeaderFloat 4s ease-in-out infinite;
          opacity: 0.8;
        }
        
        /* Follower dots respond with slight delay */
        .robot-follower {
          animation: robotFollowerFloat 4s ease-in-out infinite;
          opacity: 0.6;
        }
        
        /* Independent dots have subtle robot-influenced movement */
        .robot-independent {
          animation: robotIndependentFloat 4s ease-in-out infinite;
          opacity: 0.4;
        }
        
        @keyframes robotLeaderFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% { 
            transform: translateY(-15px) translateX(8px) rotate(90deg);
          }
          50% { 
            transform: translateY(-25px) translateX(-5px) rotate(180deg);
          }
          75% { 
            transform: translateY(-12px) translateX(12px) rotate(270deg);
          }
        }
        
        @keyframes robotFollowerFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% { 
            transform: translateY(-12px) translateX(6px) rotate(60deg);
          }
          50% { 
            transform: translateY(-20px) translateX(-3px) rotate(120deg);
          }
          75% { 
            transform: translateY(-8px) translateX(9px) rotate(180deg);
          }
        }
        
        @keyframes robotIndependentFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% { 
            transform: translateY(-8px) translateX(4px) rotate(30deg);
          }
          50% { 
            transform: translateY(-12px) translateX(-2px) rotate(60deg);
          }
          75% { 
            transform: translateY(-5px) translateX(6px) rotate(90deg);
          }
        }
      `}</style>
    </main>
  );
};

export default HomePage;