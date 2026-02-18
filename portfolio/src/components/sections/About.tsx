import { Button } from "@/components/ui/button"
import GithubIcon from "@/assets/icon-github.svg?react"
import LinkedinIcon from "@/assets/icon-linkedin.svg?react"
import CloverBaker from "@/assets/clover-baker.svg?react"
import CloverReader from "@/assets/clover-reader.svg?react"
import CloverArtist from "@/assets/clover-reader.svg?react"
import CloverNerd from "@/assets/clover-baker.svg?react"
import CloverSide from "@/assets/clover-side.svg?react"
import LadybugSmall from "@/assets/clover-small.svg?react"

export function About() {
  return (
    <section id="about" className="relative w-full py-32 overflow-hidden bg-brand-light/20">
      {/* Subtle ambient light behind the content */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <CloverSide className="absolute top-24 left-4 w-12 opacity-20 rotate-12 text-brand-green" />
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="space-y-8 max-w-xl">
            <h2 className="text-[64px] font-black text-text-accent leading-[1] tracking-tight">
              About mee!
            </h2>

            <div className="space-y-6 text-text-main/80 text-[17px] leading-[1.6] font-medium">
              <p>
                I'm a passionate product designer and developer dedicated to creating meaningful digital experiences.
                My approach combines user research, creative problem-solving, and technical expertise.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new technologies, contributing to
                open-source projects, or experimenting with new design tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://github.com/aasahi1" 
                target="_blank" 
                rel="noreferrer"
                className="group"
              >
                {/* GITHUB: Dark background, Yellow text. Hovers to Yellow background, Dark text. */}
                <Button className="bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main h-[42px] px-6 gap-2 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <GithubIcon className="w-5 h-5 fill-current" />
                  <span className="text-[14px] font-bold">Github</span>
                </Button>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/amna-sahi/" 
                target="_blank" 
                rel="noreferrer"
                className="group"
              >
                {/* LINKEDIN: Yellow background. Hovers to slightly darker yellow (not white). */}
                <Button className="bg-brand-yellow text-text-main hover:bg-brand-yellow/80 h-[42px] px-6 gap-2 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <span className="text-[14px] font-bold">Linkedin</span>
                  <LinkedinIcon className="w-[18px] h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: FLOATING ICONS --- */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 relative perspective-1000 pl-4 lg:pl-12">
            
            <CloverItem 
              icon={<CloverBaker className="rotate-[-5deg]" />} 
              title="Painter" 
              desc="Acrylics, Watercolors, Gouache" 
              className="mt-12" 
              ladybugPos="bottom-left"
            />
            
            <CloverItem 
              icon={<CloverArtist className="rotate-[5deg]" />} 
              title="Product Designer" 
              desc="Figma, Sketch, Adobe XD" 
              className="" 
              ladybugPos="top-right"
            />
            
            <CloverItem 
              icon={<CloverReader className="rotate-[3deg]" />} 
              title="Programmer" 
              desc="React, Next.js, Python" 
              className="mt-4" 
              ladybugPos="bottom-right"
            />
            
            <CloverItem 
              icon={<CloverNerd className="rotate-[-3deg]" />} 
              title="t" 
              desc="Self-explanatory : {" 
              className="-mt-8" 
              ladybugPos="top-left"
            />
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
  ladybugPos 
}: { 
  icon: React.ReactNode, 
  title: string, 
  desc: string, 
  className?: string,
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
      {/* Icon Wrapper */}
      <div className="w-32 h-32 relative flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-2">
        <div className="absolute inset-0 scale-[1.3] drop-shadow-2xl filter saturate-[1.1]">
          {icon}
        </div>
        
        {ladybugPos && (
          <div className={`absolute w-8 h-8 z-20 transition-transform duration-300 group-hover:rotate-12 ${ladybugClasses[ladybugPos]}`}>
            <LadybugSmall className="w-full h-full text-[#af2500] drop-shadow-sm" />
          </div>
        )}
      </div>

      {/* Text Wrapper */}
      <div className="mt-4 space-y-1 transition-opacity duration-300">
        <h3 className="text-xl font-black text-text-accent tracking-wide uppercase">{title}</h3>
        <p className="text-[15px] font-medium text-text-main/60">{desc}</p>
      </div>
    </div>
  )
}