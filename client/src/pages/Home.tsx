import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, DollarSign, Users, Clock } from "lucide-react";
import { useState } from "react";

/**
 * Presencix Portfolio - Vibrant & Aesthetic Edition
 * Personal brand for an 18yo web developer with 3 years experience
 * Focus: Speed, Reliability, Flexibility, Good Prices, Approachable
 */

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "26e54c3c-6a23-4f34-93ea-4a9c671bd511",
          ...formData,
        }),
      });
      const json = await res.json();
      setFormStatus(json.success ? "success" : "error");
      if (json.success) setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  const portfolioProjects = [
    {
      id: 1,
      title: "Jan's Fence",
      description: "Bold, conversion-focused site for a 30+ year fencing contractor in Littleton, MA. Full gallery, service pages, and a prominent call-to-action.",
      image: "/Images/jansfencess.png",
      tags: ["Local Business", "Contractor", "Web Design"],
      color: "from-accent",
      url: "https://jansfence.vercel.app",
    },
    {
      id: 2,
      title: "Geocore",
      description: "Marketing site for a competitive geography game launching Q1 2026. Sci-fi dark theme with animated globe, roadmap, pricing, and blog sections.",
      image: "/Images/Geocoress.png",
      tags: ["Gaming", "SaaS", "Launch Site"],
      color: "from-secondary",
      url: "https://geocore.fun",
    },
    {
      id: 3,
      title: "Kyle O'Brien — Portfolio",
      description: "Personal developer portfolio tracking live projects, goals, fitness, and achievements. Clean dashboard layout with an orange-and-lavender design system.",
      image: "/Images/kylewebsitess.png",
      tags: ["Portfolio", "Personal Brand", "Dashboard"],
      color: "from-primary",
      url: "https://kyle-website-coral.vercel.app",
    },
  ];

  const strengths = [
    {
      icon: Zap,
      title: "24-Hour Delivery",
      description: "Your site is done within 24 hours of agreeing on a design — or it's completely free.",
      color: "bg-gradient-to-br from-accent/20 to-accent/5",
    },
    {
      icon: DollarSign,
      title: "$350 Flat Rate",
      description: "Every website, one price. No packages, no tiers, no surprise fees.",
      color: "bg-gradient-to-br from-accent/20 to-accent/5",
    },
    {
      icon: Users,
      title: "Approachable",
      description: "Easy to work with. I listen to your ideas and make them happen.",
      color: "bg-gradient-to-br from-accent/20 to-accent/5",
    },
    {
      icon: Clock,
      title: "Reliable",
      description: "Consistent delivery. You can count on me to get it done right.",
      color: "bg-gradient-to-br from-accent/20 to-accent/5",
    },
  ];

  const testimonials = [
    {
      name: "Anahat Mudgal",
      role: "Co-founder, Geocore",
      content: "Kyle built the entire Geocore site from the ground up — clean design, solid code, and delivered fast. Exactly what we needed.",
    },
    {
      name: "Agnieszka Krajewska",
      role: "Client",
      content: "Very easy to work with and the results were better than I expected. Professional quality at a price that actually makes sense.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gradient">Presencix</div>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="text-foreground hover:text-accent transition-colors font-medium">
              Work
            </a>
            <a href="#why-me" className="text-foreground hover:text-accent transition-colors font-medium">
              Why Me
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </div>
          <a href="#contact"><Button className="cta-button">Let's Talk</Button></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden gradient-bg">
        <div className="absolute inset-0 -z-10 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460703014/XMJRcP9YhVNEjpMSeQpSAM/hero-background-KBJ9aak3rrWR7W9Jk7F6fP.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Fast, Reliable <span className="text-gradient">Web Design</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                I build beautiful websites that actually work. Quick turnarounds, flexible pricing, and I'm genuinely easy to work with. Let's create something amazing together.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact">
                  <Button className="cta-button">
                    Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="#work">
                  <Button variant="outline" className="px-8 py-3 border-2">
                    See My Work
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-3xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460703014/XMJRcP9YhVNEjpMSeQpSAM/hero-web-dev-7woDZ5NQakSQktoCejb8Mn.webp"
                alt="Web Development Hero"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Check out some projects I've built. Each one shows what I can do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="project-card overflow-hidden">
                  <div className="relative overflow-hidden h-64 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Site →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/25 text-accent text-sm rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="py-20 md:py-32 gradient-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Me?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Here's what makes me different
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${strength.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{strength.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{strength.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I'm 18 and I've been building websites for 3 years now. What started as a hobby turned into something I'm genuinely passionate about. I love creating websites that look great and actually work smoothly.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                I focus on delivering exactly what you need—no unnecessary complexity, no fluff. Just solid, beautiful websites that get the job done. I'm always learning, always improving, and I genuinely care about making my clients happy.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="text-3xl font-bold text-accent">3+</div>
                  <p className="text-sm text-foreground/70 font-medium">Years Experience</p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="text-3xl font-bold text-accent">4+</div>
                  <p className="text-sm text-foreground/70 font-medium">Projects Done</p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <p className="text-sm text-foreground/70 font-medium">Client Happy</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-3xl blur-3xl" />
              <img
                src="/Images/Mewebdev.PNG"
                alt="About Me"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 gradient-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
            <p className="text-lg text-foreground/70">
              Real feedback from real clients
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-xl text-foreground mb-8 leading-relaxed italic font-medium">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeTestimonial 
                      ? "bg-gradient-to-r from-accent to-secondary w-8 h-3" 
                      : "bg-border w-3 h-3 hover:bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              No packages, no tiers, no confusion. One flat rate for every website I build.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-accent shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/70 to-accent/40" />
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="text-7xl font-bold text-accent mb-2">$350</div>
                  <p className="text-foreground/60 font-medium">flat rate · any website</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Custom design built for your business",
                    "Mobile-friendly & fast loading",
                    "Delivered in 24 hours or it's free",
                    "Revisions until you're happy",
                    "No hidden fees",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 text-center">
                  <p className="text-sm font-semibold text-accent">24-Hour Guarantee</p>
                  <p className="text-sm text-foreground/70 mt-1">If your site isn't done within 24 hours of us agreeing on a design, you pay nothing.</p>
                </div>

                <a href="#contact">
                  <Button className="cta-button w-full">
                    Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something</h2>
              <p className="text-lg text-foreground/70">
                Have a project in mind? Fill out the form and I'll get back to you fast.
              </p>
            </div>

            {formStatus === "success" ? (
              <Card className="border-2 border-accent">
                <CardContent className="p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-foreground/70">Thanks for reaching out — I'll be in touch soon.</p>
                  <Button className="cta-button mt-6" onClick={() => setFormStatus("idle")}>Send Another</Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-border">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Email</label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    {formStatus === "error" && (
                      <p className="text-sm text-destructive">Something went wrong — please try again or email me directly at kybrno@gmail.com</p>
                    )}
                    <Button type="submit" className="cta-button w-full" disabled={formStatus === "sending"}>
                      {formStatus === "sending" ? "Sending..." : <>Send Message <ArrowRight className="ml-2 w-4 h-4" /></>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border py-12 bg-gradient-to-b from-background to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg text-gradient mb-4">Presencix</h3>
              <p className="text-sm text-foreground/70">
                Fast, reliable web design for people who want results.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Custom Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
            <p>&copy; 2024 Presencix. Built with passion.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
