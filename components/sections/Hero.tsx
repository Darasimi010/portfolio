"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Database,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TanStack Query",
  "REST APIs",
];

const proofPoints = [
  {
    icon: Workflow,
    title: "Consistent application state",
    detail:
      "Optimistic updates across three TanStack Query cache scopes, with rollback on failure.",
  },
  {
    icon: ShieldCheck,
    title: "Careful API boundaries",
    detail:
      "Next.js route handlers for upstream requests, credentials and booking-time normalization.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function EngineeringSnapshot() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25, ease }}
      aria-label="A snapshot of my engineering approach"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div
        className="absolute -inset-5 rounded-[2.5rem] bg-emerald-500/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[1.8rem] border border-emerald-900/70 bg-[#0d1711] p-5 text-white shadow-[0_28px_90px_-38px_rgba(16,185,129,0.35)] sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300/75">
              Engineering mindset
            </p>
            <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl">
              Beyond the interface
            </h2>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/10 text-emerald-200">
            <Braces className="h-5 w-5" strokeWidth={1.7} />
          </span>
        </div>

        <div className="py-6">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3">
            <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.045] p-3 sm:p-3.5">
              <Layers3 className="mb-3 h-4 w-4 text-emerald-300" />
              <p className="text-xs font-semibold text-white">Interface</p>
              <p className="mt-1 text-[10px] text-slate-400">React · Next.js</p>
            </div>
            <ArrowRight
              className="h-4 w-4 text-emerald-300/70"
              aria-hidden="true"
            />
            <div className="min-w-0 rounded-xl border border-emerald-300/25 bg-emerald-300/[0.09] p-3 sm:p-3.5">
              <Network className="mb-3 h-4 w-4 text-emerald-200" />
              <p className="text-xs font-semibold text-white">Server</p>
              <p className="mt-1 text-[10px] text-emerald-100/65">
                API boundary
              </p>
            </div>
            <ArrowRight
              className="h-4 w-4 text-emerald-300/70"
              aria-hidden="true"
            />
            <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.045] p-3 sm:p-3.5">
              <Database className="mb-3 h-4 w-4 text-emerald-300" />
              <p className="text-xs font-semibold text-white">Data</p>
              <p className="mt-1 text-[10px] text-slate-400">APIs · State</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            I care about how each layer communicates, handles failure and keeps
            the experience trustworthy.
          </p>
        </div>

        <div className="space-y-3 border-t border-white/10 pt-5">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + index * 0.12, ease }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-200">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-100">
                    {point.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                    {point.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div
          className="pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full border border-emerald-200/[0.07]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full border border-emerald-200/[0.05]"
          aria-hidden="true"
        />
      </div>
    </motion.aside>
  );
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-[#090d16]"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-emerald-500/[0.07] blur-3xl dark:bg-emerald-400/[0.055]" />
          <div className="absolute -left-48 bottom-[-18rem] h-[30rem] w-[30rem] rounded-full bg-slate-200/50 blur-3xl dark:bg-emerald-950/20" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease }}
              className="mb-5 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 sm:text-base"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="text-[clamp(3rem,7.5vw,6.8rem)] font-bold leading-[0.91] tracking-[-0.075em] text-slate-950 dark:text-white"
            >
              Oluwadarasimi
              <span className="mt-2 block text-emerald-700 dark:text-emerald-400">
                Omojola
                <span className="text-slate-300 dark:text-slate-700">.</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease }}
            >
              <p className="mt-8 max-w-2xl text-xl font-medium leading-snug tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl lg:text-[1.75rem]">
                I&apos;m a software engineer who builds dependable product
                interfaces that work beautifully and hold up under the hood.
              </p>
              <p className="mt-5 max-w-[39rem] text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
                I turn complex product workflows into dependable experiences. I
                connect user interfaces to backend services, trace bugs to their
                root causes, and think carefully about state, system boundaries,
                what happens when things go wrong and build reliable software
                that real people depend on every day.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-600 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-500 dark:text-[#07130c] dark:hover:bg-emerald-400"
                >
                  Explore my work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900"
                >
                  View resume <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
                >
                  Get in touch <ArrowDownRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="mt-11 border-t border-slate-200/80 pt-5 dark:border-slate-800"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Tools I work with
              </p>
              <ul
                className="flex flex-wrap gap-x-4 gap-y-2.5"
                aria-label="Core technology stack"
              >
                {stack.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-[13px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
                Currently exploring{" "}
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  Go and backend engineering.
                </span>
              </p>
            </motion.div>
          </div>

          <EngineeringSnapshot />
        </div>
      </section>
    </MotionConfig>
  );
}
