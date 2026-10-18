"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  ShieldCheck,
  RefreshCw,
  FileCheck2,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export default function EngineeringPillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "I dig for root causes, never slap on quick band-aids.",
      shortTitle: "Root-Cause Debugging",
      tag: "Debugging & Architecture",
      icon: Search,
      color:
        "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/40",
      story:
        "When an interactive UI misbehaves, it's tempting to patch it with an arbitrary `setTimeout`, a boolean flag, or an `!important` style override. I don't do that. I open the profiler and inspect DOM event bubbling, state machines, and cache lifetimes to understand what is truly happening under the hood.",
      caseContext: {
        title: "Real Challenge in Braandly",
        whatHappened:
          "A filter tray would snap back open immediately after a user clicked outside to close it. Rather than hacking a delay timer, I investigated the outside-click listener sequence and discovered the toggle button itself was re-triggering the tray open handler. By cleanly isolating the trigger element, the defect vanished permanently without brittle timeouts.",
        takeaway:
          "Clean event architecture beats quick cosmetic fixes every time.",
      },
    },
    {
      title: "I treat the browser/server boundary with security",
      shortTitle: "BFF & Secret Isolation",
      tag: "API Integration & Security",
      icon: ShieldCheck,
      color:
        "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40",
      story:
        "Client browsers are public environments. I never expose upstream API keys, internal staging URLs, or sensitive database endpoints in client-side code. I love designing Backend-for-Frontend (BFF) route handlers in Next.js that act as a strict server-side shield while providing a clean, typed contract for the UI.",
      caseContext: {
        title: "Real Challenge in Holford Homes",
        whatHappened:
          "The initial booking flow risked leaking upstream API keys in client JavaScript. I engineered three Next.js App Router route handlers that inject the `X-Frontend-Key` server-side, forward user IP metadata, and translate browser-local time into ISO 8601 UTC timestamps before the upstream database ever sees it.",
        takeaway:
          "Keep secret keys on the server and keep the client bundle lean and secure.",
      },
    },
    {
      title: "I make UI feel instant but never leave state stranded.",
      shortTitle: "Optimistic State & Rollbacks",
      tag: "State Management",
      icon: RefreshCw,
      color:
        "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40",
      story:
        "Modern users expect zero-latency feedback. But optimistic UI without defensive rollback is a recipe for broken trust when a request fails or a network hiccups. I design snapshot-based optimistic updates across multi-level cache hierarchies so the app feels instant, but remains strictly truthful.",
      caseContext: {
        title: "Real Challenge in Braandly",
        whatHappened:
          "When a user changes a task priority, I update three distinct TanStack Query cache levels at the exact same moment: the single task view, the project task list, and the workspace feed. If the server mutation fails, my handler immediately rolls back all three caches to their pre-mutation snapshot and alerts the user with an actionable toast.",
        takeaway:
          "Speed matters, but data integrity is what keeps users trusting the application.",
      },
    },
    {
      title: "I treat authentication & user data as serious responsibilities.",
      shortTitle: "Contract Alignment & Data Hygiene",
      tag: "Data Privacy & Contracts",
      icon: FileCheck2,
      color:
        "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800/40",
      story:
        "Prototypes often fall into the trap of using browser `localStorage` as a makeshift database. That leads to stale states, dropped form fields, and severe privacy hazards like passwords or national IDs sitting in plaintext. I align frontend code with authoritative OpenAPI schemas and respect role-based journeys.",
      caseContext: {
        title: "Real Challenge in CycleLink",
        whatHappened:
          "The MVP stored sensitive user data (including KYC documents and passwords) directly in browser storage and blocked public landing pages behind indiscriminate auth checks. I helped sanitize local storage, replaced simulated pickup timers with real backend polling endpoints, and decoupled public onboarding from protected role dashboards.",
        takeaway:
          "Authoritative server state and strict contract alignment prevent critical production bugs.",
      },
    },
  ];

  return (
    <section
      id="engineering"
      className="py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>My Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How I think when building & debugging software
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Anyone can copy code from a tutorial or style a button. When you
            hire me, you get an engineer who approaches systems with curiosity,
            rigor, and a commitment to solving problems at their foundation. I
            reason about systems, make engineering decisions, work within
            existing codebases, and deliver features that serve actual users.
          </p>
        </div>

        {/* Interactive Mindset Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectable Mindset Tabs */}
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
                          {pillar.shortTitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug line-clamp-2">
                        {pillar.title}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Story in Darasimi's Voice */}
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
                  Mindset 0{activePillar + 1} of 04
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {pillars[activePillar].title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillars[activePillar].story}
                </p>
              </div>

              {/* Real Project Story Box */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    {pillars[activePillar].caseContext.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal lowercase">
                    how I applied this
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {pillars[activePillar].caseContext.whatHappened}
                </p>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    Takeaway: {pillars[activePillar].caseContext.takeaway}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
