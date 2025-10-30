import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, Briefcase, FileText } from 'lucide-react';

const areas = [
  {
    icon: Scale,
    title: 'Corporate Law',
    desc: 'M&A, compliance, governance, and cross-border transactions.',
  },
  {
    icon: Briefcase,
    title: 'Employment',
    desc: 'Contracts, disputes, and workplace investigations.',
  },
  {
    icon: Shield,
    title: 'Litigation',
    desc: 'High-stakes disputes with agile courtroom advocacy.',
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    desc: 'Protection, licensing, and enforcement of IP assets.',
  },
];

const Card = ({ Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-3xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
  >
    <div className="flex items-start gap-4">
      <div className="rounded-2xl p-3 bg-gradient-to-br from-indigo-600/10 to-sky-500/10 ring-1 ring-indigo-600/20">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-between">
      <a
        href="#"
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
      >
        Learn more →
      </a>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-500 dark:text-slate-400">
        Tailored counsel
      </div>
    </div>
  </motion.div>
);

export default function PracticeAreas() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/60 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Practice Areas</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              A boutique portfolio of services designed for precision outcomes.
            </p>
          </div>
          <a href="#book" className="hidden sm:inline text-sm font-semibold text-slate-700 dark:text-slate-200 hover:underline">Book a consultation</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a) => (
            <Card key={a.title} Icon={a.icon} title={a.title} desc={a.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
