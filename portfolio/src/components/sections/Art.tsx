import * as React from "react"
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious, type CarouselApi,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import CloverSmall from "@/assets/clover-small.svg?react"

const ART_PROJECTS = [
  {
    title: "Acrylic Paintings",
    tags: ["Painting", "Acrylics", "Fine Art"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Watercolour & Gouache",
    tags: ["Painting", "Watercolour", "Gouache"],
    color: "bg-[#fde768]",
  },
  {
    title: "Graphic Design",
    tags: ["Branding", "Print", "Digital"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Alt-Verse Installation",
    tags: ["Interactive", "Exhibition", "THEMUSEUM"],
    color: "bg-[#fde768]",
  },
  {
    title: "UX / UI Work",
    tags: ["Figma", "Prototyping", "Visual Design"],
    color: "bg-[#becb6b]",
  },
]

export function Art() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="art" className="w-full py-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-8">
          <h2 className="text-[48px] sm:text-[64px] font-black text-text-main leading-none">
            Art & more
          </h2>
          <p className="text-text-main/60 text-base font-medium mt-2">
            Things I make when I'm not staring at Figma.
          </p>
        </div>

        <div className="relative overflow-visible">
          <Carousel
            setApi={setApi}
            className="w-full max-w-sm mx-auto overflow-visible"
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent className="-ml-4 overflow-visible">
              {ART_PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[360px] overflow-visible">
                  <div className={`group relative flex flex-col items-center pt-4 pb-6 overflow-visible transition-all duration-500 ${current === index ? 'z-30 scale-100 opacity-100' : 'z-20 scale-90 opacity-55'}`}>
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden transition-transform group-hover:scale-[1.02] bg-white/40 backdrop-blur-sm">
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-text-main/30 p-6 text-center">
                        <span className="text-4xl">🖼</span>
                        <span className="font-bold text-sm">Add image here</span>
                        <span className="text-xs font-medium opacity-70">{project.title}</span>
                      </div>
                      <CloverSmall className="absolute top-3 right-3 w-6 h-6 opacity-40" />
                    </div>

                    <div className={`mt-[-40px] z-10 w-[88%] p-5 rounded-2xl shadow-xl space-y-2 border border-black/5 ${project.color}`}>
                      <h3 className="text-lg font-bold text-text-main">{project.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-accent/70 hover:bg-text-accent text-white border-none rounded-full px-2.5 py-0.5 text-[11px] font-bold">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-[-20px] bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-10 z-40" />
            <CarouselNext className="hidden sm:flex right-[-20px] bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-10 z-40" />
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
    </section>
  )
}