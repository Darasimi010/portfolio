"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, Globe2 } from "lucide-react";
import { Github } from "../ui/Icons";
import Image from "next/image";

const primaryProjects = [
  {
    number: "01",
    eyebrow: "FEATURED PROJECT · PROGRESSIVE WEB APP",
    title: "MarketDash",
    description:
      "An offline-capable market dashboard for following US equities, quotes, watchlists and market news.",
    contribution:
      "Built the application end-to-end and integrated Finnhub's REST API with server-side credential handling, rate limiting and fallback states.",
    highlights: [
      "Installable PWA with offline support",
      "Watchlist saved on-device, without an account",
      "Clear loading, error and fallback states",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Serwist"],
    note: "Personal project using Finnhub's free tier; data coverage and request limits depend on the provider.",
    liveUrl: "https://marketforged.vercel.app",
    repoUrl: "https://github.com/Darasimi010/financial-market-dashboard",
  },
  {
    number: "02",
    eyebrow: "FEATURED PROJECT · DATA-RICH DASHBOARD",
    title: "Zenith Lead CRM",
    description:
      "A lead-management and analytics dashboard concept for a fictional real-estate agency.",
    contribution:
      "Kept the data grid, summary cards and three charts in sync by deriving them from one filtered lead dataset.",
    highlights: [
      "Shared search and filters across the dashboard",
      "CSV export of the current filtered view",
      "Sorting, pagination and loading/error states",
    ],
    stack: [
      "React",
      "TypeScript",
      "MUI X DataGrid",
      "Recharts",
      "TanStack Query",
    ],
    note: "Lead CRM prototype built with 60 mock leads; bulk actions are demonstrative and are not persisted to a backend.",
    liveUrl: "https://zenith-lead-dashboard.vercel.app",
    repoUrl: "https://github.com/Darasimi010/zenith-lead-dashboard",
  },
];

const otherProjects = [
  {
    number: "03",
    title: "IP Address Tracker",
    type: "API INTEGRATION · MAPS",
    description:
      "Search an IP address or domain and view geolocation details on an interactive map.",
    stack: "React · Vite · Leaflet · ipify API",
    liveUrl: "https://darasimi-ip-address-tracker.vercel.app",
    repoUrl: "https://github.com/Darasimi010/IP-Address-Tracker",
  },
  {
    number: "04",
    title: "SaaS Landing Page",
    type: "RESPONSIVE UI · MOTION",
    description:
      "A modular SaaS marketing page with responsive sections and deliberately restrained animations.",
    stack: "Next.js · TypeScript · Tailwind CSS · Motion",
    liveUrl: "https://darasimi-saas-landing-page.vercel.app/",
    repoUrl: "https://github.com/Darasimi010/saas-product-landing-page",
  },
  {
    number: "05",
    title: "Spotify Player Concept",
    type: "INTERACTIVE UI · STATE",
    description:
      "A responsive music player with playlists, track controls and a custom playback seekbar.",
    stack: "React · JavaScript · Tailwind CSS",
    liveUrl: "https://darasimi-spotify-clone.netlify.app",
    repoUrl: "https://github.com/Darasimi010/spotify-clone",
  },
];

function ProjectLinks({
  liveUrl,
  repoUrl,
}: {
  liveUrl: string;
  repoUrl: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <a
        href={liveUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-current transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4"
      >
        <Globe2 className="h-4 w-4" aria-hidden="true" />
        Live project
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-current/65 transition-colors hover:text-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        Source code
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function MarketDashPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[560px] rotate-[1deg] rounded-2xl border border-white/10 bg-[#111d17] p-3 shadow-2xl shadow-black/30 sm:p-4"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-bold tracking-[0.18em] text-white/80">
            MARKETDASH
          </span>
        </div>
        <span className="text-[9px] tracking-[0.14em] text-white/40">
          MARKET OVERVIEW
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 py-3 sm:gap-3 sm:py-4">
        {[
          ["WATCHLIST", "Saved on device"],
          ["MARKET DATA", "Latest quotes"],
          ["MARKET NEWS", "Recent updates"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-2.5 sm:p-3"
          >
            <p className="text-[8px] font-semibold tracking-[0.12em] text-white/40 sm:text-[9px]">
              {label}
            </p>
            <p className="mt-2 text-[10px] font-medium text-white/85 sm:text-xs">
              {value}
            </p>
          </div>
        ))}
      </div>

      <Image
        src="/projects/MarketDash.png"
        alt="Image of Marketdash homepage"
        width={1280}
        height={969}
      />
      <div className="mt-3 flex items-center justify-between px-1 text-[9px] text-white/35">
        <span>Watchlist · Quotes · News</span>
        <span>Responsive interface</span>
      </div>
    </div>
  );
}

function ZenithPreview() {
  return (
    <div
      aria-hidden="true"
      className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-900/[0.06] dark:border-zinc-700 dark:bg-zinc-900 sm:p-4"
    >
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div>
          <p className="text-xs font-bold tracking-wide text-zinc-800 dark:text-zinc-100">
            ZENITH OVERVIEW
          </p>
        </div>
        <span className="rounded-lg border border-zinc-200 px-2 py-1 dark:border-zinc-700">
          <p className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Lead pipeline
          </p>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 py-3">
        {[
          ["RECORDS", "60"],
          ["VIEW", "Filtered"],
          ["REPORT", "Ready"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800/70"
          >
            <p className="text-[8px] font-semibold tracking-[0.1em] text-zinc-400">
              {label}
            </p>
            <p className="mt-1 text-xs font-semibold text-zinc-800 dark:text-zinc-100">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800">
        <Image
          src="/projects/zenith-lead-CRM.png"
          alt="Image of zenith lead CRM dashboard"
          width={1280}
          height={969}
        />
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden border-t border-zinc-200/80 py-24 dark:border-zinc-800"
    >
      <div className="pointer-events-none absolute -top-40 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <p className="mb-4 flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
            <span className="h-px w-7 bg-emerald-500" /> SELECTED WORK
          </p>
          <h2
            id="projects-heading"
            className="text-4xl font-semibold tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl"
          >
            Building things that{" "}
            <span className="text-zinc-400 dark:text-zinc-500">work.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A selection of projects where I have worked through data,
            application state, API integration and the details that make
            interfaces dependable.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#0d1711] text-white shadow-xl shadow-zinc-900/[0.08]"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-300/[0.12] via-transparent to-transparent" />
            <div className="grid items-center gap-10 p-6 sm:p-9 lg:grid-cols-[.88fr_1.12fr] lg:gap-12 lg:p-12">
              <div>
                <p className="mb-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-emerald-300">
                  <span>{primaryProjects[0].number}</span>
                  <span className="h-px w-5 bg-emerald-300/50" />
                  {primaryProjects[0].eyebrow}
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {primaryProjects[0].title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {primaryProjects[0].description}
                </p>
                <div className="mt-6 border-l border-emerald-300/50 pl-4">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-emerald-300">
                    MY CONTRIBUTION
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {primaryProjects[0].contribution}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {primaryProjects[0].highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-white/75"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {primaryProjects[0].stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-white">
                  <ProjectLinks
                    liveUrl={primaryProjects[0].liveUrl}
                    repoUrl={primaryProjects[0].repoUrl}
                  />
                </div>
                <p className="mt-6 max-w-lg text-[11px] leading-5 text-white/40">
                  {primaryProjects[0].note}
                </p>
              </div>

              <div className="relative py-2 sm:px-2 lg:py-6">
                <div className="pointer-events-none absolute -inset-8 rounded-full bg-emerald-300/[0.07] blur-3xl" />
                <MarketDashPreview />
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{
              duration: 0.6,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 lg:grid-cols-[1fr_.9fr]"
          >
            <div className="p-6 sm:p-9 lg:p-10">
              <p className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-sky-700 dark:text-sky-400">
                <span>{primaryProjects[1].number}</span>
                <span className="h-px w-5 bg-sky-500/50" />
                {primaryProjects[1].eyebrow}
              </p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                {primaryProjects[1].title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7">
                {primaryProjects[1].description}
              </p>
              <div className="mt-6">
                <p className="text-[10px] font-bold tracking-[0.16em] text-sky-700 dark:text-sky-400">
                  MY CONTRIBUTION
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {primaryProjects[1].contribution}
                </p>
              </div>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {primaryProjects[1].highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm leading-5 text-zinc-600 dark:text-zinc-400"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {primaryProjects[1].stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 text-zinc-900 dark:text-white">
                <ProjectLinks
                  liveUrl={primaryProjects[1].liveUrl}
                  repoUrl={primaryProjects[1].repoUrl}
                />
              </div>
              <p className="mt-5 max-w-xl text-[11px] leading-5 text-zinc-400 dark:text-zinc-500">
                {primaryProjects[1].note}
              </p>
            </div>
            <div className="flex items-center bg-zinc-50 p-5 dark:bg-zinc-950/50 sm:p-8 lg:p-10">
              <ZenithPreview />
            </div>
          </motion.article>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-zinc-400">
                ALSO BUILT
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                More projects
              </h3>
            </div>
            <span className="pb-1 text-xs text-zinc-400">03—05</span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tabular-nums text-zinc-400">
                    {project.number}
                  </span>
                </div>
                <p className="mt-7 text-[9px] font-bold tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
                  {project.type}
                </p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-5 border-t border-zinc-100 pt-4 text-[11px] leading-5 text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
                  {project.stack}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-emerald-700 dark:hover:text-emerald-400"
                  >
                    Live <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-emerald-700 dark:hover:text-emerald-400"
                  >
                    Code <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
