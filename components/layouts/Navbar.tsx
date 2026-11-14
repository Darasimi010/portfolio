"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "/#about", section: "about" },
  { label: "Projects", href: "/#projects", section: "projects" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Resume", href: "/resume", section: "resume" },
] as const;

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname === "/resume" ? "resume" : "");
      return;
    }

    const sectionIds = ["about", "projects", "experience", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (section: string) => {
    if (section === "resume") return pathname === "/resume";
    return pathname === "/" && activeSection === section;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
        <motion.nav
          aria-label="Main navigation"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-emerald-900/10 bg-white/90 shadow-lg shadow-slate-900/[0.06] backdrop-blur-xl dark:border-emerald-100/10 dark:bg-[#0d1711]/90 dark:shadow-black/20"
              : "border-slate-200/70 bg-white/75 shadow-sm shadow-slate-900/[0.03] backdrop-blur-lg dark:border-slate-800/80 dark:bg-[#0d1711]/75"
          }`}
        >
          <div className="flex h-[4.25rem] items-center justify-between px-3.5 sm:px-5">
            {/* Brand */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Oluwadarasimi Omojola — home"
              className="group flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1711]"
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 text-xs font-black tracking-tight text-white shadow-sm shadow-emerald-900/15 transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
                OO
                <span className="absolute inset-x-1 top-0 h-px bg-white/50" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-[15px] font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-base">
                  Oluwadarasimi
                  <span className="text-emerald-600 dark:text-emerald-400">
                    .
                  </span>
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.19em] text-slate-500 dark:text-slate-400">
                  Software Engineer
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.section);
                return (
                  <Link
                    key={item.section}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-xl px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      active
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-emerald-500"
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                          ease: EASE_OUT,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="flex items-center border-l border-slate-200 pl-2.5 dark:border-slate-700/80 sm:pl-3">
                <ThemeToggle />
              </div>

              <Link
                href="/#contact"
                className="group hidden items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm shadow-emerald-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:focus-visible:ring-offset-[#0d1711] lg:inline-flex"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition-colors hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300 lg:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.16 }}
                    className="flex"
                  >
                    {isOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id="mobile-navigation"
                key="mobile-navigation"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.24,
                  ease: EASE_OUT,
                }}
                className="overflow-hidden lg:hidden"
              >
                <div className="border-t border-slate-200/80 px-3.5 pb-4 pt-3 dark:border-slate-800/90 sm:px-5">
                  <div className="grid gap-1">
                    {NAV_ITEMS.map((item, index) => {
                      const active = isActive(item.section);
                      return (
                        <motion.div
                          key={item.section}
                          initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: reduceMotion ? 0 : index * 0.035,
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            aria-current={active ? "page" : undefined}
                            className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-colors ${
                              active
                                ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
                            }`}
                          >
                            {item.label}
                            <ArrowUpRight
                              className={`h-4 w-4 ${active ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                  >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </MotionConfig>
  );
}
