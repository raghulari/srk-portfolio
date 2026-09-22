"use client";

import { motion } from "motion/react";
import { EASE } from "../lib/motion";

const EXPLORATIONS = [
  {
    title: "Local LLMs & NVIDIA Models",
    body: "Running Qwen models via Ollama alongside NVIDIA Nemotron models for accelerated coding, paired with NVIDIA Parakeet for real-time speech-to-text integration.",
  },
  {
    title: "OpenClaw Automations",
    body: "Orchestrating multi-step developer workflows, local tooling, and scheduled maintenance tasks through chat-driven agentic execution.",
  },
  {
    title: "Second Brain / Obsidian",
    body: "An AI-driven knowledge aggregator designed to structure personal notes and unstructured workflows with Google AI models.",
  },
];

export default function Explorations() {
  return (
    <section
      id="explorations"
      className="relative z-30 bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-paper/45">
            Other Explorations
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight [font-stretch:112%] sm:text-5xl">
            Range beyond day-to-day.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-paper/60 sm:text-[16px]">
            A few side projects and technical explorations that show range
            beyond shipped product work.
          </p>
        </motion.div>

        <div className="mt-14 divide-y divide-paper/12 sm:mt-20">
          {EXPLORATIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
              className="grid gap-4 py-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-12 sm:py-10"
            >
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-paper/65 sm:text-[16px]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
