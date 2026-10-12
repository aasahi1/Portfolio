import { useEffect, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import "./CaseStudyPrimitives.css"

export type FeaturedCaseId = "icmms" | "co-connect" | "lurn" | "habitat" | "grandmas-bakery"

const featuredCases: { id: FeaturedCaseId; title: string }[] = [
  { id: "icmms", title: "ICMMS" },
  { id: "co-connect", title: "Co-Connect" },
  { id: "lurn", title: "Lurn" },
]

export function CaseStudyFrame({
  id,
  children,
}: {
  id: FeaturedCaseId
  children: ReactNode
}) {
  const otherCases = featuredCases.filter((project) => project.id !== id)

  return (
    <article className="case-study-page" data-case-theme={id}>
      <div className="case-study-shell">
        <nav aria-label="Breadcrumb" className="case-study-breadcrumb">
          <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#2B120A] underline decoration-[#AF2500]/50 underline-offset-4 hover:text-[#AF2500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF2500]">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
        </nav>

        {children}

        <nav aria-label="Other case studies" className="case-study-related">
          <div className="case-study-related-heading mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#AF2500]">Continue exploring</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">More selected work</h2>
            </div>
            <Link to="/projects" className="inline-flex min-h-10 items-center gap-1 text-sm font-semibold underline decoration-[#AF2500]/60 underline-offset-4 hover:text-[#AF2500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#AF2500]">All projects <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          <div className="case-study-related-grid grid gap-3 sm:grid-cols-2">
            {otherCases.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="group flex min-h-16 items-center justify-between gap-4 rounded-xl border border-[#2B120A]/15 bg-[#F9F8ED] px-5 py-4 font-semibold hover:border-[#AF2500]/50 hover:bg-[#F9F8ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF2500]">
                <span>{project.title}</span><ArrowUpRight size={17} aria-hidden="true" className="shrink-0 text-[#AF2500] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </article>
  )
}

export function CaseStudyHero({
  eyebrow,
  showEyebrow = true,
  title,
  summary,
  metadata,
  image,
  imageAlt,
  supportingImages = [],
  liveUrl,
  liveLabel,
  availabilityNote,
}: {
  eyebrow: string
  showEyebrow?: boolean
  title: string
  summary: string
  metadata: { label: string; value: ReactNode }[]
  image?: string
  imageAlt?: string
  supportingImages?: { src: string; alt: string }[]
  liveUrl?: string
  liveLabel?: string
  availabilityNote?: string
}) {
  return (
    <header className="case-study-hero">
      <div className="case-study-hero-copy min-w-0 max-w-2xl">
        {showEyebrow && <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#AF2500]">{eyebrow}</p>}
        <h1 className="mt-4 font-inter text-[2.8rem] font-bold leading-[0.98] tracking-[-0.045em] text-[#2B120A] sm:text-6xl lg:text-[4.4rem]">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#2B120A]/85 sm:text-lg">{summary}</p>

        <dl className="mt-7 grid max-w-xl grid-cols-2 gap-x-5 gap-y-4 border-y border-[#2B120A]/15 py-5 sm:grid-cols-3">
          {metadata.map((item) => (
            <div key={item.label}>
              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2B120A]/70">{item.label}</dt>
              <dd className="mt-1 text-sm font-semibold leading-snug text-[#2B120A]">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#2B120A] px-5 py-2.5 text-sm font-semibold text-[#F9F8ED] hover:bg-[#AF2500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#AF2500]">{liveLabel || "Open prototype"}<ExternalLink size={15} aria-hidden="true" /></a>}
          {availabilityNote && <p className="max-w-sm text-xs leading-relaxed text-[#2B120A]/70">{availabilityNote}</p>}
        </div>
      </div>

      <div className="case-study-hero-visuals" aria-label={`${title} project visuals`}>
        <div className="case-study-hero-main">
          {image ? <CaseStudyImage src={image} alt={imageAlt || "Project interface preview"} title={title} loading="eager" className="case-study-hero-main-image" /> : <div className="case-study-hero-missing">[VERIFY: add an authentic interface preview from the project.]</div>}
        </div>
        {supportingImages.length > 0 && <figure className="case-study-hero-secondary" aria-label="Additional project visuals">
          {supportingImages.slice(0, 2).map((supportingImage) => <img key={supportingImage.src} src={supportingImage.src} alt={supportingImage.alt} loading="lazy" />)}
        </figure>}
      </div>
    </header>
  )
}

export function CaseStudySection({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string
  eyebrow: string
  title: string
  intro?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`case-study-section ${className}`}>
      <div className="case-study-section-layout">
        <div className="case-study-section-copy">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#AF2500]">{eyebrow}</p>
          <h2 id={`${id}-heading`} className="mt-2 font-inter text-3xl font-bold leading-tight tracking-[-0.035em] text-[#2B120A] sm:text-4xl">{title}</h2>
          {intro && <div className="mt-3 text-sm leading-relaxed text-[#2B120A]/70 sm:text-base">{intro}</div>}
        </div>
        <div className="case-study-section-content">{children}</div>
      </div>
    </section>
  )
}

export function CaseStudyImage({
  src,
  alt,
  title,
  className = "",
  loading = "lazy",
}: {
  src: string
  alt: string
  title: string
  className?: string
  loading?: "eager" | "lazy"
}) {
  const [open, setOpen] = useState(false)

  return (
    <figure className="case-study-figure min-w-0">
      <button type="button" onClick={() => setOpen(true)} aria-label={`Enlarge image: ${alt}`} className="group relative block w-full rounded-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#AF2500]">
        <img src={src} alt={alt} loading={loading} className={`block ${className}`} />
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[95vh] max-w-[95vw] overflow-auto border-0 bg-transparent p-0 shadow-none" aria-describedby={undefined}>
          <DialogTitle className="sr-only">{title}: image detail</DialogTitle>
          <img src={src} alt={alt} className="mx-auto max-h-[84vh] max-w-full object-contain" />
        </DialogContent>
      </Dialog>
    </figure>
  )
}

export function EvidenceLabel({ kind, children }: { kind: "documented" | "hypothesis" | "proposal" | "verify"; children: ReactNode }) {
  const styles = {
    documented: "border-[#94B86D]/30 bg-[#94B86D]/20 text-[#2B120A]",
    hypothesis: "border-[#AF2500]/25 bg-[#FDE768]/35 text-[#2B120A]",
    proposal: "border-[#2B120A]/25 bg-[#94B86D]/20 text-[#2B120A]",
    verify: "border-[#AF2500]/25 bg-[#FDE768]/35 text-[#AF2500]",
  }[kind]
  const labels = { documented: "Project material", hypothesis: "Problem hypothesis", proposal: "Proposed next step", verify: "Needs confirmation" }

  return <aside className={`rounded-lg border px-4 py-3 text-sm leading-relaxed ${styles}`}><strong className="mr-1.5 text-[10px] uppercase tracking-[0.12em]">{labels[kind]}</strong>{children}</aside>
}

export function CaseStudyAnchorNav({ items }: { items: { href: string; label: string }[] }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "")

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.href)).filter((section): section is HTMLElement => section !== null)
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) setActiveHref(visible.target.id)
    }, { rootMargin: "-22% 0px -62% 0px", threshold: 0 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  return <nav aria-label="Case study sections" className="case-study-anchor-nav"><span className="case-study-progress-line" aria-hidden="true" /><ul>{items.map((item) => {
    const active = item.href === activeHref
    return <li key={item.href}><a href={`#${item.href}`} aria-current={active ? "location" : undefined} title={item.label} className={active ? "is-active" : undefined}><span className="case-study-progress-label">{item.label}</span><span className="case-study-progress-dot" aria-hidden="true" /></a></li>
  })}</ul></nav>
}

export function TextCard({ title, children, tone = "plain" }: { title: string; children: ReactNode; tone?: "plain" | "accent" | "soft" }) {
  const toneClass = tone === "accent" ? "bg-[#220500] text-[#F9F8ED]" : tone === "soft" ? "bg-[#94B86D]/20 text-[#2B120A]" : "border border-[#2B120A]/15 bg-[#F9F8ED] text-[#2B120A]"
  const headingClass = tone === "accent" ? "text-[#FDE768]" : "text-[#AF2500]"
  return <article data-tone={tone} className={`case-study-card rounded-xl p-5 sm:p-6 ${toneClass}`}><h3 className={`text-[11px] font-bold uppercase tracking-[0.14em] ${headingClass}`}>{title}</h3><div className="mt-3 text-sm leading-relaxed opacity-90">{children}</div></article>
}

export function Verify({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#FDE768]/35 px-1.5 py-0.5 font-semibold text-[#AF2500]">[VERIFY: {children}]</span>
}
