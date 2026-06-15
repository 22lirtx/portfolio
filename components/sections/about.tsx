"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const PILLARS = [
  {
    title: "Curiosity-led",
    body: "I'm driven by an endless desire to understand how things work — and how they could work better for people.",
  },
  {
    title: "Human-centered",
    body: "Every decision starts and ends with the person on the other side of the screen, never the technology for its own sake.",
  },
  {
    title: "Problem-first",
    body: "I'm at my best untangling messy, real-world problems into clear, elegant, buildable experiences.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-pad grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Where computer science{" "}
                <span className="text-gradient">meets human-centered design.</span>
              </>
            }
          />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-warm-600 dark:text-warm-300">
            <Reveal delay={0.05}>
              <p>
                My journey began with a{" "}
                <span className="font-medium text-warm-800 dark:text-warm-100">
                  BSc in Computer Science at King Abdulaziz University
                </span>
                , where I learned to think in systems, logic, and structure. But
                the more I built, the more I cared about the people on the other
                end — how a product feels, whether it makes sense, and whether it
                genuinely improves someone&apos;s day.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                That curiosity led me into UI/UX, where I now specialize in{" "}
                <span className="font-medium text-warm-800 dark:text-warm-100">
                  Arabic-first (RTL) interfaces and AI-integrated experiences
                </span>
                . From a graded AI voice-navigation capstone to enterprise design
                systems, I&apos;ve shipped real products — not just mockups.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                I&apos;m driven by{" "}
                <span className="font-medium text-warm-800 dark:text-warm-100">
                  innovation, accessibility, and meaningful digital experiences
                </span>
                — leading design under pressure, from a Top-4 hackathon finish to
                a UX Specialist title earned directly from a CEO. I believe the
                best products feel effortless, and getting there takes deep
                research, relentless iteration, and a stubborn respect for the
                human using it.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group glass relative overflow-hidden rounded-4xl p-7 shadow-glass transition-all duration-500 hover:-translate-y-1 hover:shadow-glass-lg">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-rose-200/30 blur-3xl transition-opacity group-hover:opacity-100 dark:bg-rose-500/10" />
                <div className="relative">
                  <span className="font-display text-sm font-semibold text-gold-deep dark:text-gold-light">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-warm-600 dark:text-warm-300">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
