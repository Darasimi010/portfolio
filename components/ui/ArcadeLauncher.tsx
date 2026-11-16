"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import BlockBreakerGame from "@/components/ui/BlockBreakerGame";

export default function ArcadeLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    // Capture the trigger node while the dialog is open so cleanup uses the same element.
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-xs font-medium text-slate-600 shadow-xs transition duration-200 hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-emerald-800 dark:hover:text-emerald-300"
      >
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-shadow group-hover:shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
        />
        <span>A little extra</span>
        <span className="font-semibold text-slate-800 transition-colors group-hover:text-emerald-700 dark:text-slate-200 dark:group-hover:text-emerald-300">
          Play Block Breaker <span aria-hidden="true">↗</span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="arcade-modal-backdrop"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#050b07]/80 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10, scale: 0.99 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="arcade-dialog-title"
              className="my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-emerald-900/30 bg-[#0a130d] shadow-[0_30px_100px_-30px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-emerald-900/40 px-4 py-3.5 sm:px-6">
                <div>
                  <h2
                    id="arcade-dialog-title"
                    className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl"
                  >
                    Block Breaker<span className="text-emerald-400">.</span>
                  </h2>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    A mini-game
                  </p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-emerald-400/30 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Close</span>
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto p-3 sm:p-5">
                <BlockBreakerGame />
                <p className="mt-3 text-center text-[10px] leading-relaxed text-slate-500">
                  Move with your pointer or keyboard. Your best score is saved
                  on this device.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
