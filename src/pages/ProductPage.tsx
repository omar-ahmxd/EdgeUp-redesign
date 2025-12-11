import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Eye,
  Shield,
  ArrowRight,
  Play,
  Layers,
  BarChart,
  Award,
  Globe,
  Star,
  Sparkles
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';
import AnimatedCounter from '../components/common/AnimatedCounter';

const ProductPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentDemo, setCurrentDemo] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp Product - AI-Powered Learning Platform";
  }, []);

  const { getContentBlocks } = useCMS();
  const productPageBlocks = getContentBlocks('product');

  const pascoFramework = [
    { 
      letter: 'P', 
      word: 'Personality', 
      description: 'Understanding learning style and cognitive preferences through advanced psychometric analysis',
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      stats: { label: 'Learning Style Analysis' }
    },
    { 
      letter: 'A', 
      word: 'Aptitude', 
      description: 'Measuring natural abilities and potential using AI-powered assessments',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      stats: { label: 'Ability Assessment' }
    },
    { 
      letter: 'S', 
      word: 'Skills', 
      description: 'Assessing current capabilities and competencies with real-time evaluation',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      stats: { label: 'Competency Mapping' }
    },
    { 
      letter: 'C', 
      word: 'Character', 
      description: 'Evaluating motivation and learning behavior patterns for optimal engagement',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      stats: { label: 'Behavioral Insights' }
    },
    { 
      letter: 'O', 
      word: 'Optimization', 
      description: 'Continuous monitoring and adaptation based on learning progress',
      icon: Eye,
      color: 'from-teal-500 to-cyan-500',
      stats: { label: 'Progress Monitoring' }
    }
  ];

  const productFeatures = [
    {
      title: 'Adaptive Learning Engine',
      description: 'AI-powered system that continuously adapts to each student\'s learning pace and style',
      icon: Brain,
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600',
      benefits: ['Personalized content delivery', 'Dynamic difficulty adjustment', 'Learning path optimization']
    },
    {
      title: 'Smart Assessment Platform',
      description: 'Advanced testing system with real-time analytics and performance insights',
      icon: Target,
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      benefits: ['Adaptive question selection', 'Instant feedback', 'Performance analytics']
    },
    {
      title: 'Institutional Dashboard',
      description: 'Comprehensive analytics and management tools for educational institutions',
      icon: BarChart,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      benefits: ['Student progress tracking', 'Faculty insights', 'Performance reports']
    }
  ];

  const demoScreenshots = [
    {
      title: 'Student Dashboard',
      description: 'Personalized learning interface with progress tracking',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Assessment Engine',
      description: 'Adaptive testing with real-time difficulty adjustment',
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and performance analytics',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  const stats = [];

  // Auto-rotate features with bounds checking
  useEffect(() => {
    if (productFeatures.length > 0) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % productFeatures.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  // Auto-rotate demo screenshots with bounds checking
  useEffect(() => {
    if (demoScreenshots.length > 0) {
      const interval = setInterval(() => {
        setCurrentDemo((prev) => (prev + 1) % demoScreenshots.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  try {
    return (
      <main className="pt-16 overflow-hidden">
      {/* Hero Section - Interactive */}
      <section className="min-h-screen bg-gradient-light relative">
        {/* Floating particles */}
        <div className="particles">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side - Content */}
            <div className="space-y-8 relative z-20">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium animate-fade-in-up">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Embedded Study Companion
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-30 animate-fade-in-up delay-200">
                  Intelligent Learning, Powered by AI
                </h1>
                
                <p className="text-xl text-muted leading-relaxed animate-fade-in-up delay-300 relative z-30">
                  Rather than being a standalone app, EdgeUp functions as an embedded study companion, enabling partners to offer adaptive learning journeys, smart content delivery, contextual nudges, and real-time learner support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500 relative z-30">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#10ac8b] text-white font-semibold rounded-lg hover:bg-[#0d9488] transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/for-institutions"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#094d88] text-[#094d88] font-semibold rounded-lg hover:bg-[#094d88] hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  For Institutions
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in-up delay-700 relative z-30">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="stat-card hover-lift">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg mb-3 mx-auto">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#094d88] mb-1">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Interactive Demo */}
            <div className="relative animate-fade-in-right delay-400 z-10">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover-lift">
                {/* Demo Header */}
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">EdgeUp AI Platform</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Demo Content */}
                <div className="p-6 space-y-6">
                  {/* Current Demo Screenshot */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={demoScreenshots[currentDemo]?.image || ''}
                      alt={demoScreenshots[currentDemo]?.title || ''}
                      className="w-full h-48 object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h4 className="font-semibold">{demoScreenshots[currentDemo]?.title || ''}</h4>
                        <p className="text-sm text-white/90">{demoScreenshots[currentDemo]?.description || ''}</p>
                      </div>
                    </div>
                  </div>

                  {/* Demo Navigation */}
                  <div className="flex justify-center space-x-2">
                    {demoScreenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDemo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentDemo 
                            ? 'bg-[#10ac8b] scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Live Dashboard Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-blue-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Learning Status</div>
                      <div className="text-lg font-semibold text-[#094d88] mb-1">
                        Adaptive Mode
                      </div>
                      <div className="text-xs text-[#10ac8b]">AI-powered personalization</div>
                    </div>
                    <div className="bg-gradient-teal-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Assessment Engine</div>
                      <div className="text-lg font-semibold text-[#10ac8b] mb-1">
                        Real-time Analysis
                      </div>
                      <div className="text-xs text-[#094d88]">Continuous evaluation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#10ac8b] to-[#094d88] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Why should quality education be reserved for the privileged?</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                At EdgeUp, we believe every learner deserves access to top‑tier educational experiences — not just the few.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm hover-lift animate-scale-in" style={{ animationDelay: '0s' }}>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl mb-4 mx-auto">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#094d88] mb-2">Adaptive Learning</h3>
                <p className="text-sm text-gray-600">Personalized paths that evolve with each student's progress</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-sm hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#10ac8b] to-[#0d9488] rounded-xl mb-4 mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#094d88] mb-2">Smart Assessment</h3>
                <p className="text-sm text-gray-600">AI-powered evaluations that understand learning gaps</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl mb-4 mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#094d88] mb-2">Collaborative Learning</h3>
                <p className="text-sm text-gray-600">Connect students and educators in meaningful ways</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-sm hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#10ac8b] to-[#0d9488] rounded-xl mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#094d88] mb-2">Real-time Support</h3>
                <p className="text-sm text-gray-600">Instant help when students need it most</p>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* PASCO Framework Section - Interactive */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-blue-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/50 rounded-full text-[#094d88] text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                PASCO Framework
              </div>
              <h2 className="heading-lg mb-4">Our Proprietary AI Framework</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                PASCO is EdgeUp's proprietary AI-powered framework designed to personalize and optimize learning journeys across age groups, by mapping and evolving student learning paths based on holistic learner profiling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              {pascoFramework.map((item, index) => (
                <div 
                  key={index} 
                  className="feature-card text-center hover-lift animate-fade-in-up group cursor-pointer" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.word}</h3>
                  <p className="text-sm text-muted mb-3">{item.description}</p>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#10ac8b] bg-[#10ac8b]/10 px-3 py-1 rounded-full">
                      {item.stats.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive PASCO Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {pascoFramework[activeFeature % pascoFramework.length]?.word || ''} Analysis
                  </h3>
                  <p className="text-lg text-muted">
                    {pascoFramework[activeFeature % pascoFramework.length]?.description || ''}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Real-time data collection and analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Adaptive learning path generation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Continuous improvement algorithms</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full flex items-center justify-center mx-auto mb-4">
                        {pascoFramework[activeFeature % pascoFramework.length]?.icon && React.createElement(pascoFramework[activeFeature % pascoFramework.length].icon, {
                          className: "h-12 w-12 text-white"
                        })}
                      </div>
                      <h4 className="text-xl font-semibold mb-4">
                        {pascoFramework[activeFeature % pascoFramework.length]?.word || ''}
                      </h4>
                      <div className="inline-block text-sm font-semibold text-[#10ac8b] bg-[#10ac8b]/10 px-4 py-2 rounded-full">
                        {pascoFramework[activeFeature % pascoFramework.length]?.stats?.label || ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Product Features - Interactive */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Powerful Features for Modern Learning</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Discover how our AI-powered platform transforms the learning experience for students and institutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature Navigation */}
              <div className="space-y-6">
                {productFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`feature-card cursor-pointer transition-all duration-300 ${
                      activeFeature === index ? 'ring-2 ring-[#10ac8b] bg-gradient-teal-light' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeFeature === index 
                          ? 'bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted mb-3">{feature.description}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Showcase */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover-lift">
                  <img
                    src={productFeatures[activeFeature]?.image || ''}
                    alt={productFeatures[activeFeature]?.title || ''}
                    className="w-full h-80 object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-semibold mb-2">{productFeatures[activeFeature]?.title || ''}</h4>
                      <p className="text-white/90">{productFeatures[activeFeature]?.description || ''}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-edgeup text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Experience the power of AI-driven personalization for your educational institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#094d88] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/for-institutions"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#094d88] transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>
    </main>
    );
  } catch (error) {
    console.error('Error rendering ProductPage:', error);
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-4">The product page encountered an error. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#094d88] text-white px-6 py-2 rounded-lg hover:bg-[#073a6a] transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </main>
    );
  }
};

export default ProductPage;
