"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Container from "./Container";
import NetworkDiagram from "./NetworkDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      <Container className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 font-mono text-accent text-base sm:text-lg"
          >
            {profile.title} <span className="text-ink-faint">/</span> {profile.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-3 flex items-center gap-1.5 text-sm text-ink-faint"
          >
            <MapPin size={14} />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-bg font-medium px-5 py-3 rounded-lg hover:bg-accent-dim transition-colors"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 border border-border text-ink px-5 py-3 rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
              download
            >
              <Download size={16} /> Download Resume
            </a>

            <div className="flex items-center gap-1 ml-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 text-ink-muted hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 text-ink-muted hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[340px]">
            <div className="absolute inset-0 -z-10 scale-125">
              <NetworkDiagram />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-border bg-surface aspect-square"
            >
              <Image
                src={profile.photo}
                alt={`${profile.name}, ${profile.title}`}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
