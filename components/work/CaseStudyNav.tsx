"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyNavProps {
  currentSlug: "braandly" | "holford-homes" | "cyclelink";
}

const studies = [
  {
    slug: "braandly",
    title: "Braandly",
    subtitle: "Feature Engineering & Scale",
    href: "/work/braandly",
  },
  {
    slug: "holford-homes",
    title: "Holford Homes",
    subtitle: "Booking Systems & Timezones",
    href: "/work/holford-homes",
  },
  {
    slug: "cyclelink",
    title: "CycleLink",
    subtitle: "API Integration & Systems Security",
    href: "/work/cyclelink",
  },
];

export default function CaseStudyNav({ currentSlug }: CaseStudyNavProps) {
  const currentIndex = studies.findIndex((s) => s.slug === currentSlug);
  const prevStudy = studies[(currentIndex - 1 + studies.length) % studies.length];
  const nextStudy = studies[(currentIndex + 1) % studies.length];

  return (
    <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous */}
        <Link
          href={prevStudy.href}
          className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all shadow-xs hover:shadow-md"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Previous Case Study
          </span>
          <span className="font-bold text-base text-slate-900 dark:text-white mt-1">
            {prevStudy.title}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {prevStudy.subtitle}
          </span>
        </Link>

        {/* Next */}
        <Link
          href={nextStudy.href}
          className="group flex flex-col items-end text-right p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all shadow-xs hover:shadow-md"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            Next Case Study
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="font-bold text-base text-slate-900 dark:text-white mt-1">
            {nextStudy.title}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {nextStudy.subtitle}
          </span>
        </Link>
      </div>
    </div>
  );
}
