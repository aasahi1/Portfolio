import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

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
  }
]

export function Art() {
  return (
    <section id="art" className="w-full py-24 px-6 bg-background/5 relative overflow-hidden">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-[64px] font-black text-text-main leading-[31.5px] py-4">Art & ...more</h2>
          <p className="max-w-2xl mx-auto text-text-main/80 text-[15.75px] leading-[24.5px]">
            A selection of my recent work showcasing various design challenges and solutions across different industries and platforms.
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-10">
              {ART_PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-10 md:basis-[400px]">
                  <div className="group relative flex flex-col items-center pt-10 pb-10">
                    <div className="relative w-[371px] h-[379px] rounded-[13px] overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02] bg-[#becb6b]/40 backdrop-blur-sm">
                      {/* Image placeholder */}
                      <div className="w-full h-full flex items-center justify-center text-text-main/20">
                        <span className="font-black text-4xl">ART</span>
                      </div>
                    </div>
                    
                    <div className="mt-[-60px] z-10 w-[371px] p-6 rounded-[13px] shadow-2xl space-y-2 border border-black/5 bg-[#becb6b]">
                      <h3 className="text-xl font-bold text-text-main">{project.title}</h3>
                      <p className="text-text-main/70 text-sm leading-tight">Microlearning product with community-driven feedback loops.</p>
                      <div className="flex gap-1.5 pt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} className="bg-text-accent/70 hover:bg-text-accent text-white border-none rounded-full px-3 py-0 text-[12px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-brand-yellow/80 text-text-main border-none shadow-xl size-10" />
            <CarouselNext className="hidden md:flex -right-16 bg-brand-yellow/80 text-text-main border-none shadow-xl size-10" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === 0 ? "w-6 bg-brand-yellow" : "w-2 bg-brand-yellow/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}