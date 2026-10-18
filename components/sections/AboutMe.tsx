"use client";

import { User, Heart, Sparkles, Layers, Workflow, Cpu } from "lucide-react";

export default function AboutMe() {
  const strengths = [
    {
      title: "Design Empathy & Polish",
      desc: "I care about visual rhythm, typography, accessible contrast, responsive breakpoints, and 60fps micro-interactions that make applications feel alive.",
      icon: Heart,
      color:
        "text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/40",
    },
    {
      title: "Backend & API Fluency",
      desc: "I speak HTTP, REST, and OpenAPI. I don't wait passively for backend services; I collaborate on schemas, handle error shapes defensively, and engineer BFF proxy layers.",
      icon: Cpu,
      color:
        "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/40",
    },
    {
      title: "Resilient State & Caching",
      desc: "From optimistic UI mutations with rollback to multi-scope cache invalidations in TanStack Query, I ensure the browser never presents inconsistent or stale state.",
      icon: Layers,
      color:
        "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/40",
    },
    {
      title: "Team Player & Clean PRs",
      desc: "I write clear TypeScript, maintainable abstractions, and thorough PR summaries so my teammates can review code quickly and confidently.",
      icon: Workflow,
      color:
        "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/40",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#090d16]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <User className="w-3.5 h-3.5 text-indigo-500" />
              <span>Behind the Code</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              I treat frontend engineering as the bridge between human needs and
              backend systems.
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                A lot of people think frontend development is just about writing
                CSS and displaying data from an API. But in real-world products,
                the browser is where everything comes together: slow mobile
                connections, asynchronous network errors, optimistic states,
                auth gates, and edge cases.
              </p>
              <p>
                That&apos;s where I thrive. When I work on a product, my goal
                isn&apos;t just to make it match the Figma file&mdash;it&apos;s
                to make it resilient. Whether that's coordinating optimistic
                updates across three separate cache scopes in{" "}
                <strong>Braandly</strong>, designing a server-side proxy to
                protect credentials in <strong>Holford Homes</strong>, or
                sanitizing browser storage to protect user identities in{" "}
                <strong>CycleLink</strong>, I take pride in building software
                that doesn&apos;t buckle under real-world usage.
              </p>
              <p>
                I enjoy collaborating with designers who care deeply about
                typography and spacing, as well as backend engineers who
                appreciate a frontend developer that reads their OpenAPI docs
                and handles error codes properly.
              </p>
            </div>

            {/* Quick quote / personal motto */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 italic border-l-4 border-l-indigo-500">
              &quot;Great frontend engineering is invisible when it works:
              interactions feel instant, errors are helpful and recoverable, and
              user trust is protected at every click.&quot;
            </div>
          </div>

          {/* Right Column: "What It's Like Working With Me" Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  What You Get When We Work Together
                </span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              <div className="space-y-4">
                {strengths.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div
                        className={`p-2 rounded-xl border shrink-0 ${s.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {s.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Developer snapshot badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                    Location & Time
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">
                    Lagos (WAT)
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Overlap UK, EU & US
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                    Codebase Style
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">
                    TypeScript Strict
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Modular & Well-typed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
