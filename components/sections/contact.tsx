"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SOCIALS } from "@/lib/data";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: SOCIALS.linkedin,
    handle: "/in/layanhalharbi",
    icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  },
  {
    label: "GitHub",
    href: SOCIALS.github,
    handle: "@22lirtx",
    icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
  },
  {
    label: "Email",
    href: `mailto:${SOCIALS.email}`,
    handle: SOCIALS.email,
    icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>,
  },
  {
    label: "Behance",
    href: SOCIALS.behance,
    handle: "/LayanAlarbi",
    fill: true,
    icon: <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.221 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not send your message.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const field =
    "w-full rounded-2xl border border-warm-200 bg-white/60 px-4 py-3 text-warm-800 outline-none transition-all placeholder:text-warm-400 focus:border-gold focus:ring-2 focus:ring-rose-200 dark:border-white/10 dark:bg-white/5 dark:text-warm-100 dark:focus:ring-gold/30";

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="section-pad">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-warm-200/70 bg-warm-50/70 p-8 shadow-glass-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] sm:p-12 lg:p-16">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-300/40 blur-[100px] dark:bg-rose-500/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-light/50 blur-[100px] dark:bg-gold/10" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep dark:text-gold-light">
                  <span className="h-px w-8 bg-gold/60" />
                  Get in touch
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  Let&apos;s build something{" "}
                  <span className="text-gradient">worth remembering.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-warm-600 dark:text-warm-300">
                  Whether it&apos;s a role, a collaboration, or a conversation about
                  design and technology — I&apos;d love to hear from you.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-warm-200/70 bg-white/50 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-glass dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-warm-900 text-white transition-colors group-hover:bg-gold dark:bg-white dark:text-warm-900">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={"fill" in s && s.fill ? "currentColor" : "none"}
                          stroke={"fill" in s && s.fill ? "none" : "currentColor"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {s.icon}
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-warm-800 dark:text-warm-100">
                          {s.label}
                        </span>
                        <span className="block truncate text-xs text-warm-500 dark:text-warm-400">
                          {s.handle}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-warm-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-8"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-200">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me a little about what you have in mind…"
                      className={`${field} resize-none`}
                    />
                  </div>

                  {/* Honeypot — hidden from humans, catches bots */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-warm-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-warm-900"
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                      ? "Message sent ✓"
                      : "Send message"}
                  {status !== "sent" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </motion.button>
                {status === "sent" && (
                  <p className="mt-3 text-center text-sm text-gold-deep dark:text-gold-light">
                    Thank you! Your message has been sent — I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-center text-sm text-rose-600 dark:text-rose-300">
                    {errorMsg}{" "}
                    <a href={`mailto:${SOCIALS.email}`} className="underline">
                      Email me directly
                    </a>
                    .
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
