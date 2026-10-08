import { Button } from "@/components/ui/button"
import GithubIcon from "@/assets/icon-github.svg?react"
import LinkedinIcon from "@/assets/icon-linkedin.svg?react"
import CloverBaker from "@/assets/clover-baker.svg?react"
import CloverReader from "@/assets/clover-reader.svg?react"
import CloverArtist from "@/assets/clover-artist.svg?react"
import CloverNerd from "@/assets/clover-nerd.svg?react"
import CloverSmall from "@/assets/clover-small.svg?react"
import LadybugIcon from "@/assets/ladybug-bottom.svg?react"

export function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 overflow-hidden bg-brand-light/20">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div className="space-y-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="group text-[52px] sm:text-[64px] font-black text-text-main leading-[1] tracking-tight cursor-default">
              <span className="group-hover:text-text-accent transition-colors duration-300">About me</span>
              <span className="text-text-accent">!</span>
            </h2>

            <div className="space-y-5 text-text-main text-[16px] sm:text-[17px] leading-[1.7] font-medium">
              <p>
              I’m a Fine Arts student at the University of Waterloo, specializing in Digital Arts with minors in Computing and Psychology. I like understanding what people need, turning messy problems into clear, usable solutions, and then building them.              </p>
              <p>
              My work spans product design, front-end development, and traditional art. I’ve designed apps and websites for startups, won designathons, and exhibited interactive installations in galleries. When I’m not designing or coding, I’m usually painting or making. Acrylics, Sculptures, trinkets for my family, whatever I can get my hands on!              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <a href="https://github.com/aasahi1" target="_blank" rel="noreferrer">
                <Button className="bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main h-10 px-5 gap-2 rounded-full shadow-md transition-all hover:-translate-y-0.5 text-sm font-bold">
                  <GithubIcon className="w-4 h-4 fill-current" />
                  Github
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/amna-sahi/" target="_blank" rel="noreferrer">
                <Button className="bg-brand-yellow text-text-main hover:bg-text-main hover:text-brand-yellow h-10 px-5 gap-2 rounded-full shadow-md transition-all hover:-translate-y-0.5 text-sm font-bold">
                  LinkedIn
                  <LinkedinIcon className="w-4 h-4 fill-current" />
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT: Four Clovers with Profile Photo in the Center */}
          <div className="relative w-full max-w-[440px] sm:max-w-[500px] mx-auto lg:max-w-none lg:pl-4 py-4">
            {/* 2x2 Clovers Grid */}
            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-16 gap-y-12 sm:gap-y-16 relative z-10">
              {/* Top Row: text above icons so center photo never overlaps text */}
              <CloverItem
                icon={<CloverBaker className="rotate-[-5deg]" />}
                title="Painter"
                desc="Acrylics, Watercolors, Gouache"
                ladybugPos="top-left"
                textPosition="top"
              />
              <CloverItem
                icon={<CloverArtist className="rotate-[5deg]" />}
                title="Product Designer"
                desc="Figma, Sketch, Adobe XD"
                ladybugPos="top-right"
                textPosition="top"
              />
              {/* Bottom Row (switched): icons above text so center photo never overlaps text */}
              <CloverItem
                icon={<CloverNerd className="rotate-[-3deg]" />}
                title="UX Researcher"
                desc="Interviews, Testing, Data"
                ladybugPos="bottom-left"
                textPosition="bottom"
              />
              <CloverItem
                icon={<CloverReader className="rotate-[3deg]" />}
                title="Programmer"
                desc="React, Next.js, Python"
                ladybugPos="bottom-right"
                textPosition="bottom"
              />
            </div>

            {/* Center Profile Photo Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-brand-yellow/30 border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Amna Sahi portrait"
                  className="absolute -left-[23px] top-[19px] w-full h-full object-cover object-[54%_46%] scale-[2.7] select-none pointer-events-none transition-transform duration-500 group-hover:scale-[2.85]"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = "/placeholder-profile.jpg"
                  }}
                />
              </div>
              {/* Small Ladybug on the corner matching clover size */}
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 z-30 pointer-events-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <LadybugIcon className="w-full h-full drop-shadow-md rotate-[25deg]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function CloverItem({
  icon,
  title,
  desc,
  className = "",
  ladybugPos,
  textPosition = "bottom",
}: {
  icon: React.ReactNode
  title: string
  desc: string
  className?: string
  ladybugPos?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  textPosition?: "top" | "bottom"
}) {
  const ladybugClasses = {
    "top-left": "top-2 left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]",
    "top-right": "top-4 right-4 translate-x-1/2 -translate-y-1/2 rotate-[45deg]",
    "bottom-left": "bottom-4 left-6 -translate-x-1/2 translate-y-1/2 rotate-[-135deg]",
    "bottom-right": "bottom-2 right-2 translate-x-1/2 translate-y-1/2 rotate-[135deg]",
  }

  const textBlock = (
    <div className="space-y-0.5">
      <h3 className="text-sm sm:text-base font-black text-text-main tracking-wide uppercase group-hover:text-text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[12px] sm:text-[13px] font-medium text-text-main/70">
        {desc}
      </p>
    </div>
  )

  return (
    <div className={`flex flex-col items-center text-center group cursor-default gap-3 ${className}`}>
      {textPosition === "top" && textBlock}

      <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-2">
        <div className="absolute inset-0 scale-[1.3] drop-shadow-xl filter saturate-[1.1]">
          {icon}
        </div>
        {ladybugPos && (
          <div
            className={`absolute w-6 h-6 sm:w-7 sm:h-7 z-20 transition-transform duration-300 group-hover:rotate-12 ${ladybugClasses[ladybugPos]}`}
          >
            <CloverSmall className="w-full h-full text-[#7FB069] drop-shadow-sm" />
          </div>
        )}
      </div>

      {textPosition === "bottom" && textBlock}
    </div>
  )
}
