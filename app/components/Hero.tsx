"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

function RevealName({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span
      className={`block overflow-hidden whitespace-nowrap px-[0.05em] pb-[0.06em] ${className ?? ""}`}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ y: "110%", rotate: 4 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{
            duration: 1,
            delay: delay + i * 0.035,
            ease: EASE,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

const NAV_LINKS = [
  { label: "About", href: "#about", meta: "" },
  { label: "Work", href: "#work", meta: "[01]" },
  { label: "Skills", href: "#skills", meta: "" },
  { label: "Experience", href: "#experience", meta: "" },
  { label: "Contact", href: "#contact", meta: "" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/raghulari",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sriraghulkrishna_/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sri-raghul-krishna-arivalagan/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8.16h4.56V23H.22V8.16Zm7.32 0h4.37v2.02h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.19h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.83V23H7.54V8.16Z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/SriRaghulKrishn",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M18.9 2.5h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H2l7.9-9L1.5 2.5h7l4.8 6.4 5.6-6.4Zm-1.2 17.9h1.9L7.4 4.4H5.4l12.3 16Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Parallax: as the user scrolls past the hero, the photo drifts down
  // slower than the page while the name lifts away and fades on desktop.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-svh flex-col overflow-x-clip sm:overflow-hidden"
    >
      {/* ---------- Navbar ---------- */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className="z-30 flex items-center justify-between gap-4 px-5 pt-5 sm:px-8"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 px-4 py-2.5 text-[13px] font-medium shadow-[0_1px_10px_rgba(0,0,0,0.05)] backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Available<span className="hidden min-[420px]:inline"> for New Project</span>
        </div>

        <nav className="hidden items-center gap-9 text-[14px] font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-baseline gap-1 transition-colors hover:text-muted"
            >
              {link.label}
              {link.meta && (
                <sup className="text-[10px] text-muted">{link.meta}</sup>
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
        >
          Let&apos;s Talk
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </motion.header>

      {/* ---------- Giant name ---------- */}
      <motion.h1
        style={{ y: nameY, opacity: nameOpacity }}
        className="z-10 mt-6 select-none px-3 text-center font-display font-bold uppercase leading-[0.84] tracking-[-0.03em] sm:mt-6 sm:leading-[0.82]"
      >
        <RevealName
          text="SRI RAGHUL KRISHNA"
          delay={0.35}
          className="text-outline text-[7.5vw] font-extrabold tracking-[-0.03em] [font-stretch:105%] sm:text-[7.2vw] lg:text-[8.4vw]"
        />
        <RevealName
          text="ARIVALAGAN"
          delay={0.6}
          className="text-[11.8vw] font-bold tracking-[-0.02em] [font-stretch:112%] sm:text-[10.6vw] lg:text-[11vw]"
        />
      </motion.h1>

      {/* ---------- Portrait ---------- */}
      <motion.div
        style={{ y: isMobile ? 0 : photoY }}
        className="relative z-20 -mt-5 flex justify-center px-4 sm:pointer-events-none sm:absolute sm:inset-x-0 sm:bottom-0 sm:mt-0 sm:px-0"
      >
        <motion.div
          initial={{ y: "55%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
          className="will-change-transform"
        >
          <Image
            src="/raghul-photo.png"
            alt="Portrait of Sri Raghul Krishna Arivalagan"
            width={2048}
            height={1528}
            priority
            className="h-auto max-h-[46svh] w-auto max-w-[88vw] object-contain object-bottom grayscale contrast-105 drop-shadow-[0_-10px_60px_rgba(0,0,0,0.18)] sm:h-[62svh] sm:max-h-none sm:max-w-[96vw] lg:h-[70svh]"
          />
        </motion.div>
      </motion.div>

      {/* ---------- Role: Desktop bottom-left, Mobile below portrait ---------- */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: EASE }}
        className="relative z-30 mt-6 px-5 sm:absolute sm:bottom-10 sm:left-8 sm:mt-0 sm:max-w-[300px] sm:p-0 lg:bottom-16"
      >
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
          Software Developer
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-muted sm:mt-3 sm:text-[15px]">
          Building digital products that are fast, scalable, and delightful to
          use.
        </p>
        <a
          href="#work"
          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95 sm:mt-6 sm:px-6 sm:py-3.5 sm:text-[14px]"
        >
          Let&apos;s collaborate
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </motion.div>

      {/* ---------- Socials: Desktop bottom-right, Mobile below role ---------- */}
      <div className="relative z-30 mt-5 flex flex-wrap items-center gap-2.5 px-5 pb-12 sm:absolute sm:bottom-10 sm:right-8 sm:mt-0 sm:flex-col sm:items-end sm:gap-3 sm:p-0 lg:bottom-16">
        {SOCIALS.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ x: 48, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 + i * 0.12, ease: EASE }}
            className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/80 p-2.5 text-[13px] font-medium shadow-[0_1px_10px_rgba(0,0,0,0.05)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-paper sm:py-2.5 sm:pl-4 sm:pr-5"
          >
            {social.icon}
            <span className="hidden sm:inline">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
