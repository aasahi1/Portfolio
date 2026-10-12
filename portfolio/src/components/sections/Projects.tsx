import { Link } from "react-router-dom"
import { ArrowRight, ExternalLink } from "lucide-react"
import { FEATURED_PROJECTS, type Project } from "@/data/projects"

const HOME_PROJECT_IDS = new Set(["icmms", "co-connect", "lurn"])

export function Projects() {
  return (
    <section id="portfolio" className="w-full bg-background px-5 pb-12 pt-12 sm:px-10 sm:pt-16">
      <div className="mx-auto max-w-[1056px]">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-text-main/20 pb-5 sm:mb-12 sm:pb-7">
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="text-[32px] font-black leading-none tracking-tight text-text-main sm:text-[48px]">Projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 whitespace-nowrap pb-1 text-xs font-bold text-text-main underline underline-offset-4 transition-colors hover:text-text-accent sm:text-sm">
            All projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {FEATURED_PROJECTS.filter((project) => HOME_PROJECT_IDS.has(project.id)).map((project, index) => (
            <ProjectFeature key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectFeature({ project, reverse }: { project: Project; reverse: boolean }) {
  const image = project.image
  const imageAlt = project.imageAlt
  const emphasizeImage = project.id === "co-connect" || project.id === "lurn"

  return (
    <article className={`site-card-motion grid overflow-hidden rounded-[20px] bg-transparent shadow-sm md:min-h-[350px] md:grid-cols-2 ${reverse ? "md:[&>a]:order-2 md:[&>div]:order-1" : ""}`}>
      <Link to={`/projects/${project.id}`} aria-label={`Read the ${project.title} project`} className={`group relative flex min-h-[250px] items-center justify-center overflow-hidden ${reverse ? "bg-gradient-to-b from-brand-yellow/35 via-brand-yellow/15 to-transparent md:bg-gradient-to-r md:from-brand-yellow/35 md:via-brand-yellow/15 md:to-transparent" : "bg-gradient-to-b from-brand-yellow/35 via-brand-yellow/15 to-transparent md:bg-gradient-to-l md:from-brand-yellow/35 md:via-brand-yellow/15 md:to-transparent"} ${emphasizeImage ? "p-4 sm:p-6" : "p-6 sm:p-10"}`}>
        <img src={image} alt={imageAlt} className={`site-motion-image w-full object-contain ${emphasizeImage ? "site-motion-image-emphasis max-h-[330px]" : "max-h-[300px]"}`} />
      </Link>
      <div className="flex flex-col justify-center bg-paper p-6 text-text-main sm:p-9 lg:p-12">
        <p className="text-[10px] font-black uppercase tracking-[.18em] text-text-accent">{project.category}</p>
        <h3 className="mt-2 text-[30px] font-black leading-tight tracking-tight sm:text-[38px]">{project.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-main/75">{project.description}</p>
        {project.role && <div className="mt-4 border-l-2 border-text-accent pl-3">
          <p className="text-[9px] font-black uppercase tracking-[.16em] text-text-main/60">My role</p>
          <p className="mt-1 text-xs font-semibold">{project.role}</p>
        </div>}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link to={`/projects/${project.id}`} className="button-hover inline-flex min-h-10 items-center gap-2 rounded-full bg-text-main px-5 text-xs font-bold text-paper transition-transform hover:-translate-y-0.5">
            Project <ArrowRight size={14} aria-hidden="true" />
          </Link>
          {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-text-main underline underline-offset-4">
            {project.linkText ?? "View project"}<ExternalLink size={12} aria-hidden="true" />
          </a>}
        </div>
      </div>
    </article>
  )
}
