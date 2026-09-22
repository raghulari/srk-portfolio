export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.9, ease: EASE },
};
