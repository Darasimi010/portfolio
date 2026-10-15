"use client";

import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import {
  TimezoneNormalizationBreakdown,
  BffProxyArchitectureDiagram,
} from "@/components/work/HolfordArchitectures";
import {
  ShieldCheck,
  Globe2,
  Calendar,
  Server,
  ArrowRight,
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  Code2,
} from "lucide-react";

export default function HolfordHomesCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200">
      <Navbar />

      <main>
        <CaseStudyHeader
          title="Holford Homes — Building an International Consultation Booking System"
          role="Frontend Engineer — Consultation Booking & API Integration"
          product="Real estate platform serving Nigerians living abroad who want to purchase property in Nigeria"
          timeline="October 2025 — December 2025"
          technologies={[
            "Next.js App Router",
            "React",
            "TypeScript",
            "JavaScript Date/Intl APIs",
            "REST APIs",
            "Tailwind CSS",
          ]}
          liveUrl="https://www.holfordhomes.com"
          prReferences="PRs #2, #3; commits d71abd7, 7879abb, 666c583, e7bf5e2"
          category="Booking Systems & API Proxying"
          categoryColor="bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/40"
        />

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Executive Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Overview
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Holford Homes helps Nigerians abroad explore property purchases and related real estate advisory services in Nigeria. The consultation booking flow is a critical touchpoint connecting prospective diaspora purchasers with licensed property consultants.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I worked on transforming the booking experience from a static UI prototype into a backend-connected workflow. My scope covered lead submission, server-side API proxying, live appointment availability, timezone-aware slot selection, booking confirmation, and defensive handling of API errors and environment configurations.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The central challenge was to make a booking flow designed for an international diaspora audience work reliably across the browser, Next.js server, and upstream backend.
            </p>
          </section>

          {/* The Problem */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>The Engineering Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Bridging the gap between static prototype and international production
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              The original booking flow relied on hardcoded calendar dates and simulated form-submission timeouts. It had several structural shortcomings:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>Zero connection to live advisor availability calendars.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>No mechanism for translating appointment times between Nigerian consultants (WAT) and users in London (GMT) or New York (EST).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>Client-side code risked exposing upstream secret credentials and internal staging URLs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>Frontend form values did not match the strict schema expected by upstream services.</span>
              </li>
            </ul>
          </section>

          {/* Section 1: Server-Side API Proxy Layer */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                01. Backend-for-Frontend (BFF) Architecture
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A Server-Side API Proxy Layer (3 App Router Handlers)
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              To keep upstream credentials strictly out of the client browser bundle, I implemented three Next.js App Router route handlers that act as a secure boundary:
            </p>

            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 pl-2">
              <li className="flex items-start gap-2">
                <code className="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400">POST /api/consultations</code>
                <span>— Forwards user contact details and property criteria to create a consultation record and returns a dynamic UUID.</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400">GET /api/consultations/availabilities</code>
                <span>— Retrieves live 42-day booking availability directly from consultant calendar databases.</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400">POST /api/consultations/[uuid]/date</code>
                <span>— Submits the normalized UTC appointment time linked to the specific consultation lead.</span>
              </li>
            </ul>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The handlers use environment-based configuration and inject the <code className="font-mono text-xs font-bold">X-Frontend-Key</code> securely on the server side instead of exposing it in public client JavaScript. They also forward request metadata by extracting and attaching the client's IP via the <code className="font-mono text-xs font-bold">X-User-IP</code> header while faithfully preserving upstream HTTP status codes and content types.
            </p>

            {/* Architecture Diagram */}
            <BffProxyArchitectureDiagram />
          </section>

          {/* Section 2: Timezone Handling */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                02. Cross-Border Time Systems
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Timezone-Aware Appointment Normalization
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The booking interface needed to present appointment times in a way that international customers could understand while preserving the timestamp format expected by the backend.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I implemented date and time conversion utilities using native JavaScript <code className="font-mono text-xs font-bold">Date</code>, <code className="font-mono text-xs font-bold">Date.UTC()</code>, and <code className="font-mono text-xs font-bold">Intl.DateTimeFormat</code> APIs. The flow detects the browser's IANA timezone, renders available times in the user's local 24-hour format, and serializes the selected appointment into the backend's expected ISO 8601 UTC timestamp representation.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Crucially, the interface separates the human-readable display time from the timestamp submitted to the backend. This avoids treating a localized display string as the booking record itself.
            </p>

            {/* Timezone Systems Breakdown */}
            <TimezoneNormalizationBreakdown />
          </section>

          {/* Section 3: 42-Day Calendar & Lead Integration */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                03. Dynamic Calendar & Flow Chaining
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A Dynamic 42-Day Availability Grid & UUID Chaining
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I replaced hardcoded slot arrays with live availability derived from the backend. The calendar generates a 6-week (42-day) grid, evaluates each date against returned availability, and identifies selectable dates. The slot interface maps available backend times into readable local times and distinguishes video consultations from phone calls.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              On successful lead creation, the application captures the returned consultation UUID and passes it forward to bind the selected appointment time without requiring the user to re-enter their contact information.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Integration Hardening & Defensive UI Design
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Aligned budget and property-type values with backend schema enums while keeping user-friendly labels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Replaced generic browser alert popups with contextual, accessible toast notifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Guarded against applying asynchronous results after component unmount.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Key Engineering Decisions */}
          <section className="p-6 sm:p-8 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Key Engineering Decisions & Trade-offs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                  Keep upstream credentials server-side:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  The Next.js route handlers act as an impenetrable boundary between the public browser and upstream microservices.
                </span>
              </div>
              <div>
                <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                  Separate display time from booking time:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  A customer sees a familiar local time, while the application submits a normalized, immutable UTC timestamp.
                </span>
              </div>
              <div>
                <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                  Derive availability from backend truth:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  The calendar derives selectable dates and times from live API data instead of relying on a static mock schedule.
                </span>
              </div>
              <div>
                <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                  Make network failures visible and recoverable:
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Loading indicators, contextual notifications, and explicit error handling make failures understandable rather than simulated success.
                </span>
              </div>
            </div>
          </section>

          {/* Outcome & Evidence */}
          <section className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Outcome & Implementation Evidence
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I replaced a mock booking prototype with an API-connected lead capture and consultation scheduling flow. The implementation introduced live availability retrieval, timezone-aware slot presentation, server-side request proxying, backend-aligned form values, and robust error handling.
            </p>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <GitPullRequest className="w-4 h-4 text-amber-500" />
                <span>Implementation Evidence (Private Enterprise Repository):</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 pl-6">
                Branch: <strong>feature/booking-availability-flow</strong>; Pull Requests: <strong>PR #2</strong>, <strong>PR #3</strong>; Commits: <strong>d71abd7</strong>, <strong>7879abb</strong>, <strong>666c583</strong>, <strong>e7bf5e2</strong>.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <CaseStudyNav currentSlug="holford-homes" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
