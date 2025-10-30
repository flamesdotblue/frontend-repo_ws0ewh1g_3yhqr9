import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-white focus:dark:bg-slate-900 focus:ring-2 focus:ring-indigo-600 rounded">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <PracticeAreas />
        <Testimonials />

        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Get in Touch</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl">
                  Schedule a confidential consultation. We respond within one business day.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl p-6 ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                    <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                    <div className="mt-1 font-medium text-slate-900 dark:text-white">contact@lexandco.com</div>
                  </div>
                  <div className="rounded-2xl p-6 ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                    <div className="text-sm text-slate-500 dark:text-slate-400">Phone</div>
                    <div className="mt-1 font-medium text-slate-900 dark:text-white">+1 (234) 567-890</div>
                  </div>
                </div>
              </div>

              <div>
                <form className="rounded-3xl p-6 ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                    <input type="text" required className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Jane Doe" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                      <input type="email" required className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="jane@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                      <input type="tel" className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="+1 234 567 890" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                    <textarea rows="4" className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div>© {new Date().getFullYear()} Lex & Co. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Accessibility</a>
          </div>
        </div>
      </footer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(79,70,229,0.08),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(79,70,229,0.18),transparent)]"
      />
    </div>
  );
}
