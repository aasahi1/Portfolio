import SkillsGrid from "@/assets/skills-grid.svg?react"

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-background-forest/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative h-[518px] w-[579px] flex items-center justify-center">
              <SkillsGrid className="w-full h-full" />
            </div>
          </div>

          <div className="space-y-6 lg:pl-20">
            <h2 className="text-[64px] font-black text-text-accent leading-[46px]">
              Skills &<br />Tools
            </h2>
            <p className="text-[15.75px] text-text-main/80 leading-[24.5px] max-w-[300px]">
              A comprehensive toolkit that enables me to deliver exceptional design solutions from conception to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}