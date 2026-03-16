import { Button } from "@/components/ui/button"
import GithubIcon from "@/assets/icon-github.svg?react"
import LinkedinIcon from "@/assets/icon-linkedin.svg?react"
import CloverBaker from "@/assets/clover-baker.svg?react"
import CloverReader from "@/assets/clover-reader.svg?react"
import CloverArtist from "@/assets/clover-reader.svg?react"
import CloverNerd from "@/assets/clover-baker.svg?react"
import LadybugSmall from "@/assets/clover-small.svg?react"

export function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 overflow-hidden bg-brand-light/20">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <div className="space-y-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="group text-[52px] sm:text-[64px] font-black text-text-main leading-[1] tracking-tight cursor-default">
              <span className="group-hover:text-text-accent transition-colors duration-300">About mee</span>
              <span className="text-text-accent">!</span>
            </h2>

            <div className="space-y-5 text-text-main text-[16px] sm:text-[17px] leading-[1.7] font-medium">
              <p>
                I'm a Digital Arts student at the University of Waterloo with minors in Computing and Psychology —
                which is a fancy way of saying I think about people, then build things for them. I work across
                design, front-end development, and creative technology, and I care a lot about the space where
                all three meet.
              </p>
              <p>
                I've shipped React apps for health-tech startups, won design sprints, and had an interactive
                installation exhibited at THEMUSEUM in Kitchener. Outside of screens, I paint — acrylics,
                watercolours, gouache — and I think it makes me a better designer every time.
              </p>
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

          {/* RIGHT: Icon grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 max-w-sm mx-auto lg:max-w-none lg:pl-8">
            <CloverItem icon={<CloverBaker className="rotate-[-5deg]" />} title="Painter" desc="Acrylics, Watercolors, Gouache" className="mt-6" ladybugPos="bottom-left" />
            <CloverItem icon={<CloverArtist className="rotate-[5deg]" />} title="Product Designer" desc="Figma, Sketch, Adobe XD" ladybugPos="top-right" />
            <CloverItem icon={<CloverReader className="rotate-[3deg]" />} title="Programmer" desc="React, Next.js, Python" ladybugPos="bottom-right" />
            <CloverItem icon={<CloverNerd className="rotate-[-3deg]" />} title="UX Researcher" desc="Interviews, Testing, Data" className="-mt-4" ladybugPos="top-left" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CloverItem({
  icon, title, desc, className = "", ladybugPos
}: {
  icon: React.ReactNode, title: string, desc: string, className?: string,
  ladybugPos?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) {
  const ladybugClasses = {
    'top-left': 'top-2 left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]',
    'top-right': 'top-4 right-4 translate-x-1/2 -translate-y-1/2 rotate-[45deg]',
    'bottom-left': 'bottom-4 left-6 -translate-x-1/2 translate-y-1/2 rotate-[-135deg]',
    'bottom-right': 'bottom-2 right-2 translate-x-1/2 translate-y-1/2 rotate-[135deg]',
  }

  return (
    <div className={`flex flex-col items-center text-center group cursor-default ${className}`}>
      <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-2">
        <div className="absolute inset-0 scale-[1.3] drop-shadow-xl filter saturate-[1.1]">{icon}</div>
        {ladybugPos && (
          <div className={`absolute w-6 h-6 sm:w-7 sm:h-7 z-20 transition-transform duration-300 group-hover:rotate-12 ${ladybugClasses[ladybugPos]}`}>
            <LadybugSmall className="w-full h-full text-[#af2500] drop-shadow-sm" />
          </div>
        )}
      </div>
      <div className="mt-3 space-y-0.5">
        <h3 className="text-sm sm:text-base font-black text-text-main tracking-wide uppercase group-hover:text-text-accent transition-colors duration-300">{title}</h3>
        <p className="text-[12px] sm:text-[13px] font-medium text-text-main/70">{desc}</p>
      </div>
    </div>
  )
}