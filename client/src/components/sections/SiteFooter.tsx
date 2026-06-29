import { Github, Instagram } from "lucide-react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    href: "#", // TODO: add your GitHub URL, e.g. https://github.com/yourusername
    Icon: Github,
    label: "GitHub",
  },
  {
    href: "#", // TODO: add your Instagram URL, e.g. https://instagram.com/yourusername
    Icon: Instagram,
    label: "Instagram",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/Images/Presencix logo transparent.png"
              alt="Presencix"
              className="h-7 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Fast, affordable web design for businesses that want results.
              Built and deployed in 24 hours.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/45 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2025 Presencix. All rights reserved.</p>
          <p>Built with React & Vite · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
