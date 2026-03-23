"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "@/components/icons"

type InstagramGridProps = {
  images?: string[]
  handle?: string
  className?: string
}

function InstagramGrid({
  images = [],
  handle = "@track&tread",
  className,
}: InstagramGridProps) {
  const [offset, setOffset] = useState(0)
  const visibleCount = 4
  const maxOffset = Math.max(0, images.length - visibleCount)

  const prev = useCallback(() => setOffset((o) => Math.max(0, o - 1)), [])
  const next = useCallback(() => setOffset((o) => Math.min(maxOffset, o + 1)), [maxOffset])

  const visibleImages = images.length > 0
    ? images.slice(offset, offset + visibleCount)
    : Array.from({ length: visibleCount }, () => "")

  return (
    <section className={className}>
      {/* Section Header */}
      <div className="flex flex-col gap-2 py-6 lg:py-10 px-4 lg:px-6">
        <h2>Follow Us on&nbsp;Instagram</h2>
        <a href="https://instagram.com/trackandtread" target="_blank" rel="noopener noreferrer" className="h5 lg:h4 tracking-[-0.04em] text-[#969696] underline cursor-pointer transition-colors hover:text-[#623cea] active:opacity-50">{handle}</a>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col lg:flex-row border-t border-black">
        {visibleImages.map((img, i) => (
          <div key={i} className="contents">
            {i > 0 && <div className="w-full h-px lg:w-px lg:h-auto bg-black shrink-0" />}
            <div
              className="flex-1 aspect-square bg-[#c5c5c5] bg-cover bg-center"
              style={img ? { backgroundImage: `url(${img})` } : undefined}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-black w-full" />

      {/* Slider Controls */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-2">
        {/* Pagination dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: Math.max(1, Math.ceil(images.length / visibleCount)) }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "size-[10px] rounded-full transition-colors",
                i === Math.floor(offset / visibleCount)
                  ? "bg-black"
                  : "bg-[#dcdcdc]"
              )}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={prev}
            disabled={offset <= 0}
            className="flex items-center justify-center p-4 disabled:opacity-30 transition-all hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
            aria-label="Previous images"
          >
            <ArrowLeft className="size-6 text-black" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={offset >= maxOffset}
            className="flex items-center justify-center p-4 disabled:opacity-30 transition-all hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
            aria-label="Next images"
          >
            <ArrowRight className="size-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}

export { InstagramGrid }
