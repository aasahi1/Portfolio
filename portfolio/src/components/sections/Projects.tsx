import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  }
]

export function Projects() {
  return (
    <section id="portfolio" className="w-full py-24 px-6 overflow-hidden">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-[64px] font-black text-text-main leading-[31.5px] py-4">Past Projects</h2>
          <p className="max-w-2xl mx-auto text-text-main/80 text-[15.75px] leading-[24.5px]">
            A selection of my recent work showcasing various design challenges and solutions across different industries and platforms.
          </p>
        </div>

        <div className="relative overflow-visible">
          <Carousel className="w-full max-w-6xl mx-auto overflow-visible" opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-10 overflow-visible">
              {PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-10 md:basis-[600px] lg:basis-[600px] overflow-visible">
                  <div className="group relative flex flex-col items-center pt-20 pb-20 overflow-visible z-20">
                    <div className="relative w-[506px] h-[380px] rounded-[13px] overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
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
            <CarouselPrevious className="hidden md:flex -left-16 bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-12" />
            <CarouselNext className="hidden md:flex -right-16 bg-brand-yellow/80 text-text-main border-none shadow-xl hover:bg-brand-yellow size-12" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-2.5 rounded-full transition-all ${i === 0 ? "w-8 bg-brand-yellow" : "w-2.5 bg-brand-yellow/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}