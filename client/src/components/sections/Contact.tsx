import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "26e54c3c-6a23-4f34-93ea-4a9c671bd511",
          ...form,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-card border-t border-border">
      <div className="container">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <span className="section-label mb-4">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Let's Build Something
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have a project in mind? Drop a message and I'll reply within a few hours.
            </p>
          </motion.div>

          {/* Form / Success */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {status === "success" ? (
              <div className="text-center py-14 px-8 rounded-xl border border-accent/25 bg-accent/[0.04]">
                <div
                  className="text-5xl font-bold text-accent mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ✓
                </div>
                <h3 className="text-xl font-semibold mb-2">Message received!</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  I'll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-accent font-medium hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong — please try again or email me at{" "}
                    <a href="mailto:kybrno@gmail.com" className="underline">
                      kybrno@gmail.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="cta-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Direct email link */}
            <div className="mt-8 text-center">
              <a
                href="mailto:kybrno@gmail.com"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={13} />
                kybrno@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
