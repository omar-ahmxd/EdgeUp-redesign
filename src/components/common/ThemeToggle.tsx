import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative inline-flex shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-2.5 sm:px-3 py-2 shadow-sm backdrop-blur-md hover:border-primary-500 transition"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -20, y: 4 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, rotate: 20, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-slate-100"
          >
            <Moon className="h-4 w-4" />
            <span className="hidden text-sm font-semibold sm:inline">Dark</span>
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 20, y: -4 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, rotate: -20, y: 4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-slate-800"
          >
            <Sun className="h-4 w-4" />
            <span className="hidden text-sm font-semibold sm:inline">Light</span>
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        layout
        className={`absolute inset-0 -z-10 rounded-full ${
          isDark ? 'bg-slate-800/60' : 'bg-white/80'
        }`}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      />
    </button>
  );
};

export default ThemeToggle;
