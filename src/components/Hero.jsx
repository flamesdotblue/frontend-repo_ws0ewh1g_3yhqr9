import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Shield, Star } from 'lucide-react';

function Counter({ to = 100, duration = 1.8, suffix = '' }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const value = Math.floor(progress * (to - start) + start);
      node.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, suffix]);
  return <span ref={nodeRef} />;
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 80]);
  const y2 = useTransform(scrollY, [0, 400], [0, 40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8]);

  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-transparent dark:from-slate-900 dark:via-slate-900/95 dark:to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Elite Legal Counsel for Complex Matters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              viewport={{ once: true }}
              className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              We combine decades of courtroom experience with modern strategy. Our
              boutique practice delivers trusted results with discretion and precision.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all"
              >
                <Calendar className="h-5 w-5" /> Book Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-slate-800 dark:text-slate-200 ring-1 ring-slate-300/70 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Explore Practice Areas
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-5 shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  <Counter to={1200} />+
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">Clients Served</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-5 shadow-sm">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  <Counter to={98} suffix="%" />
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">Success Rate</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-3xl font-bold text-amber-500">
                  <Star className="h-7 w-7 fill-amber-400 text-amber-400" /> 4.9
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] w-full rounded-3xl ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1920&auto=format&fit=crop"
                alt="Confident legal team"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-sky-500/20 mix-blend-multiply" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 ring-1 ring-slate-200 dark:ring-slate-700 shadow-md">
                  <Shield className="h-4 w-4 text-indigo-600" /> Trusted by Fortune 500 executives
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
