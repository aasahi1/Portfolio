import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { PROJECTS } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ExternalLink, ArrowLeft, ZoomIn, X, Clock, User, Wrench, Sparkles, ClipboardCheck, Handshake, TrendingUp, Accessibility, Brain, MonitorSmartphone, LockKeyhole } from "lucide-react"
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
          <Link to="/projects">← Back to All Projects</Link>
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

        {/* Project Meta Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-black/5 shadow-xs">
          {project.role && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/40 flex items-center justify-center text-text-main shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-main/50 block">Role</span>
                <p className="text-sm font-bold text-text-main">{project.role}</p>
              </div>
            </div>
          )}

          {project.timeline && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/40 flex items-center justify-center text-text-main shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-main/50 block">Timeline</span>
                <p className="text-sm font-bold text-text-main">{project.timeline}</p>
              </div>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/40 flex items-center justify-center text-text-main shrink-0 mt-0.5">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-main/50 block">Tools</span>
                <p className="text-sm font-bold text-text-main">{project.tools.join(", ")}</p>
              </div>
            </div>
          )}
        </div>

        {/* Content Header & Description */}
        <div className="space-y-6 bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-text-main/10 text-text-main border-none px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-text-main tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-text-main/85 leading-relaxed">
            {project.id === "habitat"
              ? "A first-place design sprint concept that makes shared household tasks easier to see, complete, and celebrate together."
              : project.id === "icmms"
                ? "An enterprise operations website I took from blank canvas to responsive experience—strategy, structure, interface, interactions, and content included."
              : project.id === "co-connect"
              ? "A referral-led advisor-matching experience for Co-operators that surfaces needs early and supports more relevant first conversations."
              : project.id === "lurn"
                ? "An inclusive learning platform that adapts activities to each child’s learning style, helping students build confidence through accessible, playful, and personalized learning."
                : project.longDescription}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.link && (
              <Button asChild className="bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main px-8 h-12 rounded-full font-black gap-3 text-base shadow-lg transition-all hover:-translate-y-0.5">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {project.linkText || "View Live Project / Repository"}
                </a>
              </Button>
            )}
            {project.secondaryLink && (
              <Button asChild variant="outline" className="border-text-main/20 bg-white/70 text-text-main hover:bg-text-main hover:text-brand-yellow px-8 h-12 rounded-full font-black gap-3 text-base shadow-sm transition-all hover:-translate-y-0.5">
                <a href={project.secondaryLink} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {project.secondaryLinkText || "View More"}
                </a>
              </Button>
            )}
          </div>
        </div>

        {project.id === "habitat" && <HabitAtStory />}
        {project.id === "habitat" && <HabitAtVisualJourney />}
        {project.id === "icmms" && <IcmmsStory />}
        {project.id === "co-connect" && <CoConnectStory />}
        {project.id === "co-connect" && <CoConnectVisualJourney />}
        {project.id === "lurn" && <LurnStory />}
        {project.id === "lurn" && <LurnVisualJourney />}

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
            <Link to="/projects">← All Projects</Link>
          </Button>
          <Button asChild className="bg-text-accent text-white hover:bg-text-accent/90 rounded-full font-bold px-7 h-11 shadow-md">
            <Link to="/contact">Get in Touch →</Link>
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
  { src: "/habitat/first-place.jpg", alt: "HabitAt team receiving first place at the design competition", caption: "HabitAt wins first place" },
  { src: "/habitat/house-view.png", alt: "HabitAt home dashboard with room-based tasks", caption: "A shared home makes every task visible" },
  { src: "/habitat/shop-view.png", alt: "HabitAt points-based furniture shop", caption: "Points turn completed tasks into rewards" },
  { src: "/habitat/friend-map.png", alt: "HabitAt friend map", caption: "A friendly social layer keeps motivation close" },
]

function HabitAtPhotoCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#fff0a3] shadow-xl">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {HABITAT_PHOTOS.map((photo, index) => (
            <CarouselItem key={photo.src} className="pl-0">
              <figure className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#fff0a3] p-6 sm:aspect-[2/1] sm:p-10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`h-full w-full ${index === 0 ? "object-cover" : "object-contain"}`}
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
      <div className="rounded-2xl bg-[#214e70] p-5 text-white sm:p-6"><p className="text-sm font-semibold leading-relaxed">The final concept combines practical task management with a playful reward loop—and earned first place at the design competition.</p></div>
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
  { src: "/lurn/competition-presentation.jpg", alt: "LURN team presenting during the competition", caption: "Presenting LURN at the competition" },
  { src: "/lurn/competition-team.jpg", alt: "LURN competition participants", caption: "Sharing ideas with fellow participants" },
  { src: "/lurn/competition-event.jpg", alt: "Competition attendees gathered in a lecture hall", caption: "A full room of creative problem-solvers" },
  { src: "/lurn/competition-group.jpg", alt: "LURN team at the competition event", caption: "The LURN team after the showcase" },
]

function LurnPhotoCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-text-main shadow-xl">
      <Carousel opts={{ loop: true }} className="w-full"><CarouselContent className="ml-0">{LURN_PHOTOS.map((photo) => <CarouselItem key={photo.src} className="pl-0"><figure className="relative aspect-[16/10] w-full overflow-hidden bg-black sm:aspect-[2/1]"><img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-14 text-sm font-bold text-white sm:px-8 sm:pb-7">{photo.caption}</figcaption></figure></CarouselItem>)}</CarouselContent><CarouselPrevious className="left-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:left-6" /><CarouselNext className="right-4 border-none bg-white/90 text-text-main shadow-lg hover:bg-white sm:right-6" /></Carousel>
    </section>
  )
}

function LurnStory() {
  return (
    <section className="space-y-6 rounded-3xl border border-black/5 bg-white/60 p-6 shadow-xs sm:p-10">
      <div className="space-y-2"><p className="text-xs font-black uppercase tracking-[0.24em] text-text-accent">Case study</p><h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">Learning that meets every child where they are.</h2></div>
      <div className="grid gap-5 md:grid-cols-3">
        <StoryCard icon={<Accessibility className="h-5 w-5" />} title="The problem">Funding shortages can delay or reduce access to special-education services, leaving many children without timely, tailored support.</StoryCard>
        <StoryCard icon={<Brain className="h-5 w-5" />} title="The learner">Ginny is a Grade 4 student who benefits from short, gamified sessions and prefers text- or audio-based learning.</StoryCard>
        <StoryCard icon={<MonitorSmartphone className="h-5 w-5" />} title="The response">LURN is an inclusive learning app that adapts activities to each child’s learning style and works across devices.</StoryCard>
      </div>
      <div className="rounded-2xl bg-text-main p-5 text-brand-yellow sm:p-6"><p className="text-sm font-semibold leading-relaxed">The visual system uses bright, friendly shapes and vibrant colours to make individualized learning feel encouraging, playful, and approachable.</p></div>
    </section>
  )
}

const LURN_JOURNEY = [
  { number: "01", title: "Start with the learner", text: "We designed around a clear learner profile: a child who needs flexibility, focus support, and a sense of reward while learning.", image: "/lurn/prototype-overview.png", alt: "LURN prototype overview", tone: "bg-[#f8dfba]" },
  { number: "02", title: "Personalize the entry point", text: "Students join a class, identify their role, and complete a learning-style check so the experience can begin with context.", image: "/lurn/role-selection.png", alt: "LURN teacher and student role selection", tone: "bg-[#dfe8c0]" },
  { number: "03", title: "Make progress visible", text: "A playful dashboard turns upcoming work into clear, manageable choices and helps learners pick up exactly where they left off.", image: "/lurn/student-dashboard.png", alt: "LURN student learning dashboard", tone: "bg-[#c7dceb]" },
  { number: "04", title: "Support learning as a loop", text: "Student and teacher flows connect assignments, feedback, reminders, and the next recommended activity—without losing the human touch.", image: "/lurn/teacher-flow.png", alt: "LURN teacher user flow", tone: "bg-[#e9d5ec]" },
]

function LurnVisualJourney() {
  return (
    <section className="space-y-8 pt-4"><div className="flex items-end justify-between gap-6"><div><p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-text-accent">Ideation &amp; visual journey</p><h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">A learning experience built around attention, agency, and joy.</h2></div><span className="hidden text-sm font-semibold text-text-main/55 sm:block">04 stages</span></div><div className="grid gap-5 md:grid-cols-2">{LURN_JOURNEY.map((stage) => <article key={stage.number} className={`group overflow-hidden rounded-3xl border border-black/5 ${stage.tone} shadow-sm`}><div className="flex items-start justify-between p-5 sm:p-6"><span className="text-xs font-black tracking-[0.2em] text-text-accent">{stage.number}</span><span className="text-xs font-bold uppercase tracking-wider text-text-main/45">LURN</span></div><div className="flex h-64 items-center justify-center px-6 sm:h-72 sm:px-10"><img src={stage.image} alt={stage.alt} className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div><div className="bg-[#fdfcf5]/90 p-5 sm:p-6"><h3 className="text-xl font-black tracking-tight text-text-main">{stage.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-main/75">{stage.text}</p></div></article>)}</div></section>
  )
}

const CO_CONNECT_PHOTOS = [
  { src: "/competition/co-connect-workshop.jpg", alt: "Co-Connect team collaborating during the competition", caption: "Collaborating during the UXperience competition" },
  { src: "/competition/co-connect-event.jpg", alt: "Competition participants gathered at the event", caption: "A day of ideas, critique, and collaboration" },
  { src: "/competition/co-connect-team.jpg", alt: "Co-Connect team with competition mentors", caption: "The Co-Connect team with mentors" },
]

function CoConnectPhotoCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-text-main shadow-xl">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {CO_CONNECT_PHOTOS.map((photo) => (
            <CarouselItem key={photo.src} className="pl-0">
              <figure className="relative aspect-[16/10] w-full overflow-hidden bg-black sm:aspect-[2/1]">
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-14 text-sm font-bold text-white sm:px-8 sm:pb-7">{photo.caption}</figcaption>
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
        <h2 className="text-3xl font-black tracking-tight text-text-main sm:text-4xl">Smarter connections. Lower claims. Better outcomes.</h2>
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

      <div className="rounded-2xl bg-text-main p-5 text-brand-yellow sm:p-6"><p className="text-sm font-semibold leading-relaxed">Co-Connect pairs a digital referral flow with offline touchpoints to help advisors recognize opportunities earlier, build more relevant relationships, and support lower-claim, more profitable outcomes.</p></div>
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
    image: "/Quiz.svg",
    alt: "Co-Connect lifestyle quiz flow diagram",
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
