import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { PROJECTS, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ExternalLink, ArrowLeft, ZoomIn, X, Sparkles, ClipboardCheck, Handshake, TrendingUp, Accessibility, Brain, MonitorSmartphone, LockKeyhole } from "lucide-react"
import { Ladybugs } from "@/components/Ladybugs"
import CloverSmall from "@/assets/clover-small.svg?react"

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [zoomedImage, setZoomedImage] = useState<{ url: string; alt: string } | null>(null)

  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h1 className="text-4xl font-black text-text-main">Project Not Found</h1>
        <p className="text-text-main/70 text-base">The project you are looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-text-main text-brand-yellow hover:bg-text-main/90 font-bold rounded-full px-6 shadow-md">
          <Link to="/projects">Back to All Projects</Link>
        </Button>
      </div>
    )
  }

  const galleryItems = project.id === "lurn"
    ? [
        ...project.gallery,
        { url: "/lurn/class-code.png", alt: "LURN class-code entry screen" },
        { url: "/lurn/learning-style-quiz.png", alt: "LURN learning-style quiz screen" },
        { url: "/lurn/community.png", alt: "LURN student community gallery" },
        { url: "/lurn/student-flow.jpg", alt: "LURN student user flow" },
        { url: "/lurn/teacher-flow.png", alt: "LURN teacher user flow" },
        { url: "/lurn/mobile-dashboard.png", alt: "LURN mobile learning dashboard" },
      ]
    : project.gallery

  return (
    <div className="relative isolate w-full py-12 md:py-20 bg-background overflow-hidden flex-1">
      <Ladybugs
        leftPositionClass="md:left-[-160px] md:top-[40px] lg:left-[-200px] lg:top-[50px] xl:left-[-240px] xl:top-[60px]"
        rightPositionClass="md:top-[80px] lg:top-[100px] xl:top-[120px] -translate-y-1/2 md:right-[-180px] lg:right-[-220px] xl:right-[-260px]"
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 max-w-5xl space-y-10 relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-bold text-text-main/80 hover:text-text-main transition-colors group cursor-pointer bg-white/50 px-4 py-2 rounded-full border border-black/5 hover:bg-white shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-2">
            {project.confidential && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-text-main px-3 py-1 text-xs font-black uppercase tracking-widest text-brand-yellow">
                <LockKeyhole className="h-3 w-3" /> NDA
              </span>
            )}
            <span className="text-xs font-black uppercase tracking-widest text-text-accent bg-brand-yellow/50 px-3 py-1 rounded-full border border-black/5">
              {project.category}
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        {project.id === "habitat" ? (
          <HabitAtPhotoCarousel />
        ) : project.id === "co-connect" ? (
          <CoConnectPhotoCarousel />
        ) : project.id === "lurn" ? (
          <LurnPhotoCarousel />
        ) : (
          <div className={`relative w-full rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 flex items-center justify-center shadow-xl ${project.color} border border-black/5`}>
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="max-h-[380px] max-w-full object-contain drop-shadow-2xl"
            />
            <CloverSmall className="absolute top-6 right-6 w-10 h-10 opacity-20 text-text-main" />
          </div>
        )}

        <CaseStudyIntro project={project} />
        <CaseStudyBasics project={project} />

        {project.id === "habitat" && <HabitAtStory />}
        {project.id === "habitat" && <HabitAtVisualJourney />}
        {project.id === "icmms" && <IcmmsStory />}
        {project.id === "co-connect" && <CoConnectStory />}
        {project.id === "co-connect" && <CoConnectVisualJourney />}
        {project.id === "lurn" && <LurnStory />}
        {project.id === "lurn" && <LurnVisualJourney />}
        <ProjectProcess projectId={project.id} projectTitle={project.title} />
        <ProjectTradeoffs projectId={project.id} />

        {/* Visual Journey Gallery */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-text-accent" />
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-text-main/60">Process & Visual Journey</h2>
            </div>
            <div className="h-px flex-1 bg-text-main/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.filter((img) => !img.url.startsWith("/competition/")).map((img, idx) => (
              <div
                key={idx}
                onClick={() => setZoomedImage(img)}
                className="group relative aspect-video bg-white rounded-2xl overflow-hidden border border-black/5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-zoom-in flex items-center justify-center p-3"
              >
                <img
                  src={img.url}
                  alt={img.alt || `${project.title} gallery asset ${idx + 1}`}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl">
                  <div className="bg-white/95 p-3 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-text-main" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-10 flex flex-wrap justify-between items-center gap-4 border-t border-text-main/15">
          <Button asChild variant="outline" className="border-text-main/20 bg-white/60 text-text-main hover:bg-text-main hover:text-brand-yellow rounded-full font-bold px-6 h-11">
            <Link to="/projects">All Projects</Link>
          </Button>
          <Button asChild className="bg-text-accent text-white hover:bg-text-accent/90 rounded-full font-bold px-7 h-11 shadow-md">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!zoomedImage} onOpenChange={(open) => !open && setZoomedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/90 shadow-none flex items-center justify-center [&>button]:hidden rounded-2xl overflow-hidden">
          {zoomedImage && (
            <div className="relative w-full flex items-center justify-center p-6 min-h-[50vh]">
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={zoomedImage.url}
                alt={zoomedImage.alt || "Zoomed detail"}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl animate-in fade-in zoom-in-95 duration-300"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

type CaseStudyBasicsData = { context: string; contribution: string; problem: string; earlySignal: string; evidenceLimit: string; constraint: string; choice: string; tradeoff: string; longView: string }

const CASE_STUDY_BASICS: Record<string, CaseStudyBasicsData> = {
  habitat: {
    context: "First-place design sprint concept for a shared household task app.",
    contribution: "Framed the user problem, mapped the task and reward loop, and designed the mobile concept with my sprint team.",
    problem: "How might a household make shared chores visible and easier to coordinate without turning everyday upkeep into another burdensome checklist?",
    earlySignal: "The sprint framing centered on chores getting missed when ownership and progress are hard to see. The prototype explored rooms, points, and a friend map as responses.",
    evidenceLimit: "This is a sprint concept. The portfolio does not document interview findings or in-home usability validation.",
    constraint: "The core task needs to stay quicker than the chore itself; adding game systems can create setup and maintenance overhead.",
    choice: "Use the home as the organizing model, then layer points and customization on top of the task flow.",
    tradeoff: "Room context makes work easier to scan and more playful, but requires more structure than a simple shared list. The prototype prioritizes motivation and visibility; a next test should check whether people can add and assign chores quickly.",
    longView: "Over 2–3 years, explore recurring routines, flexible household roles, and optional social play. Grow the reward system only if it improves repeat participation without making chores feel punitive.",
  },
  "co-connect": {
    context: "Co-operators design competition; three-week team sprint and winning concept.",
    contribution: "Led UX research and product design; shaped the referral flow, advisor match, and prototype with the team.",
    problem: "How might someone find an advisor who fits their goals and communication preferences before a financial need feels urgent?",
    earlySignal: "The competition framing highlighted a gap in location-led matching. The team explored a client-shared lifestyle quiz; user testing is listed in the project toolkit, but findings are not shown in this portfolio.",
    evidenceLimit: "The work is a prototype concept. No live referral, match-quality, or business outcome data is documented.",
    constraint: "A referral must feel trustworthy and low effort while collecting enough context to make a match useful.",
    choice: "Use a short, client-shared quiz to introduce the service and prepare the advisor for a more relevant first conversation.",
    tradeoff: "A shorter quiz is easier to complete but gives the matching concept less signal. The FutureYou Box may encourage participation, but the value exchange and use of answers need to be transparent to protect trust.",
    longView: "Over 2–3 years, validate consent and privacy expectations, measure whether people feel well matched, and only then explore deeper advisor-system integrations or additional referral paths.",
  },
  lurn: {
    context: "Two-month inclusive learning product concept, shaped around a Grade 4 learner profile.",
    contribution: "Owned end-to-end product design, including learner framing, student and teacher flows, interface design, and prototyping.",
    problem: "How might a student who benefits from short, flexible activities know what to do next and feel progress without losing teacher support?",
    earlySignal: "The learner profile describes Ginny as a Grade 4 student who prefers text or audio and benefits from short, gamified sessions. The screens show student and teacher paths, a dashboard, and learning activities.",
    evidenceLimit: "The profile guides the concept; this portfolio does not include classroom testing or measured learning outcomes.",
    constraint: "Personalization can help a learner get started, but lengthy setup or rigid learning-style labels can limit agency and add work for teachers.",
    choice: "Make student and teacher entry points explicit, then use a visual dashboard and short activities to make the next action legible.",
    tradeoff: "A simple preference check keeps onboarding approachable, but cannot fully describe how a learner wants to engage in every subject or moment. Treat preferences as adjustable hints, not fixed labels.",
    longView: "Over 2–3 years, expand across subjects, ages, and access needs while keeping learner choice and teacher oversight. Validate that progress cues support learning rather than reward activity alone.",
  },
  icmms: {
    context: "Alectify co-op project: end-to-end design and build of a public product website.",
    contribution: "Designed and built the website, including information architecture, responsive UI, interactions, and all site copy.",
    problem: "How might a technically dense operations product be explained clearly to prospective users across devices?",
    earlySignal: "Public product capabilities informed the site story. NDA restrictions prevent sharing authenticated screens, internal workflows, or private research artifacts.",
    evidenceLimit: "This public case study shows the website process only; it does not claim product adoption or conversion results.",
    constraint: "The story needs enough operational specificity to be credible while respecting confidentiality and responsive requirements.",
    choice: "Use a clear information hierarchy and portfolio-safe abstract visuals to explain the public-facing value without exposing the protected product.",
    tradeoff: "Abstraction protects internal work but makes the product harder to inspect in detail. The case study prioritizes confidentiality and explains what can be shared.",
    longView: "Over 2–3 years, keep the site structure modular so new capabilities and audiences can be added without losing a consistent product story.",
  },
}

function CaseStudyIntro({ project }: { project: Project }) {
  return (
    <section className="rounded-3xl border border-black/5 bg-white/65 p-6 shadow-sm sm:p-9">
      <div className="mb-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} className="rounded-full border-none bg-text-main/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-text-main">{tag}</Badge>)}</div>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl"><h1 className="text-4xl font-black leading-tight tracking-tight text-text-main sm:text-6xl">{project.title}</h1><p className="mt-3 text-lg font-medium leading-relaxed text-text-main/80 sm:text-xl">{project.description}</p></div>
        <div className="flex shrink-0 flex-wrap gap-3">
          {project.link && <Button asChild className="h-11 gap-2 rounded-full bg-text-main px-5 font-black text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-text-main"><a href={project.link} target="_blank" rel="noreferrer"><ExternalLink size={16} />{project.linkText || "View project"}</a></Button>}
          {project.secondaryLink && <Button asChild variant="outline" className="h-11 gap-2 rounded-full border-text-main/20 bg-white/70 px-5 font-bold text-text-main"><a href={project.secondaryLink} target="_blank" rel="noreferrer"><ExternalLink size={16} />{project.secondaryLinkText || "More"}</a></Button>}
        </div>
      </div>
    </section>
  )
}

function CaseStudyBasics({ project }: { project: Project }) {
  const basics = CASE_STUDY_BASICS[project.id]
  if (!basics) return null
  const facts = [
    { label: "Context", value: basics.context },
    { label: "Duration", value: project.timeline || "Not recorded" },
    { label: "My role", value: `${project.role || "Not recorded"}. ${basics.contribution}` },
  ]
  return (
    <section className="space-y-5" aria-labelledby="case-basics-title">
      <div><p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">At a glance</p><h2 id="case-basics-title" className="mt-1 text-2xl font-black tracking-tight text-text-main">The brief &amp; my contribution</h2></div>
      <div className="grid gap-3 md:grid-cols-3">{facts.map((fact) => <article key={fact.label} className="rounded-2xl border border-black/5 bg-white/70 p-4"><h3 className="text-[10px] font-black uppercase tracking-widest text-text-main/50">{fact.label}</h3><p className="mt-2 text-sm font-semibold leading-relaxed text-text-main">{fact.value}</p></article>)}</div>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-2xl border border-black/5 bg-[#fffdf5] p-5 sm:p-6"><h3 className="text-xs font-black uppercase tracking-widest text-text-accent">The problem</h3><p className="mt-3 text-base font-semibold leading-relaxed text-text-main">{basics.problem}</p></article>
        <article className="rounded-2xl border border-black/5 bg-[#fffdf5] p-5 sm:p-6"><h3 className="text-xs font-black uppercase tracking-widest text-text-accent">Early signal &amp; evidence boundary</h3><p className="mt-3 text-sm leading-relaxed text-text-main/80">{basics.earlySignal}</p><p className="mt-3 border-t border-text-main/10 pt-3 text-xs leading-relaxed text-text-main/60">{basics.evidenceLimit}</p></article>
      </div>
    </section>
  )
}

function ProjectTradeoffs({ projectId }: { projectId: string }) {
  const basics = CASE_STUDY_BASICS[projectId]
  if (!basics) return null
  return (
    <section className="space-y-5 rounded-3xl border border-black/5 bg-[#fffdf5] p-6 sm:p-9" aria-labelledby="tradeoffs-title">
      <div><p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">Product judgment</p><h2 id="tradeoffs-title" className="mt-1 text-3xl font-black tracking-tight text-text-main">Constraints, choices &amp; what comes next</h2></div>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5"><h3 className="text-xs font-black uppercase tracking-widest text-text-main/50">Constraint</h3><p className="mt-3 text-sm leading-relaxed text-text-main/80">{basics.constraint}</p></article>
        <article className="rounded-2xl bg-white p-5"><h3 className="text-xs font-black uppercase tracking-widest text-text-main/50">Design choice &amp; trade-off</h3><p className="mt-3 text-sm font-semibold leading-relaxed text-text-main">{basics.choice}</p><p className="mt-3 text-sm leading-relaxed text-text-main/75">{basics.tradeoff}</p></article>
        <article className="rounded-2xl bg-[#f6edc6] p-5"><h3 className="text-xs font-black uppercase tracking-widest text-text-main/60">2–3 year direction · proposal</h3><p className="mt-3 text-sm leading-relaxed text-text-main/80">{basics.longView}</p></article>
      </div>
    </section>
  )
}

const PROJECT_PROCESS: Record<string, { title: string; phases: { name: string; detail: string; artifact: string }[] }> = {
  habitat: { title: "From household friction to a motivating routine", phases: [
    { name: "Frame", detail: "Define the shared-chore challenge and the people involved.", artifact: "Sprint prompt" },
    { name: "Explore", detail: "Map how chores, ownership, and household progress can be made visible.", artifact: "Opportunity map" },
    { name: "Shape", detail: "Connect room-based tasks to points, customization, and supportive accountability.", artifact: "Core loop" },
    { name: "Prototype", detail: "Build the onboarding, home view, reward shop, and friend map into a coherent concept.", artifact: "Clickable flow" },
    { name: "Present", detail: "Tell the end-to-end product story and deliver the first-place sprint concept.", artifact: "Final pitch" },
  ] },
  "co-connect": { title: "From an early need to a relevant advisor conversation", phases: [
    { name: "Frame", detail: "Recast insurance discovery as an opportunity to help before a need becomes urgent.", artifact: "Challenge framing" },
    { name: "Explore", detail: "Identify why location-only matching can miss goals, preferences, and life stage.", artifact: "Journey insight" },
    { name: "Concept", detail: "Use a client-shared lifestyle quiz to gather context in a low-friction way.", artifact: "Referral model" },
    { name: "Prototype", detail: "Connect quiz responses to a tailored advisor match and a useful advisor handoff.", artifact: "Interactive flow" },
    { name: "Present", detail: "Package the experience as a testable competition concept with a clear value exchange.", artifact: "Team pitch" },
  ] },
  lurn: { title: "From learner needs to a supportive learning loop", phases: [
    { name: "Understand", detail: "Use a learner profile to focus the concept on flexibility, attention, and encouragement.", artifact: "Learner profile" },
    { name: "Structure", detail: "Map student and teacher needs across joining, personalization, learning, and feedback.", artifact: "User flows" },
    { name: "Design", detail: "Break activities into manageable steps and make progress easy to recognize.", artifact: "Screen concepts" },
    { name: "Connect", detail: "Link student work with teacher assignments, feedback, and next activities.", artifact: "Service loop" },
    { name: "Prototype", detail: "Bring the experience together across onboarding, dashboards, and classroom touchpoints.", artifact: "Prototype" },
  ] },
  icmms: { title: "From product complexity to a clear public-facing experience", phases: [
    { name: "Discover", detail: "Understand the product audience, public information, and confidentiality boundaries.", artifact: "Scope & constraints" },
    { name: "Structure", detail: "Organize the information architecture around the questions prospective users need answered.", artifact: "Site structure" },
    { name: "Design", detail: "Set a visual direction and responsive patterns for a complex operational product.", artifact: "Interface system" },
    { name: "Build", detail: "Create the pages, interactions, and interface copy as a cohesive website experience.", artifact: "Responsive site" },
    { name: "Deliver", detail: "Review the end-to-end experience and share a portfolio-safe account of the work.", artifact: "Live experience" },
  ] },
}

function ProjectProcess({ projectId, projectTitle }: { projectId: string; projectTitle: string }) {
  const process = PROJECT_PROCESS[projectId]
  if (!process) return null

  return (
    <section className="overflow-hidden rounded-3xl border border-black/5 bg-[#fffdf5] p-6 shadow-sm sm:p-10" aria-labelledby="process-heading">
      <div className="mb-8 max-w-2xl space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">End-to-end process map</p>
        <h2 id="process-heading" className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">{process.title}</h2>
        <p className="text-sm leading-relaxed text-text-main/65">A concise view of the decisions that connect the starting need to the experience shown in this case study.</p>
      </div>
      <div className="relative">
        <div className="absolute bottom-5 left-[1.1rem] top-5 w-px border-l-2 border-dashed border-text-accent/40 sm:left-6 sm:right-6 sm:top-[1.15rem] sm:h-px sm:w-auto sm:border-b-2 sm:border-l-0" aria-hidden="true" />
        <ol className="relative grid gap-6 sm:grid-cols-5 sm:gap-3">
          {process.phases.map((phase, index) => (
            <li key={phase.name} className="flex gap-4 sm:flex-col sm:gap-4">
              <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-text-accent bg-[#fffdf5] text-xs font-black text-text-accent sm:h-10 sm:w-10">{String(index + 1).padStart(2, "0")}</span>
              <div className="rounded-2xl border border-text-main/10 bg-white/80 p-4 sm:min-h-40 sm:p-4">
                <h3 className="font-black text-text-main">{phase.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-main/70">{phase.detail}</p>
                <span className="mt-4 inline-flex rounded-full bg-brand-yellow/45 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-text-main/70">Focus: {phase.artifact}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-8 rounded-2xl bg-[#f4f0e4] p-5 sm:p-6">
        <svg viewBox="0 0 720 110" role="img" aria-label={`${projectTitle} process map: ${process.phases.map((phase) => phase.name).join(", ")}`} className="h-auto w-full text-text-accent">
          <path d="M28 70 C110 19 160 104 245 54 S370 26 430 65 S550 93 690 35" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="7 8" strokeLinecap="round" />
          {[45, 205, 360, 520, 675].map((x, i) => <g key={x} transform={`translate(${x} ${[61, 57, 49, 67, 39][i]})`}><circle r="15" fill="#fffdf5" stroke="currentColor" strokeWidth="2.5" /><path d="M-5 0h10M0-5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></g>)}
          {process.phases.map((phase, i) => <text key={phase.name} x={[22, 170, 330, 488, 638][i]} y="105" fontSize="11" fill="#233044">{phase.name}</text>)}
        </svg>
      </div>
    </section>
  )
}

function IcmmsStory() {
  return (
    <section className="space-y-7 rounded-3xl border border-[#24547f] bg-[#071827] p-6 text-white shadow-xl sm:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#24d4ff]">NDA-protected case study</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Making complex operations feel clear.</h2>
          <p className="leading-relaxed text-[#b9d2e8]">I created the ICMMS website from start to finish during my Alectify co-op, turning a technically dense product into a focused story and responsive experience.</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#123a5c] text-[#24d4ff]"><LockKeyhole className="h-5 w-5" /></div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5"><Brain className="mb-5 h-5 w-5 text-[#24d4ff]" /><h3 className="mb-2 font-black">The challenge</h3><p className="text-sm leading-relaxed text-[#9fbdd7]">Explain an operations platform with many connected responsibilities without overwhelming first-time visitors or losing enterprise credibility.</p></article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5"><MonitorSmartphone className="mb-5 h-5 w-5 text-[#24d4ff]" /><h3 className="mb-2 font-black">The direction</h3><p className="text-sm leading-relaxed text-[#9fbdd7]">A responsive, high-contrast experience with direct messaging, clear hierarchy, and interface-inspired visuals that make the product feel tangible.</p></article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5"><Sparkles className="mb-5 h-5 w-5 text-[#24d4ff]" /><h3 className="mb-2 font-black">My ownership</h3><p className="text-sm leading-relaxed text-[#9fbdd7]">Information architecture, visual direction, responsive UI, interaction design, prototyping, and all website content from concept through build.</p></article>
      </div>

      <div className="grid gap-5 border-t border-white/10 pt-7 md:grid-cols-[0.8fr_1.2fr]">
        <h3 className="text-2xl font-black tracking-tight">Design principles</h3>
        <ol className="space-y-5">
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#24d4ff] text-xs font-black text-[#071827]">1</span><p className="text-sm leading-relaxed text-[#b9d2e8]"><strong className="text-white">Lead with outcomes.</strong> Explain why the platform matters before introducing operational detail.</p></li>
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4c7cff] text-xs font-black text-white">2</span><p className="text-sm leading-relaxed text-[#b9d2e8]"><strong className="text-white">Create progressive depth.</strong> Let visitors scan the value quickly, then reveal supporting information in manageable layers.</p></li>
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8faeff] text-xs font-black text-[#071827]">3</span><p className="text-sm leading-relaxed text-[#b9d2e8]"><strong className="text-white">Build trust through consistency.</strong> Use a disciplined visual system and precise content to give a complex product a coherent voice.</p></li>
        </ol>
      </div>

      <div className="rounded-2xl border border-[#2d638f] bg-[#0c2942] p-5 sm:p-6">
        <p className="text-sm font-semibold leading-relaxed text-[#cce3f5]"><strong className="text-white">Confidentiality note:</strong> The live link leads to the authenticated product. Production screens, customer data, internal workflows, private metrics, and the working Figma file are intentionally not reproduced here.</p>
      </div>
    </section>
  )
}

const HABITAT_PHOTOS = [
  { src: "/habitat/house-view.png", alt: "HabitAt home dashboard organizing household tasks by room", caption: "The shared home makes tasks and progress visible" },
  { src: "/habitat/onboarding.png", alt: "HabitAt onboarding screen introducing the household task concept", caption: "A quick introduction to the shared routine" },
  { src: "/habitat/shop-view.png", alt: "HabitAt rewards shop with furniture available for points", caption: "Complete tasks to unlock home customizations" },
  { src: "/habitat/friend-map.png", alt: "HabitAt friend map for supportive social accountability", caption: "A social layer adds encouragement" },
]

function HabitAtPhotoCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#fff0a3] shadow-xl">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {HABITAT_PHOTOS.map((photo) => (
            <CarouselItem key={photo.src} className="pl-0">
              <figure className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#fff0a3] p-6 sm:aspect-[2/1] sm:p-10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-contain"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-14 text-sm font-bold text-white sm:px-8 sm:pb-7">
                  {photo.caption}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:left-6" />
        <CarouselNext className="right-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:right-6" />
      </Carousel>
    </section>
  )
}

function HabitAtStory() {
  return (
    <section className="space-y-6 rounded-3xl border border-black/5 bg-white/60 p-6 shadow-xs sm:p-10">
      <div className="space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">Case study</p>
        <h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">Turn a shared space into shared momentum.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <StoryCard icon={<ClipboardCheck className="h-5 w-5" />} title="The friction">Household tasks are easy to overlook when ownership, progress, and priorities are scattered or invisible.</StoryCard>
        <StoryCard icon={<Sparkles className="h-5 w-5" />} title="The idea">Represent chores inside a colourful home so each room becomes an immediate, approachable task list.</StoryCard>
        <StoryCard icon={<Handshake className="h-5 w-5" />} title="The motivation">Reward progress with points, room upgrades, and a social layer that makes accountability feel encouraging.</StoryCard>
      </div>
      <div className="grid gap-8 border-t border-text-main/10 pt-7 md:grid-cols-[0.8fr_1.2fr]">
        <h3 className="text-2xl font-black tracking-tight text-text-main">How HabitAt works</h3>
        <ol className="space-y-5">
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffe255] text-xs font-black text-text-main">1</span><p className="text-sm leading-relaxed text-text-main/80"><strong className="text-text-main">See the whole home.</strong> Room-based task counts show exactly where attention is needed.</p></li>
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#a274f5] text-xs font-black text-white">2</span><p className="text-sm leading-relaxed text-text-main/80"><strong className="text-text-main">Complete tasks and earn points.</strong> Everyday progress produces a clear, positive reward.</p></li>
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#baf97f] text-xs font-black text-text-main">3</span><p className="text-sm leading-relaxed text-text-main/80"><strong className="text-text-main">Make the home your own.</strong> Points unlock furniture while the friend map adds light social accountability.</p></li>
        </ol>
      </div>
      <div className="rounded-2xl bg-[#214e70] p-5 text-white sm:p-6"><p className="text-sm font-semibold leading-relaxed">The final concept combines practical task management with a playful reward loop and earned first place at the design competition.</p></div>
    </section>
  )
}

const HABITAT_JOURNEY = [
  { number: "01", title: "Welcome people into the idea", text: "A bold house motif and one clear action make the playful premise instantly understandable.", image: "/habitat/onboarding.png", alt: "HabitAt welcome screen", tone: "bg-[#fff0a3]" },
  { number: "02", title: "Make work spatial", text: "Tasks are grouped by room inside the home, replacing a flat chore list with a quick visual overview.", image: "/habitat/house-view.png", alt: "HabitAt room-based task dashboard", tone: "bg-[#f3d7df]" },
  { number: "03", title: "Reward the routine", text: "Completed tasks earn points that can be exchanged for furniture, creating a visible loop between effort and progress.", image: "/habitat/shop-view.png", alt: "HabitAt furniture reward shop", tone: "bg-[#d9f3ff]" },
  { number: "04", title: "Add friendly accountability", text: "The friend map makes participation feel social without turning the experience into a competitive leaderboard.", image: "/habitat/friend-map.png", alt: "HabitAt social friend map", tone: "bg-[#dfffc2]" },
]

function HabitAtVisualJourney() {
  return (
    <section className="space-y-8 pt-4">
      <div className="flex items-end justify-between gap-6">
        <div><p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-text-accent">Product journey</p><h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">A simple loop for seeing, doing, and celebrating.</h2></div>
        <span className="hidden text-sm font-semibold text-text-main/55 sm:block">04 moments</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {HABITAT_JOURNEY.map((stage) => (
          <article key={stage.number} className={`group overflow-hidden rounded-3xl border border-black/5 ${stage.tone} shadow-sm`}>
            <div className="flex items-start justify-between p-5 sm:p-6"><span className="text-xs font-black tracking-[0.2em] text-text-accent">{stage.number}</span><span className="text-xs font-bold uppercase tracking-wider text-text-main/45">HabitAt</span></div>
            <div className="flex h-72 items-center justify-center px-6 sm:h-80 sm:px-10"><img src={stage.image} alt={stage.alt} className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div>
            <div className="bg-[#fdfcf5]/90 p-5 sm:p-6"><h3 className="text-xl font-black tracking-tight text-text-main">{stage.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-main/75">{stage.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

const LURN_PHOTOS = [
  { src: "/lurn/student-dashboard.png", alt: "LURN student dashboard with next activities and subject choices", caption: "Student dashboard: progress and a clear next step" },
  { src: "/lurn/learning-style-quiz.png", alt: "LURN learner preference setup screen", caption: "Let learners shape how they engage" },
  { src: "/lurn/mobile-dashboard.png", alt: "LURN mobile learning dashboard", caption: "Keep learning accessible across screen sizes" },
]

function LurnPhotoCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#fff8ed] shadow-xl">
      <Carousel opts={{ loop: true }} className="w-full"><CarouselContent className="ml-0">{LURN_PHOTOS.map((photo) => <CarouselItem key={photo.src} className="pl-0"><figure className="relative flex aspect-[16/10] w-full flex-col items-center justify-center overflow-hidden bg-[#fff8ed] p-5 sm:aspect-[2/1] sm:p-8"><img src={photo.src} alt={photo.alt} className="h-full min-h-0 w-full flex-1 object-contain" /><figcaption className="pt-2 text-center text-sm font-bold text-text-main/75">{photo.caption}</figcaption></figure></CarouselItem>)}</CarouselContent><CarouselPrevious className="left-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:left-6" /><CarouselNext className="right-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:right-6" /></Carousel>
    </section>
  )
}

function LurnStory() {
  return (
    <section className="space-y-6 rounded-3xl border border-black/5 bg-white/60 p-6 shadow-xs sm:p-10">
      <div className="space-y-2"><p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">Case study</p><h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">Learning that meets every child where they are.</h2></div>
      <div className="grid gap-5 md:grid-cols-3">
        <StoryCard icon={<Accessibility className="h-5 w-5" />} title="The problem">A fixed pace or format can make it harder for some learners to stay engaged and understand what to do next.</StoryCard>
        <StoryCard icon={<Brain className="h-5 w-5" />} title="The learner">Ginny is a Grade 4 student who benefits from short, gamified sessions and prefers text- or audio-based learning.</StoryCard>
        <StoryCard icon={<MonitorSmartphone className="h-5 w-5" />} title="The response">LURN connects short, flexible activities with visible progress and teacher feedback across the learning journey.</StoryCard>
      </div>
      <div className="rounded-2xl bg-text-main p-5 text-brand-yellow sm:p-6"><p className="text-sm font-semibold leading-relaxed">The visual system uses bright, friendly shapes and vibrant colours to make individualized learning feel encouraging, playful, and approachable.</p></div>
    </section>
  )
}

const LURN_JOURNEY = [
  { number: "01", title: "Start with the learner", text: "We designed around a clear learner profile: a child who needs flexibility, focus support, and a sense of reward while learning.", image: "/lurn/prototype-overview.png", alt: "LURN prototype overview", tone: "bg-[#f8dfba]" },
  { number: "02", title: "Personalize the entry point", text: "Students join a class, identify their role, and complete a learning-style check so the experience can begin with context.", image: "/lurn/role-selection.png", alt: "LURN teacher and student role selection", tone: "bg-[#dfe8c0]" },
  { number: "03", title: "Make progress visible", text: "A playful dashboard turns upcoming work into clear, manageable choices and helps learners pick up exactly where they left off.", image: "/lurn/student-dashboard.png", alt: "LURN student learning dashboard", tone: "bg-[#c7dceb]" },
  { number: "04", title: "Support learning as a loop", text: "Student and teacher flows connect assignments, feedback, reminders, and the next recommended activity without losing the human touch.", image: "/lurn/teacher-flow.png", alt: "LURN teacher user flow", tone: "bg-[#e9d5ec]" },
]

function LurnVisualJourney() {
  return (
    <section className="space-y-8 pt-4"><div className="flex items-end justify-between gap-6"><div><p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-text-accent">Ideation &amp; visual journey</p><h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">A learning experience built around attention, agency, and joy.</h2></div><span className="hidden text-sm font-semibold text-text-main/55 sm:block">04 stages</span></div><div className="grid gap-5 md:grid-cols-2">{LURN_JOURNEY.map((stage) => <article key={stage.number} className={`group overflow-hidden rounded-3xl border border-black/5 ${stage.tone} shadow-sm`}><div className="flex items-start justify-between p-5 sm:p-6"><span className="text-xs font-black tracking-[0.2em] text-text-accent">{stage.number}</span><span className="text-xs font-bold uppercase tracking-wider text-text-main/45">LURN</span></div><div className="flex h-64 items-center justify-center px-6 sm:h-72 sm:px-10"><img src={stage.image} alt={stage.alt} className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div><div className="bg-[#fdfcf5]/90 p-5 sm:p-6"><h3 className="text-xl font-black tracking-tight text-text-main">{stage.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-main/75">{stage.text}</p></div></article>)}</div></section>
  )
}

const CO_CONNECT_PHOTOS = [
  { src: "/Midnight1_transparent.png", alt: "Co-Connect advisor discovery landing page shown in a laptop mockup", caption: "Introduce advisor matching through a clear, low-pressure invitation" },
  { src: "/Midnight_transparent.png", alt: "Co-Connect advisor match results shown in a laptop mockup", caption: "Present advisor matches with a personal connection" },
]

function CoConnectPhotoCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#e8f1f8] shadow-xl">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {CO_CONNECT_PHOTOS.map((photo) => (
            <CarouselItem key={photo.src} className="pl-0">
              <figure className="relative flex aspect-[16/10] w-full flex-col items-center justify-center overflow-hidden bg-[#e8f1f8] p-5 sm:aspect-[2/1] sm:p-8">
                <img src={photo.src} alt={photo.alt} className="h-full min-h-0 w-full flex-1 object-contain" />
                <figcaption className="pt-2 text-center text-sm font-bold text-text-main/75">{photo.caption}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:left-6" />
        <CarouselNext className="right-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:right-6" />
      </Carousel>
    </section>
  )
}

function CoConnectStory() {
  return (
    <section className="space-y-6 rounded-3xl border border-black/5 bg-white/60 p-6 shadow-xs sm:p-10">
      <div className="space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">Case study</p>
        <h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">A warmer start to the advisor relationship.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <StoryCard icon={<TrendingUp className="h-5 w-5" />} title="The opportunity">How might Co-operators identify leads before people know to ask for help?</StoryCard>
        <StoryCard icon={<Handshake className="h-5 w-5" />} title="The friction">Early opportunities are difficult to spot, while advisor matching is typically based on location alone.</StoryCard>
        <StoryCard icon={<ClipboardCheck className="h-5 w-5" />} title="The insight">People can avoid property-and-casualty insurance or wealth advice until a need feels immediate and personal.</StoryCard>
      </div>

      <div className="grid gap-8 border-t border-text-main/10 pt-7 md:grid-cols-[0.8fr_1.2fr]">
        <h3 className="text-2xl font-black tracking-tight text-text-main">How Co-Connect works</h3>
        <ol className="space-y-5">
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-black text-text-main">1</span><p className="text-sm leading-relaxed text-text-main/80"><strong className="text-text-main">Share a quick quiz.</strong> A current client sends a short, insightful quiz to someone in their network.</p></li>
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-black text-text-main">2</span><p className="text-sm leading-relaxed text-text-main/80"><strong className="text-text-main">Match the friend with an advisor.</strong> Their answers help connect them with someone suited to their needs and preferences.</p></li>
          <li className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-black text-text-main">3</span><p className="text-sm leading-relaxed text-text-main/80"><strong className="text-text-main">Give the advisor context.</strong> The advisor receives useful insight into what the prospective client may need before the first conversation.</p></li>
        </ol>
      </div>

      <div className="rounded-2xl bg-text-main p-5 text-brand-yellow sm:p-6"><p className="text-sm font-semibold leading-relaxed">The concept hypothesis: an easier referral and better-informed first conversation could help Co-operators build relationships earlier. The sprint prototype made that service idea concrete; validating its impact would be the next step.</p></div>
    </section>
  )
}

const CO_CONNECT_JOURNEY = [
  {
    number: "01",
    title: "Frame the opportunity",
    text: "We began with a simple challenge: make it easier to recognize a need before a prospective client has to name it themselves.",
    image: "/competition/co-connect-workshop.jpg",
    alt: "Co-Connect team collaborating during the competition",
    tone: "bg-[#e9f0d4]",
  },
  {
    number: "02",
    title: "Turn a referral into a conversation",
    text: "The core concept became a lightweight quiz, shared by an existing client, that captures needs and preferences without feeling like a sales form.",
    image: "/co-connect/flow.svg",
    alt: "Co-Connect referral, quiz, advisor match, and handoff flow diagram",
    tone: "bg-[#fde768]",
  },
  {
    number: "03",
    title: "Make the match feel personal",
    text: "The resulting experience connects the friend with an advisor who is a stronger fit, then gives the advisor useful context for a more relevant first outreach.",
    image: "/Midnight1_transparent.png",
    alt: "Co-Connect mobile prototype screens",
    tone: "bg-[#c7dceb]",
  },
  {
    number: "04",
    title: "Prototype the handoff",
    text: "We translated the journey into screens that make each next step obvious: take the quiz, receive a match, and help the advisor arrive informed.",
    image: "/Midnight_transparent.png",
    alt: "Co-Connect advisor matching prototype screens",
    tone: "bg-[#f1c2b7]",
  },
]

function CoConnectVisualJourney() {
  return (
    <section className="space-y-8 pt-4">
      <div className="flex items-end justify-between gap-6">
        <div><p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-text-accent">Ideation &amp; visual journey</p><h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">From a difficult-to-see lead to a clear, human flow.</h2></div>
        <span className="hidden text-sm font-semibold text-text-main/55 sm:block">04 stages</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {CO_CONNECT_JOURNEY.map((stage) => (
          <article key={stage.number} className={`group overflow-hidden rounded-3xl border border-black/5 ${stage.tone} shadow-sm`}>
            <div className="flex items-start justify-between p-5 sm:p-6"><span className="text-xs font-black tracking-[0.2em] text-text-accent">{stage.number}</span><span className="text-xs font-bold uppercase tracking-wider text-text-main/45">Co-Connect</span></div>
            <div className="flex h-64 items-center justify-center px-6 sm:h-72 sm:px-10"><img src={stage.image} alt={stage.alt} className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div>
            <div className="bg-[#fdfcf5]/90 p-5 sm:p-6"><h3 className="text-xl font-black tracking-tight text-text-main">{stage.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-main/75">{stage.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

function StoryCard({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return <article className="rounded-2xl border border-text-main/10 bg-[#fdfcf5] p-5"><div className="mb-5 text-text-accent">{icon}</div><h3 className="mb-2 text-base font-black text-text-main">{title}</h3><p className="text-sm leading-relaxed text-text-main/75">{children}</p></article>
}
