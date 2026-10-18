"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, FileText, MapPin, Code2, Globe2 } from "lucide-react";

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Friendly ambient background glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-500/12 via-amber-400/10 to-emerald-400/12 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-8 text-center sm:text-left">
          {/* Personal Greeting & Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200">
              <span className="text-base">👋</span>
              <span>
                Hello, I&apos;m{" "}
                <strong className="text-indigo-600 dark:text-indigo-400">
                  Oluwadarasimi Omojola
                </strong>
              </span>
              <span className="text-slate-400 dark:text-slate-600 font-normal">
                (call me Darasimi)
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Frontend Roles</span>
            </div>
          </motion.div>

          {/* Main Headline — Personal & Authoritative */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              A frontend engineer who builds{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-amber-500 bg-clip-text text-transparent">
                features users love,
              </span>{" "}
              backed by systems that don&apos;t break.
            </motion.h1>

            {/* Conversational & Confident Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl"
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
            className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Based in Lagos, Nigeria (WAT / UTC+1)</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">
              •
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Seamless overlap with UK, EU & US teams</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">
              •
            </span>
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Next.js · React 19 · TypeScript · TanStack Query</span>
            </span>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-500/20 active:scale-98 transition-all"
            >
              <span>See What I&apos;ve Built</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-98"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>View Resume</span>
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span>About me</span>
            </Link>
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
      </div>
    </section>
  );
}
