import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anahat Mudgal",
    role: "Co-founder, Geocore",
    content:
      "Kyle built the entire Geocore site from the ground up — clean design, solid code, and delivered fast. Exactly what we needed.",
  },
  {
    name: "Agnieszka Krajewska",
    role: "Client",
    content:
      "Very easy to work with and the results were better than I expected. Professional quality at a price that actually makes sense.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-7">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-36">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Client Words</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">What People Say</h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-xl border border-border bg-card overflow-hidden">
            {/* Top accent rule */}
            <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="p-10 md:p-14">
              <StarRow />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <blockquote
                    className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                  >
                    "{testimonials[active].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonials[active].name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {testimonials[active].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-7">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-accent w-7 h-2"
                    : "bg-border w-2 h-2 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
