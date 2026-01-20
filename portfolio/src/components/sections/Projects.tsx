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

const PROJECTS = [
  {
    title: "LURN",
    description: "Microlearning product with community-driven feedback loops.",
    tags: ["UX", "Research", "Product"],
    image: "/src/assets/project-lurn.png",
    color: "bg-[#fde768]",
  },
  {
    title: "HealthConnect for Sun Life",
    description: "Microlearning product with community-driven feedback loops.",
    tags: ["UX", "Research", "Product"],
    image: "/src/assets/project-lurn.png",
    color: "bg-[#becb6b]",
  },
  {
    title: "EcoTrack",
    description: "Sustainable living assistant with real-time carbon tracking.",
    tags: ["Mobile", "AI", "SaaS"],
    image: "/src/assets/project-lurn.png",
    color: "bg-[#fde768]",
  },
  {
    title: "FinFlow",
    description: "Next-gen banking interface for seamless wealth management.",
    tags: ["FinTech", "UI", "Web"],
    image: "/src/assets/project-lurn.png",
    color: "bg-[#becb6b]",
  }
]

export function Projects() {
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
    <section id="portfolio" className="w-full py-12 overflow-hidden">
      <div className="container mx-auto pt-10 px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-6">
          <h2 className="text-[64px] font-black text-text-main leading-none mb-2">Past Projects</h2>
          <p className="max-w-2xl mx-auto text-text-main/80 text-[15.75px] leading-[20.5px]">
            A selection of my recent work showcasing various design challenges and solutions across different industries and platforms.
          </p>
        </div>

        <div className="relative overflow-visible pt-0">
          <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto overflow-visible" opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-10 overflow-visible">
              {PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-10 md:basis-[600px] lg:basis-[600px] overflow-visible">
                  <div className={`group relative flex flex-col items-center pt-4 pb-8 overflow-visible transition-all duration-500 ${current === index ? 'z-30 scale-100 opacity-100' : 'z-20 scale-90 opacity-60'}`}>
                    <div className="relative w-[506px] h-[380px] rounded-[13px] overflow-hidden transition-transform group-hover:scale-[1.02]">
                       <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                      />
                      <CloverSmall className="absolute top-4 right-4 w-8 h-8 opacity-60" />
                    </div>

                    <div className={`mt-[-70px] z-10 w-[594px] p-8 rounded-[13px] shadow-2xl space-y-2 border border-black/5 ${project.color}`}>
                      <h3 className="text-2xl font-black text-text-main">{project.title}</h3>
                      <p className="text-text-main/70 font-medium text-sm leading-tight">{project.description}</p>
                      <div className="flex gap-1.5 pt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-accent/70 hover:bg-text-accent text-white border-none rounded-full px-4 py-0.5 text-[14px] leading-[14px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-12 z-40" />
            <CarouselNext className="hidden md:flex right-4 bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-12 z-40" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-12">
            {PROJECTS.map((_, i) => (
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