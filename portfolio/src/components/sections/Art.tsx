import * as React from "react"
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious, type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog, DialogContent,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn } from "lucide-react"
import CloverSmall from "@/assets/clover-small.svg?react"
import { Ladybugs } from "@/components/Ladybugs"

const ART_PROJECTS = [
  {
    title: "Cultural Tapestry",
    medium: "Acrylic & Mixed Media",
    image: "/art/IMG_4196.jpeg",
    tags: ["Painting", "Acrylics", "Fine Art"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Gaze & Warmth",
    medium: "Digital Painting",
    image: "/art/IMG_0230.png",
    tags: ["Portrait", "Digital Art", "Illustration"],
    color: "bg-[#fde768]",
  },
  {
    title: "Blue Reverie",
    medium: "Digital Painting & Study",
    image: "/art/IMG_1071.jpeg",
    tags: ["Portrait", "Digital Art", "Fine Art"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Metamorphosis",
    medium: "Oil & Acrylic on Canvas",
    image: "/art/IMG_3817.jpeg",
    tags: ["Fine Art", "Painting", "Surrealism"],
    color: "bg-[#fde768]",
  },
]

export function Art() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [zoomedProject, setZoomedProject] = React.useState<typeof ART_PROJECTS[0] | null>(null)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="art" className="relative isolate w-full py-12 md:py-16 pb-24 overflow-hidden bg-background">
      <Ladybugs
        leftPositionClass="md:left-[-160px] md:top-[50%] lg:left-[-200px] lg:top-[50%] xl:left-[-240px] xl:top-[50%] -translate-y-1/2"
        rightPositionClass="md:top-[52%] lg:top-[52%] xl:top-[52%] -translate-y-1/2 md:right-[-170px] lg:right-[-210px] xl:right-[-240px]"
      />
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[48px] sm:text-[64px] font-black text-text-main leading-none">
            Art & more<span className="text-text-accent">.</span>
          </h2>
          <p className="text-text-main/60 text-base font-medium mt-2 max-w-lg mx-auto">
            A collection of traditional paintings, digital illustrations, and visual experiments.
          </p>
        </div>

        <div className="relative overflow-visible">
          <Carousel
            setApi={setApi}
            className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto overflow-visible"
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent className="-ml-4 overflow-visible">
              {ART_PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[360px] md:basis-[420px] overflow-visible">
                  <div
                    onClick={() => setZoomedProject(project)}
                    className={`group relative flex flex-col items-center pt-4 pb-8 overflow-visible cursor-pointer transition-all duration-500 ${
                      current === index ? 'z-30 scale-100 opacity-100' : 'z-20 scale-90 opacity-55'
                    }`}
                  >
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] bg-white/60 shadow-lg border border-black/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 p-3 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-5 h-5 text-text-main" />
                        </div>
                      </div>
                      <CloverSmall className="absolute top-3 right-3 w-7 h-7 opacity-30 text-white drop-shadow" />
                    </div>

                    <div className={`mt-[-40px] z-10 w-[88%] p-5 rounded-2xl shadow-xl space-y-2 border border-black/5 ${project.color}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg sm:text-xl font-black text-text-main tracking-tight group-hover:text-text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-text-main/70">
                            {project.medium}
                          </p>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-text-main/40 group-hover:text-text-accent transition-colors shrink-0 pt-1">
                          Zoom →
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-main/10 text-text-main hover:bg-text-accent hover:text-white border-none rounded-full px-2.5 py-0.5 text-[11px] font-bold transition-all">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex absolute top-[36%] -translate-y-1/2 -left-4 sm:-left-8 md:-left-12 bg-brand-yellow text-text-main border-none shadow-xl hover:bg-brand-yellow size-11 z-40 transition-all hover:scale-110 cursor-pointer" />
            <CarouselNext className="hidden sm:flex absolute top-[36%] -translate-y-1/2 -right-4 sm:-right-8 md:-right-12 bg-brand-yellow text-text-main border-none shadow-xl hover:bg-brand-yellow size-11 z-40 transition-all hover:scale-110 cursor-pointer" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {ART_PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${current === i ? "w-7 bg-text-main" : "w-2 bg-text-main/25 hover:bg-text-main/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Artwork Lightbox / Fullview Dialog */}
      <Dialog open={!!zoomedProject} onOpenChange={(open) => !open && setZoomedProject(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/90 shadow-2xl flex items-center justify-center [&>button]:hidden rounded-2xl overflow-hidden">
          {zoomedProject && (
            <div className="relative w-full max-h-[90vh] flex flex-col items-center justify-center p-4 sm:p-8">
              <button
                onClick={() => setZoomedProject(null)}
                className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              
              <img
                src={zoomedProject.image}
                alt={zoomedProject.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
              />

              <div className="mt-4 text-center text-white space-y-1">
                <h3 className="text-xl sm:text-2xl font-black">{zoomedProject.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-medium">{zoomedProject.medium}</p>
                <div className="flex justify-center flex-wrap gap-1.5 pt-2">
                  {zoomedProject.tags.map(tag => (
                    <Badge key={tag} className="bg-white/20 text-white border-none rounded-full px-2.5 py-0.5 text-[11px] font-bold">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
