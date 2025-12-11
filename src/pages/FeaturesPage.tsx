import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  Target,
  Building,
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  Clock,
  FileText,
  Briefcase,
  Heart,
  Shield,
  Zap,
  Award,
  LineChart,
  PieChart,
  Calculator,
  MessageSquare,
  Calendar,
  BookMarked,
  Compass,
  Activity,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const FeaturesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Features in Action - EdgeUp";
  }, []);

  const managementFeatures = [
    { icon: Building, text: "Institutional Health: Academics, compliance & campus analytics" },
    { icon: TrendingUp, text: "Predictive Intelligence: Enrollment, retention & placement forecasting" },
    { icon: AlertCircle, text: "Risk Mitigation: Incident tracking & risk dashboard" },
    { icon: DollarSign, text: "Financial Management: Fees, scholarships & cost optimization" }
  ];

  const teacherFeatures = [
    { icon: Users, text: "Class Operations: Attendance & live engagement tracking" },
    { icon: Brain, text: "Smart Assessment: AI question generation & auto-grading" },
    { icon: BookMarked, text: "Content & Curriculum: Lesson planner & curriculum mapping" },
    { icon: Compass, text: "Student Development: Mentee tracking & career predictions" },
    { icon: Award, text: "Professional Learning: Peer comparison & development programs" }
  ];

  const studentFeatures = [
    { icon: BookOpen, text: "Study Center: Timetable, assignments & digital library" },
    { icon: MessageSquare, text: "Smart Assistant: eUstad™ AI mentor & deadline tracker" },
    { icon: Briefcase, text: "Career & Placement: Resume builder, interview prep & job matching" },
    { icon: Target, text: "Job Matcher: PASCO™ assessment & career explorer" },
    { icon: Heart, text: "Mental Health & Wellness: Self-assessments & SOS support" }
  ];

  const allFeatures = [
    'eUstad™', 'PASCO™', 'Question Paper Generator', 'Auto Evaluation',
    'Live Engagement Monitor', 'Lesson Planner', 'Curriculum Mapper',
    'Resume Builder', 'Interview Prep', 'Job Analyzer', 'Career Path Explorer',
    'Skill Gap Analyzer', 'Enrollment Predictor', 'Result Predictor',
    'Placement Predictor', 'Retention Analyzer', 'AI Cost Optimizer',
    'Risk Dashboard', 'Wellness Dashboard'
  ];

  return (
    <main className="overflow-hidden relative page-surface">
      <div className="page-overlay" />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative z-10 pt-28 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#094d88]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#10ac8b]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm mb-8">
              <Sparkles className="w-4 h-4 text-[#10ac8b]" />
              <span className="text-sm font-semibold text-gray-700">Complete Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
              <span className="bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
                Features in Action
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Your Complete Education Solution
            </p>

            {/* Platform Equation */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-2xl text-white">
              <span className="font-semibold">AI Agent</span>
              <span className="text-white/60">+</span>
              <span className="font-semibold">LMS</span>
              <span className="text-white/60">+</span>
              <span className="font-semibold">ERP</span>
              <span className="text-white/60">=</span>
              <span className="font-bold">One Holistic Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES GRID */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* For Management */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden" data-aos="fade-up" data-aos-delay="0">
                <div className="bg-[#094d88] p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Building className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">For Management</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {managementFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#094d88]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <feature.icon className="w-4 h-4 text-[#094d88]" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* For Teachers */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden" data-aos="fade-up" data-aos-delay="150">
                <div className="bg-[#10ac8b] p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <BookOpen className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">For Teachers</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {teacherFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#10ac8b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <feature.icon className="w-4 h-4 text-[#10ac8b]" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* For Students */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-gradient-to-r from-[#094d88] to-[#10ac8b] p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">For Students</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {studentFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <feature.icon className="w-4 h-4 text-[#094d88]" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* HIGHLIGHT - eUstad™ & PASCO™ */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-[#094d88]/10 rounded-full text-[#094d88] text-sm font-semibold mb-6">
                Highlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Flagship Products
              </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* eUstad™ */}
              <div className="group" data-aos="fade-up" data-aos-delay="0">
                <div className="h-full bg-gradient-to-br from-[#094d88] to-[#0a5a9e] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">eUstad™</h3>
                        <p className="text-white/70">Your 24/7 AI Mentor</p>
                      </div>
                    </div>

                    <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                      Understands. Supports. Tracks. Adapts. Delivers.
                    </p>

                    <ul className="space-y-3">
                      {['Personalized learning paths', 'Real-time doubt resolution', 'Progress tracking & insights', 'Adaptive study schedules'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-white/70 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* PASCO™ */}
              <div className="group" data-aos="fade-up" data-aos-delay="150">
                <div className="h-full bg-gradient-to-br from-[#10ac8b] to-[#0d9488] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">PASCO™</h3>
                        <p className="text-white/70">The Science Behind Personalisation</p>
                      </div>
                    </div>

                    <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                      Personality. Aptitude. Skills. Character. Optimization.
                    </p>

                    <ul className="space-y-3">
                      {['Psychometric profiling', 'Skill gap analysis', 'Career path recommendations', 'Behavioral insights'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-white/70 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* ALL FEATURES */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10 bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-[#10ac8b]/10 dark:bg-[#10ac8b]/20 rounded-full text-[#10ac8b] text-sm font-semibold mb-6">
                Our Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                19+ AI-Powered Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-200">
                Everything you need to transform education, all in one platform.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto" data-aos="fade-up">
              {allFeatures.map((feature, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-gray-100 dark:bg-slate-800/80 text-gray-700 dark:text-slate-100 rounded-full font-medium text-sm hover:bg-gradient-to-r hover:from-[#094d88] hover:to-[#10ac8b] hover:text-white transition-all duration-300 cursor-default border border-gray-200 dark:border-slate-700"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="text-center text-gray-500 dark:text-slate-300 mt-8" data-aos="fade-up">
              ...and more.
            </p>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* HOW IT WORKS */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-[#094d88]/10 rounded-full text-[#094d88] text-sm font-semibold mb-6">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Simple Implementation
              </h2>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Setup", desc: "System integration and configuration tailored to your institution", icon: Shield },
                  { step: "02", title: "Migrate", desc: "Secure and seamless data transfer from existing systems", icon: Clock },
                  { step: "03", title: "Train", desc: "Comprehensive staff training sessions for all users", icon: Users },
                  { step: "04", title: "Launch", desc: "Go live with dedicated support and monitoring", icon: Zap }
                ].map((item, index) => (
                  <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#094d88] to-[#10ac8b] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                        <item.icon className="h-9 w-9 text-white" />
                      </div>
                      <span className="absolute -top-2 -left-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-[#094d88] border-2 border-[#094d88] shadow-md">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
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
                  See EdgeUp in Action
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Experience the full power of our AI-powered platform with a personalized demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#094d88] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
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
    </main>
  );
};

export default FeaturesPage;
