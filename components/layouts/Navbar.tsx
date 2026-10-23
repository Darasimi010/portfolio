"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  ArrowRight,
  Code2,
  Calendar,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      name: "Braandly",
      subtitle: "Product engineering at scale · 71 files, 10k+ adds",
      href: "/work/braandly",
      icon: "Code2",
      iconColor:
        "bg-violet-100/80 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400",
      arrowColor:
        "text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300",
    },
    {
      name: "Holford Homes",
      subtitle: "International consultation booking & BFF proxy",
      href: "/work/holford-homes",
      icon: "Calendar",
      iconColor:
        "bg-sky-100/80 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400",
      arrowColor:
        "text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300",
    },
    {
      name: "CycleLink",
      subtitle: "From frontend MVP to live backend workflows",
      href: "/work/cyclelink",
      icon: "Truck",
      iconColor:
        "bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
      arrowColor:
        "text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 flex items-center justify-center text-white text-sm font-black shadow-xs group-hover:scale-105 transition-transform">
                OO
              </span>
              <span className="flex flex-col">
                <span className="leading-tight text-base font-semibold">
                  Oluwadarasimi
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                  Frontend Engineer
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {/* Case Studies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/work")
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
              >
                <span>Case Studies</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                    workDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {workDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-80 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-50"
                  >
                    <div className="px-2 py-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Case Studies
                    </div>
                    {projects.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setWorkDropdownOpen(false)}
                        className="flex flex-row gap-4 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/60"
                      >
                        <div>
                          {p.icon === "Code2" && (
                            <div
                              className={`p-2 rounded-lg mt-0.5 ${p.iconColor}`}
                            >
                              <Code2 className="w-4 h-4" />
                            </div>
                          )}
                          {p.icon === "Calendar" && (
                            <div
                              className={`p-2 rounded-lg mt-0.5 ${p.iconColor}`}
                            >
                              <Calendar className="w-4 h-4" />
                            </div>
                          )}
                          {p.icon === "Truck" && (
                            <div
                              className={`p-2 rounded-lg mt-0.5 ${p.iconColor}`}
                            >
                              <Truck className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <div className="group flex flex-col">
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-semibold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5 ${p.arrowColor}`}
                            >
                              {p.name}
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${
                                  p.arrowColor
                                }`}
                              />
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                            {p.subtitle}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#engineering"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              Engineering Philosophy
            </Link>

            <Link
              href="/#experience"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              Experience
            </Link>

            <Link
              href="/resume"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/resume"
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Resume</span>
            </Link>

            <Link
              href="/#contact"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/resume"
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>

            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow-indigo-500/25 transition-all active:scale-98"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-800 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs text-emerald-700 dark:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Frontend Engineering Roles
              </div>

              <div className="space-y-1">
                <Link
                  href="/#about"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  About Me
                </Link>

                <div className="pt-2 pb-1">
                  <div className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase">
                    Case Studies
                  </div>
                  <div className="mt-1 space-y-1">
                    {projects.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <span>{p.name}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                  <Link
                    href="/#engineering"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Engineering Philosophy
                  </Link>

                  <Link
                    href="/#experience"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Experience
                  </Link>

                  <Link
                    href="/resume"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <span>Resume</span>
                  </Link>

                  <Link
                    href="/#contact"
                    className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <span>Contact</span>
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
