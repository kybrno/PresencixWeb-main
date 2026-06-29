import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We talk about your goals, your audience, and your vision. Usually 20–30 minutes — no lengthy briefs required.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I create a concept and share it for your approval. You give feedback, I refine — before I write a single line of code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Once you've signed off, I build the full site. Most projects are complete within 24 hours of design approval.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Your site goes live on your custom domain with SSL, analytics, and everything configured and ready.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-card border-y border-border">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="section-label mb-4">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold max-w-sm mt-4">
            From Idea to Live Site
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              {/* Step number */}
              <div
                className="text-[3.5rem] font-bold leading-none mb-5 select-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.64 0.25 278 / 0.18)",
                }}
              >
                {step.number}
              </div>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-7 left-[4.5rem] right-0 h-px"
                  style={{ background: "oklch(0.22 0.010 278)" }}
                />
              )}

              <h3 className="text-base font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
