import { profile } from "@/data/profile";
import Container from "./Container";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-border-soft">
      <Container className="grid lg:grid-cols-[220px_1fr] gap-10">
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 01 · About
          </p>
          <h2 className="section-heading">Currently building</h2>
        </Reveal>

        <div className="space-y-5">
          {profile.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-ink-muted text-base sm:text-lg leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
