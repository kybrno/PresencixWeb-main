import { motion } from "framer-motion";
import { Palette, Code2, Rocket, Globe } from "lucide-react";

const services = [
  {
    Icon: Palette,
    title: "Custom Web Design",
    description:
      "Tailored layouts built around your brand, your audience, and your goals — never from a template.",
  },
  {
    Icon: Code2,
    title: "Full Development",
    description:
      "Clean, modern code in React and Next.js. Fast-loading, accessible, and easy to maintain long-term.",
  },
  {
    Icon: Rocket,
    title: "Vercel Deployment",
    description:
      "Instant deployment with automatic SSL, global CDN, and production-grade performance out of the box.",
  },
  {
    Icon: Globe,
    title: "Domain & DNS Setup",
    description:
      "Full domain configuration through Namecheap, end to end. You'll be live on your custom URL.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-card border-y border-border"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="section-label mb-4">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold max-w-sm mt-4">
            Everything to Go Live
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.09,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group p-7 rounded-xl border border-border bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_28px_oklch(0.64_0.25_278_/_0.07)]"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/20">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold mb-3 text-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
