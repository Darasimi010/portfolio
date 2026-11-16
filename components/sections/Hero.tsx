"use client";

import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Link from "next/link";
import { MotionConfig, motion, useMotionValue } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TanStack Query",
  "REST APIs",
  "Serwist",
];

type TrailDot = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
};

type CursorPosition = {
  x: number;
  y: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

function EngineeringIdentity() {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  // Motion values move the leading particle without rerendering on every pointer event.
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const lastPoint = useRef<CursorPosition | null>(null);
  const nextDotId = useRef(0);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    // Do not create a mouse-style cursor on touch screens.
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const point = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    cursorX.set(point.x);
    cursorY.set(point.y);
    setIsCursorVisible(true);

    const previous = lastPoint.current;

    if (previous) {
      const dx = point.x - previous.x;
      const dy = point.y - previous.y;
      const distance = Math.hypot(dx, dy);

      // Add particles only after the pointer has moved a few pixels.
      if (distance >= 4) {
        // Limit particles per event so a sudden pointer jump cannot flood the DOM.
        const particleCount = Math.min(12, Math.ceil(distance / 8));

        const newDots = Array.from({ length: particleCount }, (_, index) => {
          const progress = (index + 1) / particleCount;

          return {
            id: nextDotId.current++,
            x: previous.x + dx * progress,
            y: previous.y + dy * progress,
            // The particles taper toward the older end of the trail.
            size: 1.8 + progress * 2.2,
            opacity: 0.22 + progress * 0.63,
            duration: 0.25 + progress * 0.12,
          };
        });

        setTrail((current) => [...current, ...newDots].slice(-48));
      }
    }

    lastPoint.current = point;
  };

  const handlePointerLeave = () => {
    setIsCursorVisible(false);
    lastPoint.current = null;
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25, ease }}
      aria-label="Personal engineering identity"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      {/* Ambient emerald glow outside the card. */}
      <div
        className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-emerald-500/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerCancel={handlePointerLeave}
        className="relative flex aspect-auto min-h-[26rem] cursor-none flex-col overflow-hidden rounded-[1.8rem] border border-emerald-900/70 bg-[#0b1510] p-6 text-white shadow-[0_28px_90px_-38px_rgba(16,185,129,0.3)] sm:min-h-[30rem] sm:p-8"
      >
        {/* Interactive particle trail. */}
        <div
          className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
          aria-hidden="true"
        >
          {trail.map((dot) => (
            <motion.span
              key={dot.id}
              initial={{ opacity: dot.opacity, scale: 1 }}
              animate={{ opacity: 0, scale: 0.08 }}
              transition={{ duration: dot.duration, ease: "easeOut" }}
              onAnimationComplete={() => {
                setTrail((current) =>
                  current.filter((item) => item.id !== dot.id),
                );
              }}
              className="absolute rounded-full bg-emerald-200 shadow-[0_0_9px_rgba(52,211,153,0.85)]"
              style={{
                left: dot.x,
                top: dot.y,
                width: dot.size,
                height: dot.size,
                marginLeft: -dot.size / 2,
                marginTop: -dot.size / 2,
              }}
            />
          ))}

          {/* Brighter leading dot. */}
          {isCursorVisible && (
            <motion.span
              className="absolute left-0 top-0 h-[9px] w-[9px] rounded-full bg-emerald-100 shadow-[0_0_12px_3px_rgba(52,211,153,0.65)]"
              style={{
                left: cursorX,
                top: cursorY,
                marginLeft: -4.5,
                marginTop: -4.5,
              }}
            />
          )}
        </div>

        {/* Subtle technical background grid. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden="true"
        />

        {/* Ambient center glow. */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(16,185,129,0.16),transparent_52%)]"
          aria-hidden="true"
        />

        {/* Top identification. */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              aria-hidden="true"
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/75">
              Engineering Identity
            </p>
          </div>

          <span className="font-mono text-[10px] tracking-widest text-slate-500">
            OO
          </span>
        </div>

        {/* Central identity artwork. */}
        <div className="relative flex flex-1 flex-col items-center justify-center py-10">
          {/* Slow orbital animation. */}
          <motion.div
            className="pointer-events-none absolute inset-0 m-auto h-[17rem] w-[17rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 38, ease: "linear", repeat: Infinity }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full border border-emerald-200/[0.12]" />
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          </motion.div>

          {/* Static elliptical geometry. */}
          <div
            className="pointer-events-none absolute inset-0 m-auto h-[20rem] w-[10rem] rotate-45 rounded-[50%] border border-emerald-200/[0.10]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 m-auto h-[20rem] w-[10rem] -rotate-45 rounded-[50%] border border-emerald-200/[0.07]"
            aria-hidden="true"
          />

          {/* Ambient particles. */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <span className="absolute left-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
            <span className="absolute right-[17%] top-[35%] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.6)]" />
            <span className="absolute bottom-[24%] left-[25%] h-1 w-1 rounded-full bg-emerald-200/50" />
          </div>

          {/* Initials. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            role="img"
            aria-label="O O monogram"
            className="relative z-10 select-none font-black leading-none tracking-[-0.16em] text-transparent"
            style={{
              fontSize: "clamp(8rem, 18vw, 11rem)",
              WebkitTextStroke: "1.5px rgba(167, 243, 208, 0.8)",
            }}
          >
            OO
            <span
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.75)]"
              aria-hidden="true"
            />
          </motion.div>

          {/* Personal philosophy. */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="relative z-10 mt-9 text-center"
          >
            <p className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
              Think in systems.
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-emerald-300 sm:text-2xl">
              Build with intent.
            </p>
          </motion.div>
        </div>

        {/* Bottom identity labels. */}
        <div className="relative z-10 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            {["Product thinking", "Engineering", "Execution"].map((item) => (
              <span
                key={item}
                className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-400 sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative corner detail. */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full border border-emerald-200/[0.07]"
          aria-hidden="true"
        />
      </div>
    </motion.aside>
  );
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-[#090d16]"
      >
        {/* Page-level ambient background. */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-emerald-500/[0.07] blur-3xl dark:bg-emerald-400/[0.055]" />
          <div className="absolute -left-48 bottom-[-18rem] h-[30rem] w-[30rem] rounded-full bg-slate-200/50 blur-3xl dark:bg-emerald-950/20" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(23rem,0.92fr)] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease }}
              className="mb-5 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 sm:text-base"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="text-[clamp(3rem,7.5vw,6.8rem)] font-bold leading-[0.91] tracking-[-0.075em] text-slate-950 dark:text-white"
            >
              Oluwadarasimi
              <span className="mt-2 block text-emerald-700 dark:text-emerald-400">
                Omojola
                <span className="text-slate-300 dark:text-slate-700">.</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease }}
            >
              <p className="mt-8 max-w-2xl text-xl font-medium leading-snug tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl lg:text-[1.75rem]">
                I&apos;m a software engineer who builds dependable products that
                work beautifully and hold up under the hood.
              </p>
              <p className="mt-5 max-w-[39rem] text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
                I turn complex product workflows into dependable experiences. I
                connect interfaces to backend services, trace bugs to their root
                causes, and pay close attention to state, system boundaries, and
                failure modes. Building software people can rely on.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-600 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-500 dark:text-[#07130c] dark:hover:bg-emerald-400"
                >
                  Explore my work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900"
                >
                  View resume <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
                >
                  Get in touch <ArrowDownRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55, ease }}
              className="mt-11 border-t border-slate-200/80 pt-5 dark:border-slate-800"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Tools I work with
              </p>
              <ul
                className="flex flex-wrap gap-x-4 gap-y-2.5"
                aria-label="Core technology stack"
              >
                {stack.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-[13px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
                Currently exploring{" "}
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  Go and backend engineering.
                </span>
              </p>
            </motion.div>
          </div>

          <EngineeringIdentity />
        </div>
      </section>
    </MotionConfig>
  );
}
