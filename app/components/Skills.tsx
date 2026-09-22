"use client";

import { motion } from "motion/react";
import { EASE } from "../lib/motion";

const SKILL_GROUPS = [
  {
    label: "Languages & Frameworks",
    items: ["Next.js", "React", "Express.js", "Python"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Neon"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS EC2", "S3", "Vercel", "NGINX", "Git & GitHub"],
  },
  {
    label: "AI / ML",
    items: ["Ollama", "NVIDIA", "Hugging Face", "Gemini"],
  },
  {
    label: "Systems Interests",
    items: [
      "Linux",
      "TCP/IP",
      "OS fundamentals",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-30 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-muted">
            Skills
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight [font-stretch:112%] sm:text-5xl">
            The stack I ship with.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
            >
              <h3 className="text-[12px] uppercase tracking-[0.22em] text-muted">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-lg font-semibold tracking-tight sm:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
