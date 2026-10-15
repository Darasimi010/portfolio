"use client";

import React, { useState } from "react";
import {
  Clock,
  Globe2,
  Shield,
  Server,
  Laptop,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Video,
  Phone,
  Code2,
} from "lucide-react";

export function TimezoneBookingSimulator() {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(1);

  const sampleSlots = [
    { timeWAT: "11:00", watHours: 11, label: "Morning Video Consult", type: "video" },
    { timeWAT: "14:00", watHours: 14, label: "Afternoon Property Briefing", type: "video" },
    { timeWAT: "17:30", watHours: 17.5, label: "Evening Phone Advisory", type: "phone" },
  ];

  const currentSlot = sampleSlots[selectedSlotIndex];

  // Calculate local conversions relative to Nigeria (UTC+1)
  // UK is typically UTC+0 in winter / UTC+1 in summer. Assume UTC+0 winter standard for clarity.
  // New York is UTC-5 in winter standard.
  const watTime = currentSlot.watHours;
  const utcHours = watTime - 1; // WAT is UTC+1
  const londonHours = utcHours; // Winter GMT (UTC+0)
  const newYorkHours = utcHours - 5; // EST (UTC-5)

  const formatHours = (h: number) => {
    const hours = Math.floor(h);
    const minutes = h % 1 !== 0 ? "30" : "00";
    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  };

  const isoTimestamp = `2025-11-20T${Math.floor(utcHours).toString().padStart(2, "0")}:${currentSlot.watHours % 1 !== 0 ? "30" : "00"}:00.000Z`;

  return (
    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Cross-Border Systems Engineering
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Timezone-Aware Appointment Normalization Simulator
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-xs font-semibold text-amber-700 dark:text-amber-300">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Intl.DateTimeFormat & Date.UTC()</span>
        </div>
      </div>

      {/* Slot Selection */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
          Select Appointment Slot in Nigerian Consultant Schedule:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {sampleSlots.map((slot, idx) => (
            <button
              key={slot.timeWAT}
              onClick={() => setSelectedSlotIndex(idx)}
              className={`p-3 rounded-xl text-left border transition-all ${
                selectedSlotIndex === idx
                  ? "bg-white dark:bg-slate-800 border-amber-500 shadow-xs ring-1 ring-amber-500/30"
                  : "bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                <span>{slot.timeWAT} WAT</span>
                {slot.type === "video" ? (
                  <Video className="w-3.5 h-3.5 text-indigo-500" />
                ) : (
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                )}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {slot.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Multi-Timezone Side-by-Side Display */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* Lagos, Nigeria */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>Lagos, Nigeria</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
              WAT (UTC+1)
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            {formatHours(watTime)}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Local real estate advisor availability
          </p>
        </div>

        {/* London, UK */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-amber-200 dark:border-amber-900/40 shadow-xs space-y-1.5 ring-1 ring-amber-500/20">
          <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
            <span>London, UK (Diaspora)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-mono">
              GMT (UTC+0)
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            {formatHours(londonHours)}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Browser localized presentation
          </p>
        </div>

        {/* New York, USA */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>New York, USA (Diaspora)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
              EST (UTC-5)
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            {formatHours(newYorkHours)}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Early morning diaspora slot
          </p>
        </div>
      </div>

      {/* Upstream Serialized UTC Payload */}
      <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            Serialized Payload Sent to Backend (POST /api/consultations/[uuid]/date)
          </span>
          <span className="text-[10px] text-slate-500">ISO 8601 UTC</span>
        </div>
        <div className="p-2.5 rounded-lg bg-black/50 text-emerald-400 font-mono text-xs overflow-x-auto">
          {`{ "consultation_date": "${isoTimestamp}", "consultation_type": "${currentSlot.type}" }`}
        </div>
        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
          <strong>Key Engineering Decision:</strong> Never submit localized strings like "2:00 PM GMT" to the database. The client computes an immutable UTC timestamp while preserving local rendering in the browser's detected IANA timezone.
        </p>
      </div>
    </div>
  );
}

export function BffProxyArchitectureDiagram() {
  const routes = [
    {
      method: "POST",
      path: "/api/consultations",
      desc: "Captures lead details (budget, property preferences), validates schema, forwards to upstream CRM, returns UUID.",
      secrets: "Injects X-Frontend-Key, adds X-User-IP",
    },
    {
      method: "GET",
      path: "/api/consultations/availabilities",
      desc: "Queries real-time consultant schedules, returning 42-day availability matrix and booked intervals.",
      secrets: "Injects X-Frontend-Key, strips internal staging URLs",
    },
    {
      method: "POST",
      path: "/api/consultations/[uuid]/date",
      desc: "Chains dynamic consultation UUID and normalizes selected appointment timestamp into UTC.",
      secrets: "Server-side credential injection & status code preservation",
    },
  ];

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Architecture Breakdown
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white">
          The 3 Next.js App Router Server-Side Proxy Handlers
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Creating a defensive boundary between client browsers and upstream microservices.
        </p>
      </div>

      {/* 3 Step Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tier 1: Client Browser */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
            <Laptop className="w-4 h-4" />
            <span>1. Client Browser</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Zero credentials in JavaScript bundle</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Submits to same-origin relative endpoints</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Receives structured error toasts</span>
            </li>
          </ul>
        </div>

        {/* Tier 2: Next.js API Handlers (BFF) */}
        <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>2. Next.js BFF Route Handlers</span>
          </div>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Injects secret `X-Frontend-Key` securely</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Extracts and attaches client `X-User-IP`</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Preserves upstream HTTP statuses & headers</span>
            </li>
          </ul>
        </div>

        {/* Tier 3: Upstream CRM */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <Server className="w-4 h-4" />
            <span>3. Upstream CRM Service</span>
          </div>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Validates secret key at perimeter</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Creates consultation lead UUID record</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Commits normalized UTC appointment</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Route Specifications */}
      <div className="space-y-2.5 pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Implemented Handlers:
        </span>
        {routes.map((route) => (
          <div
            key={route.path}
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 space-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-mono">
                  {route.method}
                </span>
                <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {route.path}
                </span>
              </div>
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                {route.secrets}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pl-1">
              {route.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
