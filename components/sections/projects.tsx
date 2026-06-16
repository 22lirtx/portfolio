"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS, type Project } from "@/lib/data";

const COVER_GRADIENTS: Record<string, string> = {
  seraaj: "from-rose-300 via-gold to-warm-700",
  ruhub: "from-gold-light via-rose-400 to-gold-deep",
  afaq: "from-warm-700 via-gold to-rose-300",
  murshd: "from-[#1b1740] via-[#4c1d95] to-[#7c3aed]",
  ruh: "from-[#3b2566] via-[#6d4aa8] to-[#b69ad6]",
};

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <Reveal>
      <button
        onClick={onOpen}
        className="group block w-full overflow-hidden rounded-[2rem] border border-warm-200/70 bg-warm-50/70 text-left backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-glass-lg dark:border-white/10 dark:bg-white/[0.03]"
      >
        {/* Visual cover */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${COVER_GRADIENTS[project.id]} transition-transform duration-700 group-hover:scale-105`}
          />
          <div className="absolute inset-0 grain opacity-20 mix-blend-overlay" />

          {/* Floating real screens for projects that have a gallery */}
          {project.gallery && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center gap-3 sm:gap-5">
              {project.gallery.slice(0, 5).map((shot, i) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt=""
                  loading="lazy"
                  className="w-[18%] max-w-[120px] translate-y-6 rounded-xl border border-white/20 shadow-2xl transition-transform duration-500 group-hover:translate-y-3"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
              ))}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute left-6 top-6 font-display text-6xl font-bold text-white/30">
            {project.index}
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm font-medium text-white/80">{project.tagline}</p>
            <h3 className="font-display text-3xl font-semibold text-white">
              {project.name}
            </h3>
          </div>
          <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all group-hover:bg-white group-hover:text-warm-900">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </div>
        </div>

        <div className="p-7">
          <p className="leading-relaxed text-warm-600 dark:text-warm-300">
            {project.description}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-warm-200 px-2.5 py-1 text-xs font-medium text-warm-600 dark:border-white/10 dark:text-warm-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="whitespace-nowrap text-sm font-medium text-gold-deep dark:text-gold-light">
              Case study →
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto bg-warm-950/50 p-0 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-t-[2rem] bg-warm-50 shadow-glass-lg dark:bg-warm-900 sm:rounded-[2rem]"
      >
        <div className={`relative h-44 bg-gradient-to-br ${COVER_GRADIENTS[project.id]} sm:h-52`}>
          <div className="absolute inset-0 grain opacity-20 mix-blend-overlay" />
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/25 text-white backdrop-blur transition-colors hover:bg-white hover:text-warm-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-7 right-7">
            <div className="flex items-center gap-3 text-sm font-medium text-white/80">
              <span>{project.role}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display text-4xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="text-white/85">{project.tagline}</p>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto px-7 py-8 sm:px-9">
          <p className="text-lg leading-relaxed text-warm-700 dark:text-warm-200">
            {project.description}
          </p>

          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-warm-200 px-4 py-2 text-sm font-medium text-warm-700 transition-colors hover:border-gold hover:text-gold-deep dark:border-white/15 dark:text-warm-200 dark:hover:text-gold-light"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
              View live design in Figma
            </a>
          )}

          {/* Real screen gallery */}
          {project.gallery && (
            <div className="-mx-7 mt-8 flex snap-x gap-4 overflow-x-auto px-7 pb-3 sm:-mx-9 sm:px-9">
              {project.gallery.map((shot) => (
                <figure key={shot.src} className="w-[200px] shrink-0 snap-start sm:w-[220px]">
                  <img
                    src={shot.src}
                    alt={shot.label}
                    loading="lazy"
                    className="w-full rounded-2xl border border-warm-200/70 shadow-glass dark:border-white/10"
                  />
                  <figcaption className="mt-2 text-xs leading-snug text-warm-500 dark:text-warm-400">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="mt-8 space-y-7">
            {project.caseStudy.map((block, i) => (
              <div
                key={block.label}
                className="border-l-2 border-rose-200 pl-5 dark:border-gold/40"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-bold text-gold-deep dark:text-gold-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-semibold tracking-tight">
                    {block.label}
                  </h4>
                </div>
                <p className="mt-2 leading-relaxed text-warm-600 dark:text-warm-300">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Case studies in{" "}
              <span className="text-gradient">intelligent, human experiences.</span>
            </>
          }
          description="A selection of products where research, strategy, and craft come together to solve real problems."
        />

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={
                i === 0 || project.gallery ? "lg:col-span-2" : ""
              }
            >
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <CaseStudyModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
