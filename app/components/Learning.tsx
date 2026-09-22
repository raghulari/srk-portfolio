"use client";

import { motion } from "motion/react";
import { EASE } from "../lib/motion";

export default function Learning() {
  return (
    <section
      id="experience"
      className="relative z-30 bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-paper/45">
            Currently Learning
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight [font-stretch:110%] sm:text-4xl">
            DSA, system design, and production scale.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-paper/65 sm:text-[16px]">
            Sharpening my foundations in algorithmic problem solving and
            distributed architecture. Rather than treating theory in isolation,
            I focus on applying core data structures and system design patterns
            to eliminate bottlenecks, write memory-efficient logic, and build
            services engineered to stay resilient under load.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="lg:border-l lg:border-paper/12 lg:pl-16"
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-paper/45">
            Education
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight [font-stretch:110%] sm:text-4xl">
            B.E. CSE, Jansons Institute of Technology
          </h2>
          <p className="mt-3 text-[15px] text-paper/55">In progress</p>
          <p className="mt-6 text-[15px] leading-relaxed text-paper/65 sm:text-[16px]">
            Completing my degree in Computer Science while actively shipping
            production software as a Fullstack Developer Intern at Nutz
            Technovation. Working across both environments lets me stress-test
            academic concepts against live applications, turning core CS
            theory into reliable everyday engineering instincts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
