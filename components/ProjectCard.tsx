import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectThumbnail from "./ProjectThumbnail";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="card overflow-hidden flex flex-col group h-full">
      <div className="relative h-44 sm:h-52 border-b border-border">
        <ProjectThumbnail project={project} />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-ink leading-snug">{project.name}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-3">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-surface-alt text-ink-faint">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-border-soft flex items-center justify-between">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1 text-sm text-accent hover:gap-1.5 transition-all font-medium"
          >
            View details <ArrowUpRight size={15} />
          </button>

          <div className="flex items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub repository`}
                className="text-ink-muted hover:text-accent transition-colors"
              >
                <Github size={17} />
              </a>
            ) : (
              <span className="text-ink-faint/50" title="Repository link coming soon">
                <Github size={17} />
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="text-ink-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
