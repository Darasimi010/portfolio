"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  ShieldCheck,
  RefreshCw,
  FileCheck2,
  Code2,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";

export default function EngineeringPillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Root-Cause Defect Resolution",
      subtitle: "Investigating state machines and event ordering, not surface styling",
      icon: Search,
      tag: "Debugging & Architecture",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/40",
      description:
        "Rather than treating UI glitches as cosmetic one-offs, I trace them to component composition, race conditions, event bubbling, or cache discrepancies. When a filter tray reopened immediately after clicking close in Braandly, the fix was untangling event propagation and outside-click targets, not adding arbitrary setTimeout delays.",
      example: {
        problem: "Filter tray outside-click race condition causing instant reopening",
        solution: "Decoupled trigger element from outside-click handler and aligned query params with router reader state",
        impact: "Zero regression across nested navigation dropdowns & laptop viewports",
      },
    },
    {
      title: "Backend-for-Frontend & Secret Isolation",
      subtitle: "Protecting upstream credentials with server-side proxy boundaries",
      icon: ShieldCheck,
      tag: "Security & API Proxying",
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40",
      description:
        "Browser clients should never store secret API keys or communicate directly with vulnerable upstream endpoints. In Holford Homes, I engineered 3 Next.js App Router route handlers that act as a strict server-side boundary, injecting the upstream X-Frontend-Key, forwarding user IP metadata, and handling upstream response statuses reliably.",
      example: {
        problem: "Upstream API credentials and endpoint URLs risking browser exposure",
        solution: "Next.js App Router server proxy handlers with environment variable isolation and IP metadata propagation",
        impact: "Clean boundary between client code and upstream microservices",
      },
    },
    {
      title: "Coordinated State & Optimistic Rollbacks",
      subtitle: "Preserving consistency across multiple TanStack Query cache scopes",
      icon: RefreshCw,
      tag: "State Management",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40",
      description:
        "Instant user feedback requires optimistic updates, but real production apps have dependent cache hierarchies. In Braandly, changing a task priority immediately updates UI across 3 distinct React Query cache levels (individual task, project tasks, and workspace tasks) while snapshotting previous state for instant rollback if the mutation fails.",
      example: {
        problem: "Stale or mismatched task priority badges across multi-level task views",
        solution: "Snapshot-based optimistic cache synchronization with automatic rollback on mutation failure",
        impact: "Zero UI desynchronization without expensive full-page re-fetches",
      },
    },
    {
      title: "Contract-Driven Integration & Data Sanitization",
      subtitle: "Replacing simulated UI states with authoritative OpenAPI schemas",
      icon: FileCheck2,
      tag: "API Contracts & Privacy",
      color: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800/40",
      description:
        "A frontend MVP that persists everything to localStorage creates dangerous data silos and security hazards. In CycleLink, I reviewed OpenAPI schemas to replace mock timers with live backend pickups, protected KYC/password data by eliminating local persistence, and separated unauthenticated public onboarding from authenticated setup.",
      example: {
        problem: "Sensitive user details stored in browser localStorage; simulated pickup states",
        solution: "Authoritative backend synchronization, OpenAPI contract review, and role-based onboarding protection",
        impact: "Clean separation of public vs authenticated journeys with secured state",
      },
    },
  ];

  return (
    <section id="engineering" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How I approach software engineering
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Building interfaces is only half the job. My focus is reasoning about system architecture, API boundaries, cache integrity, and building resilient software that withstands production realities.
          </p>
        </div>

        {/* Interactive Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectable Pillar Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activePillar === index;
              return (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border ${
                    isActive
                      ? "bg-white dark:bg-slate-900 border-indigo-500/50 dark:border-indigo-500/50 shadow-md ring-1 ring-indigo-500/20"
                      : "bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border ${pillar.color} shrink-0 mt-0.5`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {pillar.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown of Selected Pillar */}
          <div className="lg:col-span-7">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${pillars[activePillar].color}`}
                >
                  {pillars[activePillar].tag}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  Principle 0{activePillar + 1} of 04
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {pillars[activePillar].title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillars[activePillar].description}
                </p>
              </div>

              {/* Real World Case Study Example Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                  Real Project Implementation Note
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-rose-600 dark:text-rose-400">Observed issue: </span>
                    <span className="text-slate-600 dark:text-slate-300">
                      {pillars[activePillar].example.problem}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Engineered solution: </span>
                    <span className="text-slate-600 dark:text-slate-300">
                      {pillars[activePillar].example.solution}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Production impact: </span>
                    <span className="text-slate-600 dark:text-slate-300">
                      {pillars[activePillar].example.impact}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
