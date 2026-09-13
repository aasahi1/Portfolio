import { About } from "@/components/sections/About"
import { Ladybugs } from "@/components/Ladybugs"

export function AboutPage() {
  return (
    <div className="relative isolate pt-8 overflow-hidden flex-1">
      <Ladybugs
        leftPositionClass="md:left-[-170px] md:top-[30px] lg:left-[-220px] lg:top-[40px] xl:left-[-260px] xl:top-[50px]"
        rightPositionClass="md:top-[60px] lg:top-[80px] xl:top-[100px] -translate-y-1/2 md:right-[-190px] lg:right-[-230px] xl:right-[-270px]"
        mobileBottomClass="top-[380px] right-[-25px] w-28 h-28 sm:w-36 sm:h-36"
      />
      <div className="relative z-10">
        <About />
      </div>
    </div>
  )
}
