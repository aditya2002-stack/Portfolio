"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Container from "./Container";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-28 border-t border-border-soft">
      <Container>
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 04 · Projects
          </p>
          <h2 className="section-heading">Things I&apos;ve built</h2>
          <p className="text-ink-muted max-w-2xl mb-10">
            Hands-on infrastructure and deployment work — from VPC networking to containerized CI/CD
            pipelines.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
