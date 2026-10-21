"use client";

import { Database, CheckCircle2, AlertTriangle, Layers } from "lucide-react";

export function OptimisticCacheArchitecture() {
  const cacheScopes = [
    {
      scope: "Scope 1: Task Detail",
      key: "['task', taskId]",
      purpose: "Active task drawer and priority dropdown",
      target: "Immediate visual confirmation on selected task target",
      color:
        "border-indigo-200 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/30",
    },
    {
      scope: "Scope 2: Project Task List",
      key: "['project', projectId, 'tasks']",
      purpose: "Table rows, status columns, and sorting orders",
      target: "Prevents parent table from showing stale prior priority",
      color:
        "border-amber-200 dark:border-amber-800/40 text-amber-600 dark:text-amber-400 bg-amber-50/60 dark:bg-amber-950/30",
    },
    {
      scope: "Scope 3: Workspace Feed",
      key: "['workspace', 'tasks']",
      purpose: "Global workspace activity, badges, and cross-project metrics",
      target: "Keeps workspace dashboard synchronized without full refetch",
      color:
        "border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30",
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Technical Architecture Sidebar
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Optimistic Updates & 3-Scope Cache Rollback Strategy
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <Layers className="w-3.5 h-3.5" />
          <span>TanStack React Query</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        Changing a task priority cannot simply update a local component state.
        In a multi-view application, the same task appears in task drawers,
        project tables, and workspace feeds. To prevent visual flickering or
        stale data, updates are coordinated across three cache scopes with
        snapshot-based rollbacks on mutation failure.
      </p>

      {/* 3 Cache Scopes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cacheScopes.map((scope, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-2.5 shadow-2xs"
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${scope.color}`}
              >
                {scope.scope}
              </span>
              <Database className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
              {scope.key}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {scope.purpose}
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Guarantees:{" "}
              </span>
              {scope.target}
            </div>
          </div>
        ))}
      </div>

      {/* Lifecycle Flow Diagram */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Mutation Lifecycle & Defensive Rollback Flow:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
              1. onMutate Snapshot
            </span>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              Cancels outgoing queries, takes a snapshot of all 3 caches, and
              optimistically updates UI for zero-delay interaction.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-1">
            <span className="font-bold text-rose-600 dark:text-rose-400 block">
              2. onError Rollback
            </span>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              If server returns an error (4xx/5xx), automatically restores the
              snapshot across all 3 scopes and alerts user via toast.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-1">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
              3. onSettled Sync
            </span>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              Invalidates all 3 query keys to guarantee the client is perfectly
              synchronized with authoritative backend data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemeSkeletonComparison() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Design System Standardization
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Universal ThemeSkeleton Component Across 33+ Core Files
          </h4>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          Light & Dark Parity
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        The default HeroUI skeleton shimmer used hardcoded white gradients that
        clashed violently with the platform&apos;s dark theme, causing harsh
        white flashes during async queries. Instead of writing dozens of ad-hoc
        CSS overrides, I built a universal{" "}
        <code className="text-xs font-mono font-bold bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">
          ThemeSkeleton
        </code>{" "}
        and migrated it systematically across 33+ files.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before Card */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-rose-200 dark:border-rose-900/40 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400 pb-2 border-b border-rose-100 dark:border-rose-900/30">
            <span>Before: Inconsistent HeroUI Shimmer</span>
            <AlertTriangle className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Hardcoded white animation keyframes created jarring white visual
            glare against dark backgrounds during page loads and tab
            transitions.
          </p>
          <div className="space-y-2.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="h-4 w-3/4 bg-white/70 rounded-md" />
            <div className="h-7 w-full bg-white/80 rounded-lg" />
            <div className="h-4 w-1/2 bg-white/60 rounded-md" />
          </div>
          <span className="text-[11px] text-rose-600 dark:text-rose-400 font-medium block">
            ❌ Disrupted visual rhythm & produced high contrast glare
          </span>
        </div>

        {/* After Card */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 pb-2 border-b border-emerald-100 dark:border-emerald-900/30">
            <span>After: Unified ThemeSkeleton (33+ Files)</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Tokenized CSS variables (
            <code className="font-mono text-[11px]">--bg-card-subtle</code> &{" "}
            <code className="font-mono text-[11px]">--border-subtle</code>)
            create harmonious, low-contrast loading rhythm across both light and
            dark themes.
          </p>
          <div className="space-y-2.5 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="h-4 w-3/4 rounded-md animate-shimmer" />
            <div className="h-7 w-full rounded-lg animate-shimmer" />
            <div className="h-4 w-1/2 rounded-md animate-shimmer" />
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block">
            ✓ Seamless visual parity across all workspace & dashboard routes
          </span>
        </div>
      </div>
    </div>
  );
}
