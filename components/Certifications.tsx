import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28 border-t border-border-soft bg-surface/30">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 05 · Certifications
          </p>
          <h2 className="section-heading">Certifications</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <div className="card p-5 h-full flex flex-col">
                <div className="w-11 h-11 rounded-lg bg-accent-soft border border-accent/20 flex items-center justify-center mb-4 overflow-hidden">
                  {cert.image ? (
                    <Image src={cert.image} alt={`${cert.name} certificate`} width={44} height={44} className="object-cover" />
                  ) : (
                    <Award size={20} className="text-accent" />
                  )}
                </div>
                <h3 className="font-display text-base font-semibold text-ink leading-snug">{cert.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-ink-faint">{cert.date}</p>

                <div className="mt-4 pt-4 border-t border-border-soft">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:gap-2 transition-all"
                    >
                      View credential <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-faint">
                      <BadgeCheck size={14} /> Certificate available
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
