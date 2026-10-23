"use client";

import { useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import {
  Printer,
  Copy,
  CheckCircle2,
  ArrowLeft,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyPlainResume = () => {
    const text = `OLUWADARASIMI OMOJOLA
Frontend Engineer
Email: omojoladarasimi9@gmail.com | Portfolio: omojola.vercel.app | GitHub: github.com/Darasimi010 | LinkedIn: linkedin.com/in/darasimi-omojola

PROFESSIONAL SUMMARY
Frontend engineer who takes ownership of complex product features, traces bugs to their underlying causes, connects user interfaces to backend services, and improves the reliability, security, and usability of real applications. Experienced in Next.js, React.js, TypeScript, TanStack Query, and robust REST/OpenAPI integration.

PROFESSIONAL EXPERIENCE

CycleLink — Frontend Engineer
August 2026 – Present
• Integrated household and collector pickup workflows with live REST APIs, replacing mock data and simulated interactions with backend-driven application state.
• Improved role-aware onboarding and dashboard access, pickup history and pagination, drop-off availability, and pending-verification workflows while aligning frontend behavior with documented API contracts.
• Investigated data-persistence and security issues, including sensitive information stored in browser storage, missing delegated pickup-handler persistence requirements, and inconsistencies in API-driven form and timestamp behavior; used TypeScript, ESLint, and OpenAPI tooling to support debugging and validation.

Braandly — Frontend Developer
September 2025 – Present
• Engineered optimistic task-priority updates across three TanStack React Query cache scopes, with rollback on mutation failure, and built memoized user lookup and attribution for collaborative comment reactions.
• Developed a reusable dark-mode skeleton component and migrated it across 33+ files, standardizing loading-state styling throughout dashboard and workspace interfaces.
• Resolved cross-application defects involving role-based admin navigation, palette and gradient interactions, event-handling race conditions, responsive layouts, and image delivery using WebP assets and responsive Next.js image sizing.

Holford Homes — Frontend Engineer
September 2025 – December 2025
• Replaced a mock consultation booking flow with backend-connected lead submission, live availability retrieval, and appointment selection through three Next.js App Router API handlers.
• Implemented a timezone-aware booking calendar with a 42-day grid, browser-local time display, UTC timestamp serialization, and video/phone consultation slot handling.
• Added server-side upstream credential injection, environment-based API configuration, client IP metadata forwarding, backend-aligned form values, and contextual error notifications; resolved endpoint path and configuration issues through iterative pull-request updates.

TECHNICAL STRENGTHS
• Languages & Runtimes: TypeScript, JavaScript (ES6+), HTML5, CSS3, Node.js
• Frontend & Frameworks: Next.js, React, Tailwind CSS, HeroUI, Framer Motion
• State & Data Fetching: TanStack React Query, Zustand, REST APIs, OpenAPI / Swagger
• Architecture & Practices: Backend-for-Frontend (BFF), Optimistic UI with Rollbacks, Timezone Normalization, Role-Based Access Control, Defensive Async Design, Systematic Linting & Testing`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200">
      <div className="no-print">
        <Navbar />
      </div>

      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Bar (hidden on print) */}
          <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-slate-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <button
                onClick={copyPlainResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 transition-all shadow-2xs"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all active:scale-98"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>

          {/* Printable Resume Container */}
          <article className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm print:p-0 print:border-none print:shadow-none print:bg-white text-slate-800 dark:text-slate-200 space-y-10">
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Oluwadarasimi Omojola
                  </h1>
                  <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    Frontend Engineer
                  </p>
                </div>
              </div>

              {/* Contact info strip */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 dark:text-slate-400 pt-1">
                <a
                  href="mailto:omojoladarasimi9@gmail.com"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>omojoladarasimi9@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Darasimi010"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>github.com/Darasimi010</span>
                </a>
                <a
                  href="https://linkedin.com/in/darasimi-omojola"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  <span>linkedin.com/in/darasimi-omojola</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Frontend engineer who takes ownership of complex product
                features, traces bugs to their underlying causes, connects user
                interfaces to backend services, and improves the reliability,
                security, performance, and usability of real applications.
                Demonstrated track record building multi-role enterprise
                workflows, architecting server-side Next.js proxy handlers,
                managing multi-cache state synchronization with rollbacks, and
                standardizing component systems across multi-contributor
                codebases.
              </p>
            </section>

            {/* Professional Experience */}
            <section className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 pb-1 border-b border-slate-100 dark:border-slate-800">
                Professional Experience
              </h2>

              {/* CycleLink */}
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white inline">
                      CycleLink
                    </h3>
                    <span className="text-slate-400 dark:text-slate-600 mx-2">
                      —
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Frontend Engineer
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                    August 2026 – Present
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>
                      Integrated household and collector pickup workflows with
                      live REST APIs, replacing mock data and simulated
                      interactions with backend-driven application state.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>
                      Improved role-aware onboarding and dashboard access,
                      pickup history and pagination, drop-off availability, and
                      pending-verification workflows while aligning frontend
                      behavior with documented API contracts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>
                      Investigated data-persistence and security issues,
                      including sensitive information stored in browser storage,
                      missing delegated pickup-handler persistence requirements,
                      and inconsistencies in API-driven form and timestamp
                      behavior; used TypeScript, ESLint, and OpenAPI tooling to
                      support debugging and validation.
                    </span>
                  </li>
                </ul>

                <div className="no-print pt-1">
                  <Link
                    href="/work/cyclelink"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>View CycleLink Case Study</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Holford Homes */}
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white inline">
                      Holford Homes
                    </h3>
                    <span className="text-slate-400 dark:text-slate-600 mx-2">
                      —
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Frontend Engineer
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                    September 2025 – December 2025
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>
                      Replaced a mock consultation booking flow with
                      backend-connected lead submission, live availability
                      retrieval, and appointment selection through three Next.js
                      App Router API handlers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>
                      Implemented a timezone-aware booking calendar with a{" "}
                      <strong>42-day grid</strong>, browser-local time display,
                      UTC timestamp serialization, and video/phone consultation
                      slot handling.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>
                      Added server-side upstream credential injection,
                      environment-based API configuration, client IP metadata
                      forwarding, backend-aligned form values, and contextual
                      error notifications; resolved endpoint path and
                      configuration issues through iterative pull-request
                      updates.
                    </span>
                  </li>
                </ul>

                <div className="no-print pt-1">
                  <Link
                    href="/work/holford-homes"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <span>View Holford Homes Case Study</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Braandly */}
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white inline">
                      Braandly
                    </h3>
                    <span className="text-slate-400 dark:text-slate-600 mx-2">
                      —
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Frontend Developer
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                    September 2025 – Present
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                    <span>
                      Engineered optimistic task-priority updates across three
                      TanStack React Query cache scopes, with rollback on
                      mutation failure, and built memoized user lookup and
                      attribution for collaborative comment reactions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                    <span>
                      Developed a reusable dark-mode skeleton component and
                      migrated it across <strong>33+ files</strong>,
                      standardizing loading-state styling throughout dashboard
                      and workspace interfaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                    <span>
                      Resolved cross-application defects involving role-based
                      admin navigation, palette and gradient interactions,
                      event-handling race conditions, responsive layouts, and
                      image delivery using WebP assets and responsive Next.js
                      image sizing.
                    </span>
                  </li>
                </ul>

                <div className="no-print pt-1">
                  <Link
                    href="/work/braandly"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>View Braandly Case Study</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Technical Strengths & Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    Core Languages & Frameworks
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    TypeScript, JavaScript (ES6+), Next.js, React, Tailwind CSS,
                    HTML5, CSS3 / CSS Variables.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    State Management & Data Integration
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    TanStack React Query (Multi-scope optimistic caching &
                    rollback), Zustand, Redux Toolkit, REST APIs, OpenAPI /
                    Swagger contracts.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    Systems & Security Practices
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Backend-for-Frontend (BFF) proxying, Upstream credential
                    isolation, Browser storage sanitization, Role-based route
                    authorization.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    Quality, Testing & Tooling
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Intl & UTC date normalization, ESLint, Git & GitHub PR
                    reviews, Responsive layout engineering, WebP & Next.js Image
                    optimization.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}
