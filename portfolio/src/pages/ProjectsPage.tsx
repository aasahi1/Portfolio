import { Link } from "react-router-dom"
import { FEATURED_PROJECTS, PROJECTS, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import CloverSmall from "@/assets/clover-small.svg?react"
import { ArrowUpRight, LockKeyhole } from "lucide-react"

export function ProjectsPage() {
  return (
    <div className="relative isolate w-full pt-8 pb-16 md:pt-12 md:pb-20 bg-background overflow-hidden flex-1">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-10 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-[48px] sm:text-[64px] font-black text-text-main leading-none tracking-tight">
              Projects
            </h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {FEATURED_PROJECTS.map((project: Project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="site-card-motion group relative flex flex-col overflow-hidden rounded-3xl bg-[#f7f1dc] shadow-md hover:bg-[#f3e8bd]"
            >
              {/* Image Preview Banner */}
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-transparent p-6 transition-colors duration-500 sm:p-8">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="site-motion-image w-full h-full object-contain drop-shadow-md"
                />
                <CloverSmall className="absolute top-4 right-4 w-7 h-7 opacity-25 text-text-main group-hover:rotate-45 group-hover:opacity-40 transition-all duration-500" />
                
                {/* Category Pill Tag */}
                {project.category && (
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-text-main text-[11px] font-black uppercase tracking-wider shadow-xs border border-black/5">
                      {project.category}
                    </span>
                  </div>
                )}
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

        {PROJECTS.some((project) => !FEATURED_PROJECTS.some((featured) => featured.id === project.id) && project.id !== "alt-verse") && <section className="mx-auto mt-12 max-w-5xl border-t border-text-main/10 pt-8" aria-labelledby="additional-work-heading">
          <h2 id="additional-work-heading" className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-text-main/55">Additional experience</h2>
          <div className="grid gap-3">
          {PROJECTS.filter((project) => !FEATURED_PROJECTS.some((featured) => featured.id === project.id) && project.id !== "alt-verse").map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group flex flex-col gap-3 rounded-2xl border border-black/5 bg-[#f7f1dc] p-5 transition-colors hover:bg-[#f3e8bd] sm:flex-row sm:items-center sm:justify-between">
              <div><div className="flex items-center gap-2"><h3 className="text-lg font-black text-text-main group-hover:text-text-accent">{project.title}</h3>{project.confidential && <span className="rounded-full bg-text-main px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-brand-yellow">NDA</span>}</div><p className="mt-1 max-w-2xl text-sm leading-relaxed text-text-main/70">{project.description}</p></div>
              <span className="shrink-0 text-xs font-black uppercase tracking-wider text-text-accent">View project →</span>
            </Link>
          ))}
          </div>
        </section>}

        {/* A distinct exhibition feature, intentionally separate from the product project cards. */}
        {PROJECTS.find((project) => project.id === "alt-verse") && <section className="mx-auto mt-14 max-w-5xl border-t border-text-main/10 pt-8 sm:mt-16 sm:pt-10" aria-labelledby="exhibition-heading">
          <div className="mb-5 sm:mb-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">Immersive exhibition</p>
            <h2 id="exhibition-heading" className="mt-2 text-2xl font-black tracking-tight text-text-main sm:text-3xl">Art beyond the screen</h2>
          </div>
          {PROJECTS.filter((project) => project.id === "alt-verse").map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="site-card-motion group grid overflow-hidden rounded-3xl bg-[#f8e8f7] transition-colors hover:bg-[#f3def2] md:grid-cols-[.78fr_1.22fr]">
              <div className="flex min-h-64 items-center justify-center bg-white/45 p-5 sm:min-h-80 sm:p-7">
                <img src={project.image} alt={project.imageAlt || project.title} className="site-motion-image max-h-[440px] w-full rounded-md object-contain" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-xs font-black uppercase tracking-[0.2em] text-text-accent">February 2025 · THEMUSEUM</p><h3 className="mt-2 text-3xl font-black tracking-tight text-text-main sm:text-4xl">{project.title}</h3></div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/50 text-text-main transition-colors group-hover:bg-text-main group-hover:text-brand-yellow"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
                <p className="max-w-xl text-base font-medium leading-relaxed text-text-main/80 sm:text-lg">{project.description}</p>
                <span className="text-xs font-black uppercase tracking-wider text-text-accent">Explore the exhibition <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </section>}

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center bg-white/40 backdrop-blur-md rounded-3xl p-7 sm:p-10 border border-black/5 shadow-sm max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-text-main">
            Interested in collaborating?
          </h3>
          <p className="text-text-main/75 text-sm sm:text-base font-medium">
            Whether you need a UX designer, front-end developer, or an overall creative, I'd love to chat!
          </p>
          <div className="pt-2">
            <a
              href="https://www.linkedin.com/in/amna-sahi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main font-black text-sm tracking-wide shadow-md transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
