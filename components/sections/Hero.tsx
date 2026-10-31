"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";

const NAME = { first: "Oluwadarasimi", last: "Omojola" };
const ROLE = "Frontend Engineer";

const STACK = [
  "Next.js",
  "React.js",
  "TypeScript",
  "TailwindCSS",
  "TanStack Query",
  "Git/GitHub",
  "API Integration",
];

const HIGHLIGHTS = [
  {
    title: "API Integration & Systems",
    desc: "Engineered Next.js server proxy handlers, dynamic calendars, and timezone-aware appointment conversions.",
  },
  {
    title: "Resilient State & Security",
    desc: "Built optimistic updates across 3 TanStack Query cache scopes with rollback; eliminated sensitive data from browser storage.",
  },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

function RevealLine({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="-my-[0.09em] block overflow-hidden py-[0.09em]">
      <motion.span
        className="block"
        initial={{ y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease: EASE_OUT }}
      >
        {children}
      </motion.span>
    </span>
  );
}
/* Left: name, pitch, actions                                                */

function Intro() {
  return (
    <div className="order-last text-center [container-type:inline-size] lg:order-none lg:text-left">
      <h1
        id="hero-title"
        className="text-[length:clamp(2rem,12.5cqw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-slate-950 dark:text-white"
      >
        <span className="mb-[0.22em] block text-[length:max(1rem,0.2em)] font-medium leading-none tracking-normal text-slate-500 dark:text-slate-400">
          Hello, I&apos;m
        </span>
        <RevealLine delay={0.7}>{NAME.first}</RevealLine>
        <RevealLine delay={1.1}>{NAME.last}</RevealLine>
        <span className="sr-only"> – {ROLE}</span>
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <p
          className={`mx-auto mt-7 max-w-2xl text-balance text-2xl font-medium leading-snug tracking-tight text-slate-800 sm:text-[1.75rem] lg:mx-0 dark:text-slate-100`}
        >
          A software engineer who builds features users love, backed by systems
          that don&apos;t break.
        </p>

        <p className="mx-auto mt-4 max-w-[34rem] text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400">
          I don&apos;t just turn Figma mockups into divs. I take ownership of
          complex product workflows, track down elusive state bugs to their root
          causes, bridge user interfaces to backend APIs, and build reliable
          software that real people depend on every day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
          <a
            href="#projects"
            className={`inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 active:scale-[0.98] ${FOCUS}`}
          >
            See what I&apos;ve built
          </a>
          <Link
            href="/resume"
            className={`inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 active:scale-[0.98] dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 ${FOCUS}`}
          >
            View my resume
          </Link>
          <a
            href="#contact"
            className={`rounded-full px-3 py-3 text-sm font-semibold text-slate-700 underline decoration-slate-300 decoration-2 underline-offset-[6px] transition hover:decoration-indigo-500 dark:text-slate-200 dark:decoration-slate-600 dark:hover:decoration-indigo-400 ${FOCUS}`}
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// Device mockup illustration component
const DeviceMockups = () => (
  <div className="relative w-full max-w-xl">
    {/* Glowing backdrop */}
    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-60"></div>

    {/* Laptop */}
    <div className="relative glass-card rounded-xl p-3 shadow-2xl">
      <div className="bg-[#0f0a1f] rounded-lg p-4 font-mono text-xs text-left overflow-hidden">
        <div className="flex gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-1.5 text-[10px] sm:text-xs text-white">
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-300">developer</span> = {"{"}
          </p>

          <p className="pl-4">
            <span className="text-pink-400">name</span>:{" "}
            <span className="text-green-300">&apos;Oluwadarasimi&apos;</span>,
          </p>

          <p className="pl-4">
            <span className="text-pink-400">role</span>:{" "}
            <span className="text-green-300">
              &apos;Frontend Engineer&apos;
            </span>
            ,
          </p>

          <p className="pl-4">
            <span className="text-pink-400">stack</span>: [
            <span className="text-orange-300">&apos;TypeScript&apos;</span>,{" "}
            <span className="text-orange-300">&apos;React&apos;</span>,{" "}
            <span className="text-orange-300">&apos;Next.js&apos;</span>],
          </p>

          <p className="pl-4">
            <span className="text-pink-400">exploring</span>: [
            <span className="text-orange-300">&apos;Go&apos;</span>,{" "}
            <span className="text-orange-300">&apos;PostgreSQL&apos;</span>],
          </p>

          <p className="pl-4">
            <span className="text-pink-400">focus</span>:{" "}
            <span className="text-green-300">
              &apos;Backend & Systems Engineering&apos;
            </span>
            ,
          </p>

          <p className="pl-4">
            <span className="text-pink-400">mindset</span>:{" "}
            <span className="text-green-300">
              &apos;Curious problem-solver&apos;
            </span>
          </p>

          <p>{"}"};</p>
        </div>
      </div>
    </div>

    {/* Tablet - positioned to right */}
    <div className="absolute -right-4 top-1/4 w-28 sm:w-36 bg-gradient-to-br from-[#1e1b4b]/20 to-[#312e81]/20 rounded-lg p-2 shadow-xl border border-purple-500/30 transform rotate-6 backdrop-blur-[20px] backdrop-saturate-180">
      <div className="bg-[#0f0a1f] rounded-md p-2">
        <div className="space-y-1.5">
          <div className="h-2 bg-purple-500/40 rounded w-3/4"></div>
          <div className="h-2 bg-cyan-500/40 rounded w-1/2"></div>
          <div className="h-8 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 rounded mt-2"></div>
          <div className="h-2 bg-purple-500/30 rounded w-2/3"></div>
        </div>
      </div>
    </div>

    {/* Phone - positioned to bottom right */}
    <div className="absolute -right-2 -bottom-8 w-20 sm:w-24 bg-gradient-to-br from-[#1e1b4b]/20 to-[#312e81]/20 rounded-xl p-1.5 shadow-xl border border-purple-500/30 transform rotate-12 backdrop-blur-[20px] backdrop-saturate-180">
      <div className="bg-[#0f0a1f] rounded-lg p-2">
        <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 bg-purple-500/40 rounded w-full"></div>
          <div className="h-1.5 bg-cyan-500/40 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
);

function Row({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 py-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
      <h2
        className={`text-base font-semibold tracking-tight text-slate-900 dark:text-white`}
      >
        {heading}
      </h2>
      {children}
    </div>
  );
}

/*  Below the fold: what I bring, and the stack                               */

function Details() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-800 dark:border-slate-800">
        <Row heading="What I bring to your team">
          <ul className="grid gap-10 sm:grid-cols-2 sm:gap-12">
            {HIGHLIGHTS.map((h) => (
              <li key={h.title} className="space-y-3">
                <h3
                  className={`text-xl font-semibold tracking-tight text-slate-900 dark:text-white`}
                >
                  {h.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {h.desc}
                </p>
              </li>
            ))}
          </ul>
        </Row>

        <Row heading="Stack">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {STACK.map((tech) => (
              <li
                key={tech}
                className="text-[15px] font-medium text-slate-800 dark:text-slate-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:pb-20 lg:pt-16">
          <Intro />
          <div className="hidden lg:flex justify-end animate-float delay-500 duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/10">
            <DeviceMockups />
          </div>
        </div>
        <Details />
      </section>
    </MotionConfig>
  );
}
