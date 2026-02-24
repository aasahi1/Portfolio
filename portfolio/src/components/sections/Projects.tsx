import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, X, ZoomIn } from "lucide-react"
import CloverSmall from "@/assets/clover-small.svg?react"

const PROJECTS = [
  {
    title: "LURN",
    description: "Microlearning product with community-driven feedback loops.",
    longDescription: "LURN is a dedicated microlearning platform designed to bridge the gap between formal education and daily skill retention. It features a streak-based learning system and peer-to-peer feedback modules to ensure high engagement.",
    tags: ["UX", "Research", "Product"],
    image: "/src/assets/project-lurn.png",
    gallery: ["/src/assets/project-lurn.png", "/src/assets/project-lurn.png", "/src/assets/project-lurn.png"],
    color: "bg-[#fde768]",
    link: "https://example.com",
  },
  {
    title: "HealthConnect",
    description: "Sun Life integration for personalized wellness tracking.",
    longDescription: "A redesign of the Sun Life health portal focusing on accessibility and proactive wellness. We simplified the claims process and added a personalized health dashboard.",
    tags: ["UX", "FinTech", "Health"],
    image: "/src/assets/project-lurn.png",
    gallery: ["/src/assets/project-lurn.png", "/src/assets/project-lurn.png"],
    color: "bg-[#becb6b]",
    link: "https://example.com",
  },
  {
    title: "EcoTrack",
    description: "Sustainable living assistant with real-time carbon tracking.",
    longDescription: "EcoTrack uses real-time data to help users visualize their carbon footprint. By scanning receipts and tracking utility usage, the app provides actionable steps to reduce environmental impact.",
    tags: ["Mobile", "AI", "SaaS"],
    image: "/src/assets/project-lurn.png",
    gallery: ["/src/assets/project-lurn.png"],
    color: "bg-[#fde768]",
    link: "https://example.com",
  },
  {
    title: "FinFlow",
    description: "Next-gen banking interface for seamless wealth management.",
    longDescription: "FinFlow reimagines digital banking for Gen-Z users. It focuses on high-visual clarity and automated 'round-up' savings features, making investment accessible to everyone.",
    tags: ["FinTech", "UI", "Web"],
    image: "/src/assets/project-lurn.png",
    gallery: ["/src/assets/project-lurn.png"],
    color: "bg-[#becb6b]",
    link: "https://example.com",
  }
]

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [selectedProject, setSelectedProject] = React.useState<typeof PROJECTS[0] | null>(null)
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="portfolio" className="w-full pt-12 pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20">
        
        <div className="text-center mb-6">
          <h2 className="text-[64px] font-black text-text-main leading-none mb-4 group cursor-default">
            Past Projects<span className="text-text-accent">.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-main/70 text-lg font-medium leading-relaxed">
            A selection of my recent work showcasing various design challenges and solutions.
          </p>
        </div>

        <div className="relative overflow-visible">
          <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto overflow-visible" opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-6 sm:-ml-10 overflow-visible">
              {PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-6 sm:pl-10 basis-full sm:basis-[500px] md:basis-[600px] overflow-visible">
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className={`group cursor-pointer relative flex flex-col items-center pt-4 pb-12 overflow-visible transition-all duration-700 ease-in-out ${
                      current === index ? 'z-30 scale-100 opacity-100' : 'z-20 scale-75 sm:scale-90 opacity-40 sm:opacity-60'
                    }`}
                  >
                    <div className="relative w-full max-w-[506px] aspect-[4/3] rounded-[24px] overflow-hidden bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1">
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain p-8" />
                      <CloverSmall className="absolute top-6 right-6 w-10 h-10 opacity-20 text-text-main" />
                    </div>

                    <div className={`mt-[-80px] z-10 w-[90%] sm:w-[594px] p-8 rounded-[24px] shadow-2xl space-y-3 border border-black/5 ${project.color}`}>
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-black text-text-main tracking-tight group-hover:text-text-accent transition-colors duration-300">{project.title}</h3>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main/30 group-hover:text-text-accent transition-colors">
                          Open Details →
                        </span>
                      </div>
                      <p className="text-text-main/80 font-medium text-base leading-tight">{project.description}</p>
                      <div className="flex gap-2 pt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-main/10 text-text-main hover:bg-text-accent hover:text-white border-none rounded-full px-4 py-1 text-[12px] font-bold transition-all">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-12 bg-brand-yellow text-text-main border-none shadow-xl hover:scale-110 hover:bg-brand-yellow size-14 z-40 transition-all" />
            <CarouselNext className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-12 bg-brand-yellow text-text-main border-none shadow-xl hover:scale-110 hover:bg-brand-yellow size-14 z-40 transition-all" />
          </Carousel>
        </div>
      </div>

      {/* Main Project Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {/* We use h-[90vh] and flex-col to fix the window size */}
        <DialogContent className="max-w-[90vw] lg:max-w-6xl w-full h-[90vh] flex flex-col overflow-hidden rounded-[32px] bg-[#fdfcf5] border-none p-0 shadow-2xl [&>button]:hidden">
          {selectedProject && (
            <div className="flex flex-col flex-1 min-h-0 relative">
              
              {/* STICKY CLOSE BUTTON: Pinned to the top-right of the window shell */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-[100] p-2 rounded-full bg-white/40 hover:bg-white/60 transition-all backdrop-blur-md shadow-lg"
              >
                <X className="w-6 h-6 text-text-main stroke-[3]" />
              </button>
              
              {/* SCROLLABLE AREA: This container handles all the movement */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                
                {/* Image Header */}
                <div className={`relative w-full h-[300px] sm:h-[400px] flex items-center justify-center p-12 shrink-0 ${selectedProject.color}`}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="max-h-full max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] object-contain" 
                  />
                </div>
                
                {/* Project Details */}
                <div className="p-8 sm:p-16 space-y-12">
                  <DialogHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <Badge key={tag} className="bg-text-accent text-white border-none px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <DialogTitle className="text-5xl sm:text-6xl font-black text-text-main tracking-tighter">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-xl sm:text-2xl font-medium text-text-main/80 leading-relaxed pt-2">
                      {selectedProject.longDescription}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Gallery */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-text-main/40">Visual Journey</h4>
                      <div className="h-px flex-1 bg-text-main/10" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                      {selectedProject.gallery.map((imgUrl, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setZoomedImage(imgUrl)}
                          className="group relative aspect-video bg-white rounded-[20px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                        >
                          <img src={imgUrl} alt={`Process ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white/90 p-3 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform">
                               <ZoomIn className="w-6 h-6 text-text-main" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-8 border-t border-text-main/5">
                    <Button asChild className="bg-text-main text-brand-yellow hover:bg-text-main/90 px-8 h-12 rounded-full font-bold gap-2 w-full sm:w-auto">
                      <a href={selectedProject.link} target="_blank" rel="noreferrer">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Lightbox (Zoomed View) */}
      <Dialog open={!!zoomedImage} onOpenChange={(open) => !open && setZoomedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex items-center justify-center [&>button]:hidden">
          {zoomedImage && (
            <div className="relative group w-full h-full flex items-center justify-center p-4">
              <button 
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md"
              >
                <X className="w-8 h-8" />
              </button>
              <img src={zoomedImage} alt="Zoomed view" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-300" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}