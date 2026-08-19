import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 border-t border-border-soft">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 06 · Education
          </p>
          <h2 className="section-heading">Education</h2>

          <div className="card p-6 sm:p-7 flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-accent-soft border border-accent/20 flex items-center justify-center">
              <GraduationCap size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-ink">{education.degree}</h3>
              <p className="mt-1 text-sm sm:text-base text-ink-muted">{education.institution}</p>
              <p className="mt-0.5 text-sm text-ink-faint">{education.affiliation}</p>
              <p className="mt-2 font-mono text-xs text-ink-faint">{education.duration}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
