"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  FileText,
  Info,
  Layers,
  Lightbulb,
  Lock,
  Scale,
  Sparkles,
  Trophy,
} from "lucide-react";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];

const ACCENTS = {
  sky: {
    text: "text-sky-600 dark:text-sky-400",
    soft: "bg-sky-50/70 dark:bg-sky-950/25",
    border: "border-sky-200/70 dark:border-sky-800/50",
    solid: "bg-sky-500",
    hoverTitle: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
    ring: "focus-visible:ring-sky-500",
    button:
      "bg-sky-600 hover:bg-sky-700 hover:shadow-sky-500/25 focus-visible:ring-sky-500",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-400",
    soft: "bg-rose-50/70 dark:bg-rose-950/25",
    border: "border-rose-200/70 dark:border-rose-800/50",
    solid: "bg-rose-500",
    hoverTitle: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    ring: "focus-visible:ring-rose-500",
    button:
      "bg-rose-600 hover:bg-rose-700 hover:shadow-rose-500/25 focus-visible:ring-rose-500",
  },
  violet: {
    text: "text-violet-600 dark:text-violet-400",
    soft: "bg-violet-50/70 dark:bg-violet-950/25",
    border: "border-violet-200/70 dark:border-violet-800/50",
    solid: "bg-violet-500",
    hoverTitle: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    ring: "focus-visible:ring-violet-500",
    button:
      "bg-violet-600 hover:bg-violet-700 hover:shadow-violet-500/25 focus-visible:ring-violet-500",
  },
  emerald: {
    text: "text-emerald-600 dark:text-emerald-400",
    soft: "bg-emerald-50/70 dark:bg-emerald-950/25",
    border: "border-emerald-200/70 dark:border-emerald-800/50",
    solid: "bg-emerald-500",
    hoverTitle:
      "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    ring: "focus-visible:ring-emerald-500",
    button:
      "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-500/25 focus-visible:ring-emerald-500",
  },
  amber: {
    text: "text-amber-600 dark:text-amber-400",
    soft: "bg-amber-50/70 dark:bg-amber-950/25",
    border: "border-amber-200/70 dark:border-amber-800/50",
    solid: "bg-amber-500",
    hoverTitle: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    ring: "focus-visible:ring-amber-500",
    button:
      "bg-amber-600 hover:bg-amber-700 hover:shadow-amber-500/25 focus-visible:ring-amber-500",
  },
  indigo: {
    text: "text-indigo-600 dark:text-indigo-400",
    soft: "bg-indigo-50/70 dark:bg-indigo-950/25",
    border: "border-indigo-200/70 dark:border-indigo-800/50",
    solid: "bg-indigo-500",
    hoverTitle: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    ring: "focus-visible:ring-indigo-500",
    button:
      "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/25 focus-visible:ring-indigo-500",
  },
} as const;

type Accent = (typeof ACCENTS)[keyof typeof ACCENTS];

function getAccent(name: string): Accent {
  return (ACCENTS as Record<string, Accent>)[name] ?? ACCENTS.indigo;
}

/** Drops empty placeholder strings so unfinished entries never render blanks. */
const clean = (items: readonly string[]) =>
  items.filter((item) => item.trim().length > 0);

function Label({
  icon: Icon,
  children,
  className = "text-slate-500 dark:text-slate-400",
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${className}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {children}
    </h4>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const accent = getAccent(project.accentColor);
  const panelId = `${project.id}-deep-dive`;

  const highlights = clean(project.highlights);
  const areas = clean(project.engineeringAreas);
  const challenges = clean(project.challenges);
  const sections = project.sections.filter(
    (s) => s.heading.trim() || s.content.trim(),
  );
  const decisions = project.engineeringDecisions.filter((d) => d.title.trim());
  const hasDeepDive = sections.length > 0 || decisions.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.1 }}
      className={`group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${project.accentBorder} overflow-hidden`}
    >
      {/* Accent corner glow */}
      <div
        className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.gradient} rounded-bl-full pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity`}
      />

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <header className="flex items-start gap-4 sm:gap-6">
          <span
            aria-hidden
            className={`hidden sm:block text-5xl font-black leading-none tabular-nums opacity-25 ${accent.text}`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3
              className={`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white transition-colors ${accent.hoverTitle}`}
            >
              {project.title}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1.5 max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </header>

        {/* Overview + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <Label icon={Layers}>Overview</Label>
              <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.heroSummary}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${accent.soft} ${accent.border}`}
            >
              <Label icon={Code2} className={accent.text}>
                What I Built &amp; Engineered
              </Label>
              <p className="mt-1.5 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {project.strongestContribution}
              </p>
            </div>

            {areas.length > 0 && (
              <div>
                <Label icon={Sparkles}>Engineering Focus</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <Label icon={Layers}>Tech Stack</Label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {highlights.length > 0 && (
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <Label icon={CheckCircle2}>Key Technical Highlights</Label>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${accent.text}`}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Challenge -> Solution */}
        {(challenges.length > 0 || project.solution.trim()) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.length > 0 && (
              <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/15 border border-amber-200/60 dark:border-amber-900/40 space-y-2.5">
                <Label
                  icon={AlertTriangle}
                  className="text-amber-700 dark:text-amber-400"
                >
                  The Challenge
                </Label>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.solution.trim() && (
              <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2.5">
                <Label
                  icon={Lightbulb}
                  className="text-emerald-700 dark:text-emerald-400"
                >
                  How I Solved It
                </Label>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Outcome */}
        {project.outcome.trim() && (
          <div
            className={`flex items-start gap-3 p-5 rounded-2xl border ${accent.soft} ${accent.border}`}
          >
            <span
              className={`flex items-center justify-center w-9 h-9 rounded-xl shrink-0 text-white ${accent.solid}`}
            >
              <Trophy className="w-4.5 h-4.5" />
            </span>
            <div>
              <Label icon={Sparkles} className={accent.text}>
                Outcome
              </Label>
              <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        )}

        {/* Expandable deep dive */}
        {hasDeepDive && (
          <div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 ${accent.ring}`}
            >
              <Layers className={`w-4 h-4 ${accent.text}`} />
              <span>
                {open
                  ? "Hide technical deep dive"
                  : "Explore technical deep dive"}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-8">
                    {sections.map((section) => (
                      <div key={section.heading} className="space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {section.heading}
                          </h4>
                          {section.subheading.trim() && (
                            <p
                              className={`text-sm font-semibold ${accent.text}`}
                            >
                              {section.subheading}
                            </p>
                          )}
                          {section.content.trim() && (
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                              {section.content}
                            </p>
                          )}
                        </div>

                        {section.technicalDeepDive.title.trim() && (
                          <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-4">
                            <div>
                              <Label icon={Code2} className={accent.text}>
                                {section.technicalDeepDive.title}
                              </Label>
                              {section.technicalDeepDive.description.trim() && (
                                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {section.technicalDeepDive.description}
                                </p>
                              )}
                            </div>
                            <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {clean(section.technicalDeepDive.points).map(
                                (point, pIdx) => (
                                  <li
                                    key={point}
                                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                                  >
                                    <span
                                      className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold shrink-0 text-white ${accent.solid}`}
                                    >
                                      {pIdx + 1}
                                    </span>
                                    <span>{point}</span>
                                  </li>
                                ),
                              )}
                            </ol>
                          </div>
                        )}
                      </div>
                    ))}

                    {decisions.length > 0 && (
                      <div className="space-y-3">
                        <Label icon={Scale} className={accent.text}>
                          Engineering Decisions
                        </Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {decisions.map((d) => (
                            <div
                              key={d.title}
                              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3"
                            >
                              <h5 className="font-bold text-slate-900 dark:text-white">
                                {d.title}
                              </h5>
                              {(
                                [
                                  ["Decision", d.decision],
                                  ["Why", d.rationale],
                                  ["Trade-off", d.tradeoff],
                                ] as const
                              )
                                .filter(([, text]) => text.trim())
                                .map(([label, text]) => (
                                  <div key={label}>
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                      {label}
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                      {text}
                                    </p>
                                  </div>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Footer: honesty note + actions */}
        <footer className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {project.credibilityNote.trim() ? (
            <p className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              <Info className="w-4 h-4 shrink-0 mt-px" />
              <span>{project.credibilityNote}</span>
            </p>
          ) : (
            <span />
          )}

          <div className="flex flex-wrap items-center gap-3">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-xs hover:shadow-lg active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 ${accent.button}`}
              >
                <FileText className="w-4 h-4" />
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-xs hover:shadow-lg active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 ${accent.button}`}
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.isPrivateRepo ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                <Lock className="w-3 h-3 text-amber-500/80" />
                <span>Private Repository</span>
              </span>
            ) : (
              <a
                href={project.repoURL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </footer>
      </div>
    </motion.article>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-indigo-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I build and improve web applications by combining frontend
            engineering, API integration, and problem-solving. Here are some of
            the projects where I took ownership of core user workflows, worked
            through real bottlenecks, and shipped complete features.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
