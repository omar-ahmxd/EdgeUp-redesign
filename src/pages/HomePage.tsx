import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Target,
  Zap,
  Users,
  TrendingUp,
  Award,
  Building,
  GraduationCap,
  BookOpen,
  Linkedin,
  CheckCircle,
  Sparkles,
  BarChart3,
  Shield,
  Clock,
  HeartHandshake
} from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import HowItWorksTimeline from '../components/sections/HowItWorksTimeline';
import BotModelViewer from '../components/common/BotModelViewer';

const HomePage: React.FC = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.25 }
  };

  const fadeLeft = {
    initial: { opacity: 0, x: 32 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp - AI-Powered Learning Platform for Institutions";
  }, []);

  return (
    <main className="overflow-hidden relative page-surface">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="min-h-screen relative z-10 flex items-center pt-20 lg:pt-0">
        <div className="container-custom">
          {/* Mobile Layout */}
          <div className="flex flex-col lg:hidden">
            <motion.div className="text-center space-y-4" {...fadeUp}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full border border-[#094d88]/20">
                <Sparkles className="w-4 h-4 text-[#10ac8b]" />
                <span className="text-sm font-semibold text-[#094d88]">AI-Powered Educational Ecosystem</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl font-bold leading-[1.1] bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                Personalized AI-Powered Learning for Students & Institutions
              </h1>

              {/* Subheadline */}
              <p className="text-base text-gray-600 dark:text-slate-200 leading-relaxed">
                Transforming learning outcomes through adaptive intelligence, behavioural insights, and real-time analytics.
              </p>
            </motion.div>

            {/* Bot with floating cards */}
            <motion.div className="relative mt-6" {...fadeLeft}>
              <div className="relative h-[320px]">
                <BotModelViewer className="w-full h-full" height="100%" autoRotate />

                {/* Floating Cards - positioned outside bot area */}
                <div className="absolute -top-2 -left-1 bg-white rounded-xl p-2 shadow-xl border border-gray-100 flex items-center gap-2 animate-float z-10">
                  <div className="w-6 h-6 bg-[#094d88] rounded-lg flex items-center justify-center">
                    <Brain className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-[11px]">Adaptive Learning</p>
                  </div>
                </div>

                <div className="absolute -top-2 -right-1 bg-white rounded-xl p-2 shadow-xl border border-gray-100 flex items-center gap-2 animate-float z-10" style={{animationDelay: '1s'}}>
                  <div className="w-6 h-6 bg-[#10ac8b] rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-[11px]">Real-time Analytics</p>
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-xl p-2 shadow-xl border border-gray-100 flex items-center gap-2 animate-float z-10" style={{animationDelay: '2s'}}>
                  <div className="w-6 h-6 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                    <Zap className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-[11px]">Resource Optimization</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-col gap-3 mt-6" {...fadeUp}>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#094d88] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#094d88]/25 hover:shadow-xl hover:shadow-[#094d88]/30 hover:bg-[#0a5a9e] transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="group inline-flex items-center justify-center gap-2 bg-white text-gray-700 dark:bg-slate-900 dark:text-slate-100 px-8 py-4 rounded-full font-semibold border border-gray-200 dark:border-slate-700 hover:border-[#094d88] hover:text-[#094d88] transition-all duration-300"
              >
                Explore Our Features
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" {...fadeUp}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full border border-[#094d88]/20">
                <Sparkles className="w-4 h-4 text-[#10ac8b]" />
                <span className="text-sm font-semibold text-[#094d88]">AI-Powered Educational Ecosystem</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                Personalized AI-Powered Learning for Students & Institutions
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 dark:text-slate-200 leading-relaxed max-w-xl">
                Transforming learning outcomes through adaptive intelligence, behavioural insights, and real-time analytics.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-[#094d88] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#094d88]/25 hover:shadow-xl hover:shadow-[#094d88]/30 hover:bg-[#0a5a9e] transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-gray-700 dark:bg-slate-900 dark:text-slate-100 px-8 py-4 rounded-full font-semibold border border-gray-200 dark:border-slate-700 hover:border-[#094d88] hover:text-[#094d88] transition-all duration-300"
                >
                  Explore Our Features
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right - 3D Animation */}
            <motion.div className="relative" {...fadeLeft}>
              <div className="relative h-[450px] lg:h-[550px]">
                <BotModelViewer className="w-full h-full" height="100%" autoRotate />

                {/* Floating Cards */}
                <div className="absolute top-8 right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 bg-[#094d88] rounded-xl flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Adaptive Learning</p>
                    <p className="text-xs text-gray-500">Personalized paths</p>
                  </div>
                </div>

                <div className="absolute bottom-24 left-0 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
                  <div className="w-10 h-10 bg-[#10ac8b] rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Real-time Analytics</p>
                    <p className="text-xs text-gray-500">Track progress</p>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-float" style={{animationDelay: '2s'}}>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Resource Optimization</p>
                    <p className="text-xs text-gray-500">Continuous adaptation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY EDGEUP SECTION */}
      {/* ============================================ */}
      <IntersectionObserver>
        <motion.section
          id="features"
          className="py-24 relative z-10 bg-white dark:bg-slate-950"
          {...fadeUp}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Content */}
              <motion.div {...fadeLeft}>
                <span className="inline-block px-4 py-1.5 bg-[#094d88]/10 rounded-full text-[#094d88] text-sm font-semibold mb-6">
                  Why EdgeUp
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                  One Platform, Infinite Possibilities
                </h2>
                <p className="text-lg text-gray-600 dark:text-slate-200 mb-8">
                  A comprehensive AI-powered platform designed to transform how institutions deliver education and how students achieve success.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-[#094d88]/30 hover:shadow-xl hover:shadow-[#10ac8b]/40 hover:scale-105 transition-all duration-300 group"
                >
                  See it in action
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Right - Features List */}
              <motion.div className="space-y-4" {...fadeLeft}>
                {[
                  { icon: Users, title: "Unified Platform", desc: "One platform that unifies students, educators, and institutions" },
                  { icon: Target, title: "Adaptive Learning", desc: "Learning paths tailored to each learner's unique needs" },
                  { icon: Zap, title: "Instant Insights", desc: "Automated assessments with real-time feedback" },
                  { icon: BarChart3, title: "Smart Analytics", desc: "AI-driven analytics for institutional decision-making" },
                  { icon: Award, title: "Performance Focus", desc: "Built to enhance discipline, performance, and consistency" }
                ].map((item, index) => (
                  <div
                    key={index}
                  className="group flex items-start gap-4 p-5 bg-gray-50 dark:bg-slate-900 rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg border border-transparent hover:border-gray-100 dark:hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#094d88] to-[#10ac8b] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-slate-200 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* FOR EVERYONE SECTION */}
      {/* ============================================ */}
      <IntersectionObserver>
        <motion.section
          className="py-24 relative z-10 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900"
          {...fadeUp}
        >
          <div className="container-custom">
            {/* Section Header */}
            <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
              <span className="inline-block px-4 py-1.5 bg-[#10ac8b]/10 rounded-full text-[#10ac8b] text-sm font-semibold mb-6">
                For Everyone
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                Built for Everyone in Education
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-200">
                Tailored solutions for every stakeholder in the learning ecosystem
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "For Students",
                  color: "from-[#094d88] to-[#0a5a9e]",
                  features: ["Personalized learning paths", "AI mentor support 24/7", "Adaptive study schedules", "Progress tracking"]
                },
                {
                  icon: BookOpen,
                  title: "For Teachers",
                  color: "from-[#10ac8b] to-[#0d9488]",
                  features: ["Automated correction", "Smart question generation", "Performance insights", "Curriculum mapping"]
                },
                {
                  icon: HeartHandshake,
                  title: "For Parents",
                  color: "from-[#f59e0b] to-[#d97706]",
                  features: ["Performance monitoring", "SWOT Analysis", "Predictive Insights", "Action Hub", "Career Roadmap"]
                },
                {
                  icon: Building,
                  title: "For Institutions",
                  color: "from-[#094d88] to-[#10ac8b]",
                  features: ["Admin dashboards", "Predictive analytics", "Resource optimization", "Compliance tracking"]
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${card.color} p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                        <card.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[#10ac8b] flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* HOW IT WORKS */}
      {/* ============================================ */}
      <IntersectionObserver>
        <motion.section
          className="py-24 relative z-10 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900"
          {...fadeUp}
        >
          <div className="container-custom">
            <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
              <span className="inline-block px-4 py-1.5 bg-[#10ac8b]/10 rounded-full text-[#10ac8b] text-sm font-semibold mb-6">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                Simple Implementation
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-200">
                Get up and running with EdgeUp quickly
              </p>
            </motion.div>
            <HowItWorksTimeline />
          </div>
        </motion.section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* LEADERSHIP TEAM */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-24 relative z-10 bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#094d88]/10 dark:bg-[#094d88]/20 rounded-full text-[#094d88] text-sm font-semibold mb-6">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-200">
                Meet the visionaries behind EdgeUp's mission
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {[
                {
                  name: "Khalid Mohamed",
                  role: "Chairman and Managing Director",
                  image: "/khalid-mohamed.jpeg",
                  linkedin: "https://www.linkedin.com/in/omsmakhalid/"
                },
                {
                  name: "Jubran Siddique",
                  role: "Chief Executive Officer",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjE2Wy3ZAA_uaEXnz5pvYbmGpxVOhv2q3mg&s",
                  linkedin: "https://www.linkedin.com/in/jubransiddique/"
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-900 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white/80 dark:border-slate-800 shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-[#094d88] dark:text-accent-500 font-medium mb-4">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-xl text-gray-600 dark:text-slate-100 hover:text-[#094d88] hover:shadow-md transition-all border border-slate-100 dark:border-slate-700"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#094d88]/30 hover:shadow-xl hover:shadow-[#10ac8b]/40 hover:scale-105 transition-all duration-300 group"
              >
                Explore Our Mission & Values
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-24 relative z-10">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-[#094d88] via-[#0a5a9e] to-[#10ac8b] rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Learning?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join 150+ institutions already using EdgeUp to deliver personalized, intelligent learning experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#094d88] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default HomePage;
