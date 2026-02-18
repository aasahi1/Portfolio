import { Button } from "@/components/ui/button"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"
import HeroPattern from "@/assets/hero-bg-pattern.svg?react"

export function Hero() {
  return (
    <section className="relative isolate min-h-[576px] w-full overflow-hidden pt-10 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <HeroPattern className="h-full w-full object-cover" />
      </div>

      {/* Content wrapper */}
      <div className="relative mx-auto flex min-h-[480px] max-w-5xl items-center justify-center px-8 sm:px-12 lg:px-20">
        {/* Mobile Ladybugs (Top/Bottom corners) */}
        <LadybugBottom className="md:hidden absolute top-[-50px] left-[-50px] w-48 h-48 opacity-20 rotate-[135deg]" />
        <LadybugTop className="md:hidden absolute bottom-[-50px] right-[-50px] w-48 h-48 opacity-20 rotate-[-45deg]" />

        {/* LEFT LADYBUG — Desktop */}
        <LadybugBottom
          className="
            pointer-events-auto
            absolute hidden md:block
            -translate-y-1/2
            rotate-[170deg]
            drop-shadow-2xl
            md:left-[-195px] md:top-[12%] md:h-[320px] md:w-[320px]
            lg:left-[-230px] lg:top-[10%] lg:h-[410px] lg:w-[410px]
            xl:left-[-255px] xl:top-[9%]  xl:h-[460px] xl:w-[460px]
          "
        />

        {/* RIGHT LADYBUG — Desktop */}
        <LadybugTop
  className="
    ladybug-svg           /* <--- ADD THIS HOOK */
    pointer-events-auto
    absolute hidden md:block
    top-1/2 -translate-y-1/2
    rotate-[-10deg]
    drop-shadow-2xl
    md:right-[-200px] md:h-[450px] md:w-[450px]
    lg:right-[-230px] lg:h-[500px] lg:w-[500px]
    xl:right-[-260px] xl:h-[560px] xl:w-[560px]
  "
/>

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

      {/* Scroll cue (to About) */}
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
