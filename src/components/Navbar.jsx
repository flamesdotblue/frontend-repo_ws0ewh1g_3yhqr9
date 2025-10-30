import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { Moon, Sun, Phone, Calendar } from 'lucide-react';

const NavLink = ({ children, href = '#' }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <MotionConfig reducedMotion="user">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#"
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 ring-4 ring-indigo-600/10 shadow-lg shadow-indigo-600/20" />
              <div className="leading-tight">
                <span className="block text-base font-semibold tracking-tight text-slate-900 dark:text-white">Lex & Co.</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">Attorneys at Law</span>
              </div>
            </motion.a>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#services">Practice Areas</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#book"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-shadow"
              >
                <Calendar className="h-4 w-4" /> Book Consultation
              </a>
              <a
                href="tel:+1234567890"
                className="hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Phone className="h-4 w-4" /> +1 (234) 567-890
              </a>
              <button
                aria-label="Toggle color scheme"
                onClick={onToggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-slate-300/60 dark:ring-slate-700/60 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-amber-400" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </MotionConfig>
  );
}
