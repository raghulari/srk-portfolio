"use client";

import { motion } from "motion/react";
import { EASE } from "../lib/motion";

const LINKS = [
  { label: "GitHub", href: "https://github.com/raghulari" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sri-raghul-krishna-arivalagan/" },
  { label: "X / Twitter", href: "https://x.com/SriRaghulKrishn" },
  { label: "Instagram", href: "https://www.instagram.com/sriraghulkrishna_/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-30 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-muted">
            Contact
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight [font-stretch:112%] sm:text-6xl lg:text-7xl">
            Let&apos;s build something that holds up in production.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[17px]">
            Open to conversations about scalable web platforms, modern AI
            systems, and engineering roles where architecture matters as much as
            shipping.
          </p>

          <a
            href="mailto:raghularivalagan.cs@gmail.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[14px] font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95 sm:text-[15px]"
          >
            Say hello
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </motion.div>

        <motion.footer
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mt-20 flex flex-col gap-8 border-t border-ink/10 pt-8 sm:mt-28 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Sri Raghul Krishna Arivalagan
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.footer>
      </div>
    </section>
  );
}
