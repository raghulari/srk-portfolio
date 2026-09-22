"use client";

import { motion } from "motion/react";
import { EASE } from "../lib/motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-30 bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-paper/45">
            About
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight [font-stretch:112%] sm:text-5xl lg:text-6xl">
            Systems under the UI.
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="space-y-6 text-[16px] leading-relaxed text-paper/75 sm:text-[17px]"
        >
          <p>
            I build software at the intersection of product craft and systems
            architecture. Currently, I&apos;m a Fullstack Developer Intern at
            Nutz Technovation Private Limited, engineering production
            applications with Next.js, Express.js, PostgreSQL.
          </p>
          <p>
            My focus centers on what happens beneath the interface —
            multi-tenancy, caching strategies, and the engineering tradeoffs
            that emerge when systems handle real users and production workloads.
          </p>
          <p>
            Alongside my work, I&apos;m pursuing a B.E. in Computer Science and
            Engineering at Jansons Institute of Technology. Outside the
            application layer, I explore modern AI paradigms and study
            foundational systems — Linux internals, networking, and OS
            abstractions — to understand how software truly operates at the
            metal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
