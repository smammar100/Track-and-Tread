"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type ScrollRevealProps = {
  children: ReactNode
  animation?: "fade-up" | "fade-in" | "scale-in"
  delay?: number
  duration?: number
  className?: string
}

function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const fromVars: gsap.TweenVars = { autoAlpha: 0 }
      if (animation === "fade-up") {
        fromVars.y = 40
      } else if (animation === "scale-in") {
        fromVars.scale = 0.95
      }

      gsap.fromTo(el, fromVars, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={className} style={{ visibility: "hidden" }}>
      {children}
    </div>
  )
}

export { ScrollReveal }
