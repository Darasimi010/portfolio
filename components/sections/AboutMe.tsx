"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

type Principle = {
  number: string;
  title: string;
  description: string;
  proof: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Understand before changing",
    description:
      "I trace event flows and inspect state changes before choosing a fix. I want to solve the cause, not cover the symptom with another workaround.",
    proof:
      "At Braandly, I traced a filter-tray bug to the interaction between its outside-click listener and trigger element.",
  },
  {
    number: "02",
    title: "Respect system boundaries",
    description:
      "The browser is not a trusted environment. I think carefully about what belongs in the browser and what should stay on the server, especially around credentials, sensitive data and API integrations.",
    proof:
      "At Holford Homes, I used Next.js route handlers to keep upstream API credentials server-side and handle booking-time normalization.",
  },
  {
    number: "03",
    title: "Make interfaces responsive, but truthful",
    description:
      "An interface should feel immediate without pretending an operation succeeded. Clear failure states and reliable recovery are part of a good experience.",
    proof:
      "At Braandly, I coordinated optimistic task-priority updates across three TanStack Query cache scopes, with rollback when a mutation failed.",
  },
  {
    number: "04",
    title: "Work with the source of truth",
    description:
      "I pay attention to API contracts, authoritative server state, authentication boundaries, and how changes should propagate through an application so the interface reflects what the system actually knows.",
    proof:
      "At CycleLink, I worked on reducing unsafe reliance on browser storage. I aligned pickup and onboarding flows with backend state and separated public onboarding from protected user journeys.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMe() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden border-t border-zinc-200/80 bg-zinc-50/40 py-24 dark:border-zinc-800 dark:bg-[#090d16]/40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-400/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-emerald-500/[0.035] blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <Reveal className="mb-12 max-w-4xl sm:mb-16">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-emerald-700 dark:text-emerald-400">
            <span className="h-px w-7 bg-emerald-500" /> ABOUT ME
          </p>
          <h2
            id="about-heading"
            className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-zinc-950 dark:text-white sm:text-5xl lg:text-[3.65rem]"
          >
            A good interface is only the beginning
            <span className="text-emerald-700 dark:text-emerald-400">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            I started out focused on making designs work in the browser.
            Building real products taught me to care just as much about the
            systems, decisions and edge cases behind the experience.
          </p>
        </Reveal>

        <div className="grid items-start gap-7 lg:grid-cols-12 lg:gap-8">
          {/* Personal story */}
          <Reveal className="lg:col-span-5" delay={0.04}>
            <div className="flex h-full flex-col rounded-[1.75rem] border border-zinc-200/80 bg-white p-6 shadow-sm shadow-zinc-900/[0.025] dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mt-0.5 text-base font-semibold text-zinc-950 dark:text-white">
                    From screens to systems.
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-[14px] leading-[1.85] text-zinc-600 dark:text-zinc-300 sm:text-[15px]">
                <p>
                  I used to think frontend development was mainly about taking a
                  design from Figma and recreating it with React, CSS and a
                  little logic. The designer defined the experience; my job was
                  to make the browser match it.
                </p>
                <p>
                  Working on real products changed that. A design shows what
                  should happen, but engineering has to make it work when the
                  network is slow, an API responds unexpectedly, a user
                  refreshes mid-task, or data changes in one part of an
                  application but not another.
                </p>
                <p>
                  Those situations drew me toward the systems beneath the
                  interface: state, APIs, data integrity, failure handling and
                  the boundary between client and server. I enjoy collaborating
                  with designers on the intended experience and with backend
                  engineers on contracts, data structures and edge cases.
                </p>
                <p>
                  My background is in Electronic and Electrical Engineering.
                  Today, I work primarily with TypeScript, React and Next.js,
                  while exploring Go, PostgreSQL and backend engineering. At
                  heart, I enjoy solving problems in any domain, understanding
                  how things fit together and building solutions people can
                  depend on.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Engineering principles */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <aside className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#0d1711] text-white shadow-xl shadow-zinc-950/[0.09]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(120,220,145,0.15),transparent_48%)]"
              />
              <div className="p-6 sm:p-8 lg:p-9">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[1.7rem]">
                    How I approach my work.
                  </h3>
                </div>

                <ol className="divide-y divide-white/10">
                  {principles.map((principle, index) => (
                    <motion.li
                      key={principle.number}
                      initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                      whileInView={
                        reduceMotion ? undefined : { opacity: 1, x: 0 }
                      }
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        delay: reduceMotion ? 0 : 0.12 + index * 0.07,
                      }}
                      className="grid grid-cols-[2.25rem_1fr] gap-0 py-5 first:pt-0 last:pb-0 sm:grid-cols-[2.75rem_1fr]"
                    >
                      <span className="pt-0.5 font-mono text-xs text-emerald-300/75">
                        {principle.number}
                      </span>
                      <div>
                        <h4 className="text-[15px] font-semibold tracking-[-0.01em] text-white sm:text-base">
                          {principle.title}
                        </h4>
                        <p className="mt-1.5 max-w-2xl text-[13px] leading-6 text-white/65 sm:text-sm">
                          {principle.description}
                        </p>
                        <p className="mt-3 border-l border-emerald-400/50 pl-3 text-xs leading-5 text-emerald-100/70">
                          {principle.proof}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
