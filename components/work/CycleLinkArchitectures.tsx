"use client";

import { Users, Truck, AlertTriangle } from "lucide-react";

export function DualRoleWorkflowMatrix() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Multi-Role Systems Architecture
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Household vs. Collector Operational Workflows
          </h4>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
          Role-Aware API Integration
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        A waste collection coordination platform has two fundamentally different
        user personas operating with distinct permission models, life-cycles,
        and security requirements.
      </p>

      {/* Side-by-Side Dual Role Workflows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Household Workflow */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-emerald-200/80 dark:border-emerald-900/40 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 pb-2 border-b border-emerald-100 dark:border-emerald-950">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              Household Experience (Waste Generator)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono">
              Consumer
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Household users schedule recyclable collections, monitor driver
            arrivals, and rate completed pickups. Replaced fake countdown timers
            and hardcoded mock drivers with live asynchronous pickup status
            endpoints.
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                1. Schedule Pickup
              </span>
              <span className="text-slate-500 text-[11px]">
                Material categories, volume, pickup window, and validated GPS
                coordinates.
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                2. Status Polling
              </span>
              <span className="text-slate-500 text-[11px]">
                Authoritative states:{" "}
                <code className="font-mono text-[10px]">SCHEDULED</code> →{" "}
                <code className="font-mono text-[10px]">ASSIGNED</code> →{" "}
                <code className="font-mono text-[10px]">EN_ROUTE</code> →{" "}
                <code className="font-mono text-[10px]">COMPLETED</code>.
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                3. Verification & Rating
              </span>
              <span className="text-slate-500 text-[11px]">
                Weight confirmation, photo verification, and rating submission.
              </span>
            </div>
          </div>
        </div>

        {/* Collector Operations */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-indigo-200/80 dark:border-indigo-900/40 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400 pb-2 border-b border-indigo-100 dark:border-indigo-950">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              Collector Operations (Fleet & Logistics)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">
              Operator
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Collectors manage assigned territory queues, drop-off facility
            capacity, and driver delegations. The account holder is frequently
            an enterprise that assigns pickups to hired field operators.
          </p>

          <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-800/60 text-xs space-y-1.5">
            <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Identified Requirement: Delegated Pickup Handler</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
              When an enterprise collector assigns pickups to hired staff, the
              driver&apos;s phone and name must be persisted in backend
              contracts. If stored only in browser storage, that information is
              lost on device switch or data clear. I documented this missing
              OpenAPI contract requirement for persistent backend assignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockToBackendArchitectureComparison() {
  const comparisons = [
    {
      category: "1. Pickup Lifecycle & Driver Tracking",
      before:
        "Simulated JavaScript countdown timers & static hardcoded driver arrays that reset on refresh.",
      after:
        "Live REST endpoints (`/api/v1/pickups`), paginated history, dynamic query filters, and synchronized server state.",
    },
    {
      category: "2. Authentication & Onboarding Guards",
      before:
        "Indiscriminate redirects blocking unauthenticated visitors from exploring the public landing and intro page.",
      after:
        "Journey-based route resolution: public introductory entry points open; role-specific authenticated setup guarded.",
    },
    {
      category: "3. Sensitive User Data & Browser Storage",
      before:
        "Plaintext passwords, national identification numbers (NIN), and KYC photographs saved in `localStorage`.",
      after:
        "Sanitized browser storage completely; sensitive data handled in transient memory and secured session contracts.",
    },
    {
      category: "4. API Contract Alignment & Validation",
      before:
        "Ad-hoc assumptions about endpoint shapes causing dropped form fields during backend transitions.",
      after:
        "OpenAPI schema inspection, strict TypeScript interfaces, and structured ESLint validation.",
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            System Evolution
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            From Mock UI Prototype to Authoritative Backend State
          </h4>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          Architecture Comparison
        </span>
      </div>

      <div className="space-y-4">
        {comparisons.map((c, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2.5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
              {c.category}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-slate-700 dark:text-slate-300 space-y-1">
                <span className="font-bold text-rose-600 dark:text-rose-400 block text-[11px]">
                  Before: Simulated Prototype
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.before}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 space-y-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-[11px]">
                  After: Backend Integrated & Secured
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.after}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
