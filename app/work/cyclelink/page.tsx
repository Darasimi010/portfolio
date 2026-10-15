"use client";

import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import {
  DualRoleWorkflowMatrix,
  MockToBackendArchitectureComparison,
} from "@/components/work/CycleLinkArchitectures";
import {
  ShieldCheck,
  Truck,
  Users,
  Database,
  Lock,
  AlertTriangle,
  CheckCircle2,
  GitPullRequest,
  Code2,
} from "lucide-react";

export default function CycleLinkCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200">
      <Navbar />

      <main>
        <CaseStudyHeader
          title="CycleLink — Connecting Household and Collector Workflows to Real Backend Services"
          role="Frontend Engineer"
          product="Waste collection coordination platform connecting households with collectors"
          timeline="August 2026 – Present"
          technologies={[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST APIs",
            "OpenAPI",
            "ESLint",
          ]}
          liveUrl="https://cyclelink.vercel.app"
          prReferences="Internal Engineering Repo & OpenAPI Spec Reviews"
          category="API Integration & Security"
          categoryColor="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40"
        />

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Executive Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Overview
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              CycleLink connects household users and waste collectors through workflows for managing pickup requests, collection activity, and account setup.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              My work involved building and refining the frontend MVP, implementing responsive interfaces, and progressively replacing simulated or locally persisted workflows with live backend integration.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              As the application evolved, my focus shifted from merely implementing screens to ensuring those screens reflected real application state, followed the correct authentication flow, and behaved consistently across household and collector experiences.
            </p>
          </section>

          {/* The Challenge */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <AlertTriangle className="w-4 h-4" />
              <span>The Engineering Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Moving past simulated states and browser storage vulnerabilities
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              A functional-looking interface is not enough for an operational workflow that coordinates real people and collection requests. The frontend needed to reflect backend truth and eliminate dangerous storage practices:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Connecting household and collector interfaces to real pickup APIs rather than fake driver timers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Replacing mock data, simulated delays, and local-only state with authoritative backend responses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Enforcing authentication and onboarding requirements without blocking legitimate public landing access.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Eliminating sensitive user data (plain passwords, National ID numbers, KYC images) from browser localStorage.</span>
              </li>
            </ul>
          </section>

          {/* Section 1: Backend-Connected Pickup Workflows */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                01. Operational API Workflows
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Implemented Live Backend-Connected Pickup Workflows
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I integrated household and collector pickup experiences with live backend endpoints, removing simulated timers, mock driver data, notifications, and activity logs where the real API workflows replaced them.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I worked on assigned pickups, upcoming and later views, pickup history, pagination, and drop-off facility availability. I also refined access to dashboard functionality while verification was pending.
            </p>

            {/* Dual Role Workflow Matrix */}
            <DualRoleWorkflowMatrix />
          </section>

          {/* Section 2: Authentication Journey & Onboarding Resolution */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                02. User Journey Architecture
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Refined Authentication & Onboarding Route Resolution
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I investigated the relationship between access-token retrieval, the current-user endpoint, and onboarding route resolution.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              An important architectural distinction was that the introductory onboarding page should remain accessible before authentication, while household and collector setup pages should enforce the relevant account requirements.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I used the expected user journey to challenge an incorrect redirect approach rather than applying authentication checks indiscriminately to every onboarding route.
            </p>
          </section>

          {/* Section 3: OpenAPI Alignment & Delegated Handlers */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                03. Contract Alignment & Systems Defense
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                OpenAPI Alignment & Identifying the Delegated Handler Gap
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I reviewed OpenAPI documentation and pickup endpoint contracts to understand how the frontend should interact with backend resources, including pickup retrieval, cancellation, reassignment, and rating endpoints.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-300/80 dark:border-amber-800/60 space-y-2">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Identified Architecture Gap: The Delegated Collector Handler
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                During contract review, I identified a backend API requirement for persisting the name and phone number of the person actually handling a collection. For waste collection workflows, this distinction matters because a collector account holder (e.g., a recycling enterprise) frequently assigns the physical pickup to an employee or contracted driver. I surfaced the need to persist these details at the API layer so they are not lost when users change devices or clear browser data.
              </p>
            </div>

            {/* Before vs After Architecture Comparison */}
            <MockToBackendArchitectureComparison />
          </section>

          {/* Section 4: Eliminating Local Storage Security Hazards */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                04. Data Protection & Security
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Eliminated Sensitive Information from Browser Storage
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I moved critical application workflows away from local-only state and toward backend responses as the authoritative source of truth.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I also identified and addressed critical security concerns around storing sensitive information in browser storage, including plaintext passwords, national identification numbers (NIN), and KYC photographs. The broader objective was to prevent stale or sensitive local data from silently repopulating forms and to make the interface reflect verified server state.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Systematic Linting & Validation Tooling
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I worked through frontend defects involving form behavior, address handling, API errors, timestamps, icons, and mobile layouts. I used TypeScript strict checks, ESLint, structured lint reports, OpenAPI inspection, and command-line tooling to validate changes and prevent regressions.
              </p>
            </div>
          </section>

          {/* Key Engineering Decisions */}
          <section className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Key Engineering Decisions & Trade-offs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                  Keep the backend authoritative:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Persistent pickup and account information should be read from backend responses rather than silently restored from stale local data.
                </span>
              </div>
              <div>
                <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                  Respect role-specific workflows:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Household and collector experiences have different operational permissions, setup requirements, and data lifecycles.
                </span>
              </div>
              <div>
                <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                  Treat authentication as a user journey:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Public exploration, authenticated setup, and protected operational dashboards require distinct route-guarding logic.
                </span>
              </div>
              <div>
                <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                  Protect sensitive user information:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Browser storage must never become a casual persistence layer for credentials or sensitive identity data.
                </span>
              </div>
            </div>
          </section>

          {/* Outcome & Credibility Note */}
          <section className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Outcome & Engineering Scope
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              My contributions advanced CycleLink from a prototype frontend MVP toward a backend-integrated product, improving pickup workflows, role-aware navigation, onboarding behavior, and the consistency of application data.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The work also exposed areas where frontend behavior depended on missing or incomplete backend contracts (such as delegated driver persistence), allowing those dependencies to be identified rather than masked behind fragile local-only workarounds.
            </p>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Technical Credibility Note: </span>
              In keeping with verified engineering evidence, this write-up distinguishes completed frontend contributions from downstream operational integration that remains dependent on backend team verification.
            </div>
          </section>

          {/* Navigation */}
          <CaseStudyNav currentSlug="cyclelink" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
