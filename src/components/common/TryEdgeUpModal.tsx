import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, Play, Shield, BarChart3 } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const TryEdgeUpModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 210, damping: 22 }}
            className="relative w-full max-w-5xl rounded-3xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 via-accent-500/5 to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950" />
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/80 dark:bg-slate-800/80 p-2 shadow-md hover:scale-105 transition"
            >
              <X className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            </button>

            <div className="relative grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 text-primary-500 px-4 py-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    Live preview
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Try EdgeUp in 30 seconds
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Explore a guided snapshot of the EdgeUp dashboard—adaptive cohorts, real-time alerts, and outcome predictions—all in one minimal surface.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6">
                  {[
                    { icon: Play, title: 'Guided flow', desc: 'Follow a curated path with tooltips.' },
                    { icon: Shield, title: 'Safe sandbox', desc: 'No data stored—pure demo mode.' },
                    { icon: BarChart3, title: 'Live metrics', desc: 'See how signals update instantly.' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/50 p-3 flex gap-3 items-start"
                    >
                      <div className="rounded-xl bg-primary-500/10 p-2 text-primary-500 dark:bg-primary-500/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-slate-900 via-primary-500 to-accent-500 text-white p-6 lg:p-8">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_25%)]" />
                <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center text-lg font-bold">EU</div>
                      <div>
                        <p className="text-sm text-white/70">EdgeUp Console</p>
                        <p className="font-semibold">Adaptive Cohort</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-white/70">Live</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/10 border border-white/10 p-4 grid grid-cols-3 gap-4 text-sm">
                    {[
                      { label: 'Engagement', value: '92%', tone: 'text-emerald-300' },
                      { label: 'Completion', value: '78%', tone: 'text-amber-200' },
                      { label: 'Risk', value: '-12%', tone: 'text-rose-200' }
                    ].map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-white/70">{metric.label}</p>
                        <p className={`text-xl font-semibold ${metric.tone}`}>{metric.value}</p>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-white/70" style={{ width: metric.label === 'Risk' ? '40%' : metric.value }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 grid grid-cols-2 gap-3">
                    {[
                      { title: 'AI Mentor', subtitle: '18 active sessions', color: 'from-emerald-400/80 to-teal-300/70' },
                      { title: 'Alerts', subtitle: '5 new at-risk', color: 'from-amber-300/80 to-orange-200/70' },
                      { title: 'Recommendations', subtitle: '12 actions ready', color: 'from-blue-300/80 to-cyan-200/70' },
                      { title: 'Cohorts', subtitle: '4 micro-groups', color: 'from-fuchsia-300/80 to-indigo-200/70' }
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl p-3 bg-white/10 border border-white/10 shadow-inner"
                      >
                        <p className="text-xs text-white/70">{card.title}</p>
                        <p className="font-semibold">{card.subtitle}</p>
                        <div className={`mt-2 h-1.5 rounded-full bg-gradient-to-r ${card.color}`} />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={onClose}
                      className="rounded-full bg-white text-slate-900 font-semibold px-4 py-2 hover:translate-y-[-1px] transition"
                    >
                      Close
                    </button>
                    <button className="rounded-full border border-white/40 px-4 py-2 text-white font-semibold hover:bg-white/10 transition">
                      Launch guided demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TryEdgeUpModal;
