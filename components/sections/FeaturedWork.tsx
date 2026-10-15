"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
  Shield,
  Workflow,
  Sparkles,
  GitPullRequest,
  Lock,
} from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      id: "braandly",
      title: "Braandly",
      role: "Frontend Developer",
      subtitle: "Product engineering at scale & enterprise design systems",
      headlineFocus: "Feature Engineering & Architecture",
      problem:
        "Users needed a structured way to assess brand maturity and work through branding tasks, while task priority updates suffered from cache mismatches and dark-mode loading skeletons were inconsistent across 33+ files.",
      strongestContribution:
        "Built the multi-page Branding Checklist suite (71 files, 10,792+ additions); engineered optimistic priority updates across 3 TanStack Query cache scopes with rollback; standardized dark-mode loading states across 33+ files.",
      techStack: [
        "Next.js",
        "React 19",
        "TypeScript",
        "TanStack React Query",
        "Zustand",
        "Redux Toolkit",
        "Tailwind CSS",
        "HeroUI",
      ],
      caseStudyUrl: "/work/braandly",
      liveUrl: "https://braandly.com",
      pullRequests: "PRs #218, #408, #422, #423, #484, #494",
      highlights: [
        "Branding Checklist workflow (Quiz, Diagnostics, Workspace)",
        "3-scope cache synchronization with mutation rollback",
        "Universal ThemeSkeleton replacing inconsistent HeroUI shimmers",
        "Memoized member Map lookup for comment reactions",
      ],
      badgeColor:
        "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50",
      accentBorder: "group-hover:border-indigo-500/50",
      gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      accentColor: "indigo",
    },
    {
      id: "holford-homes",
      title: "Holford Homes",
      role: "Frontend Engineer — Consultation Booking",
      subtitle: "Cross-border real estate booking system with server-side proxying",
      headlineFocus: "Booking Systems & Timezones",
      problem:
        "Diaspora customers in the UK and US required real-time property consultation scheduling in Nigeria, but the prototype had hardcoded calendars, lacked timezone translation, and exposed upstream endpoint URLs and keys.",
      strongestContribution:
        "Engineered 3 Next.js App Router route handlers for secure API proxying and upstream credential isolation; built a dynamic 42-day booking calendar with browser-local 24-hr time display and backend UTC timestamp serialization.",
      techStack: [
        "Next.js App Router",
        "React",
        "TypeScript",
        "JavaScript Date/Intl APIs",
        "REST APIs",
        "Tailwind CSS",
      ],
      caseStudyUrl: "/work/holford-homes",
      liveUrl: "https://www.holfordhomes.com",
      pullRequests: "PRs #2, #3; commits d71abd7, 7879abb",
      highlights: [
        "3 Server-side API handlers with X-Frontend-Key injection",
        "42-day availability calendar with dynamic month grids",
        "Browser IANA timezone detection & Intl UTC normalization",
        "UUID chaining for uninterrupted lead-to-booking progression",
      ],
      badgeColor:
        "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50",
      accentBorder: "group-hover:border-amber-500/50",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      accentColor: "amber",
    },
    {
      id: "cyclelink",
      title: "CycleLink",
      role: "Frontend Engineer",
      subtitle: "Connecting household & collector workflows to real backend services",
      headlineFocus: "API Integration & Systems Security",
      problem:
        "A waste collection MVP relied heavily on browser localStorage for sensitive KYC information, simulated driver timers, and hardcoded flows, without role-specific authorization boundaries or contract alignment.",
      strongestContribution:
        "Integrated household and collector pickup workflows with live REST APIs; protected sensitive KYC and password data by removing local storage persistence; aligned pickup contracts with OpenAPI and decoupled unauthenticated public onboarding from protected setup.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "OpenAPI",
        "ESLint",
      ],
      caseStudyUrl: "/work/cyclelink",
      liveUrl: "https://cyclelink.vercel.app",
      pullRequests: "Iterative PRs & OpenAPI Schema Validations",
      highlights: [
        "Live pickup request, assignment, and history endpoints",
        "Public onboarding decoupled from authenticated account setup",
        "Identified delegated pickup-handler persistence requirement",
        "Sanitized browser storage to protect sensitive KYC/passwords",
      ],
      badgeColor:
        "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50",
      accentBorder: "group-hover:border-emerald-500/50",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      accentColor: "emerald",
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I build and improve web applications by combining frontend engineering, API integration, and systematic problem-solving. These case studies explore my individual scope, architecture decisions, trade-offs, and outcomes across three professional products.
          </p>
        </div>

        {/* 3 Project Cards with Equal Treatment */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${project.accentBorder} overflow-hidden`}
            >
              {/* Subtle accent corner gradient */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.gradient} rounded-bl-full pointer-events-none -z-0 opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Overview & Context */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {project.headlineFocus}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Role: {project.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem & Contribution */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        The Engineering Challenge
                      </h4>
                      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        Strongest Contribution
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                        {project.strongestContribution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Highlights & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-4">
                  <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Core Implementation Evidence
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {project.pullRequests && (
                      <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1.5">
                        <GitPullRequest className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>{project.pullRequests}</span>
                      </div>
                    )}
                  </div>

                  {/* Links / Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow-indigo-500/20 active:scale-98 transition-all"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                      <Lock className="w-3 h-3 text-amber-500/80" />
                      <span>Private Repository</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
