import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const stats = [
  { value: "3+", label: "Years building" },
  { value: "24 hr", label: "Typical delivery" },
  { value: "100%", label: "Client satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Radial glow — top centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 55% at 50% -5%, oklch(0.64 0.25 278 / 0.13), transparent 70%)",
        }}
      />

      <div className="container py-28 md:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.span variants={item} className="section-label mb-8 inline-block">
            Freelance Web Design & Development
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[clamp(3.2rem,9vw,7.5rem)] font-bold mb-8 leading-none tracking-[-0.03em]"
          >
            Web Design
            <br />
            <span className="text-gradient">That Means</span>
            <br />
            Business.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed font-light"
          >
            Custom-built websites delivered in 24 hours. $400 flat — no agencies,
            no overhead, no surprises.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="cta-primary text-base">
              Start Your Project <ArrowRight size={17} />
            </a>
            <a href="#work" className="cta-outline text-base">
              See My Work
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={item}
            className="mt-20 pt-8 border-t border-border flex gap-10 md:gap-16"
          >
            {stats.map(s => (
              <div key={s.label}>
                <div
                  className="text-2xl md:text-3xl font-bold text-accent mb-1 leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide font-medium uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/40"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
