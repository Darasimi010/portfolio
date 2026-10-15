"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitPullRequest, Calendar, Briefcase, Tag } from "lucide-react";

interface CaseStudyHeaderProps {
  title: string;
  role: string;
  product: string;
  timeline: string;
  technologies: string[];
  repoUrl?: string | null;
  prReferences?: string;
  category: string;
  categoryColor: string;
}

export default function CaseStudyHeader({
  title,
  role,
  product,
  timeline,
  technologies,
  repoUrl,
  prReferences,
  category,
  categoryColor,
}: CaseStudyHeaderProps) {
  return (
    <div className="pt-28 pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>

        {/* Category & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColor}`}>
            {category}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Professional Work Experience
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {product}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
          <div>
            <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
              My Role
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
              {role}
            </span>
          </div>

          <div>
            <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
              Timeline
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 block">
              {timeline}
            </span>
          </div>

          <div>
            <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
              Verification & Code Trail
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 block">
              {prReferences || "Contribution Report"}
            </span>
          </div>

          <div>
            <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
              Source Code
            </span>
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mt-0.5"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-slate-500 dark:text-slate-400 mt-0.5 block">
                Internal Commercial Repo
              </span>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
