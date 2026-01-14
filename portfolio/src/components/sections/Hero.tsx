import { Button } from "@/components/ui/button"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"
import HeroPattern from "@/assets/hero-bg-pattern.svg?react"

export function Hero() {
  return (
    <section className="relative min-h-[576px] w-full flex flex-col items-center justify-center overflow-hidden pt-10 pb-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-100">
        <HeroPattern className="w-full h-full object-cover" />
      </div>

      <LadybugTop className="absolute top-4 left-[-100px] w-[450px] h-[450px] opacity-100 rotate-[15deg] drop-shadow-2xl" />
      <LadybugBottom className="absolute top-[-20px] right-[-120px] w-[550px] h-[550px] opacity-100 rotate-[-15deg] scale-x-[-1] drop-shadow-2xl" />

      <div className="relative text-center space-y-2 px-6">
        <h1 className="text-[72px] font-black text-text-main leading-[72px]">
          Amna Sahi
        </h1>
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-text-main">
            Product Designer & Developer
          </h2>
          <p className="text-xl text-text-main/80 font-normal">
            Code, design, and luck intertwined
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-10">
          <Button className="bg-text-main text-brand-yellow hover:bg-text-main/90 h-10 px-6 text-base font-bold rounded-full shadow-lg">
            See work
          </Button>
          <Button variant="outline" className="border-none bg-brand-yellow/70 text-text-main hover:bg-brand-yellow h-10 px-6 text-base font-bold rounded-full shadow-lg">
            About me
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}