import SkillsGrid from "@/assets/skills-grid.svg?react"

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 bg-background overflow-hidden">
      <style>{`
        /* Each logo group scales from its own centre */
        .skills-svg [id$=" logo"] {
          transition:
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            filter 0.35s ease;
          transform-box: fill-box;
          transform-origin: center;
          cursor: pointer;
          animation: skill-float 5s ease-in-out infinite;
        }
        .skills-svg [id$=" logo"]:hover {
          transform: scale(1.22) translateY(-5px);
          filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.28));
          animation-play-state: paused;
        }
        .skills-svg [id$=" logo"]:nth-of-type(3n) { animation-delay: -1.4s; }
        .skills-svg [id$=" logo"]:nth-of-type(3n + 1) { animation-delay: -2.8s; }
        @keyframes skill-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-svg [id$=" logo"] { animation: none; }
        }
      `}</style>

      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Logo grid */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center rounded-[2.5rem] bg-brand-yellow/20 border border-text-main/10 shadow-xl shadow-text-main/10 p-4 sm:p-6">
              <SkillsGrid className="skills-svg w-full h-full object-contain overflow-visible" />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="space-y-4 order-1 lg:order-2 text-center lg:text-left lg:pl-16">
            <h2 className="group text-[48px] sm:text-[64px] font-black text-text-main leading-none tracking-tight cursor-default">
              <span className="transition-colors duration-300 group-hover:text-text-accent">Skills</span>
              <span className="text-text-accent"> &</span>
              <br />
              <span className="transition-colors duration-300 group-hover:text-text-accent">Tools</span>
            </h2>
            <p className="text-[16px] sm:text-[17px] text-text-main/70 leading-relaxed max-w-[340px] font-medium mx-auto lg:mx-0">
              A toolkit that lets me take things from a vague idea all the way to something real — designed and built.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-3 max-w-md mx-auto lg:mx-0">
              {['Design', 'Frontend', 'Motion', 'Prototyping'].map((label) => (
                <span key={label} className="rounded-full border border-text-main/15 bg-background/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-main/70">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
