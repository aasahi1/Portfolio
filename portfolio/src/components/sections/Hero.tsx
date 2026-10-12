import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import FigmaHero from "@/assets/figma-home-hero.svg?react"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"

export function Hero() {
  return (
    <section aria-label="Amna Sahi, Product Designer and Developer" className="relative isolate min-h-[590px] w-full overflow-hidden bg-background sm:min-h-[620px] xl:min-h-[clamp(608px,calc(43px+44.1vw),721px)]">
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        <div className="absolute left-1/2 top-[43px] -translate-x-1/2" style={{ width: "min(108vw, 1555px)", aspectRatio: "1280 / 522" }}>
          <FigmaHero className="hero-figma-art pointer-events-auto h-full w-full" />
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[43px] hidden -translate-x-1/2 xl:block" style={{ width: "min(108vw, 1555px)", aspectRatio: "1280 / 522" }}>
        <div className="pointer-events-none absolute left-[20.3%] top-[22.5%] z-20 text-text-main">
          <h1 className="whitespace-nowrap text-[clamp(52px,7.3vw,108px)] font-black leading-[0.98] tracking-[-0.055em]">Amna Sahi</h1>
          <h2 className="mt-[0.45em] whitespace-nowrap text-[clamp(26px,3.65vw,54px)] font-extrabold leading-[1.05] tracking-[-0.045em]">Product Designer and Developer.</h2>
        </div>
        <div className="pointer-events-auto absolute left-[20.2%] top-[54.8%] z-20 flex gap-3">
          <Button asChild className="h-[clamp(44px,3.5vw,56px)] rounded-full bg-text-main px-[clamp(20px,2.2vw,34px)] text-[clamp(15px,1.2vw,18px)] font-bold text-brand-yellow shadow-md transition-transform hover:-translate-y-0.5 hover:bg-text-main/90 focus-visible:ring-2 focus-visible:ring-text-main focus-visible:ring-offset-2">
            <Link to="/projects">See work</Link>
          </Button>
          <Button asChild variant="outline" className="h-[clamp(44px,3.5vw,56px)] rounded-full border-0 bg-brand-yellow px-[clamp(20px,2.2vw,34px)] text-[clamp(15px,1.2vw,18px)] font-bold text-text-main shadow-md transition-transform hover:-translate-y-0.5 hover:bg-brand-yellow/85 focus-visible:ring-2 focus-visible:ring-text-main focus-visible:ring-offset-2">
            <Link to="/about">About me</Link>
          </Button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block" aria-hidden="true">
        <div className="ladybug-interactive hero-bug-overlay pointer-events-auto absolute left-[77.8%] top-[15%] w-[clamp(90px,8.8vw,250px)]"><LadybugTop className="h-auto w-full rotate-[8deg]" /></div>
        <div className="ladybug-interactive hero-bug-overlay pointer-events-auto absolute left-[4.1%] top-[73%] w-[clamp(72px,7vw,200px)]"><LadybugBottom className="h-auto w-full rotate-[170deg]" /></div>
        <div className="ladybug-interactive hero-bug-overlay pointer-events-auto absolute left-[85.6%] top-[36.5%] w-[clamp(62px,6.2vw,178px)]"><LadybugTop className="h-auto w-full rotate-[-10deg]" /></div>
      </div>

      <div className="relative mx-auto min-h-[590px] max-w-[1280px] px-6 pt-[154px] sm:min-h-[620px] sm:px-10 sm:pt-[164px] xl:hidden">
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <div className="ladybug-interactive pointer-events-auto absolute right-[8%] top-[38px] h-[92px] w-[77px] sm:right-[10%] sm:top-[34px] sm:h-[112px] sm:w-[94px]"><LadybugTop className="h-full w-full rotate-[8deg]" /></div>
          <div className="ladybug-interactive pointer-events-auto absolute right-[7%] top-[362px] h-[74px] w-[62px] sm:right-[9%] sm:top-[378px] sm:h-[88px] sm:w-[74px]"><LadybugBottom className="h-full w-full rotate-[18deg]" /></div>
          <div className="ladybug-interactive pointer-events-auto absolute left-[8%] top-[442px] h-[74px] w-[62px] sm:left-[10%] sm:top-[452px] sm:h-[88px] sm:w-[74px]"><LadybugBottom className="h-full w-full -rotate-[25deg]" /></div>
        </div>
        <div className="relative z-20 sm:ml-[17%]">
          <h1 className="text-[clamp(48px,8vw,64px)] font-black leading-[1] tracking-[-1.5px] text-text-main">Amna Sahi</h1>
          <h2 className="mt-2 max-w-[760px] text-[clamp(22px,4vw,30px)] font-black leading-[1.12] tracking-[-.5px] text-text-main">Product Designer and Developer.</h2>
          <div className="flex flex-wrap gap-3 pt-5">
            <Button asChild className="h-12 rounded-full bg-text-main px-7 text-base font-bold text-brand-yellow shadow-md transition-transform hover:-translate-y-0.5 hover:bg-text-main/90">
              <Link to="/projects">See work</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-0 bg-brand-yellow px-7 text-base font-bold text-text-main shadow-md transition-transform hover:-translate-y-0.5 hover:bg-brand-yellow/85">
              <Link to="/about">About me</Link>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#portfolio"
        aria-label="Scroll to projects"
        title="Scroll to projects"
        className="group absolute left-1/2 z-30 inline-flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-brand-yellow transition-transform duration-300 hover:translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-main"
        style={{ top: "min(clamp(320px, calc(100svh - 130px), 680px), calc(100% - 52px))" }}
      >
        <ArrowDown aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
      </a>
    </section>
  )
}
