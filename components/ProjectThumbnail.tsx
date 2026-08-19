import Image from "next/image";
import { Network, Boxes, Sparkles, ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const categoryIcon: Record<Project["category"], React.ElementType> = {
  cloud: Network,
  devops: Boxes,
  fullstack: Sparkles,
};

// Polished placeholder shown until a real screenshot is provided.
// Swap `image: null` for `image: "/images/projects/your-file.png"` in data/projects.ts to replace.
export default function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const Icon = categoryIcon[project.category];

  return (
    <div className="relative w-full h-full grid-bg flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-accent-soft/40" />
      <div className="relative flex flex-col items-center gap-2 text-ink-faint">
        <Icon size={34} strokeWidth={1.5} className="text-accent/70" />
        <span className="font-mono text-[11px] flex items-center gap-1.5">
          <ImageIcon size={12} /> Screenshot coming soon
        </span>
      </div>
    </div>
  );
}
