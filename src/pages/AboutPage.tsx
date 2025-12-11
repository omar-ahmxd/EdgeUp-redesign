import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  ArrowRight,
  Brain,
  Target,
  Zap,
  Heart,
  Eye,
  Sparkles,
  Quote,
  Users,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About EdgeUp - Who We Are";
  }, []);

  return (
    <main className="overflow-hidden relative page-surface">
      <div className="page-overlay" />

      {/* ============================================ */}
      {/* HERO - WHO WE ARE */}
      {/* ============================================ */}
      <section className="relative z-10 pt-28 pb-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#094d88]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#10ac8b]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent">
              About EdgeUp
            </h1>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ============================================ */}
      {/* 2. ABOUT EDGEUP (Company Overview) */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="pt-10 pb-16 relative z-10">
          <div className="container-custom">
            <div className="space-y-8">
              <div className="max-w-3xl" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Company Overview
                </h2>
              </div>

              <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
                <p className="text-lg text-gray-600 leading-relaxed">
                  EdgeUp is an intelligence-first EdTech ecosystem built to transform how learning works.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We create AI-powered learning systems that personalise, humanise, and radically improve how students learn, how educators teach, and how institutions operate.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with the belief that every individual deserves a learning path as unique as their potential, EdgeUp integrates behavioural science, data intelligence, and computational design to create experiences that go beyond content delivery—they build capability.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We serve learners, educators, coaching institutions, higher education, and corporate learning partners across India, expanding steadily into global academic and workforce ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* MISSION, VISION, PURPOSE */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
          <div className="container-custom">
            {/* Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 1. Mission */}
              <div data-aos="fade-up" data-aos-delay="0">
                <div className="h-full bg-gradient-to-br from-[#094d88] to-[#0a5a9e] rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Mission</h3>
                    <p className="text-white/90 leading-relaxed mb-4">
                      We design every learning experience through evidence — observing behaviour, analysing data, and refining intelligence so each interaction becomes smarter, simpler, and more human.
                    </p>
                    <p className="text-sm text-white/70 italic">
                      This mission is our operating system—how we create, how we decide, how we optimise.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Vision */}
              <div data-aos="fade-up" data-aos-delay="150">
                <div className="h-full bg-gradient-to-br from-[#10ac8b] to-[#0d9488] rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Vision</h3>
                    <p className="text-white/90 leading-relaxed">
                      To empower every learner and institution with intelligence that personalises, humanises, and revolutionises education.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Purpose */}
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Purpose</h3>
                    <p className="text-white/80 leading-relaxed">
                      To replace one-size-fits-all systems with intelligence that helps every individual discover, grow, and go beyond their potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* 6. ORIGIN STORY (Founding Story) */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Timeline Visual */}
              <div className="relative order-2 lg:order-1" data-aos="fade-right">
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#094d88] via-[#10ac8b] to-[#094d88]"></div>

                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {[
                      {
                        icon: "01",
                        title: "The Problem",
                        desc: "Education was stuck in a one-size-fits-all system. Everyone learned the same way, at the same pace, through the same evaluation methods, regardless of their unique potential.",
                        color: "bg-[#094d88]"
                      },
                      {
                        icon: "02",
                        title: "The Insight",
                        desc: "EdgeUp was created to solve the biggest blind spot in education: the gap between human potential and system capability.",
                        color: "bg-[#10ac8b]"
                      },
                      {
                        icon: "03",
                        title: "The Solution",
                        desc: "The founders combined their backgrounds in behavioural research, technology, and learning design to build something different—systems that learn from the learner.",
                        color: "bg-gradient-to-r from-[#094d88] to-[#10ac8b]"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 relative">
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg`}>
                          <span className="text-white font-bold text-sm">{item.icon}</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1 hover:shadow-xl transition-shadow">
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Origin Story
                </h2>

                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    EdgeUp began with a simple but powerful frustration—education was stuck in a one-size-fits-all system. Everyone learned the same way, at the same pace, through the same evaluation methods, regardless of their unique potential.
                  </p>
                  <p className="font-semibold text-gray-900">
                    We knew this had to change.
                  </p>
                  <p>
                    EdgeUp was created to solve the biggest blind spot in education: the gap between human potential and system capability.
                  </p>
                  <p>
                    The founders combined their backgrounds in behavioural research, technology, and learning design to build something different—systems that learn from the learner.
                  </p>
                  <p>
                    From early prototypes built on basic behaviour-mapping models to today's adaptive intelligence systems, EdgeUp has always stood for one thing:
                  </p>
                </div>

                {/* Quote Card */}
                <div className="mt-8 relative">
                  <div className="bg-gradient-to-br from-[#094d88] to-[#10ac8b] rounded-2xl p-8 text-white relative overflow-hidden">
                    <Quote className="absolute top-4 left-4 w-12 h-12 text-white/20" />
                    <p className="text-xl md:text-2xl font-bold italic relative z-10 pl-4">
                      "Human potential deserves intelligent systems."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* 7. WHAT MAKES US UNIQUE */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-20 relative z-10 bg-gray-50">
          <div className="container-custom">
            {/* Header */}
            <div className="max-w-3xl mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                EdgeUp operates at the intersection of intelligence, behaviour, and human experience.
              </p>
              <p className="text-lg text-gray-600">
                Our uniqueness is defined by:
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-6">
                Signature Differentiators
              </h3>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Brain,
                  title: "Super Intelligence Engine",
                  desc: "that adapts learning journeys",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Eye,
                  title: "Behavioural Evidence Loop (BEL)",
                  desc: "guiding product evolution",
                  gradient: "from-teal-500 to-emerald-500"
                },
                {
                  icon: Heart,
                  title: "Human-First Learning Design",
                  desc: "that feels personal, not mechanical",
                  gradient: "from-rose-500 to-pink-500"
                },
                {
                  icon: Target,
                  title: "Outcome-Driven Systems",
                  desc: "focused on measurable capability building",
                  gradient: "from-violet-500 to-purple-500"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Culture Philosophy Banner */}
            <div className="relative" data-aos="fade-up">
              <div className="bg-gradient-to-r from-[#094d88] via-[#0a5a9e] to-[#10ac8b] rounded-3xl p-10 md:p-12 text-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-3xl">
                  <p className="text-sm uppercase tracking-widest mb-4 text-white/70">Our Culture Philosophy</p>
                  <p className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                    Intelligence is our craft. Humanity is our compass. Discipline is our backbone.
                  </p>
                  <p className="text-white/80">
                    We believe culture is a daily practice—reflected in how we design, communicate, collaborate, and solve problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* ============================================ */}
      {/* 1.6 OUR PROMISE TO CUSTOMERS */}
      {/* ============================================ */}
      <IntersectionObserver>
        <section className="py-12 md:py-14 relative z-10 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-8" data-aos="fade-up">
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Promise to Customers</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We design learning environments that feel intelligent, humane, and built for real-world progress—never one-size-fits-all.
                </p>
                <p className="text-base text-gray-500">Here’s what that looks like in practice.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Precision', desc: 'Decisions grounded in evidence, not guesswork.' },
                  { title: 'Personalisation', desc: 'Adaptive paths tuned to each learner and cohort.' },
                  { title: 'Empathy', desc: 'Human-centered experiences that respect context.' },
                  { title: 'Discipline', desc: 'Operational rigor in how we build and ship.' },
                  { title: 'Measurable Outcomes', desc: 'Clear lift in retention, mastery, and confidence.' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-white/80 dark:bg-slate-900/60 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white/80 dark:bg-slate-900/60 dark:border-slate-800 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#094d88] mb-2">How we deliver</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>• Evidence-led releases informed by behaviour and data.</li>
                    <li>• Adaptive systems that respond to learners and institutions.</li>
                    <li>• Transparent metrics so progress is visible and actionable.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white/80 dark:bg-slate-900/60 dark:border-slate-800 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#094d88] mb-2">What this means for you</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>• Cohorts feel guided, not overwhelmed.</li>
                    <li>• Educators get clarity on where to intervene.</li>
                    <li>• Institutions see measurable lift in outcomes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

     {/* ============================================ */}
     {/* TEAM SHOWCASE */}
     {/* ============================================ */}
     <IntersectionObserver>
       <section className="py-20 relative z-10 bg-white" id="team">
         <div className="container-custom">
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

export default AboutPage;
