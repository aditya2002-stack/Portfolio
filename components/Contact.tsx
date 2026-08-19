import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-border-soft">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 08 · Contact
          </p>
          <h2 className="section-heading">Let&apos;s connect</h2>
          <p className="text-ink-muted max-w-md leading-relaxed">
            Open to DevOps, Cloud, and Junior SRE opportunities. Feel free to reach out directly —
            I&apos;m happy to talk about infrastructure, automation, or anything AWS.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 sm:p-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex flex-col gap-1.5 bg-accent text-bg font-medium px-5 py-4 rounded-lg hover:bg-accent-dim transition-colors"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} />
                Email Me
              </span>
              <span className="text-sm font-mono opacity-80">{profile.email}</span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border border-border px-5 py-4 rounded-lg text-ink hover:border-accent/50 hover:text-accent transition-colors group"
            >
              <span className="flex items-center gap-3">
                <Linkedin size={18} />
                LinkedIn
              </span>
              <ArrowUpRight size={16} className="text-ink-faint group-hover:text-accent transition-colors" />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border border-border px-5 py-4 rounded-lg text-ink hover:border-accent/50 hover:text-accent transition-colors group"
            >
              <span className="flex items-center gap-3">
                <Github size={18} />
                GitHub
              </span>
              <ArrowUpRight size={16} className="text-ink-faint group-hover:text-accent transition-colors" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
