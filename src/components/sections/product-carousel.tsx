"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

/* ─── Types ─── */

type ProductVariant = {
  color: string
  selected?: boolean
}

type Product = {
  name: string
  price: string
  compareAtPrice?: string
  image?: string
  badge?: string
  saleBadge?: string
  variants: ProductVariant[]
}

type ProductCarouselProps = {
  title: string
  products: Product[]
  className?: string
}

/* ─── Component ─── */

function ProductCarousel({ title, products, className }: ProductCarouselProps) {
  const [offset, setOffset] = useState(0)

  // Show 2 on mobile, 5 on desktop (we'll use CSS to handle visibility)
  const visibleDesktop = 5
  const maxOffset = Math.max(0, products.length - visibleDesktop)

  const prev = useCallback(() => setOffset((o) => Math.max(0, o - 1)), [])
  const next = useCallback(() => setOffset((o) => Math.min(maxOffset, o + 1)), [maxOffset])

  // Get visible products slice for desktop
  const visibleProducts = products.slice(offset, offset + visibleDesktop)

  return (
    <section className={cn("flex flex-col py-6 lg:py-10 gap-4 lg:gap-6", className)}>
      {/* Section Header */}
      <h2 className="px-4 lg:px-6">{title}</h2>

      {/* Product Grid */}
      <div className="flex flex-col border-t border-black">
        {/* Image Row */}
        <div className="flex w-full">
          {visibleProducts.map((product, i) => (
            <div key={`${product.name}-${i}`} className="flex flex-1 min-w-0">
              {i > 0 && <div className="w-px bg-black shrink-0" />}
              <div className="relative flex-1 min-w-0 aspect-square lg:h-[450px] bg-[#f2f2f2] overflow-hidden">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-contain"
                    loading="lazy"
                  />
                )}
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  {product.badge && (
                    <Badge color="purple">{product.badge}</Badge>
                  )}
                  {product.saleBadge && (
                    <Badge color="red">{product.saleBadge}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-black w-full" />

        {/* Info Row */}
        <div className="flex w-full">
          {visibleProducts.map((product, i) => (
            <div key={`info-${product.name}-${i}`} className="flex flex-1 min-w-0">
              {i > 0 && <div className="w-px bg-black self-stretch shrink-0" />}
              <div className="flex-1 min-w-0 flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
                {/* Name + variants */}
                <div className="flex flex-col gap-2 lg:gap-4">
                  <p className="body-lg lg:body-xl text-black truncate">{product.name}</p>
                  <div className="flex items-center">
                    {product.variants.map((v, vi) => (
                      <div
                        key={vi}
                        className={cn(
                          "size-[42px] shrink-0",
                          v.selected && "border border-black"
                        )}
                        style={{ backgroundColor: v.color }}
                      />
                    ))}
                  </div>
                </div>
                {/* Price */}
                <div className="flex items-end gap-2">
                  <p className="h5 lg:h4 tracking-[-0.04em] tabular-nums">{product.price}</p>
                  {product.compareAtPrice && (
                    <p className="body-lg lg:body-xl text-[#969696] line-through tracking-[-0.04em] pb-px lg:pb-0.5 tabular-nums">
                      {product.compareAtPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="h-px bg-black w-full" />
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-between px-4 lg:px-6">
        {/* Pagination dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: Math.ceil(products.length / visibleDesktop) }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "size-[10px] rounded-full transition-colors",
                i === Math.floor(offset / visibleDesktop)
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
            aria-label="Previous products"
          >
            <ArrowLeft className="size-6 text-black" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={offset >= maxOffset}
            className="flex items-center justify-center p-4 disabled:opacity-30 transition-all hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
            aria-label="Next products"
          >
            <ArrowRight className="size-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}

export { ProductCarousel, type Product }
