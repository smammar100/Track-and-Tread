"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Button } from "@/components/ui/button"
import { ArrowTopRight } from "@/components/icons"

gsap.registerPlugin(useGSAP)

type HeroProps = {
  headline: string
  buttonText: string
  backgroundImage?: string
  onButtonClick?: () => void
}

function Hero({ headline, buttonText, backgroundImage, onButtonClick }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Background zoom
      tl.fromTo(
        sectionRef.current,
        { backgroundSize: "110%" },
        { backgroundSize: "100%", duration: 1.4 },
        0
      )

      // Headline slide up
      tl.fromTo(
        ".hero-headline",
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1 },
        0.3
      )

      // Button fade up
      tl.fromTo(
        ".hero-cta",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        0.6
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-end p-4 lg:p-6 gap-4 lg:gap-6 min-h-[480px] lg:min-h-[800px] bg-[#3c3c3c] bg-cover bg-center overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <h1 className="hero-headline text-[#f2f2f2] max-w-[1400px]" style={{ visibility: "hidden" }}>
        {headline}
      </h1>
      <div className="hero-cta" style={{ visibility: "hidden" }}>
        <Button variant="default" size="default" onClick={onButtonClick}>
          {buttonText}
          <ArrowTopRight className="size-[22px] lg:size-[26px]" />
        </Button>
      </div>
    </section>
  )
}

export { Hero }
