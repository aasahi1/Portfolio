import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"
import HeroPattern from "@/assets/hero-bg-pattern.svg?react"

export function Hero() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      lastScrollY.current = currentY

      const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLDivElement[]
      els.forEach((el) => {
        if (scrollingDown) {
          el.classList.add("wings-open")
        } else {
          el.classList.remove("wings-open")
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative isolate min-h-[576px] w-full overflow-hidden pt-10 pb-20">
      <style>{`
        .ladybug-wrap {
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }
        .ladybug-wrap:hover,
        .ladybug-wrap.wings-open {
          transform: translateY(0px) scale(1.01);
        }

        .ladybug-wrap svg .wing-left,
        .ladybug-wrap svg .wing-right {
          transition: transform 0.8s cubic-bezier(0.34, 1.2, 0.64, 0.8);
          transform-box: view-box;
        }
        .ladybug-wrap svg .wing-left {
          transform-origin: 65px 110px;
        }
        .ladybug-wrap svg .wing-right {
          transform-origin: 150px 150px;
        }

        .ladybug-wrap:hover svg .wing-left,
        .ladybug-wrap.wings-open svg .wing-left {
          transform: rotate(20deg);
        }
        .ladybug-wrap:hover svg .wing-right,
        .ladybug-wrap.wings-open svg .wing-right {
          transform: rotate(-25deg);
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <HeroPattern className="h-full w-full object-cover" />
      </div>

      <div className="relative mx-auto flex min-h-[480px] max-w-5xl items-center justify-center px-8 sm:px-12 lg:px-20">

        {/* Mobile Ladybugs */}
        <div className="ladybug-wrap md:hidden absolute top-[-30px] left-[-30px] w-44 h-44">
          <LadybugBottom className="rotate-[135deg] w-full h-full drop-shadow-xl" />
        </div>
        <div className="ladybug-wrap md:hidden absolute bottom-[-30px] right-[-30px] w-44 h-44">
          <LadybugTop className="rotate-[-45deg] w-full h-full drop-shadow-xl" />
        </div>

        {/* LEFT LADYBUG — Desktop */}
        <div
          ref={leftRef}
          className="ladybug-wrap pointer-events-auto absolute hidden md:block
            md:left-[-195px] md:top-[12%]
            lg:left-[-230px] lg:top-[10%]
            xl:left-[-255px] xl:top-[9%]
          "
        >
          <LadybugBottom
            className="
              -translate-y-1/2
              rotate-[170deg]
              drop-shadow-2xl
              md:h-[320px] md:w-[320px]
              lg:h-[410px] lg:w-[410px]
              xl:h-[460px] xl:w-[460px]
            "
          />
        </div>

        {/* RIGHT LADYBUG — Desktop */}
        <div
          ref={rightRef}
          className="ladybug-wrap pointer-events-auto absolute hidden md:block
            top-1/2 -translate-y-1/2
            md:right-[-200px]
            lg:right-[-230px]
            xl:right-[-260px]
          "
        >
          <LadybugTop
            className="
              rotate-[-10deg]
              drop-shadow-2xl
              md:h-[450px] md:w-[450px]
              lg:h-[500px] lg:w-[500px]
              xl:h-[560px] xl:w-[560px]
            "
          />
        </div>

        {/* TEXT */}
        <div className="relative w-full max-w-xl text-center md:text-left space-y-4">
          <h1 className="text-[48px] leading-[48px] sm:text-[72px] sm:leading-[72px] font-black text-text-main">
            Amna Sahi
          </h1>

          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-text-main">
              Product Designer & Developer
            </h2>
            <p className="text-base sm:text-xl text-text-main/80">
              Code, design, and luck intertwined
            </p>
          </div>

          <div className="flex items-center justify-start gap-3 pt-5">
            <Button
              asChild
              className="bg-text-main text-brand-yellow hover:bg-text-main/90 h-10 px-6 font-bold rounded-full shadow-lg"
            >
              <a href="#projects">See work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-brand-yellow/70 text-text-main hover:bg-brand-yellow h-10 px-6 font-bold rounded-full shadow-lg"
            >
              <a href="#about">About me</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About me"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand-yellow"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </a>
    </section>
  )
}