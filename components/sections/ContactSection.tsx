"use client";

import React, { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, MotionConfig } from "motion/react";
import { Mail, Send, CheckCircle2, Copy, X, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950";

const FIELD =
  "w-full rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors hover:border-slate-300 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/15 dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:bg-slate-800";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const emailAddress = "omojoladarasimi9@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const sentAt = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Africa/Lagos",
        timeZoneName: "short",
      }).format(new Date());

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: sentAt,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative isolate overflow-hidden border-t border-slate-200/80 bg-slate-50/50 py-24 dark:border-slate-800/80 dark:bg-[#090d16]/50"
      >
        {/* Soft ambient accent shared with the other portfolio sections. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-44 -z-10 h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.07] blur-3xl dark:bg-emerald-500/[0.06]"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left column: same information-first layout as the original. */}
            <motion.div
              className="space-y-6 lg:col-span-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
            >
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  Get in touch
                </p>
                <h2
                  id="contact-heading"
                  className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
                >
                  Interested in working together?
                </h2>
              </div>

              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I am open to frontend engineering opportunities, contract
                projects, and engineering teams looking for an engineer who can
                take ownership of building reliable features, solve difficult
                bugs, and contribute to dependable web applications.
              </p>

              <div className="space-y-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  Direct email
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 dark:border-slate-700/70 dark:bg-slate-800/60">
                  <div className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                    <Mail className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <a
                      href={`mailto:${emailAddress}`}
                      className={`truncate transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 ${FOCUS}`}
                    >
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition-colors hover:border-emerald-200 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-emerald-800 dark:hover:text-emerald-300 ${FOCUS}`}
                    title="Copy email to clipboard"
                    aria-live="polite"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://github.com/Darasimi010"
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300 ${FOCUS}`}
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <a
                    href="https://linkedin.com/in/darasimi-omojola"
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300 ${FOCUS}`}
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right column: original form layout, with the updated design tokens. */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT }}
            >
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Send a message
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Fill out the details below and your message will be sent
                  directly to my inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your name <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`${FIELD} ${FOCUS}`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your email <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`${FIELD} ${FOCUS}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Frontend Engineer Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={`${FIELD} ${FOCUS}`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Message <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your team, product, or what you are looking to build..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${FIELD} resize-none ${FOCUS}`}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-900/10 active:translate-y-0 disabled:cursor-wait disabled:opacity-60 sm:w-auto dark:bg-emerald-600 dark:hover:bg-emerald-500 ${FOCUS}`}
                    >
                      {status === "sending" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      I usually respond by email.
                    </p>
                  </div>

                  {status === "success" && (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>
                        Your message has been sent successfully. I&apos;ll be in
                        touch soon!
                      </span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      role="alert"
                      aria-live="assertive"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-medium text-rose-800 dark:border-rose-900/60 dark:bg-rose-950/35 dark:text-rose-300"
                    >
                      <X className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        Failed to send your message. Please try again or reach
                        me on{" "}
                        <a
                          href="https://linkedin.com/in/darasimi-omojola"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold underline underline-offset-2"
                        >
                          LinkedIn
                        </a>{" "}
                        or{" "}
                        <a
                          href="https://github.com/Darasimi010"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold underline underline-offset-2"
                        >
                          GitHub
                        </a>
                        .
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
