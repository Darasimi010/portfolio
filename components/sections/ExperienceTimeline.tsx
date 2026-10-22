"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Briefcase, Calendar, ArrowRight, FileText } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "CycleLink",
      role: "Frontend Engineer",
      dates: "August 2026 – Present",
      tagline:
        "Waste collection coordination platform connecting households with collectors",
      type: "Contract / Professional Engineering",
      color: "emerald",
      bullets: [
        "Integrated household and collector pickup workflows with live REST APIs, replacing mock data and simulated interactions with backend-driven application state.",
        "Improved role-aware onboarding and dashboard access, pickup history and pagination, drop-off availability, and pending-verification workflows while aligning frontend behavior with documented API contracts.",
        "Investigated data-persistence and security issues, including sensitive information stored in browser storage, missing delegated pickup-handler persistence requirements, and inconsistencies in API-driven form and timestamp behavior; used TypeScript, ESLint, and OpenAPI tooling to support debugging and validation.",
      ],
      caseStudyLink: "/work/cyclelink",
    },
    {
      company: "Holford Homes",
      role: "Frontend Engineer",
      dates: "September 2025 — December 2025",
      tagline:
        "Real estate platform serving Nigerians living abroad who want to purchase property in Nigeria",
      type: "Professional Engineering",
      color: "amber",
      bullets: [
        "Replaced a mock consultation booking flow with backend-connected lead submission, live availability retrieval, and appointment selection through three Next.js App Router API handlers.",
        "Implemented a timezone-aware booking calendar with a 42-day grid, browser-local time display, UTC timestamp serialization, and video/phone consultation slot handling.",
        "Added server-side upstream credential injection, environment-based API configuration, client IP metadata forwarding, backend-aligned form values, and contextual error notifications; resolved endpoint path and configuration issues through iterative pull-request updates.",
      ],
      caseStudyLink: "/work/holford-homes",
    },
    {
      company: "Braandly",
      role: "Frontend Developer",
      dates: "September 2025 — Present",
      tagline:
        "Enterprise brand creation, asset management, and creative collaboration platform",
      type: "Professional Engineering",
      color: "indigo",
      bullets: [
        "Engineered optimistic task-priority updates across three TanStack React Query cache scopes, with rollback on mutation failure, and built memoized user lookup and attribution for collaborative comment reactions.",
        "Developed a reusable dark-mode skeleton component and migrated it across 33+ files, standardizing loading-state styling throughout dashboard and workspace interfaces.",
        "Resolved cross-application defects involving role-based admin navigation, palette and gradient interactions, event-handling race conditions, responsive layouts, and image delivery using WebP assets and responsive Next.js image sizing.",
      ],
      caseStudyLink: "/work/braandly",
    },
    {
      company: "Transmission Company of Nigeria (TCN)",
      role: "Engineering Intern (SIWES)",
      dates: "April — September 2024 & July — September 2023",
      tagline:
        "Connecting the Electricity Generating Companies (GenCos) to the Distribution Companies (DisCos)",
      type: "Professional Engineering",
      color: "indigo",
      bullets: [
        "Grid Telemetry & Operations: Monitored national grid stability and evaluated regional load-allocation data in the Independent System Operations (ISO) unit to prevent grid imbalances.",
        "Substation Instrumentation: Assisted senior engineers in testing and calibrating distance protection relays, current transformers, and voltage transformers in the Protection, Control & Metering (PC&M) department.",
        "High-Voltage Maintenance & Safety: Participated in routine preventive maintenance of 330 kV / 132 kV switchgear, isolators, battery banks, and high-voltage circuit breakers in the Electrical Maintenance Department (EMD), while ensuring strict HSE compliance",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
              Work History
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              A look at the teams I&apos;ve worked with, the systems I&apos;ve
              helped build, and the impact I&apos;ve made.
            </p>
          </div>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 transition-all self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>My Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Experience List */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                      {exp.company}{" "}
                      <span className="text-slate-400 font-normal">·</span>{" "}
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                        {exp.role}
                      </span>
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {exp.tagline}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{exp.dates}</span>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {exp.caseStudyLink && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
                  <Link
                    href={exp.caseStudyLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    <span>Read in-depth case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
