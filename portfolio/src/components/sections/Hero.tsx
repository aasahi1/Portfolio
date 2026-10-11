import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import FigmaHero from "@/assets/figma-home-hero.svg?url"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"

export function Hero() {
  return (
    <section aria-label="Amna Sahi, Product Designer and Developer" className="relative isolate min-h-[565px] w-full overflow-hidden bg-background xl:h-[564.583px] xl:min-h-0">
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        <div className="absolute left-1/2 top-[43px] h-[522px] w-[1280px] -translate-x-1/2">
          <img src={FigmaHero} alt="" />
        </div>
      </div>

      <div className="absolute left-1/2 top-0 hidden h-full w-[1280px] -translate-x-1/2 xl:block">
        <h1 className="sr-only">Amna Sahi</h1>
        <p className="sr-only">Product Designer and Developer. Fine Art + CS + Psychology = A designer who really gets users and developers.</p>
        <Link to="/projects" aria-label="See work" className="absolute left-[259px] top-[329px] z-20 h-[44px] w-[112px] rounded-full focus-visible:outline" />
        <Link to="/about" aria-label="About me" className="absolute left-[383px] top-[329px] z-20 h-[44px] w-[115px] rounded-full focus-visible:outline" />
      </div>

      <div className="relative mx-auto min-h-[565px] max-w-[1280px] px-6 pt-[150px] sm:px-10 xl:hidden">
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <div className="ladybug-interactive pointer-events-auto absolute right-[8%] top-[42px] h-[78px] w-[65px]"><LadybugTop className="h-full w-full rotate-[8deg]" /></div>
          <div className="ladybug-interactive pointer-events-auto absolute right-[7%] top-[350px] h-[58px] w-12"><LadybugBottom className="h-full w-full rotate-[18deg]" /></div>
          <div className="ladybug-interactive pointer-events-auto absolute left-[8%] top-[425px] h-[58px] w-12"><LadybugBottom className="h-full w-full -rotate-[25deg]" /></div>
        </div>
        <div className="relative z-20 sm:ml-[17%]">
          <h1 className="text-[44px] font-black leading-[1] tracking-[-1px] text-text-main sm:text-[56px] xl:text-[64px]">Amna Sahi</h1>
          <h2 className="mt-2 max-w-[760px] text-[20px] font-black leading-[1.12] tracking-[-.5px] text-text-main sm:text-[26px] xl:text-[36px]">Product Designer and Developer.</h2>          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild className="h-11 rounded-full bg-text-main px-6 font-bold text-brand-yellow shadow-md transition-transform hover:-translate-y-0.5 hover:bg-text-main/90">
              <Link to="/projects">See work</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full border-0 bg-brand-yellow px-6 font-bold text-text-main shadow-md transition-transform hover:-translate-y-0.5 hover:bg-brand-yellow/85">
              <Link to="/about">About me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
