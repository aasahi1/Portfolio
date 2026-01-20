import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import CloverSmall from "@/assets/clover-small.svg?react"

const ART_PROJECTS = [
  {
    title: "Project Alpha",
    tags: ["UX", "Research", "Product"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Project Beta",
    tags: ["UX", "Research", "Product"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Project Gamma",
    tags: ["UX", "Research", "Product"],
    color: "bg-[#becb6b]",
  },
  {
    title: "Project Delta",
    tags: ["UX", "Research", "Product"],
    color: "bg-[#becb6b]",
  }
]

export function Art() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="art" className="w-full py-6 overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-2">
          <h2 className="text-[64px] font-black text-text-main leading-none mb-0">Art & ...more</h2>
          <p className="max-w-2xl mx-auto text-text-main/80 text-[15.75px] leading-[20.5px]">
            A selection of my recent work showcasing various design challenges and solutions across different industries and platforms.
          </p>
        </div>

        <div className="relative overflow-visible pt-0">
          <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto overflow-visible" opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-10 overflow-visible">
              {ART_PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-10 md:basis-[400px] overflow-visible">
                  <div className={`group relative flex flex-col items-center pt-4 pb-8 overflow-visible transition-all duration-500 ${current === index ? 'z-30 scale-100 opacity-100' : 'z-20 scale-90 opacity-60'}`}>
                    <div className="relative w-[371px] h-[379px] rounded-[13px] overflow-hidden transition-transform group-hover:scale-[1.02] bg-[#becb6b]/40 backdrop-blur-sm">
                      <div className="w-full h-full flex items-center justify-center text-text-main/20">
                        <span className="font-black text-4xl">ART</span>
                      </div>
                      <CloverSmall className="absolute top-4 right-4 w-8 h-8 opacity-60" />
                    </div>

                    <div className={`mt-[-60px] z-10 w-[371px] p-6 rounded-[13px] shadow-2xl space-y-2 border border-black/5 ${project.color}`}>
                      <h3 className="text-xl font-bold text-text-main">{project.title}</h3>
                      <p className="text-text-main/70 text-sm leading-tight">Microlearning product with community-driven feedback loops.</p>
                      <div className="flex gap-1.5 pt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-accent/70 hover:bg-text-accent text-white border-none rounded-full px-3 py-0.5 text-[12px] leading-[12px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-10 z-40" />
            <CarouselNext className="hidden md:flex right-4 bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-10 z-40" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-8">
            {ART_PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${current === i ? "w-8 bg-brand-yellow" : "w-2.5 bg-brand-yellow/40 hover:bg-brand-yellow/60"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}