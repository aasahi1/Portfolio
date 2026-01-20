import SkillsGrid from "@/assets/skills-grid.svg?react"

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-background-forest/20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[450px] w-[500px] flex items-center justify-center">
              <SkillsGrid className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="space-y-4 lg:pl-10">
            <h2 className="text-[64px] font-black text-text-accent leading-[54px] tracking-tight">
              Skills &<br />Tools
            </h2>
            <p className="text-[15.75px] text-text-main/80 leading-[22px] max-w-[320px]">
              A comprehensive toolkit that enables me to deliver exceptional design solutions from conception to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}