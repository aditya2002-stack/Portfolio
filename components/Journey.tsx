import Container from "./Container";
import Reveal from "./Reveal";

const steps = [
  { label: "Linux", status: "done" },
  { label: "Git & GitHub", status: "done" },
  { label: "AWS Networking", status: "done" },
  { label: "Docker", status: "done" },
  { label: "Jenkins", status: "active" },
  { label: "Kubernetes", status: "learning" },
  { label: "Terraform", status: "learning" },
] as const;

const statusStyle: Record<(typeof steps)[number]["status"], string> = {
  done: "bg-accent border-accent",
  active: "bg-amber border-amber",
  learning: "bg-transparent border-ink-faint",
};

export default function Journey() {
  return (
    <section className="py-20 sm:py-24 border-t border-border-soft bg-surface/30">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Learning Path
          </p>
          <h2 className="section-heading">My DevOps journey so far</h2>
          <p className="text-ink-muted max-w-2xl mb-10">
            The order I&apos;ve actually built skills in — from Linux fundamentals through AWS
            networking, and now moving into orchestration and infrastructure-as-code.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-x-auto pb-4">
            <div className="flex items-center min-w-[640px] sm:min-w-0">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-2.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full border-2 ${statusStyle[step.status]}`}
                    />
                    <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-px flex-1 mx-2 mb-6 ${
                        step.status === "done" ? "bg-accent/50" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
