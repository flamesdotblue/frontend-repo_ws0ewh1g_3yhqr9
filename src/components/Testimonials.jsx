import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Martinez',
    role: 'Founder, Fintech Co.',
    quote:
      'Their counsel was decisive in closing our Series B. Impeccable attention to detail and absolute discretion.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'General Counsel, Global Retail',
    quote:
      'Top-tier advocacy. They navigated a sensitive dispute with elegance and won decisively.',
    rating: 5,
  },
  {
    name: 'Amelia Brown',
    role: 'Private Client',
    quote:
      'I felt supported at every step. Clear communication, swift action, and a successful outcome.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Client Testimonials</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Real words from clients we proudly represent.</p>

        <div className="relative mt-10">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 ring-1 ring-slate-300 dark:ring-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 ring-1 ring-slate-300 dark:ring-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mx-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-8 shadow-lg"
              >
                <div className="flex justify-center gap-1 text-amber-500">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-3xl mx-auto">
                  “{testimonials[index].quote}”
                </p>
                <div className="mt-5 text-sm font-medium text-slate-900 dark:text-white">
                  {testimonials[index].name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{testimonials[index].role}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
