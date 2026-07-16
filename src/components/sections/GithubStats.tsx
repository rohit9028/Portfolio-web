import { Star, GitFork, GitCommitHorizontal } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { fadeUp } from "@/animations/variants";
import { PERSONAL } from "@/constants";

// Deterministic pseudo-contribution data so the graph looks the same on every render.
const CONTRIBUTION_WEEKS = 34;
const contributions = Array.from({ length: CONTRIBUTION_WEEKS * 7 }, (_, i) => {
  const seed = Math.sin(i * 12.9898) * 43758.5453;
  const rand = seed - Math.floor(seed);
  return Math.floor(rand * 5); // 0-4 intensity
});

const intensityColor = [
  "bg-white/5",
  "bg-primary/25",
  "bg-primary/45",
  "bg-secondary/65",
  "bg-secondary",
];

const topLanguages = [
  { name: "JavaScript", percent: 38, color: "#f7df1e" },
  { name: "TypeScript", percent: 26, color: "#3b82f6" },
  { name: "HTML/CSS", percent: 18, color: "#06b6d4" },
  { name: "Java", percent: 12, color: "#8b5cf6" },
  { name: "Python", percent: 6, color: "#94a3b8" },
];

const pinnedRepos = [
  {
    name: "business-expense-tracker",
    desc: "MERN expense tracking dashboard",
    stars: 24,
    forks: 6,
  },
  {
    name: "Portfolio-web",
    desc: "My personal portfolio website",
    stars: 18,
    forks: 4,},
    {
    name: "Todo-List",
    desc: "Responsive task management app",
    stars: 12,
    forks: 3,
    },
];

export default function GithubStats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="git log --stats"
          title="GitHub"
          highlight="Activity"
          description={`Consistent, public shipping — follow along at github.com/${PERSONAL.github.split("/").pop()}`}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Contribution graph */}
          <Reveal
            variants={fadeUp}
            className="glass-card overflow-x-auto p-6 lg:col-span-2"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display font-semibold">Contribution Graph</h3>
              <span className="font-mono text-xs text-text-dim">
                last ~8 months
              </span>
            </div>
            <div className="grid w-max grid-flow-col grid-rows-7 gap-[3px]">
              {contributions.map((level, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-[3px] ${intensityColor[level]}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-text-dim">
              Less
              {intensityColor.map((c, i) => (
                <span key={i} className={`h-3 w-3 rounded-[3px] ${c}`} />
              ))}
              More
            </div>
          </Reveal>

          {/* Top languages */}
          <Reveal variants={fadeUp} index={1} className="glass-card p-6">
            <h3 className="font-display mb-5 font-semibold">Top Languages</h3>
            <div className="space-y-3.5">
              {topLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1 flex justify-between text-xs text-text-muted">
                    <span>{lang.name}</span>
                    <span className="font-mono">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: lang.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pinned repos */}
          <Reveal
            variants={fadeUp}
            index={2}
            className="glass-card p-6 lg:col-span-2"
          >
            <h3 className="font-display mb-5 font-semibold">
              Pinned Repositories
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {pinnedRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="rounded-xl border border-white/8 p-4"
                >
                  <p className="font-mono text-sm text-secondary">
                    {repo.name}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{repo.desc}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-text-dim">
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
