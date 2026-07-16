import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { Mail, FileDown, ArrowRight, Sparkles } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL, TYPED_STRINGS } from "@/constants";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const floatingIcons = [
  { Icon: SiReact, color: "#61DAFB", top: "6%", left: "8%", size: 34, depth: 22 },
  { Icon: SiNodedotjs, color: "#3C873A", top: "18%", left: "82%", size: 30, depth: 30 },
  { Icon: SiMongodb, color: "#47A248", top: "68%", left: "86%", size: 32, depth: 18 },
  { Icon: SiJavascript, color: "#F7DF1E", top: "80%", left: "10%", size: 28, depth: 26 },
  { Icon: SiTailwindcss, color: "#38BDF8", top: "42%", left: "2%", size: 26, depth: 20 },
  { Icon: SiExpress, color: "#ffffff", top: "4%", left: "48%", size: 26, depth: 24 },
];

const codeLines = [
  { indent: 0, text: 'const developer = {' },
  { indent: 1, text: 'name: "Rohit Singh",' },
  { indent: 1, text: 'role: "MERN Stack Developer",' },
  { indent: 1, text: 'stack: ["React", "Node", "Express", "MongoDB"],' },
  { indent: 1, text: 'status: "Open to internships",' },
  { indent: 1, text: 'passion: "Building scalable web apps",' },
  { indent: 0, text: '};' },
];

export default function Hero() {
  const mouse = useMousePosition();
  const isDesktop = useIsDesktop();

  const parallax = (depth: number) => {
    if (!isDesktop) return { x: 0, y: 0 };
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    return {
      x: ((mouse.x - cx) / cx) * depth,
      y: ((mouse.y - cy) / cy) * depth,
    };
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-32 sm:pt-36">
      <div className="section-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow glass-card inline-flex !rounded-full px-4 py-1.5"
          >
            <Sparkles size={13} className="text-highlight" /> Available for internships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{PERSONAL.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono mt-4 h-8 text-lg text-secondary sm:text-xl"
          >
            <TypeAnimation
              sequence={TYPED_STRINGS}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-xl text-base text-text-muted sm:text-lg"
          >
            {PERSONAL.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <a href={PERSONAL.resumeUrl} download className="btn-gradient">
              <FileDown size={16} /> Download Resume
            </a>
            <ScrollLink to="projects" smooth duration={500} offset={-80} className="btn-outline cursor-pointer">
              View Projects <ArrowRight size={16} />
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-80} className="btn-outline cursor-pointer">
              Hire Me
            </ScrollLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex items-center gap-3"
          >
            {[
              { Icon: FaGithub, href: PERSONAL.github, label: "GitHub" },
              { Icon: FaLinkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor-hover
                className="glass-card flex h-11 w-11 items-center justify-center !rounded-full text-text-muted transition-colors hover:text-secondary"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — signature IDE panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square max-w-[420px] lg:mx-0">
            {floatingIcons.map(({ Icon, color, top, left, size, depth }, i) => {
              const p = parallax(depth);
              return (
                <motion.div
                  key={i}
                  className="animate-float absolute"
                  style={{ top, left, animationDelay: `${i * 0.6}s` }}
                  animate={{ x: p.x, y: p.y }}
                  transition={{ type: "spring", stiffness: 60, damping: 12 }}
                >
                  <div
                    className="glass-card flex items-center justify-center !rounded-2xl p-3"
                    style={{ boxShadow: `0 0 30px -8px ${color}55` }}
                  >
                    <Icon size={size} color={color} />
                  </div>
                </motion.div>
              );
            })}

            {/* IDE window */}
            <div className="gradient-border glass absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 overflow-hidden !rounded-2xl shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="font-mono ml-3 text-[11px] text-text-dim">developer.ts</span>
              </div>
              <div className="font-mono space-y-1.5 p-5 text-[12.5px] leading-relaxed sm:text-[13px]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
                    style={{ paddingLeft: `${line.indent * 16}px` }}
                    className="whitespace-pre text-text-muted"
                  >
                    <CodeHighlight text={line.text} />
                  </motion.div>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="animate-pulse-glow inline-block h-3.5 w-1.5 bg-secondary"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CodeHighlight({ text }: { text: string }) {
  const parts = text.split(/(".*?")/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-secondary">
            {part}
          </span>
        ) : (
          <span key={i} className="text-primary-soft/90">
            {part}
          </span>
        )
      )}
    </>
  );
}
