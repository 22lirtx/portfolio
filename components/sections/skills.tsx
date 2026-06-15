"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem, Reveal } from "@/components/ui/reveal";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rose-50/40 to-transparent dark:via-warm-900/30" />
      <div className="section-pad">
        <SectionHeading
          eyebrow="Capabilities"
          align="center"
          title={
            <>
              A toolkit built for{" "}
              <span className="text-gradient">end-to-end product design.</span>
            </>
          }
          description="From research and strategy to polished interfaces and front-end fundamentals — I work across the full arc of bringing an idea to life."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="group h-full rounded-4xl border border-warm-200/70 bg-warm-50/70 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-glass-lg dark:border-white/10 dark:bg-white/[0.03]">
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-glow`}
                >
                  <span className="font-display text-base font-bold">
                    {group.title.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={staggerItem}
                      className="rounded-full border border-warm-200 bg-white/60 px-3 py-1.5 text-sm font-medium text-warm-700 transition-colors group-hover:border-rose-200 dark:border-white/10 dark:bg-white/5 dark:text-warm-200"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
