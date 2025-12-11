import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  company: string;
};

type Props = {
  testimonials?: Testimonial[];
  autoPlayMs?: number;
  showHeading?: boolean;
};

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Amelia Chen',
    role: 'Dean of Learning',
    company: 'Northbridge University',
    quote: 'EdgeUp aligns faculty and student success teams in one console. Intervention time dropped from weeks to hours.'
  },
  {
    name: 'Luis Martinez',
    role: 'Director of Analytics',
    company: 'FutureSkills Institute',
    quote: 'The AI mentor meets students where they are—engagement is up 28% with zero extra admin burden.'
  },
  {
    name: 'Priya Nair',
    role: 'Head of Digital Programs',
    company: 'Summit Academy',
    quote: 'We finally have a live picture of risk, readiness, and outcomes. EdgeUp feels like autopilot for academics.'
  }
];

const TestimonialCarousel: React.FC<Props> = ({
  testimonials = defaultTestimonials,
  autoPlayMs = 5000,
  showHeading = true
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const dragThreshold = 80;

  const safeTestimonials = useMemo(() => testimonials.filter(Boolean), [testimonials]);
  const total = safeTestimonials.length;
  const current = safeTestimonials[index % total] ?? safeTestimonials[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex(prev => (prev + 1) % total);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, total]);

  const paginate = (step: 1 | -1) => {
    setDirection(step);
    setIndex(prev => (prev + step + total) % total);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-10">
      {showHeading && (
        <div className="flex items-center gap-3 mb-6 text-primary-500">
          <Quote className="h-6 w-6" />
          <p className="font-semibold text-slate-900 dark:text-white">Trusted by leading institutions</p>
        </div>
      )}

      <div className="relative min-h-[220px] sm:min-h-[200px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 80 : -80, rotateY: direction === 1 ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction === 1 ? -80 : 80, rotateY: direction === 1 ? -8 : 8, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            className="space-y-4 absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > dragThreshold) paginate(-1);
              if (info.offset.x < -dragThreshold) paginate(1);
            }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-slate-800 dark:text-slate-100">
              “{current?.quote}”
            </p>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center font-semibold">
                {current?.name.slice(0, 1)}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{current?.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {current?.role} · {current?.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {safeTestimonials.map((_, i) => (
            <motion.span
              key={i}
              layout
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-primary-500' : 'w-2 bg-slate-200 dark:bg-slate-700'}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(-1)}
            className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:-translate-y-0.5 transition"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:-translate-y-0.5 transition"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
