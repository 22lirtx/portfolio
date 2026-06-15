"use client";

import { motion, useReducedMotion } from "framer-motion";
import { STATS, SOCIALS } from "@/lib/data";

function AnimatedBackground() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      <div className={`absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-rose-300/40 blur-[120px] dark:bg-rose-500/20 ${reduce ? "" : "animate-float-slow"}`} />
      <div className={`absolute top-20 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-gold-light/50 blur-[120px] dark:bg-gold/15 ${reduce ? "" : "animate-float"}`} />
      <div className={`absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-rose-200/40 blur-[110px] dark:bg-rose-400/10 ${reduce ? "" : "animate-pulse-soft"}`} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(183,110,82,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(183,110,82,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />
      <div className="absolute inset-0 grain opacity-[0.15] dark:opacity-[0.08]" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <AnimatedBackground />

      <div className="section-pad w-full">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/50 px-4 py-1.5 text-sm font-medium text-gold-deep backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gold-light"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
            </span>
            Available for design opportunities · 2026
          </motion.div>

          <h1 className="font-display text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {["Designing experiences", "that make technology", "feel "].map(
              (line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: reduce ? 0 : 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease }}
                >
                  {line}
                  {i === 2 && <span className="text-gradient italic">human.</span>}
                </motion.span>
              )
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-warm-600 dark:text-warm-300 sm:text-xl"
          >
            A UI/UX designer specializing in Arabic-first (RTL) interfaces and
            AI-integrated experiences — building intuitive, accessible, and
            impactful digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-warm-500 dark:text-warm-400"
          >
            <span>Layan Alharbi</span>
            <span className="text-rose-300">•</span>
            <span>Computer Science Graduate</span>
            <span className="text-rose-300">•</span>
            <span>UI/UX Designer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-warm-900 px-7 py-3.5 text-sm font-semibold text-white shadow-glass-lg transition-all hover:-translate-y-0.5 hover:shadow-glow dark:bg-white dark:text-warm-900 sm:w-auto"
            >
              View My Work
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-warm-300/80 bg-white/40 px-7 py-3.5 text-sm font-semibold text-warm-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep dark:border-white/15 dark:bg-white/5 dark:text-warm-100 dark:hover:border-gold-light sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href={SOCIALS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-warm-600 underline-offset-4 transition-all hover:text-gold-deep hover:underline dark:text-warm-300 dark:hover:text-gold-light sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-warm-200/60 bg-warm-200/40 sm:grid-cols-4 dark:border-white/10 dark:bg-white/5"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-warm-50/80 px-4 py-6 text-center backdrop-blur dark:bg-warm-950/60"
              >
                <dd className="font-display text-2xl font-semibold text-gold-deep dark:text-gold-light sm:text-3xl">
                  {s.value}
                </dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-warm-500 dark:text-warm-400">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-warm-300 p-1.5 dark:border-white/20">
          <motion.span
            animate={reduce ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
