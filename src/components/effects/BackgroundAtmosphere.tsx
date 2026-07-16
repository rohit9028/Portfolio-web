export default function BackgroundAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-deep">
      {/* Base grid */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      {/* Blurred gradient blobs */}
      <div className="animate-blob absolute -left-40 top-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-[120px]" />
      <div
        className="animate-blob absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-highlight/20 blur-[120px]"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="animate-blob absolute bottom-[-15%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[130px]"
        style={{ animationDelay: "6s" }}
      />

      {/* Star field */}
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(1px_1px_at_20px_30px,rgba(255,255,255,0.35),transparent),radial-gradient(1px_1px_at_120px_80px,rgba(255,255,255,0.25),transparent),radial-gradient(1.5px_1.5px_at_220px_150px,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_320px_220px,rgba(255,255,255,0.2),transparent)] [background-size:360px_360px]" />

      {/* Light rays */}
      <div className="absolute left-1/2 top-0 h-[70vh] w-[140vw] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(59,130,246,0.08)_40deg,transparent_90deg)]" />

      {/* Bottom vignette to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-deep to-transparent" />
    </div>
  );
}
