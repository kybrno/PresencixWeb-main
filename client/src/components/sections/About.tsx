import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years building" },
  { value: "24 hr", label: "Average delivery" },
  { value: "100%", label: "Satisfaction rate" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-label mb-6">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I started building websites three years ago out of genuine passion for the craft.
              That turned into Presencix — a one-person studio built on one belief: every small
              business deserves a professional online presence without the agency price tag.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              I work with one client at a time, which means you get my full attention. No project
              managers, no hand-offs — just direct communication, fast turnarounds, and results you
              can actually see.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map(s => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-bold text-accent mb-1 leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase font-medium mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl blur-3xl -z-10 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, oklch(0.64 0.25 278 / 0.18), transparent 70%)",
              }}
            />
            <img
              src="/Images/Mewebdev.PNG"
              alt="Kyle — Presencix founder"
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
