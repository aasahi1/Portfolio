import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"

interface LadybugsProps {
  className?: string
  leftPositionClass?: string
  rightPositionClass?: string
  mobileTopClass?: string
  mobileBottomClass?: string
}

export function Ladybugs({ className = "", leftPositionClass, rightPositionClass, mobileTopClass, mobileBottomClass }: LadybugsProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-visible select-none ${className}`} aria-hidden="true">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className={`pointer-events-auto absolute z-10 md:hidden ${mobileTopClass ?? "top-[-18px] left-[-18px] h-[68px] w-14 sm:h-[78px] sm:w-16"}`}>
          <div className="ladybug-interactive h-full w-full"><LadybugBottom className="h-full w-full rotate-[135deg]" /></div>
        </div>
        <div className={`pointer-events-auto absolute z-10 md:hidden ${mobileBottomClass ?? "top-[230px] right-[-18px] h-[68px] w-14 sm:h-[78px] sm:w-16"}`}>
          <div className="ladybug-interactive h-full w-full"><LadybugTop className="h-full w-full rotate-[-45deg]" /></div>
        </div>
        <div className={`pointer-events-auto absolute hidden h-[88px] w-[73px] md:block lg:h-[100px] lg:w-[83px] ${leftPositionClass ?? "md:left-[-30px] md:top-[50px] lg:left-[-35px] lg:top-[70px] xl:left-[-40px]"}`}>
          <div className="ladybug-interactive h-full w-full"><LadybugBottom className="h-full w-full -translate-y-1/2 rotate-[170deg]" /></div>
        </div>
        <div className={`pointer-events-auto absolute hidden h-[88px] w-[73px] md:block lg:h-[100px] lg:w-[83px] ${rightPositionClass ?? "md:right-[-30px] md:top-[120px] lg:right-[-35px] lg:top-[140px] xl:right-[-40px]"}`}>
          <div className="ladybug-interactive h-full w-full"><LadybugTop className="h-full w-full rotate-[-10deg]" /></div>
        </div>
      </div>
    </div>
  )
}
