import SkillsGrid from "@/assets/skills-grid.svg?react"

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT COLUMN: STATIC LOGO GRID --- */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative h-[300px] w-full max-w-[400px] sm:h-[450px] sm:max-w-[500px] flex items-center justify-center">
              <SkillsGrid className="w-full h-full object-contain" />
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="space-y-4 lg:pl-32 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="group text-[48px] sm:text-[64px] font-black text-text-main leading-none tracking-tight cursor-default">
              <span className="transition-colors duration-300 group-hover:text-text-accent">
                Skills
              </span>
              <span className="text-text-accent"> &</span>
              <br />
              <span className="transition-colors duration-300 group-hover:text-text-accent">
                Tools
              </span>
            </h2>
            
            <p className="text-[17px] text-text-main/80 leading-relaxed max-w-[360px] font-medium">
              A comprehensive toolkit that enables me to deliver exceptional design solutions from conception to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}