import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, FileDown, Terminal } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 " +
        (scrolled ? "py-2" : "py-4")
      }
    >
      <div className="section-container">
        <div
          className={
            "glass flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6 " +
            (scrolled ? "h-14 shadow-[0_8px_30px_-14px_rgba(0,0,0,0.6)]" : "h-16")
          }
        >
          <ScrollLink
            to="home"
            spy
            smooth
            duration={500}
            className="font-display flex cursor-pointer items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-highlight">
              <Terminal size={16} className="text-white" />
            </span>
            {PERSONAL.name}
          </ScrollLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
                offset={-90}
                activeClass="text-white bg-white/10"
                className="cursor-pointer rounded-lg px-3.5 py-2 font-mono text-[13px] text-text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-secondary/50 hover:text-secondary"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={PERSONAL.resumeUrl}
              download
              className="btn-gradient hidden !px-4 !py-2 text-sm lg:inline-flex"
            >
              <FileDown size={15} /> Resume
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-muted lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass mt-2 flex flex-col overflow-hidden rounded-2xl p-3 lg:hidden"
            >
              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  activeClass="text-white bg-white/10"
                  className="cursor-pointer rounded-lg px-4 py-3 font-mono text-sm text-text-muted transition-colors hover:bg-white/5"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <a
                href={PERSONAL.resumeUrl}
                download
                className="btn-gradient mt-2 !py-2.5 text-sm"
              >
                <FileDown size={15} /> Download Resume
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
