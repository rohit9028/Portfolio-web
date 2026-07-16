import { Link as ScrollLink } from "react-scroll";
import { Mail, Heart, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NAV_LINKS, PERSONAL } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 py-12">
      <div className="section-container">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="font-display inline-flex cursor-pointer items-center gap-2 text-lg font-semibold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-highlight">
                <Terminal size={16} className="text-white" />
              </span>
              {PERSONAL.name}
            </ScrollLink>
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              MERN Stack Developer crafting fast, scalable and thoughtful web experiences.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {NAV_LINKS.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer font-mono text-xs text-text-muted transition-colors hover:text-secondary"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 md:flex-row">
          <p className="text-center text-xs text-text-dim md:text-left">
            © {year} {PERSONAL.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              { Icon: FaGithub, href: PERSONAL.github },
              { Icon: FaLinkedin, href: PERSONAL.linkedin },
              { Icon: Mail, href: `mailto:${PERSONAL.email}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-secondary/50 hover:text-secondary"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <p className="flex items-center gap-1.5 text-xs text-text-dim">
            Made with <Heart size={12} className="fill-highlight text-highlight" /> by {PERSONAL.firstName}
          </p>
        </div>
      </div>
    </footer>
  );
}
