"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const NAVIGATION = [
  { label: "About", href: "/#about" },
  { label: "Selected work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Darasimi010",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/darasimi-omojola",
    Icon: Linkedin,
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <footer className="relative overflow-hidden border-t border-slate-200/80 bg-[#f7faf7] text-slate-900 transition-colors dark:border-slate-800/80 dark:bg-[#080f0b] dark:text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {/* Footer navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.08 },
              },
            }}
            className="grid gap-10 border-b border-slate-200/80 py-12 dark:border-slate-800/80 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr] lg:gap-16 lg:py-14"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="max-w-md"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-black tracking-tight text-[#082012] shadow-sm shadow-emerald-900/10">
                  OO
                </span>
                <span className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
                  Oluwadarasimi Omojola
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Software engineer focused on thoughtful interfaces, reliable
                application behaviour, and the systems that make products work.
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${label} profile`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-colors hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700/80 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-800 dark:hover:text-emerald-300"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
                <motion.a
                  href="mailto:omojoladarasimi9@gmail.com"
                  aria-label="Send an email"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-colors hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700/80 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-800 dark:hover:text-emerald-300"
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>

            <motion.nav
              aria-label="Footer navigation"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Explore
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-slate-400 dark:hover:text-emerald-300"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5 -translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Say hello
              </h3>
              <a
                href="mailto:omojoladarasimi9@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-slate-300 dark:hover:text-emerald-300"
              >
                omojoladarasimi9@gmail.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="max-w-xs text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                Open to frontend engineering opportunities and interesting
                collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-4 pt-6 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Oluwadarasimi Omojola. Built with
              care.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 font-medium text-slate-600 shadow-xs transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-800 dark:hover:text-emerald-300"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
