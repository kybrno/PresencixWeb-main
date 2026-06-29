import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Jan's Fence",
    description:
      "Bold, conversion-focused site for a 30+ year fencing contractor in Littleton, MA. Full service pages, a photo gallery, and prominent calls to action that drive leads.",
    image: "/Images/jansfencess.png",
    tags: ["Local Business", "Contractor", "Lead Gen"],
    url: "https://jansfence.vercel.app",
  },
  {
    title: "Geocore",
    description:
      "Marketing site for a competitive geography game launching Q1 2026. Sci-fi dark theme with animated globe, roadmap, pricing tiers, and a blog — built to grow a waitlist.",
    image: "/Images/Geocoress.png",
    tags: ["Gaming", "SaaS", "Launch Site"],
    url: "https://geocore.fun",
  },
  {
    title: "Kyle O'Brien — Portfolio",
    description:
      "Personal developer portfolio tracking live projects, fitness goals, and achievements. Clean dashboard layout with a distinctive orange-and-lavender design system.",
    image: "/Images/kylewebsitess.png",
    tags: ["Portfolio", "Personal Brand"],
    url: "https://kyle-website-coral.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="section-label mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Recent Projects</h2>
        </motion.div>

        {/* Project list */}
        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent/35 hover:shadow-[0_0_40px_oklch(0.64_0.25_278_/_0.07)]"
            >
              <div
                className={`grid md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56 md:h-72 bg-muted [direction:ltr]">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-12 [direction:ltr]">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 text-foreground transition-colors duration-200 group-hover:text-accent"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-7 text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-accent text-sm font-semibold">
                    View Live Site
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
