"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ACHIEVEMENTS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  graduation: (
    <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
  ),
  design: <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />,
  compass: <><circle cx="12" cy="12" r="10" /><path d="m16.2 7.8-2.9 6.3-6.3 2.9 2.9-6.3 6.3-2.9z" /></>,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rose-50/40 to-transparent dark:via-warm-900/30" />
      <div className="section-pad">
        <SectionHeading
          eyebrow="Recognition"
          align="center"
          title={
            <>
              Milestones that{" "}
              <span className="text-gradient">shape the work.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-4xl border border-warm-200/70 bg-warm-50/80 p-6 text-center backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-glass-lg dark:border-white/10 dark:bg-white/[0.03]">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-rose-200/40 blur-2xl transition-opacity group-hover:opacity-80 dark:bg-gold/10" />
                <div className="relative">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-rose-gradient text-white shadow-glow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {ICONS[a.icon]}
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-warm-500 dark:text-warm-400">
                    {a.detail}
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
