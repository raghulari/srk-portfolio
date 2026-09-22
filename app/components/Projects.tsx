"use client";

import { motion } from "motion/react";
import { EASE } from "../lib/motion";

const PROJECTS = [
  {
    id: "diffn",
    index: "01",
    title: "Diffn",
    role: "Founder",
    subtitle: "AI Coding Agent Safety Layer",
    summary:
      "An MCP-based safety layer for AI coding agents that checks AI-generated code as it's written, explaining why errors happened and verifying whether an agent's fix actually solved the problem instead of just silencing it.",
    highlights: [
      "A single MCP server exposing scan, explain, and verify tools, designed to register across five agent harnesses — Claude Code, Claude Desktop, opencode, Codex CLI, and Google Antigravity — each with its own config format",
      "Hybrid live-detection combining Claude Code's PreToolUse/PostToolUse hooks with MCP tool-calling, so scans trigger automatically on file edits rather than relying solely on the agent choosing to call the tool",
      "Root-cause explanation and fix verification for every error — confirming an AI-generated fix actually resolved the issue, not just suppressed the error message",
      "Checks for exposed secrets, access-control gaps, structural and data-structure quality, and performance under load",
      "Vertical-AI architecture targeting AI-agent-built SaaS on Next.js + Supabase + Vercel as the initial ICP, so accumulated fix-pattern data compounds into a defensible moat rather than staying a generic horizontal linter",
      "Layered rollout plan: local daemon + hooks + MCP as the core product, with a CI/PR bot and hosted team dashboard as later-phase surfaces",
    ],
    stack: [
      "TypeScript",
      "Model Context Protocol (MCP)",
      "Agent Hooks",
      "Next.js",
      "Supabase",
    ],
    link: "https://diffn-ai-guardian.lovable.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-30 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-3xl"
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-muted">
            Featured Projects
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight [font-stretch:112%] sm:text-5xl lg:text-6xl">
            Production platforms.
          </h2>
        </motion.div>

        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.05, ease: EASE }}
              className="border-t border-ink/10 pt-10 sm:pt-14"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="font-display text-sm font-semibold tracking-widest text-muted">
                  {project.index}
                </span>
                <p className="text-[13px] text-muted sm:text-[14px]">
                  {project.subtitle}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-3xl font-bold leading-none tracking-tight [font-stretch:110%] sm:text-5xl">
                  {project.title}
                </h3>
                {project.role && (
                  <span className="inline-flex items-center justify-center rounded-full border border-ink/12 bg-white/70 px-3 py-1 text-[12px] font-medium leading-none text-ink/75 backdrop-blur sm:text-[13px]">
                    {project.role}
                  </span>
                )}
              </div>

              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted sm:text-[17px]">
                {project.summary}
              </p>

              <ul className="mt-8 max-w-3xl space-y-3.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14px] leading-relaxed text-ink/85 sm:text-[15px]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-ink"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink/12 bg-white/60 px-3.5 py-1.5 text-[12px] font-medium text-ink/80 sm:text-[13px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95 sm:text-[14px]"
                  >
                    <span>Visit site</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
