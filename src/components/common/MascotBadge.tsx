import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

type Props = {
  label?: string;
};

const MascotBadge: React.FC<Props> = ({ label = 'EdgeUp Copilot' }) => {
  return (
    <motion.div
      className="inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-4 py-2 shadow-sm"
      whileHover={{ y: -4, rotate: -1 }}
      transition={{ type: 'spring', stiffness: 240, damping: 16 }}
    >
      <div className="relative">
        <motion.div
          className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center relative overflow-hidden"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <Bot className="h-5 w-5" />
          <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-white"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', delay: 0.2 }}
            />
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-white"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>
        </motion.div>
        <motion.span
          className="absolute -right-1 -bottom-1 text-xs"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <Sparkles className="h-3 w-3 text-amber-300" />
        </motion.span>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">AI Mascot</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-white">{label}</p>
      </div>
    </motion.div>
  );
};

export default MascotBadge;
