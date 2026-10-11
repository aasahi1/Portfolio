import { Link } from "react-router-dom"
import { ArrowRight, ExternalLink } from "lucide-react"
import { FEATURED_PROJECTS, type Project } from "@/data/projects"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"

const HOME_PROJECT_IDS = new Set(["icmms", "co-connect", "lurn"])

export function Projects() {
  return (
    <section id="portfolio" className="w-full bg-background px-5 pb-12 pt-12 sm:px-10 sm:pt-16">
      <div className="mx-auto max-w-[1056px]">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-text-main/20 pb-5 sm:mb-12 sm:pb-7">
          <div className="flex items-center gap-3 sm:gap-4">
            <LadybugBottom aria-hidden="true" className="ladybug-interactive h-[34px] w-7 shrink-0 sm:h-[44px] sm:w-9" />
            <h2 className="text-[32px] font-black leading-none tracking-tight text-text-main sm:text-[48px]">Case Studies</h2>
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
  const preview = project.id === "habitat" ? project.gallery[1] : project.gallery[0]
  const image = preview?.url ?? project.image
  const imageAlt = preview?.alt ?? project.imageAlt

  return (
    <article className={`grid overflow-hidden rounded-[20px] border border-text-main/10 bg-paper shadow-sm md:min-h-[350px] md:grid-cols-2 ${reverse ? "md:[&>a]:order-2 md:[&>div]:order-1" : ""}`}>
      <Link to={`/projects/${project.id}`} aria-label={`Read the ${project.title} case study`} className={`group flex min-h-[250px] items-center justify-center overflow-hidden p-6 sm:p-10 ${project.color}`}>
        <img src={image} alt={imageAlt} className="max-h-[300px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
      </Link>
      <div className={`flex flex-col justify-center p-6 sm:p-9 lg:p-12 ${reverse ? "bg-paper text-text-main" : "bg-text-main text-paper"}`}>
        <p className={`text-[10px] font-black uppercase tracking-[.18em] ${reverse ? "text-text-accent" : "text-brand-yellow"}`}>{project.category}</p>
        <h3 className="mt-2 text-[30px] font-black leading-tight tracking-tight sm:text-[38px]">{project.title}</h3>
        <p className={`mt-3 max-w-md text-sm leading-relaxed ${reverse ? "text-text-main/75" : "text-paper/85"}`}>{project.description}</p>
        {project.role && <div className={`mt-4 border-l-2 pl-3 ${reverse ? "border-text-accent" : "border-brand-yellow"}`}>
          <p className={`text-[9px] font-black uppercase tracking-[.16em] ${reverse ? "text-text-main/60" : "text-paper/65"}`}>My contribution</p>
          <p className="mt-1 text-xs font-semibold">{project.role}</p>
        </div>}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link to={`/projects/${project.id}`} className={`button-hover inline-flex min-h-10 items-center gap-2 rounded-full px-5 text-xs font-bold transition-transform hover:-translate-y-0.5 ${reverse ? "bg-text-main text-paper" : "bg-paper text-text-main"}`}>
            Case study <ArrowRight size={14} aria-hidden="true" />
          </Link>
          {project.link && <a href={project.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-4 ${reverse ? "text-text-main" : "text-paper"}`}>
            {project.linkText ?? "View project"}<ExternalLink size={12} aria-hidden="true" />
          </a>}
        </div>
      </div>
    </article>
  )
}
