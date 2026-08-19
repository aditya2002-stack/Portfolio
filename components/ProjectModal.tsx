"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectGallery from "./ProjectGallery";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto card"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 p-2 rounded-md bg-surface/80 border border-border text-ink-muted hover:text-ink"
            >
              <X size={18} />
            </button>

            <div className="relative h-48 sm:h-60 border-b border-border">
              <ProjectThumbnail project={project} />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-ink">{project.name}</h3>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 rounded-md bg-surface-alt text-ink-faint">
                    {t}
                  </span>
                ))}
              </div>

              <Section title="Problem">
                <p className="text-ink-muted text-sm leading-relaxed">{project.problem}</p>
              </Section>

              <Section title="Architecture">
                <ul className="space-y-1.5">
                  {project.architecture.map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-muted">
                      <span className="text-accent shrink-0">▹</span> {a}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="My Contribution">
                <ul className="space-y-1.5">
                  {project.contribution.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-muted">
                      <span className="text-accent shrink-0">▹</span> {c}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Key Concepts">
                <div className="flex flex-wrap gap-1.5">
                  {project.concepts.map((c) => (
                    <span key={c} className="font-mono text-xs px-2 py-1 rounded-md border border-border text-ink-muted">
                      {c}
                    </span>
                  ))}
                </div>
              </Section>

              {project.gallery && project.gallery.length > 0 && (
                <Section title="Screenshots">
                  <ProjectGallery images={project.gallery} />
                </Section>
              )}

              <div className="mt-7 pt-6 border-t border-border-soft flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border border-border px-4 py-2.5 rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    <Github size={16} /> View Repository
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm border border-border-soft text-ink-faint px-4 py-2.5 rounded-lg cursor-not-allowed">
                    <Github size={16} /> Repo coming soon
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-accent text-bg font-medium px-4 py-2.5 rounded-lg hover:bg-accent-dim transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2.5">{title}</h4>
      {children}
    </div>
  );
}
