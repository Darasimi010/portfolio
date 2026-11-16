"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CalendarDays, Check, FileText } from "lucide-react";

type Experience = {
  id: string;
  number: string;
  company: string;
  role: string;
  dates: string;
  category: string;
  description: string;
  highlights: string[];
  current?: boolean;
  foundation?: boolean;
};

const experiences: Experience[] = [
  {
    id: "cyclelink",
    number: "01",
    company: "CycleLink",
    role: "Frontend Engineer",
    dates: "August 2026 — Present",
    category: "CONTRACT · PRODUCT ENGINEERING",
    description:
      "A waste-collection coordination platform connecting households with collectors.",
    current: true,
    highlights: [
      "Integrated household and collector pickup workflows with live REST APIs, replacing mock interactions with backend-driven application state.",
      "Built and refined role-aware onboarding, dashboards, pickup history and pagination, drop-off availability, and pending-verification flows against documented API contracts.",
      "Investigated persistence, security and data-consistency issues across browser storage, delegated pickup handling, forms and timestamps using TypeScript, ESLint and OpenAPI tooling.",
    ],
  },
  {
    id: "braandly",
    number: "02",
    company: "Braandly",
    role: "Frontend Developer",
    dates: "September 2025 — Present",
    category: "PROFESSIONAL · PRODUCT ENGINEERING",
    description:
      "An enterprise platform for brand creation, asset management and creative collaboration.",
    current: true,
    highlights: [
      "Implemented optimistic task-priority updates across three TanStack Query cache scopes, with rollback when mutations fail.",
      "Built memoized user lookup and attribution for collaborative comment reactions.",
      "Created a reusable dark-mode skeleton component and migrated it across 33+ files; also resolved issues in admin navigation, UI interactions, responsive layouts and image delivery.",
    ],
  },
  {
    id: "holford-homes",
    number: "03",
    company: "Holford Homes",
    role: "Frontend Engineer",
    dates: "September — December 2025",
    category: "PROFESSIONAL · WEB APPLICATION",
    description:
      "A real-estate platform for Nigerians abroad who want to purchase property in Nigeria.",
    highlights: [
      "Connected consultation booking to backend lead submission, live availability retrieval and appointment selection through three Next.js App Router API handlers.",
      "Built a timezone-aware 42-day booking calendar, displaying browser-local times and serializing UTC timestamps for video and phone consultations.",
      "Added server-side credential injection, environment-based API configuration, client IP forwarding, backend-aligned form values and contextual error notifications.",
    ],
  },
  {
    id: "tcn",
    number: "04",
    company: "Transmission Company of Nigeria",
    role: "Engineering Intern (SIWES)",
    dates: "July — September 2023 & April — September 2024",
    category: "INDUSTRIAL TRAINING · POWER SYSTEMS",
    description:
      "Hands-on exposure to national grid operations, substation protection and high-voltage maintenance.",
    foundation: true,
    highlights: [
      "Monitored national-grid stability and reviewed regional load-allocation data in the Independent System Operations unit.",
      "Testing and calibration of distance protection relays, current transformers and voltage transformers.",
      "Preventive maintenance of 330 kV / 132 kV transformers, switchgear, isolators, battery banks and circuit breakers while observing HSE procedures.",
    ],
  },
];

function ExperienceCard({
  experience,
  index,
  reduceMotion,
}: {
  experience: Experience;
  index: number;
  reduceMotion: boolean | null;
}) {
  const isFeatured = index === 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={
        isFeatured
          ? "relative isolate overflow-hidden rounded-[1.75rem] bg-[#0d1711] text-white shadow-xl shadow-zinc-900/[0.08]"
          : "relative rounded-[1.75rem] border border-zinc-200/90 bg-white text-zinc-950 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700"
      }
    >
      {isFeatured && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-300/[0.12] via-transparent to-transparent" />
      )}

      <div className="p-6 sm:p-8 lg:p-9">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div
              className={`mb-4 flex flex-wrap items-center gap-2 text-[10px] font-bold tracking-[0.17em] ${
                isFeatured
                  ? "text-emerald-300"
                  : "text-emerald-700 dark:text-emerald-400"
              }`}
            >
              <span>{experience.number}</span>
              <span
                className={`h-px w-5 ${
                  isFeatured ? "bg-emerald-300/50" : "bg-emerald-500/50"
                }`}
                aria-hidden="true"
              />
              <span>{experience.category}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3
                className={`text-2xl font-semibold tracking-[-0.04em] sm:text-[1.75rem] ${
                  isFeatured ? "text-white" : "text-zinc-950 dark:text-white"
                }`}
              >
                {experience.company}
              </h3>
              {experience.current && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] ${
                    isFeatured
                      ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
                      : "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-300"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  CURRENT
                </span>
              )}
            </div>

            <p
              className={`mt-1.5 text-sm font-medium ${
                isFeatured
                  ? "text-white/65"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {experience.role}
            </p>
            <p
              className={`mt-3 max-w-2xl text-sm leading-6 ${
                isFeatured
                  ? "text-white/70"
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {experience.description}
            </p>
          </div>

          <div
            className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium sm:hidden ${
              isFeatured
                ? "border-white/10 bg-white/[0.05] text-white/65"
                : "border-zinc-200/80 bg-zinc-50 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-400"
            }`}
          >
            <CalendarDays
              className={`h-3.5 w-3.5 ${
                isFeatured
                  ? "text-emerald-300"
                  : "text-emerald-700 dark:text-emerald-400"
              }`}
              aria-hidden="true"
            />
            <span>{experience.dates}</span>
          </div>
        </div>

        <div
          className={`mt-7 border-t pt-6 ${
            isFeatured
              ? "border-white/10"
              : "border-zinc-100 dark:border-zinc-800"
          }`}
        >
          <p
            className={`mb-4 text-[10px] font-bold tracking-[0.17em] ${
              isFeatured
                ? "text-emerald-300"
                : "text-zinc-400 dark:text-zinc-500"
            }`}
          >
            {experience.foundation
              ? "ENGINEERING EXPERIENCE"
              : "WHAT I WORKED ON"}
          </p>

          <ul className="grid gap-3">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className={`flex items-start gap-3 text-sm leading-6 ${
                  isFeatured
                    ? "text-white/75"
                    : "text-zinc-600 dark:text-zinc-300"
                }`}
              >
                <Check
                  className={`mt-1 h-4 w-4 shrink-0 ${
                    isFeatured
                      ? "text-emerald-300"
                      : "text-emerald-700 dark:text-emerald-400"
                  }`}
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden border-t border-zinc-200/80 py-24 dark:border-zinc-800"
    >
      <div className="pointer-events-none absolute -top-40 left-[-12rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.06] blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
              <span className="h-px w-7 bg-emerald-500" /> CAREER TIMELINE
            </p>
            <h2
              id="experience-heading"
              className="text-4xl font-semibold tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl"
            >
              Experience in{" "}
              <span className="text-zinc-400 dark:text-zinc-500">
                practice.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              From building product workflows and integrating APIs to working
              around power-system infrastructure, these roles have shaped how I
              approach engineering problems.
            </p>
          </div>

          <Link
            href="/resume"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <FileText
              className="h-4 w-4 text-emerald-700 dark:text-emerald-400"
              aria-hidden="true"
            />
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[11px] top-8 w-px bg-zinc-200 dark:bg-zinc-800 sm:left-[9.75rem]"
          />

          <div className="space-y-5 sm:space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8rem_1.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <div className="hidden pt-8 text-right sm:block">
                  <p className="text-xs font-semibold leading-5 tabular-nums text-zinc-500 dark:text-zinc-400">
                    {experience.dates}
                  </p>
                  {experience.current && (
                    <p className="mt-2 text-[9px] font-bold tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                      PRESENT
                    </p>
                  )}
                </div>

                <div className="relative flex justify-center">
                  <span
                    className={`z-10 mt-8 h-3 w-3 rounded-full border-[3px] border-white ring-1 dark:border-zinc-950 ${
                      index === 0
                        ? "bg-emerald-500 ring-emerald-500/30"
                        : "bg-zinc-300 ring-zinc-200 dark:bg-zinc-600 dark:ring-zinc-700"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-3 sm:hidden">
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-400">
                      EXPERIENCE {experience.number}
                    </p>
                  </div>
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
