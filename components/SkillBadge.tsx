import type { Skill } from "@/data/skills";

const levelStyles: Record<Skill["level"], string> = {
  "hands-on": "border-accent/40 text-accent bg-accent-soft",
  basic: "border-border text-ink-muted bg-surface-alt",
  learning: "border-amber/30 text-amber bg-amber-soft",
};

const levelDot: Record<Skill["level"], string> = {
  "hands-on": "bg-accent",
  basic: "bg-ink-faint/60",
  learning: "bg-amber",
};

const levelLabel: Record<Skill["level"], string> = {
  "hands-on": "Hands-on",
  basic: "Basic",
  learning: "Learning",
};

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded-md border ${levelStyles[skill.level]}`}
      title={levelLabel[skill.level]}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${levelDot[skill.level]}`} aria-hidden="true" />
      {skill.name}
    </span>
  );
}
