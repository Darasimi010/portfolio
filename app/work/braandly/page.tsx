"use client";

import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import {
  OptimisticPriorityDemo,
  ThemeSkeletonComparisonDemo,
  BrandingJourneyFlow,
} from "@/components/work/BraandlySimulators";
import {
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  GitPullRequest,
  ExternalLink,
  Code2,
  Terminal,
  FileText,
  ShieldAlert,
} from "lucide-react";

export default function BraandlyCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200">
      <Navbar />

      <main>
        <CaseStudyHeader
          title="Braandly — Engineering a More Capable Brand Management Platform"
          role="Frontend Developer"
          product="Enterprise brand creation, asset management, and creative collaboration platform"
          timeline="September 2025 — Present"
          technologies={[
            "Next.js",
            "React 19",
            "TypeScript",
            "TanStack React Query",
            "Zustand",
            "Redux Toolkit",
            "Tailwind CSS",
            "HeroUI",
            "Framer Motion",
          ]}
          repoUrl="https://github.com/Maestroharyor/braandly-app"
          prReferences="PRs #218, #408, #422, #423, #484, #494 (Admin: #211, #220)"
          category="Feature Architecture & Systems"
          categoryColor="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/40"
        />

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Executive Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Overview
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Braandly is a platform that helps businesses and creative teams build brand identities, manage digital assets, generate visual resources, and collaborate on projects.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              My work focused on expanding product capabilities and improving the reliability of existing workflows. I built a multi-page Branding Checklist suite, improved task management interactions, standardized dark-mode loading states across more than 33 files, resolved navigation and UI state bugs, tightened role-based navigation visibility, and optimized marketing-page imagery.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Rather than treating every issue as an isolated UI defect, I investigated underlying causes in component composition, state management, event handling, caching, and responsive layout behavior.
            </p>
          </section>

          {/* The Challenge */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <AlertTriangle className="w-4 h-4" />
              <span>The Engineering Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Seven distinct hurdles in a growing enterprise codebase
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Users needed a structured way to assess brand maturity and work through branding tasks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Task priority changes needed to feel immediate while remaining consistent with server state.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Comment reactions needed clearer attribution to individual workspace members without expensive linear searches.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Default loading skeletons behaved inconsistently and caused glaring shimmers in dark mode.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Palette and gradient tools had navigation, filtering, and stacking-context defects.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Several complex layouts broke down at laptop and smaller viewport widths.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                <span>Admin dashboard navigation links needed strict role-based allowlist restrictions rather than negative checks.</span>
              </li>
            </ul>
          </section>

          {/* Section 1: Branding Checklist Suite */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                01. Feature Architecture
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Built the Branding Checklist Suite (71 Files, 10,792+ Additions)
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I implemented a multi-page branding workflow spanning the tool hub, brand audit quiz, diagnostic results, checklist workspace, and checklist catalog.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The quiz evaluates brand maturity and generates tailored recommendations. The results view presents category-level diagnostics, while the checklist workspace supports task completion, progress tracking, search, checklist switching, archiving, and duplication.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I also implemented supporting engagement features, including a contextual AI chat assistant, milestone badge unlocks, and a celebratory confetti component. I diagnosed and resolved a state-reset defect that prevented celebrations from triggering on subsequent milestones and corrected checklist-sharing URL generation.
            </p>

            {/* Interactive Journey Component */}
            <BrandingJourneyFlow />
          </section>

          {/* Section 2: Optimistic Updates & Cache Synchronization */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                02. Interaction Engineering & State Management
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Coordinated Optimistic Updates & Cache Rollback
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I implemented priority selection workflows across task panels and sidebar menus, including clearer interaction targets, color-coded priority options, and viewport-aware dropdown positioning.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Crucially, I synchronized optimistic priority updates across three TanStack React Query cache scopes: individual tasks (<code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">['task', id]</code>), project tasks (<code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">['project', projId, 'tasks']</code>), and workspace tasks (<code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">['workspace', 'tasks']</code>). The implementation takes a pre-mutation snapshot and executes rollback behavior if the server mutation fails, ensuring the user interface remains strictly consistent with authoritative state.
            </p>

            {/* Interactive Simulator */}
            <OptimisticPriorityDemo />

            {/* Comment Reaction Memoization Sub-box */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Collaborative Reaction Attribution via Memoized Map
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To build Slack/Trello-style reaction attributions without repeatedly scanning workspace member arrays on every render (which caused <code className="font-mono text-xs">O(N * M)</code> overhead during rapid reactions), I created a memoized <code className="font-mono text-xs">Map&lt;UserId, Member&gt;</code>. I also formatted readable participant lists with remaining participant counts (e.g., "Sarah, Alex and 3 others reacted").
              </p>
            </div>
          </section>

          {/* Section 3: Standardizing Dark Mode Skeletons */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                03. Design System & Reliability
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Standardized Dark-Mode Loading Across 33+ Files
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The default HeroUI skeleton shimmer conflicted with the application's dark theme, producing harsh white flashes during async data queries. Rather than writing one-off CSS overrides across individual pages, I engineered a universal <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-bold">ThemeSkeleton</code> component with explicit tokenized light- and dark-mode background and shimmer layers, then systematically migrated over 33 core dashboard and workspace files.
            </p>

            {/* Interactive Skeleton Comparison */}
            <ThemeSkeletonComparisonDemo />
          </section>

          {/* Section 4: Root-Cause Bug Fixes */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                04. Defect Investigation
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Resolving Complex UI Behavior & Responsive Layout Defects
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Filter Tray Reopen Race Condition
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Investigated outside-click listener ordering that caused the filter tray to immediately reopen upon close. Resolved by decoupling the toggle button trigger from document listener targets.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Nested Dropdown Link Events
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Corrected dropdown navigation actions that failed because of conflicting event bubbling between nested Next.js links and interactive trigger buttons.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Stacking Context & Z-Index
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Eliminated z-index conflicts between sticky headers, color swatches, action toolbars, and fullscreen modals by standardizing layer stacking hierarchies.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Laptop Breakpoint Constraints
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Refined horizontal category scrolling and toolbar layouts at 1024px–1366px viewports, preventing awkward toolbar clipping and overlapping footer links.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Admin Navigation Access Control & Media Optimization
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Replaced insecure negative role checks (<code className="font-mono text-xs">role !== "member"</code>) with an explicit admin-role allowlist (<code className="font-mono text-xs">["admin", "superadmin"].includes(role)</code>) for dashboard navigation links. Additionally converted outdated marketing preview assets to modern WebP format and added responsive Next.js image <code className="font-mono text-xs">sizes</code> attributes to minimize unnecessary cellular bandwidth.
              </p>
            </div>
          </section>

          {/* Engineering Decisions & Trade-offs */}
          <section className="p-6 sm:p-8 rounded-3xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Key Engineering Decisions & Trade-offs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                  Fix root causes rather than symptoms:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  The filter tray defect was an event-ordering problem, not a styling glitch. The solution excluded the trigger from outside-click handling rather than using fragile setTimeout hacks.
                </span>
              </div>
              <div>
                <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                  Reuse shared architectural components:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Building a universal themed skeleton solved loading states at the design system level instead of creating 33 separate visual patches.
                </span>
              </div>
              <div>
                <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                  Keep interactive state strictly consistent:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Optimistic task priority changes needed coordinated multi-cache updates and rollback behavior, not merely a transient local badge update.
                </span>
              </div>
              <div>
                <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                  Make responsive behavior intentional:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Laptop layouts required bespoke constraints rather than assuming that mobile and desktop breakpoints covered every viewport.
                </span>
              </div>
            </div>
          </section>

          {/* Outcome & Code Trail */}
          <section className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Outcome & Verified Evidence
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              My contributions expanded Braandly's branding capabilities and improved reliability across task management, brand tooling, loading states, and responsive layouts. The work demonstrates my ability to deliver substantial product features, investigate non-obvious frontend defects, and elevate shared application architecture within an existing multi-contributor codebase.
            </p>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <GitPullRequest className="w-4 h-4 text-indigo-500" />
                <span>Code and Review Trail (GitHub):</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 pl-6">
                Branding Checklist feature suite: PRs <strong>#218</strong>, <strong>#408</strong>, <strong>#422</strong>, <strong>#423</strong>, <strong>#484</strong>, <strong>#494</strong>. Admin navigation security: PRs <strong>#211</strong>, <strong>#220</strong>.
              </p>
            </div>
          </section>

          {/* Navigation between case studies */}
          <CaseStudyNav currentSlug="braandly" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
