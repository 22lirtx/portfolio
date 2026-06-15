"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Voices"
          align="center"
          title={
            <>
              Words from{" "}
              <span className="text-gradient">mentors & collaborators.</span>
            </>
          }
          description="A space reserved for the people I learn and build alongside — instructors, mentors, and teammates."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="group relative flex h-full flex-col rounded-4xl border border-warm-200/70 bg-warm-50/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glass-lg dark:border-white/10 dark:bg-white/[0.03]">
                <span className="font-display text-6xl leading-none text-rose-300 dark:text-gold/50">
                  &ldquo;
                </span>
                <blockquote className="-mt-4 flex-1 text-lg leading-relaxed text-warm-700 dark:text-warm-200">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-warm-200/70 pt-5 dark:border-white/10">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-gradient text-sm font-semibold text-white">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <div>
                    <p className="font-semibold text-warm-800 dark:text-warm-100">
                      {t.name}
                    </p>
                    <p className="text-sm text-warm-500 dark:text-warm-400">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
                <span className="pointer-events-none absolute right-6 top-6 rounded-full border border-dashed border-warm-300 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-warm-400 dark:border-white/15">
                  Coming soon
                </span>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
