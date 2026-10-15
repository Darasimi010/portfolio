"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Terminal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const engineeringMetrics = [
    {
      metric: "71 Files · 10.7k+ Additions",
      label: "Braandly Feature Architecture",
      sub: "Branding suite, multi-cache sync & rollback",
      badge: "Scale & Depth",
      color: "border-indigo-200 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/20",
    },
    {
      metric: "3 Server Handlers · 42-Day Grid",
      label: "Holford Homes BFF & Timezones",
      sub: "Upstream secret injection & Intl UTC normalization",
      badge: "Systems Thinking",
      color: "border-amber-200 dark:border-amber-800/40 text-amber-600 dark:text-amber-400 bg-amber-50/60 dark:bg-amber-950/20",
    },
    {
      metric: "Multi-Role API Integration",
      label: "CycleLink Backend Transition",
      sub: "Replacing simulated timers & securing browser state",
      badge: "Product Reliability",
      color: "border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/20",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient friendly glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-amber-400/10 to-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-medium text-slate-700 dark:text-slate-300"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>Beyond surface-level interfaces</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              Frontend Systems Engineering
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
          >
            Engineering resilient interfaces,{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-amber-500 bg-clip-text text-transparent">
              connected to real backend systems.
            </span>
          </motion.h1>

          {/* Positioning statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            I am a frontend engineer who takes ownership of complex product features, traces bugs to their underlying causes, connects user interfaces to backend services, and improves the reliability, security, and usability of real applications.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-500/20 active:scale-98 transition-all"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-98"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Recruiter Resume</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Get in touch</span>
            </Link>
          </motion.div>

          {/* Tech stack badge strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium"
          >
            <span className="text-slate-400 dark:text-slate-500 mr-1">Primary Toolset:</span>
            {["Next.js App Router", "React 19", "TypeScript", "TanStack React Query", "Tailwind CSS", "REST & OpenAPI", "Zustand"].map(
              (item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* 3 Metric Cards highlighting the 3 equal projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 max-w-5xl mx-auto"
        >
          {engineeringMetrics.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${item.color}`}>
                  {item.badge}
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">0{idx + 1}</span>
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {item.metric}
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
