import { Trophy, ExternalLink } from "lucide-react";
import { achievements } from "@/data/achievements";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28 border-t border-border-soft bg-surface/30">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 07 · Achievements
          </p>
          <h2 className="section-heading">Beyond the terminal</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="card p-5 sm:p-6 flex gap-4 h-full">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-accent-soft border border-accent/20 flex items-center justify-center">
                  <Trophy size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink leading-snug">{a.title}</h3>
                  <p className="mt-0.5 text-sm text-accent">{a.org}</p>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{a.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-surface-alt text-ink-faint">
                        {t}
                      </span>
                    ))}
                  </div>
                  {a.certificateUrl && (
                    <a
                      href={a.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent hover:gap-2 transition-all"
                    >
                      View certificate <ExternalLink size={13} />
                    </a>
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
