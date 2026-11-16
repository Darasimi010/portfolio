"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Globe2,
  Mail,
  Printer,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

type Experience = {
  id: string;
  number: string;
  company: string;
  role: string;
  dates: string;
  category: string;
  description: string;
  bullets: string[];
  current?: boolean;
  foundation?: boolean;
};

const experiences: Experience[] = [
  {
    id: "cyclelink",
    number: "01",
    company: "CycleLink",
    role: "Frontend Engineer",
    dates: "August 2026 — Present",
    category: "CONTRACT · PRODUCT ENGINEERING",
    description:
      "A waste-collection coordination platform connecting households with collectors.",
    current: true,
    bullets: [
      "Integrated household and collector pickup workflows with live REST APIs, replacing mock data and simulated interactions with backend-driven application state.",
      "Improved role-aware onboarding and dashboard access, pickup history and pagination, drop-off availability, and pending-verification workflows while aligning frontend behavior with documented API contracts.",
      "Investigated data-persistence and security issues involving browser storage, delegated pickup-handler persistence, API-driven forms and timestamps; used TypeScript, ESLint and OpenAPI tooling to support debugging and validation.",
    ],
  },
  {
    id: "braandly",
    number: "02",
    company: "Braandly",
    role: "Frontend Developer",
    dates: "September 2025 — Present",
    category: "PROFESSIONAL · PRODUCT ENGINEERING",
    description:
      "An enterprise platform for brand creation, asset management and creative collaboration.",
    current: true,
    bullets: [
      "Engineered optimistic task-priority updates across three TanStack React Query cache scopes, with rollback on mutation failure, and built memoized user lookup and attribution for collaborative comment reactions.",
      "Developed a reusable dark-mode skeleton component and migrated it across 33+ files, standardizing loading-state styling throughout dashboard and workspace interfaces.",
      "Resolved cross-application defects involving role-based admin navigation, palette and gradient interactions, event-handling race conditions, responsive layouts, and image delivery using WebP assets and responsive Next.js image sizing.",
    ],
  },
  {
    id: "holford-homes",
    number: "03",
    company: "Holford Homes",
    role: "Frontend Engineer",
    dates: "September 2025 — December 2025",
    category: "PROFESSIONAL · WEB APPLICATION",
    description:
      "A real-estate platform serving Nigerians abroad who want to purchase property in Nigeria.",
    bullets: [
      "Replaced a mock consultation booking flow with backend-connected lead submission, live availability retrieval, and appointment selection through three Next.js App Router API handlers.",
      "Implemented a timezone-aware booking calendar with a 42-day grid, browser-local time display, UTC timestamp serialization, and video/phone consultation slot handling.",
      "Added server-side upstream credential injection, environment-based API configuration, client IP metadata forwarding, backend-aligned form values, and contextual error notifications.",
    ],
  },
  {
    id: "tcn",
    number: "04",
    company: "Transmission Company of Nigeria (TCN)",
    role: "Engineering Intern (SIWES)",
    dates: "July — September 2023 · April — September 2024",
    category: "INDUSTRIAL TRAINING · POWER SYSTEMS",
    description:
      "Hands-on exposure to national grid operations, substation protection and high-voltage maintenance.",
    foundation: true,
    bullets: [
      "Monitored national-grid stability and reviewed regional load-allocation data in the Independent System Operations (ISO) unit.",
      "Assisted senior engineers with testing and calibration of distance protection relays, current transformers and voltage transformers in the Protection, Control & Metering department.",
      "Participated in preventive maintenance of 330 kV / 132 kV switchgear, isolators, battery banks and high-voltage circuit breakers while observing HSE procedures.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages & foundations",
    items: "TypeScript, JavaScript (ES6+), HTML5, CSS3, Node.js",
  },
  {
    title: "Frontend",
    items: "Next.js, React, Tailwind CSS, HeroUI, Framer Motion",
  },
  {
    title: "State & data integration",
    items:
      "TanStack React Query, Zustand, Redux Toolkit, REST APIs, OpenAPI / Swagger",
  },
  {
    title: "Architecture & security",
    items:
      "Server-Side API Proxy Layer, upstream credential isolation, browser storage hygiene, role-based route authorization",
  },
  {
    title: "Quality & tooling",
    items:
      "ESLint, Git & GitHub, pull request reviews, responsive layout engineering, UTC date normalization, WebP and Next.js Image optimization",
  },
];

const education = {
  institution: "Obafemi Awolowo University (OAU)",
  qualification: "B.Sc. in Electronic and Electrical Engineering",
  location: "Nigeria",
  year: "2026",
  coursework: [
    "Computer Programming",
    "Telecommunications",
    "Control Systems",
    "Circuit Theory",
    "Power Systems Engineering",
  ],
  project: {
    title: "Energy-Efficient Resource Allocation for 5G MEC",
    stack: "Python · CVXPY · MATLAB · Mathematical Optimization",
    bullets: [
      "Formulated convex optimization models for 5G Mobile Edge Computing networks to minimize computational latency and device energy consumption while maximizing throughput.",
      "Simulated multi-user offloading decisions under bandwidth and processing constraints using CVXPY, MATLAB and scientific Python tooling.",
    ],
  },
};

const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    detail:
      "Enterprise routing and switching (OSPF, RIP), subnetting, Ethernet technologies, WLAN basics and network automation.",
    status: "ONGOING",
  },
  {
    name: "freeCodeCamp — Responsive Web Design",
    detail: "Advanced CSS, responsive layouts and accessibility standards.",
    status: "CERTIFICATION",
  },
];

const plainResume = [
  "OLUWADARASIMI OMOJOLA",
  "Frontend Engineer",
  "Email: omojoladarasimi9@gmail.com | Portfolio: omojola.vercel.app | GitHub: github.com/Darasimi010 | LinkedIn: linkedin.com/in/darasimi-omojola",
  "",
  "PROFESSIONAL SUMMARY",
  "Frontend engineer focused on reliable product experiences: connecting interfaces to backend services, building multi-role workflows, tracing complex bugs to their underlying causes, and improving application reliability, security and usability. Experienced with Next.js, React, TypeScript, TanStack Query, REST APIs and OpenAPI contracts.",
  "",
  "PROFESSIONAL EXPERIENCE",
  ...experiences.flatMap((experience) => [
    `${experience.company} — ${experience.role}`,
    `${experience.dates} | ${experience.category}`,
    ...experience.bullets.map((bullet) => `• ${bullet}`),
    "",
  ]),
  "EDUCATION",
  `${education.institution} — ${education.qualification}`,
  `${education.location} | ${education.year}`,
  `Relevant coursework: ${education.coursework.join(", ")}`,
  "",
  `Graduate project: ${education.project.title}`,
  `Technologies: ${education.project.stack}`,
  ...education.project.bullets.map((bullet) => `• ${bullet}`),
  "",
  "CERTIFICATIONS & PROFESSIONAL CREDENTIALS",
  ...certifications.map(
    (certification) =>
      `• ${certification.name} (${certification.status}): ${certification.detail}`,
  ),
  "",
  "TECHNICAL SKILLS",
  ...skillGroups.map((group) => `• ${group.title}: ${group.items}`),
].join("\n");

function ContactLink({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex min-w-0 items-center gap-2 text-xs text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1711]"
    >
      <span className="shrink-0 text-emerald-300">{icon}</span>
      <span className="truncate">{label}</span>
      {external && (
        <ArrowUpRight
          className="h-3 w-3 shrink-0 text-white/35"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

export default function ResumePage() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const reduceMotion = useReducedMotion();

  const handlePrint = () => window.print();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainResume);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2400);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 transition-colors duration-200 dark:bg-zinc-950 dark:text-white">
      <div className="no-print">
        <Navbar />
      </div>

      <main className="relative isolate overflow-hidden pb-24 pt-28 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-44 right-[-12rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-400/[0.08] blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="no-print mb-8 flex flex-col gap-5 border-b border-zinc-200/80 pb-6 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Back to portfolio
              </Link>
              <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                THE RESUME
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl">
                A closer look at{" "}
                <span className="text-zinc-400 dark:text-zinc-500">
                  my work.
                </span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
                Experience, technical strengths and the engineering work behind
                the interfaces.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {copyState === "copied" ? (
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400"
                    aria-hidden="true"
                  />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {copyState === "copied"
                  ? "Copied"
                  : copyState === "error"
                    ? "Copy unavailable"
                    : "Copy text"}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-emerald-950/10 transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-500"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                Print / Save as PDF
              </button>
            </div>
          </motion.div>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="resume-sheet overflow-hidden rounded-[2rem] border border-zinc-200/90 bg-white shadow-xl shadow-zinc-900/[0.04] dark:border-zinc-800 dark:bg-zinc-900 print:p-0 print:border-none print:shadow-none print:bg-white"
          >
            <header className="resume-hero relative isolate overflow-hidden bg-[#0d1711] px-6 py-8 text-white sm:px-9 sm:py-10 lg:px-11 lg:py-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-36 -z-10 h-96 w-96 rounded-full bg-emerald-300/[0.11] blur-3xl"
              />
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-end">
                <div>
                  <p className="mb-4 text-[10px] font-bold tracking-[0.2em] text-emerald-300">
                    OLUWADARASIMI OMOJOLA{" "}
                    <span className="px-1.5 text-white/25">/</span> RESUME
                  </p>
                  <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-[3.5rem]">
                    Frontend Engineer<span className="text-emerald-300">.</span>
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-[15px]">
                    I build dependable product experiences by connecting
                    interfaces to backend services, taking ownership of complex
                    workflows, and tracing bugs to their underlying causes.
                  </p>
                </div>

                <div className="hidden border-l border-white/10 pl-5 lg:block">
                  <p className="text-[9px] font-bold tracking-[0.18em] text-emerald-300">
                    ENGINEERING FOCUS
                  </p>
                  <ul className="mt-4 space-y-2.5 text-xs leading-5 text-white/65">
                    <li>API-driven product interfaces</li>
                    <li>Application state & data flows</li>
                    <li>Frontend reliability & security</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
                <ContactLink
                  href="mailto:omojoladarasimi9@gmail.com"
                  label="omojoladarasimi9@gmail.com"
                  icon={<Mail className="h-3.5 w-3.5" aria-hidden="true" />}
                />
                <ContactLink
                  href="https://omojola.vercel.app"
                  label="omojola.vercel.app"
                  icon={<Globe2 className="h-3.5 w-3.5" aria-hidden="true" />}
                  external
                />
                <ContactLink
                  href="https://github.com/Darasimi010"
                  label="github.com/Darasimi010"
                  icon={<Github className="h-3.5 w-3.5" aria-hidden="true" />}
                  external
                />
                <ContactLink
                  href="https://linkedin.com/in/darasimi-omojola"
                  label="linkedin.com/in/darasimi-omojola"
                  icon={<Linkedin className="h-3.5 w-3.5" aria-hidden="true" />}
                  external
                />
              </div>
            </header>

            <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 lg:p-11">
              <div className="min-w-0">
                <section aria-labelledby="experience-heading">
                  <div className="mb-7 flex items-end justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                        CAREER HISTORY
                      </p>
                      <h3
                        id="experience-heading"
                        className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white"
                      >
                        Professional experience
                      </h3>
                    </div>
                    <span className="pb-1 text-[10px] font-medium tabular-nums text-zinc-400">
                      2023 — 2026
                    </span>
                  </div>

                  <div className="space-y-8">
                    {experiences.map((experience, index) => (
                      <motion.section
                        key={experience.id}
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        whileInView={
                          reduceMotion ? undefined : { opacity: 1, y: 0 }
                        }
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{
                          duration: 0.45,
                          delay: Math.min(index, 3) * 0.045,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`relative ${experience.foundation ? "rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-950/60 sm:p-5" : ""}`}
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2 text-[9px] font-bold tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
                              <span>{experience.number}</span>
                              <span
                                className="h-px w-4 bg-emerald-500/50"
                                aria-hidden="true"
                              />
                              <span>{experience.category}</span>
                              {experience.current && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[8px] tracking-[0.1em] text-emerald-800 dark:border-emerald-900/70 dark:bg-emerald-950/50 dark:text-emerald-300">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                  CURRENT
                                </span>
                              )}
                              {experience.foundation && (
                                <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-[8px] tracking-[0.1em] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                                  ENGINEERING FOUNDATION
                                </span>
                              )}
                            </div>
                            <h4 className="text-lg font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white sm:text-xl">
                              {experience.company}
                            </h4>
                            <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                              {experience.role}
                            </p>
                            <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                              {experience.description}
                            </p>
                          </div>

                          <span className="inline-flex w-fit shrink-0 items-center rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] font-medium leading-4 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                            {experience.dates}
                          </span>
                        </div>

                        <ul className="mt-4 space-y-2.5">
                          {experience.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2.5 text-xs leading-[1.65] text-zinc-600 dark:text-zinc-300 sm:text-[13px]"
                            >
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.section>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="min-w-0">
                <section
                  aria-labelledby="skills-heading"
                  className="border-t border-zinc-200 pt-6 dark:border-zinc-800 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
                >
                  <p className="text-[9px] font-bold tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                    TOOLKIT
                  </p>
                  <h3
                    id="skills-heading"
                    className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white"
                  >
                    Technical strengths
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    Tools and practices used across the products and workflows
                    above.
                  </p>

                  <div className="mt-6 space-y-5">
                    {skillGroups.map((group, index) => (
                      <div
                        key={group.title}
                        className={
                          index === 0
                            ? ""
                            : "border-t border-zinc-100 pt-4 dark:border-zinc-800"
                        }
                      >
                        <h4 className="text-[10px] font-bold tracking-[0.08em] text-zinc-900 dark:text-zinc-100">
                          {group.title}
                        </h4>
                        <p className="mt-2 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">
                          {group.items}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-[#0d1711] p-5 text-white print:break-inside-avoid">
                    <p className="text-[9px] font-bold tracking-[0.17em] text-emerald-300">
                      APPROACH
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/75">
                      Understand the system, find the underlying problem, and
                      build a solution that stays maintainable beyond the first
                      successful render.
                    </p>
                  </div>
                </section>
              </aside>
            </div>

            <section
              aria-labelledby="education-heading"
              className="border-t border-zinc-100 px-6 py-8 dark:border-zinc-800 sm:px-9 lg:px-11 lg:py-10"
            >
              <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                    ACADEMIC BACKGROUND
                  </p>
                  <h3
                    id="education-heading"
                    className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white"
                  >
                    Education & credentials
                  </h3>
                </div>
                <span className="text-[10px] font-medium text-zinc-400">
                  Engineering · Networks · Computing
                </span>
              </div>

              <div className="grid gap-7 lg:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] lg:gap-10">
                <div className="min-w-0 space-y-7">
                  <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-5 dark:border-zinc-800 dark:bg-zinc-950/50 sm:p-6 print:break-inside-avoid">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[9px] font-bold tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
                          UNIVERSITY EDUCATION
                        </p>
                        <h4 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                          {education.institution}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {education.qualification}
                        </p>
                      </div>
                      <span className="inline-flex w-fit shrink-0 items-center rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                        {education.location} · {education.year}
                      </span>
                    </div>

                    <div className="mt-5 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
                      <p className="text-[9px] font-bold tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                        RELEVANT COURSEWORK
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {education.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="print:break-inside-avoid">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[9px] font-bold tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
                        GRADUATE PROJECT
                      </p>
                    </div>
                    <h4 className="mt-2 text-base font-semibold tracking-[-0.025em] text-zinc-950 dark:text-white">
                      {education.project.title}
                    </h4>
                    <p className="mt-1.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                      {education.project.stack}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {education.project.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-300"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="min-w-0 border-t border-zinc-200 pt-6 dark:border-zinc-800 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  <p className="text-[9px] font-bold tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                    CONTINUING DEVELOPMENT
                  </p>
                  <h4 className="mt-1.5 text-lg font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                    Certifications
                  </h4>
                  <div className="mt-5 space-y-5">
                    {certifications.map((certification, index) => (
                      <div
                        key={certification.name}
                        className={
                          index === 0
                            ? ""
                            : "border-t border-zinc-100 pt-5 dark:border-zinc-800"
                        }
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <h5 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            {certification.name}
                          </h5>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[8px] font-bold tracking-[0.1em] ${
                              certification.status === "ONGOING"
                                ? "border border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-300"
                                : "border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-300"
                            }`}
                          >
                            {certification.status}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">
                          {certification.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <footer className="flex flex-col gap-2 border-t border-zinc-100 px-6 py-5 text-[10px] text-zinc-400 dark:border-zinc-800 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-9 lg:px-11">
              <span>Oluwadarasimi Omojola · Frontend Engineer</span>
              <span>Portfolio · omojola.vercel.app</span>
            </footer>
          </motion.article>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>

      <style>{`
        @page {
          size: A4;
          margin: 12mm;
        }

        @media print {
          html, body {
            background: #ffffff !important;
            color: #18181b !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .no-print {
            display: none !important;
          }

          main {
            padding: 0 !important;
            overflow: visible !important;
          }

          .resume-sheet {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            overflow: visible !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: #ffffff !important;
            color: #18181b !important;
          }

          .resume-hero {
            border-radius: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          a {
            color: inherit !important;
            text-decoration: none !important;
          }

          section, li, aside, header, footer {
            break-inside: avoid;
          }

          .resume-sheet footer {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
