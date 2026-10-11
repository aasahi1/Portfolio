import { Link } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Button } from "@/components/ui/button"
import FigmaHeroUrl from "@/assets/figma-home-hero.svg?url"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"

const FigmaHero = lazy(() => import("@/assets/figma-home-hero.svg?react"))

export function Hero() {
  return (
    <section aria-label="Amna Sahi, Product Designer and Developer" className="relative isolate min-h-[590px] w-full overflow-hidden bg-background sm:min-h-[620px] xl:min-h-[clamp(608px,calc(43px+44.1vw),721px)]">
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        <div className="absolute left-1/2 top-[43px] -translate-x-1/2" style={{ width: "min(108vw, 1555px)", aspectRatio: "1280 / 522" }}>
          <Suspense fallback={<img src={FigmaHeroUrl} alt="" className="h-full w-full" />}>
            <FigmaHero className="hero-figma-art pointer-events-auto h-full w-full" />
          </Suspense>
        </div>
      </div>

      <div className="absolute left-1/2 top-[43px] hidden -translate-x-1/2 xl:block" style={{ width: "min(108vw, 1555px)", aspectRatio: "1280 / 522" }}>
        <h1 className="sr-only">Amna Sahi</h1>
        <p className="sr-only">Product Designer and Developer. Fine Art + CS + Psychology = A designer who really gets users and developers.</p>
        <Link to="/projects" aria-label="See work" className="absolute left-[20.23%] top-[63.03%] z-20 h-[8.43%] w-[8.75%] rounded-full focus-visible:outline" />
        <Link to="/about" aria-label="About me" className="absolute left-[29.92%] top-[63.03%] z-20 h-[8.43%] w-[8.98%] rounded-full focus-visible:outline" />
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
    </section>
  )
}
