import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";

const features = [
  "Custom design built for your business",
  "Mobile-friendly and fast-loading",
  "Delivered within 24 hours of design approval",
  "Unlimited revisions until you're happy",
  "Full deployment on Vercel",
  "Custom domain setup via Namecheap",
  "No hidden fees — ever",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-card border-y border-border">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-4">One Flat Rate</h2>
          <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
            No packages, no tiers, no confusion — one price covers everything from design to launch.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md mx-auto"
        >
          <div
            className="relative rounded-xl border border-accent/30 bg-background overflow-hidden"
            style={{ boxShadow: "0 0 60px oklch(0.64 0.25 278 / 0.09)" }}
          >
            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div className="p-10">
              {/* Price */}
              <div className="text-center mb-10">
                <div
                  className="text-[5.5rem] font-bold text-foreground leading-none mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  $400
                </div>
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                  Flat rate · any website
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 mb-10">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Guarantee callout */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/[0.07] border border-accent/20 mb-8">
                <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-accent">24-Hour Guarantee</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    If your site isn't delivered within 24 hours of design approval, you pay nothing.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="cta-primary w-full justify-center"
              >
                Start Your Project <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
