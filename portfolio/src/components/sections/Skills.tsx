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
        }
        .skills-svg [id$=" logo"]:hover {
          transform: scale(1.22) translateY(-5px);
          filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.28));
        }
      `}</style>

      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Logo grid */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center">
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
          </div>
        </div>
      </div>
    </section>
  )
}
