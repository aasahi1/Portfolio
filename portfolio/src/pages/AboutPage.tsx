import { About } from "@/components/sections/About"
import { Ladybugs } from "@/components/Ladybugs"

export function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden flex-1">
      <Ladybugs
        leftPositionClass="md:left-[-170px] md:top-[30px] lg:left-[-220px] lg:top-[40px] xl:left-[-260px] xl:top-[50px]"
        rightPositionClass="md:top-[60px] lg:top-[80px] xl:top-[100px] -translate-y-1/2 md:right-[-190px] lg:right-[-230px] xl:right-[-270px]"
        mobileBottomClass="top-[380px] right-[-20px] h-[68px] w-14 sm:h-[78px] sm:w-16"
      />
      <div className="relative z-10">
        <About />
      </div>
    </div>
  )
}
