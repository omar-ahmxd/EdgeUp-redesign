import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Workflow, Gauge, BarChart } from 'lucide-react';

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Props = {
  steps?: Step[];
};

const defaultSteps: Step[] = [
  {
    title: 'Ingest & Cleanse',
    description: 'Connect SIS/LMS, unify engagement, attendance, and assessment signals.',
    icon: <Sparkles className="h-6 w-6" />
  },
  {
    title: 'Profile & Predict',
    description: 'EdgeUp builds behavioural profiles and predicts risk before it spikes.',
    icon: <Workflow className="h-6 w-6" />
  },
  {
    title: 'Adapt & Coach',
    description: 'AI mentor nudges students, while faculty get prioritized actions.',
    icon: <Gauge className="h-6 w-6" />
  },
  {
    title: 'Measure & Improve',
    description: 'Live dashboards track completion, retention, and operational ROI.',
    icon: <BarChart className="h-6 w-6" />
  }
];

const HowItWorksTimeline: React.FC<Props> = ({ steps = defaultSteps }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative">
      {/* Horizontal connecting line - desktop only */}
      <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] rounded-full opacity-30" />

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100, damping: 20 }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-800 hover:border-[#10ac8b]/30 h-full">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="mt-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#094d88]/10 to-[#10ac8b]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#094d88] dark:text-[#10ac8b]">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#094d88] dark:group-hover:text-[#10ac8b] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#10ac8b]/5 to-transparent rounded-br-3xl rounded-tl-3xl" />
            </div>

            {/* Connector Arrow - desktop only, not on last item */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-[60px] -right-3 z-10 items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksTimeline;
