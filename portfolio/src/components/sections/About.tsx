import { Button } from "@/components/ui/button"
import GithubIcon from "@/assets/icon-github.svg?react"
import LinkedinIcon from "@/assets/icon-linkedin.svg?react"
import CloverBaker from "@/assets/clover-baker.svg?react"
import CloverReader from "@/assets/clover-reader.svg?react"
import CloverArtist from "@/assets/clover-artist.svg?react"
import CloverNerd from "@/assets/clover-nerd.svg?react"
import CloverSide from "@/assets/clover-side.svg?react"
import LadybugSmall from "@/assets/clover-small.svg?react"

export function About() {
  return (
    <section id="about" className="relative w-full py-24 bg-white/10 overflow-hidden">
      <CloverSide className="absolute top-20 left-4 w-10 opacity-40" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-[64px] font-black text-text-accent leading-[42px]">About mee!</h2>

            <div className="space-y-6 text-text-main/80 text-[15.75px] leading-[24.5px]">
              <p>
                I'm a passionate product designer and developer dedicated to creating meaningful digital experiences.
                My approach combines user research, creative problem-solving, and technical expertise to deliver
                designs that not only look great but also function seamlessly.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new technologies, contributing to
                open-source projects, or experimenting with new design tools and techniques.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="bg-brand-yellow/70 text-text-main hover:bg-brand-yellow h-[34px] px-4 gap-2 rounded-full shadow-lg border-none">
                <GithubIcon className="w-[21px] h-5" />
                <span className="text-[13px] font-medium">Github</span>
              </Button>
              <Button className="bg-brand-yellow/70 text-text-main hover:bg-brand-yellow h-[34px] px-4 gap-2 rounded-full shadow-lg border-none">
                <span className="text-[13px] font-medium">Linkedin</span>
                <LinkedinIcon className="w-[19px] h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 relative">
            <CloverCard icon={<CloverBaker />} title="Baker" desc="Apple crumble?" className="mt-12" ladybugPos="bottom-left" />
            <CloverCard icon={<CloverArtist />} title="Artist" desc="Painter & Illustrator" ladybugPos="top-right" />
            <CloverCard icon={<CloverReader />} title="Reader" desc="Classic & Gothic lit" ladybugPos="bottom-right" />
            <CloverCard icon={<CloverNerd />} title="Nerd..." desc="Self-explanatory : {" className="-mt-12" ladybugPos="top-left" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CloverCard({ 
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
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-[45deg]',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-[-135deg]',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-[135deg]',
  }

  return (
    <div className={`flex flex-col items-center text-center space-y-1 p-4 transition-transform hover:scale-105 group ${className}`}>
      <div className="w-32 h-32 relative flex items-center justify-center">
        <div className="absolute inset-0 scale-[1.2] drop-shadow-2xl">
          {icon}
        </div>
        {ladybugPos && (
          <div className={`absolute w-8 h-8 z-20 ${ladybugClasses[ladybugPos]}`}>
            <LadybugSmall className="w-full h-full text-[#af2500]" />
          </div>
        )}
      </div>
      <h3 className="text-2xl font-black text-text-main relative z-10">{title}</h3>
      <p className="text-sm text-text-main/70 relative z-10">{desc}</p>
    </div>
  )
}