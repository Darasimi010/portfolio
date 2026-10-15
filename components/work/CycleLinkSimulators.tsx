"use client";

import React, { useState } from "react";
import {
  Users,
  Truck,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ArrowRight,
  Database,
  FileCode,
  Sparkles,
  Server,
  Smartphone,
} from "lucide-react";

export function RoleWorkflowMatrix() {
  const [activeRole, setActiveRole] = useState<"household" | "collector">("household");

  return (
    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Multi-Role Systems Architecture
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Household vs. Collector Operational Workflows
          </h4>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
          <button
            onClick={() => setActiveRole("household")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeRole === "household"
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shadow-2xs"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Household Experience</span>
          </button>
          <button
            onClick={() => setActiveRole("collector")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeRole === "collector"
                ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 shadow-2xs"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Collector Operations</span>
          </button>
        </div>
      </div>

      {activeRole === "household" ? (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-emerald-200/80 dark:border-emerald-900/40 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>Household User Workflow (Waste Generator)</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px]">
                API-Driven Pickup Lifecycle
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Household users schedule recyclable collections, monitor pickup arrivals, and rate service completion. Replaced fake countdown timers and hardcoded driver names with real asynchronous pickup status endpoints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">1. Schedule Pickup</span>
                <span className="text-slate-500 text-[11px]">Waste category, volume, time slot, and validated coordinates</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">2. Status Polling / Events</span>
                <span className="text-slate-500 text-[11px]">`SCHEDULED` → `ASSIGNED` → `EN_ROUTE` → `COMPLETED`</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">3. Verification & Rating</span>
                <span className="text-slate-500 text-[11px]">Weight confirmation, photo verification, and rating submission</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-indigo-200/80 dark:border-indigo-900/40 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <span>Collector Operations & Delegated Handlers</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-[10px]">
                Operational Fleet Coordination
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Collectors manage assigned territory queues, drop-off facility capacity, and driver delegations. Crucially, I identified that the account holder is often not the physical driver, requiring persistent delegated handler data.
            </p>

            <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-800/60 text-xs space-y-1.5">
              <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Identified Architectural Requirement: Delegated Pickup Handler</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                A business collector assigns daily pickups to hired field operators. If the driver's phone and name are saved only in browser storage, that information is erased on device switch. I documented this missing OpenAPI contract requirement for persistent backend assignment.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function MockToBackendStateTransitionDemo() {
  const [viewState, setViewState] = useState<"before" | "after">("after");

  return (
    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            System Evolution
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            From Mock UI Prototype to Live REST Integration
          </h4>
        </div>

        <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
          <button
            onClick={() => setViewState("before")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              viewState === "before"
                ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 shadow-2xs"
                : "text-slate-500"
            }`}
          >
            Before: Simulated MVP
          </button>
          <button
            onClick={() => setViewState("after")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              viewState === "after"
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shadow-2xs"
                : "text-slate-500"
            }`}
          >
            After: Backend Integrated
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Step 1: Data Source */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            1. Pickup Scheduling & State
          </span>
          {viewState === "before" ? (
            <div className="text-xs text-rose-600 dark:text-rose-400 space-y-1">
              <p className="font-semibold">Simulated JavaScript timers & static arrays</p>
              <p className="text-slate-500 text-[11px]">Hardcoded pickup lists that reset on page reload or were saved unsafely in browser storage.</p>
            </div>
          ) : (
            <div className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
              <p className="font-semibold">Live REST Endpoints & Authoritative Server State</p>
              <p className="text-slate-500 text-[11px]">Paginated requests (`/api/v1/pickups`), dynamic filter queries, and synchronized server status.</p>
            </div>
          )}
        </div>

        {/* Step 2: Authentication & Onboarding */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            2. Onboarding Gatekeeper
          </span>
          {viewState === "before" ? (
            <div className="text-xs text-rose-600 dark:text-rose-400 space-y-1">
              <p className="font-semibold">Indiscriminate redirects blocking public landing</p>
              <p className="text-slate-500 text-[11px]">Auth check applied broadly, preventing unauthenticated visitors from exploring the intro page.</p>
            </div>
          ) : (
            <div className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
              <p className="font-semibold">Journey-Based Route Resolution</p>
              <p className="text-slate-500 text-[11px]">Public entry permitted; role-specific authentication only enforced when navigating to setup.</p>
            </div>
          )}
        </div>

        {/* Step 3: Security & Sensitive Data */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            3. Sensitive User Information
          </span>
          {viewState === "before" ? (
            <div className="text-xs text-rose-600 dark:text-rose-400 space-y-1">
              <p className="font-semibold">Plaintext passwords & NIN in localStorage</p>
              <p className="text-slate-500 text-[11px]">Stale browser keys silently repopulating forms and posing serious security exposure.</p>
            </div>
          ) : (
            <div className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
              <p className="font-semibold">Sanitized Browser Storage & Transient Form State</p>
              <p className="text-slate-500 text-[11px]">Eliminated dangerous browser storage keys; credentials managed through secure session contracts.</p>
            </div>
          )}
        </div>

        {/* Step 4: Contract Alignment */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            4. API Contract Alignment
          </span>
          {viewState === "before" ? (
            <div className="text-xs text-rose-600 dark:text-rose-400 space-y-1">
              <p className="font-semibold">Ad-hoc assumptions & silent contract failures</p>
              <p className="text-slate-500 text-[11px]">Mismatched payload keys causing dropped form fields during testing.</p>
            </div>
          ) : (
            <div className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
              <p className="font-semibold">OpenAPI Schema Validation & TypeScript Strictness</p>
              <p className="text-slate-500 text-[11px]">Structured verification of request bodies, responses, and error shapes against OpenAPI spec.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
