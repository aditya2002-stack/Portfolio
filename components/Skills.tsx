import { skillCategories, supportingSkills } from "@/data/skills";
import Container from "./Container";
import Reveal from "./Reveal";
import SkillBadge from "./SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 border-t border-border-soft bg-surface/30">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 02 · Skills
          </p>
          <h2 className="section-heading">Skills</h2>
          <div className="flex items-center gap-4 mb-10 font-mono text-xs text-ink-faint">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-accent" /> Hands-on
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-ink-faint/60" /> Basic
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-amber" /> Currently learning
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={(i % 3) * 0.06}>
              <div className="card p-5 h-full">
                <h3 className="font-display text-sm font-semibold text-ink mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 pt-8 border-t border-border-soft">
            <p className="font-mono text-xs text-ink-faint mb-3">
              Supporting background — full-stack web development
            </p>
            <div className="flex flex-wrap gap-2">
              {supportingSkills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1.5 rounded-md border border-border-soft text-ink-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
