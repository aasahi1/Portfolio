import { useEffect, useRef, useCallback } from "react"
import LadybugTop from "@/assets/ladybug-top.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"

interface LadybugsProps {
  className?: string
  leftPositionClass?: string
  rightPositionClass?: string
  mobileTopClass?: string
  mobileBottomClass?: string
}

export function Ladybugs({
  className = "",
  leftPositionClass,
  rightPositionClass,
  mobileTopClass,
  mobileBottomClass,
}: LadybugsProps) {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const mobileTopRef = useRef<HTMLDivElement>(null)
  const mobileBottomRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const triggerFlap = useCallback((el: HTMLDivElement | null) => {
    if (!el) return
    el.classList.add("wings-open")
    setTimeout(() => {
      el.classList.remove("wings-open")
    }, 850)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const isMoving = Math.abs(currentY - lastScrollY.current) > 2
      lastScrollY.current = currentY

      const els = [
        leftRef.current,
        rightRef.current,
        mobileTopRef.current,
        mobileBottomRef.current,
      ].filter(Boolean) as HTMLDivElement[]

      if (isMoving) {
        els.forEach((el) => el.classList.add("wings-open"))

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        scrollTimeoutRef.current = setTimeout(() => {
          els.forEach((el) => el.classList.remove("wings-open"))
        }, 350)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}>
      <style>{`
        .ladybug-wrap {
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .ladybug-wrap:hover,
        .ladybug-wrap:active,
        .ladybug-wrap.wings-open {
          transform: translateY(0px) scale(1.02);
        }

        .ladybug-wrap svg .wing-left,
        .ladybug-wrap svg .wing-right {
          transition: transform 0.65s cubic-bezier(0.34, 1.3, 0.64, 1);
          transform-box: view-box;
        }
        .ladybug-wrap svg .wing-left {
          transform-origin: 65px 110px;
        }
        .ladybug-wrap svg .wing-right {
          transform-origin: 150px 150px;
        }

        .ladybug-wrap:hover svg .wing-left,
        .ladybug-wrap:active svg .wing-left,
        .ladybug-wrap.wings-open svg .wing-left {
          transform: rotate(22deg);
        }
        .ladybug-wrap:hover svg .wing-right,
        .ladybug-wrap:active svg .wing-right,
        .ladybug-wrap.wings-open svg .wing-right {
          transform: rotate(-26deg);
        }

        @media (max-width: 767px) {
          .ladybug-wrap svg .wing-left,
          .ladybug-wrap svg .wing-right {
            transition: transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1);
          }
          .ladybug-wrap:active svg .wing-left,
          .ladybug-wrap.wings-open svg .wing-left {
            transform: rotate(26deg);
          }
          .ladybug-wrap:active svg .wing-right,
          .ladybug-wrap.wings-open svg .wing-right {
            transform: rotate(-30deg);
          }
        }
      `}</style>

      {/* Outer edge-pinned wrapper */}
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* Mobile Top Ladybug */}
        <div
          ref={mobileTopRef}
          onClick={() => triggerFlap(mobileTopRef.current)}
          onTouchStart={() => triggerFlap(mobileTopRef.current)}
          className={`ladybug-wrap pointer-events-auto md:hidden absolute z-10 transition-all ${
            mobileTopClass || "top-[-35px] left-[-35px] w-28 h-28 sm:w-36 sm:h-36"
          }`}
          aria-label="Interactive Ladybug"
        >
          <LadybugBottom className="rotate-[135deg] w-full h-full drop-shadow-md" />
        </div>

        {/* Mobile Bottom/Side Ladybug */}
        <div
          ref={mobileBottomRef}
          onClick={() => triggerFlap(mobileBottomRef.current)}
          onTouchStart={() => triggerFlap(mobileBottomRef.current)}
          className={`ladybug-wrap pointer-events-auto md:hidden absolute z-10 transition-all ${
            mobileBottomClass || "top-[230px] right-[-30px] w-28 h-28 sm:w-36 sm:h-36"
          }`}
          aria-label="Interactive Ladybug"
        >
          <LadybugTop className="rotate-[-45deg] w-full h-full drop-shadow-md" />
        </div>

        {/* LEFT LADYBUG — Desktop / Tablet */}
        <div
          ref={leftRef}
          onClick={() => triggerFlap(leftRef.current)}
          className={`ladybug-wrap pointer-events-auto absolute hidden md:block z-10 ${
            leftPositionClass ||
            `md:left-[-140px] md:top-[50px]
             lg:left-[-180px] lg:top-[70px]
             xl:left-[-220px] xl:top-[90px]`
          }`}
          aria-label="Interactive Ladybug"
        >
          <LadybugBottom
            className="
              -translate-y-1/2
              rotate-[170deg]
              drop-shadow-2xl
              md:h-[240px] md:w-[240px]
              lg:h-[340px] lg:w-[340px]
              xl:h-[420px] xl:w-[420px]
            "
          />
        </div>

        {/* RIGHT LADYBUG — Desktop / Tablet */}
        <div
          ref={rightRef}
          onClick={() => triggerFlap(rightRef.current)}
          className={`ladybug-wrap pointer-events-auto absolute hidden md:block z-10 ${
            rightPositionClass ||
            `md:top-[80px] lg:top-[110px] xl:top-[130px] -translate-y-1/2
             md:right-[-170px]
             lg:right-[-200px]
             xl:right-[-240px]`
          }`}
          aria-label="Interactive Ladybug"
        >
          <LadybugTop
            className="
              rotate-[-10deg]
              drop-shadow-2xl
              md:h-[300px] md:w-[300px]
              lg:h-[420px] lg:w-[420px]
              xl:h-[520px] xl:w-[520px]
            "
          />
        </div>
      </div>
    </div>
  )
}
