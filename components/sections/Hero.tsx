"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  MapPin,
  Code2,
  Globe2,
  Mail,
} from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      title: "Product Feature Ownership",
      desc: "Architected multi-page workflows, quiz diagnostics, and workspace suites from initial scoping to production.",
      tag: "Feature Engineering",
      color:
        "from-indigo-500/20 to-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/40",
    },
    {
      title: "API Integration & Systems",
      desc: "Engineered Next.js server proxy handlers, dynamic calendars, and timezone-aware appointment conversions.",
      tag: "BFF & Timezones",
      color:
        "from-amber-500/20 to-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/40",
    },
    {
      title: "Resilient State & Security",
      desc: "Built optimistic updates across 3 TanStack Query cache scopes with rollback; eliminated sensitive data from browser storage.",
      tag: "Cache & Security",
      color:
        "from-emerald-500/20 to-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 py-8 sm:py-16">
      {/* 1. Hero Section */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-16 bg-gradient-to-b from-indigo-50/70 via-purple-50/40 to-transparent dark:from-slate-900/60 dark:via-slate-900/30 dark:to-transparent border border-indigo-100/80 dark:border-slate-800/80 shadow-xs overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400/20 via-violet-400/15 to-pink-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/15 to-sky-400/15 blur-3xl pointer-events-none" />

          <div className="relative space-y-6 max-w-4xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-2xs text-xs font-semibold text-slate-800 dark:text-slate-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                Hello, I&apos;m{" "}
                <strong className="text-indigo-600 dark:text-indigo-400">
                  Oluwadarasimi Omojola
                </strong>
                , a Frontend Engineer
              </span>
            </motion.div>
            {/* Main Headline — Personal & Authoritative */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-50 tracking-tight leading-[1.1]"
            >
              A frontend engineer who builds{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 dark:from-indigo-400 dark:via-violet-400 dark:to-pink-400">
                features users love,
              </span>{" "}
              backed by systems that don&apos;t break.
            </motion.h1>

            {/* Conversational & Confident Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal max-w-3xl"
            >
              I don't just turn Figma mockups into divs. I take ownership of
              complex product workflows, track down elusive state bugs to their
              root causes, bridge user interfaces to backend APIs, and build
              reliable software that real people depend on every day.
            </motion.p>
          </div>

          {/* Personal context & Location pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mt-3.5"
          >
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-amber-500" />
              <span>
                Next.js · React.js · TypeScript · TailwindCSS · TanStack Query ·
                Git/Github
              </span>
            </span>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>See What I&apos;ve Built</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/resume"
              className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>View My Resume</span>
            </Link>

            <a
              href="#contact"
              className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Quick "What I Bring To Your Team" Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-left shadow-xs hover:shadow-md transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
