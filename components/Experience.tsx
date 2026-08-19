import { experience } from "@/data/experience";
import Container from "./Container";
import Reveal from "./Reveal";
import { MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 border-t border-border-soft">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 03 · Experience
          </p>
          <h2 className="section-heading">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div
                className={`card p-6 sm:p-7 relative ${
                  exp.primary ? "border-accent/30" : "border-border"
                }`}
              >
                {exp.current && (
                  <span className="absolute top-6 right-6 font-mono text-xs px-2 py-1 rounded-md bg-accent-soft text-accent border border-accent/30">
                    Present
                  </span>
                )}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">{exp.role}</h3>
                  <span className="text-ink-faint">—</span>
                  <span className="text-accent font-medium">{exp.company}</span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-ink-faint">
                  <span>{exp.duration}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 text-ink-muted text-sm sm:text-base leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
