"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              Experience built through{" "}
              <span className="text-gradient">curiosity and action.</span>
            </>
          }
          description="Training, hackathons, leadership, and community work — each one sharpening how I think, design, and collaborate."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-rose-300 via-gold/50 to-transparent md:left-1/2" />

          <div className="space-y-10 md:space-y-0">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                    i % 2 === 0 ? "" : "md:[direction:rtl]"
                  }`}
                >
                  <div
                    className={`pl-9 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:[direction:ltr] md:pl-12"
                    } md:py-8`}
                  >
                    {/* Node */}
                    <span
                      className={`absolute left-0 top-1.5 z-10 grid h-4 w-4 place-items-center rounded-full bg-rose-gradient shadow-glow md:left-1/2 md:-translate-x-1/2 md:top-9`}
                    />
                    <div className="group rounded-3xl border border-warm-200/70 bg-warm-50/70 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glass dark:border-white/10 dark:bg-white/[0.03] md:[direction:ltr]">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-deep dark:text-gold-light">
                        <span className="rounded-full bg-rose-100 px-2.5 py-0.5 dark:bg-white/10">
                          {item.category}
                        </span>
                        <span className="text-warm-400">{item.period}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-warm-500 dark:text-warm-400">
                        {item.org}
                      </p>
                      <p className="mt-3 leading-relaxed text-warm-600 dark:text-warm-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
