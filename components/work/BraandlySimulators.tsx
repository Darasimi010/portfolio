"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Sparkles,
  Sun,
  Moon,
  Database,
  ArrowRight,
  ShieldCheck,
  CheckSquare,
  HelpCircle,
  BarChart3,
  Bot,
} from "lucide-react";

export function OptimisticPriorityDemo() {
  const [priority, setPriority] = useState<"Low" | "Medium" | "High" | "Urgent">("Medium");
  const [individualCache, setIndividualCache] = useState("Medium");
  const [projectCache, setProjectCache] = useState("Medium");
  const [workspaceCache, setWorkspaceCache] = useState("Medium");
  const [isSimulatingFailure, setIsSimulatingFailure] = useState(false);
  const [status, setStatus] = useState<"idle" | "optimistic" | "success" | "rolled_back">("idle");

  const priorities = ["Low", "Medium", "High", "Urgent"] as const;

  const handleUpdate = (newP: "Low" | "Medium" | "High" | "Urgent") => {
    const previous = individualCache;

    // 1. Optimistic Update across 3 scopes
    setStatus("optimistic");
    setPriority(newP);
    setIndividualCache(newP);
    setProjectCache(newP);
    setWorkspaceCache(newP);

    // 2. Simulated server mutation
    setTimeout(() => {
      if (isSimulatingFailure) {
        // Rollback on failure
        setPriority(previous as any);
        setIndividualCache(previous);
        setProjectCache(previous);
        setWorkspaceCache(previous);
        setStatus("rolled_back");
      } else {
        setStatus("success");
      }
    }, 1200);
  };

  const priorityColors = {
    Low: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700",
    Medium: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    High: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-800",
    Urgent: "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800",
  };

  return (
    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Interactive Architecture Demo
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Optimistic Updates Across 3 React Query Cache Scopes
          </h4>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 select-none">
          <input
            type="checkbox"
            checked={isSimulatingFailure}
            onChange={(e) => setIsSimulatingFailure(e.target.checked)}
            className="rounded text-rose-600 focus:ring-rose-500"
          />
          <span className={isSimulatingFailure ? "text-rose-600 dark:text-rose-400 font-bold" : ""}>
            Simulate Server 500 Error
          </span>
        </label>
      </div>

      {/* Interactive Controls */}
      <div className="space-y-3">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Select New Task Priority to Trigger Mutation:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {priorities.map((p) => (
            <button
              key={p}
              onClick={() => handleUpdate(p)}
              disabled={status === "optimistic"}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                priority === p
                  ? `${priorityColors[p]} ring-2 ring-indigo-500/40 shadow-xs scale-102`
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60"
              }`}
            >
              Set {p}
            </button>
          ))}
        </div>
      </div>

      {/* Real-time Cache Inspection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* Scope 1: Individual Task */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
            <span>Cache 1: Task Details</span>
            <Database className="w-3.5 h-3.5 text-indigo-500" />
          </div>
          <div className="font-mono text-xs text-slate-500 truncate">
            ['task', 'tsk_482']
          </div>
          <div className="pt-1 flex items-center justify-between">
            <span className="text-xs text-slate-400">Priority:</span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${priorityColors[individualCache as keyof typeof priorityColors]}`}>
              {individualCache}
            </span>
          </div>
        </div>

        {/* Scope 2: Project Task List */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
            <span>Cache 2: Project Tasks</span>
            <Database className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="font-mono text-xs text-slate-500 truncate">
            ['project', 'proj_09', 'tasks']
          </div>
          <div className="pt-1 flex items-center justify-between">
            <span className="text-xs text-slate-400">Row state:</span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${priorityColors[projectCache as keyof typeof priorityColors]}`}>
              {projectCache}
            </span>
          </div>
        </div>

        {/* Scope 3: Workspace Task Board */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
            <span>Cache 3: Workspace Feed</span>
            <Database className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="font-mono text-xs text-slate-500 truncate">
            ['workspace', 'tasks', 'all']
          </div>
          <div className="pt-1 flex items-center justify-between">
            <span className="text-xs text-slate-400">Card badge:</span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${priorityColors[workspaceCache as keyof typeof priorityColors]}`}>
              {workspaceCache}
            </span>
          </div>
        </div>
      </div>

      {/* Mutation Status & Explanation */}
      <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/70 dark:border-slate-800 text-xs">
        {status === "optimistic" && (
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Optimistically painted all 3 caches. Awaiting server acknowledgement...</span>
          </div>
        )}
        {status === "rolled_back" && (
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Server mutation rejected (500). Snapshot restored! All 3 caches safely rolled back without inconsistent UI.</span>
          </div>
        )}
        {status === "success" && (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Server confirmed mutation. Cache invalidated and synced seamlessly with authoritative backend state.</span>
          </div>
        )}
        {status === "idle" && (
          <div className="text-slate-500 dark:text-slate-400">
            Click any priority button above to test instantaneous optimistic updates and cache rollback handling.
          </div>
        )}
      </div>
    </div>
  );
}

export function ThemeSkeletonComparisonDemo() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  return (
    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Design System Standardization
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Universal ThemeSkeleton Across 33+ Core Files
          </h4>
        </div>

        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
          <button
            onClick={() => setThemeMode("light")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
              themeMode === "light"
                ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-bold shadow-2xs"
                : "text-slate-500"
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span>Light Theme</span>
          </button>
          <button
            onClick={() => setThemeMode("dark")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
              themeMode === "dark"
                ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 font-bold shadow-2xs"
                : "text-slate-500"
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            <span>Dark Theme</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before: Inconsistent HeroUI Skeletons */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            themeMode === "dark"
              ? "bg-[#0f172a] border-rose-900/40 text-slate-200"
              : "bg-white border-rose-200 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-xs font-semibold text-rose-500">
            <span>Before: Default HeroUI Skeletons</span>
            <AlertTriangle className="w-4 h-4" />
          </div>

          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Hardcoded white shimmer gradients clashed violently against dark backgrounds, causing glaring flashes and visual jarring across dashboard routes.
          </p>

          <div className="space-y-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            {/* Glaring white shimmer in dark mode */}
            <div className="h-4 w-3/4 bg-white/70 animate-pulse rounded-md" />
            <div className="h-8 w-full bg-white/80 animate-pulse rounded-lg" />
            <div className="h-4 w-1/2 bg-white/60 animate-pulse rounded-md" />
          </div>
        </div>

        {/* After: Reusable ThemeSkeleton */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            themeMode === "dark"
              ? "bg-[#0b0f19] border-emerald-900/40 text-slate-200"
              : "bg-white border-emerald-200 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span>After: Unified ThemeSkeleton (33+ files)</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            Custom tokenized shimmer with contextual CSS variables (`--bg-card-subtle` and `--border-subtle`), ensuring smooth transitions and uniform visual rhythm.
          </p>

          <div className="space-y-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200/70 dark:border-slate-800">
            {/* Smooth friendly themed shimmer */}
            <div className="h-4 w-3/4 rounded-md animate-shimmer" />
            <div className="h-8 w-full rounded-lg animate-shimmer" />
            <div className="h-4 w-1/2 rounded-md animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrandingJourneyFlow() {
  const steps = [
    {
      num: "01",
      title: "Brand Maturity Audit",
      desc: "Multi-category diagnostic questionnaire evaluating identity, collateral, messaging, and digital presence.",
      icon: HelpCircle,
      tag: "Assessment",
    },
    {
      num: "02",
      title: "Diagnostic Scoring",
      desc: "Category-level diagnostic results engine with benchmark rankings and tailored action priorities.",
      icon: BarChart3,
      tag: "Analysis",
    },
    {
      num: "03",
      title: "Checklist Workspace",
      desc: "Interactive task execution hub with search, category filtering, archive, duplication, and progress tracking.",
      icon: CheckSquare,
      tag: "Execution",
    },
    {
      num: "04",
      title: "AI & Milestone Rewards",
      desc: "Contextual AI assistant for task guidance, celebratory milestone unlocks, and persistent checklist sharing.",
      icon: Sparkles,
      tag: "Engagement",
    },
  ];

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Feature Architecture
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white">
          The Branding Checklist End-to-End User Journey
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          71 files created or modified with 10,792+ additions spanning assessment, scoring, workspace execution, and engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span>STEP {step.num}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 font-medium">
                    {step.tag}
                  </span>
                </div>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                  {step.title}
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-indigo-500">
                <Icon className="w-4 h-4" />
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
