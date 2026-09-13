import { useState } from "react"
import { Link } from "react-router-dom"
import { PROJECTS, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import CloverSmall from "@/assets/clover-small.svg?react"
import { Ladybugs } from "@/components/Ladybugs"
import { ArrowUpRight, Sparkles, LockKeyhole } from "lucide-react"

type FilterCategory = "All" | "UX / Product" | "Development" | "Branding"

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All")

  const categories: FilterCategory[] = ["All", "UX / Product", "Development", "Branding"]

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <div className="relative isolate w-full py-16 md:py-24 bg-background overflow-hidden flex-1">
      <Ladybugs
        leftPositionClass="md:left-[-170px] md:top-[40px] lg:left-[-220px] lg:top-[50px] xl:left-[-260px] xl:top-[60px]"
        rightPositionClass="md:top-[80px] lg:top-[100px] xl:top-[120px] -translate-y-1/2 md:right-[-190px] lg:right-[-230px] xl:right-[-270px]"
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/40 border border-text-main/10 text-xs font-bold uppercase tracking-widest text-text-main shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-text-accent" />
            Selected Portfolio & Case Studies
          </div>
          <h1 className="text-[48px] sm:text-[64px] font-black text-text-main leading-none tracking-tight">
            Featured Projects<span className="text-text-accent">.</span>
          </h1>
          <p className="text-text-main/80 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            A curated collection of work spanning product design, UX research, front-end development, and brand strategy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const count = cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-text-main text-brand-yellow shadow-md scale-105"
                    : "bg-white/60 hover:bg-white text-text-main/70 hover:text-text-main border border-black/5 hover:shadow-xs"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? "bg-brand-yellow/20 text-brand-yellow" : "bg-text-main/10 text-text-main/60"
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project: Project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative flex flex-col rounded-3xl bg-white/80 shadow-md border border-black/5 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:bg-white"
            >
              {/* Image Preview Banner */}
              <div className={`relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden p-6 sm:p-8 ${project.color} transition-colors duration-500`}>
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <CloverSmall className="absolute top-4 right-4 w-7 h-7 opacity-25 text-text-main group-hover:rotate-45 group-hover:opacity-40 transition-all duration-500" />
                
                {/* Category Pill Tag */}
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-text-main text-[11px] font-black uppercase tracking-wider shadow-xs border border-black/5">
                    {project.category}
                  </span>
                </div>
                {project.confidential && (
                  <span className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-full bg-text-main px-3 py-1 text-[11px] font-black uppercase tracking-wider text-brand-yellow shadow-sm">
                    <LockKeyhole className="h-3 w-3" /> NDA
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="text-2xl font-black text-text-main tracking-tight group-hover:text-text-accent transition-colors duration-300 leading-snug">
                      {project.title}
                    </h2>
                    <div className="w-8 h-8 rounded-full bg-brand-yellow/30 flex items-center justify-center text-text-main group-hover:bg-text-main group-hover:text-brand-yellow transition-colors shrink-0 shadow-xs mt-0.5">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  
                  {project.role && (
                    <p className="text-[12px] font-bold text-text-accent tracking-wide uppercase">
                      {project.role}
                    </p>
                  )}

                  <p className="text-text-main/75 text-sm font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Action */}
                <div className="pt-2 border-t border-black/5 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-text-main/10 text-text-main hover:bg-text-accent hover:text-white border-none rounded-full px-2.5 py-0.5 text-[11px] font-bold transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-text-accent group-hover:underline underline-offset-2 shrink-0">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-text-main">
            Interested in collaborating?
          </h3>
          <p className="text-text-main/75 text-sm sm:text-base font-medium">
            Whether you need UX design, front-end implementation, or creative technology, I'd love to chat.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main font-black text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
