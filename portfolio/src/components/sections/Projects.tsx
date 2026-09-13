import * as React from "react"
import { Link } from "react-router-dom"
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious, type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, X, ZoomIn, ArrowRight, LockKeyhole } from "lucide-react"
import CloverSmall from "@/assets/clover-small.svg?react"
import { PROJECTS, type Project } from "@/data/projects"

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [zoomedImage, setZoomedImage] = React.useState<{ url: string; alt: string } | null>(null)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="portfolio" className="w-full pt-16 pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-[48px] sm:text-[64px] font-black text-text-main leading-none">
            Past Projects<span className="text-text-accent">.</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-main/75 text-base sm:text-lg font-medium leading-relaxed">
            A selection of recent work across design, UX research, and creative technology.
          </p>
        </div>

        <div className="relative overflow-visible">
          <Carousel
            setApi={setApi}
            className="w-full max-w-2xl mx-auto overflow-visible"
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent className="-ml-4 overflow-visible">
              {PROJECTS.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 basis-[88%] sm:basis-[75%] md:basis-[560px] overflow-visible"
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className={`group cursor-pointer relative flex flex-col items-center pt-4 pb-10 overflow-visible transition-all duration-500 ease-in-out ${
                      current === index ? 'z-30 scale-100 opacity-100' : 'z-20 scale-90 opacity-50'
                    }`}
                  >
                    <div className={`relative w-full rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1 aspect-[4/3] flex items-center justify-center p-6 ${project.color}`}>
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="w-full h-full object-contain"
                      />
                      <CloverSmall className="absolute top-4 right-4 w-7 h-7 opacity-20 text-text-main group-hover:rotate-45 transition-transform duration-500" />
                    </div>

                    <div className="mt-[-56px] z-10 w-[90%] p-5 sm:p-6 rounded-2xl shadow-xl space-y-2.5 bg-white/95 backdrop-blur-md border border-black/5">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-text-accent block">
                            {project.category}{project.confidential ? " · NDA" : ""}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-text-main tracking-tight group-hover:text-text-accent transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.15em] text-text-main/40 group-hover:text-text-accent transition-colors shrink-0 pt-1">
                          View →
                        </span>
                      </div>
                      <p className="text-text-main/75 font-medium text-sm leading-snug">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-main/10 text-text-main hover:bg-text-accent hover:text-white border-none rounded-full px-3 py-0.5 text-[11px] font-bold transition-all">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex absolute top-[42%] -translate-y-1/2 -left-6 bg-brand-yellow text-text-main border-none shadow-lg hover:scale-110 hover:bg-brand-yellow size-11 z-40 transition-all cursor-pointer" />
            <CarouselNext className="hidden sm:flex absolute top-[42%] -translate-y-1/2 -right-6 bg-brand-yellow text-text-main border-none shadow-lg hover:scale-110 hover:bg-brand-yellow size-11 z-40 transition-all cursor-pointer" />
          </Carousel>

          <div className="flex justify-center items-center gap-2 mt-5">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${current === i ? "w-7 bg-text-main" : "w-2 bg-text-main/25 hover:bg-text-main/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main rounded-full font-bold px-7 h-10 shadow-md">
              <Link to="/projects" className="inline-flex items-center gap-2">
                <span>View All Projects Archive</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] lg:max-w-5xl w-full h-[92svh] flex flex-col overflow-hidden rounded-3xl bg-[#fdfcf5] border-none p-0 shadow-2xl [&>button]:hidden">
          {selectedProject && (
            <div className="flex flex-col flex-1 min-h-0 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-[100] p-2 rounded-full bg-white/70 hover:bg-white transition-all backdrop-blur-md shadow-md cursor-pointer"
              >
                <X className="w-5 h-5 text-text-main stroke-[2.5]" />
              </button>

              <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                <div className={`relative w-full h-[220px] sm:h-[320px] flex items-center justify-center p-8 sm:p-12 shrink-0 ${selectedProject.color}`}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt || selectedProject.title}
                    className="max-h-full max-w-full drop-shadow-xl object-contain"
                  />
                </div>

                <div className="p-6 sm:p-10 lg:p-14 space-y-8">
                  <DialogHeader className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-text-accent text-white border-none px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                        {selectedProject.category}
                      </Badge>
                      {selectedProject.confidential && (
                        <Badge className="gap-1.5 border-none bg-text-main px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-brand-yellow">
                          <LockKeyhole className="h-3 w-3" /> NDA-protected
                        </Badge>
                      )}
                      {selectedProject.tags.map(tag => (
                        <Badge key={tag} className="bg-text-main/10 text-text-main border-none px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <DialogTitle className="text-3xl sm:text-5xl font-black text-text-main tracking-tight">
                      {selectedProject.title}
                    </DialogTitle>
                    {selectedProject.role && (
                      <p className="text-sm font-bold text-text-accent">
                        Role: {selectedProject.role}
                      </p>
                    )}
                    <DialogDescription className="text-base sm:text-lg font-medium text-text-main/80 leading-relaxed pt-2">
                      {selectedProject.longDescription}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-main/40">Visual Journey</h4>
                      <div className="h-px flex-1 bg-text-main/10" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setZoomedImage(img)}
                          className="group relative aspect-video bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-zoom-in"
                        >
                          <img
                            src={img.url}
                            alt={img.alt || `Process ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white/90 p-2.5 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform">
                              <ZoomIn className="w-5 h-5 text-text-main" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-text-main/10 flex flex-wrap gap-3">
                    {selectedProject.link && (
                      <Button asChild className="bg-text-main text-brand-yellow hover:bg-text-main/90 px-6 h-11 rounded-full font-bold gap-2 text-sm shadow-md">
                        <a href={selectedProject.link} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} />
                          {selectedProject.linkText || "View Project"}
                        </a>
                      </Button>
                    )}
                    {selectedProject.secondaryLink && (
                      <Button asChild variant="outline" className="border-text-main/20 text-text-main hover:bg-text-main hover:text-brand-yellow px-6 h-11 rounded-full font-bold gap-2 text-sm">
                        <a href={selectedProject.secondaryLink} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} />
                          {selectedProject.secondaryLinkText || "View More"}
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" className="border-text-main/20 text-text-main hover:bg-text-main hover:text-brand-yellow px-6 h-11 rounded-full font-bold text-sm">
                      <Link to={`/projects/${selectedProject.id}`}>
                        Full Case Study Page →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
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
                alt={zoomedImage.alt || "Zoomed"}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl animate-in fade-in zoom-in-95 duration-300"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
