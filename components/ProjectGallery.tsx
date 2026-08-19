"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/data/projects";

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? images[openIndex] : null;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  return (
    <div className="space-y-4">
      {images.map((img, i) => (
        <button
          key={img.src}
          onClick={() => setOpenIndex(i)}
          className="group block w-full text-left rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-colors"
          aria-label={`View larger: ${img.caption}`}
        >
          <div className="relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 768px) 100vw, 640px"
              className="w-full h-auto"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-colors flex items-center justify-center">
              <ZoomIn
                size={22}
                className="text-ink opacity-0 group-hover:opacity-100 transition-opacity drop-shadow"
              />
            </span>
          </div>
          <p className="px-3 py-2 text-xs text-ink-muted bg-surface-alt font-mono">{img.caption}</p>
        </button>
      ))}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm" onClick={() => setOpenIndex(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setOpenIndex(null)}
                aria-label="Close image preview"
                className="absolute -top-2 right-0 sm:top-0 sm:-right-12 z-10 p-2 rounded-md bg-surface border border-border text-ink-muted hover:text-ink"
              >
                <X size={20} />
              </button>
              <div className="rounded-lg overflow-hidden border border-border">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="mt-3 text-sm text-ink-muted font-mono text-center">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
