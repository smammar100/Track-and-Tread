"use client"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { cn } from "@/lib/utils"
import { Search, Close } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

/* ─── Types ─── */

type SearchProduct = {
  name: string
  price: string
  compareAtPrice?: string
  image?: string
  badge?: string
  variants: { color: string; selected?: boolean }[]
}

type SearchOverlayProps = {
  className?: string
  products?: SearchProduct[]
  onClose?: () => void
  onSearch?: (query: string) => void
  onViewAll?: (query: string) => void
}

/* ─── Component ─── */

function SearchOverlay({
  className,
  products = [],
  onClose,
  onSearch,
  onViewAll,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const hasQuery = query.trim().length > 0
  const hasResults = hasQuery && products.length > 0
  const noResults = hasQuery && products.length === 0

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch?.(query)
    if (e.key === "Escape") onClose?.()
  }

  return (
    <div className={cn("bg-[#f2f2f2] flex flex-col w-full", className)}>
      {/* ── Search Input Bar ── */}
      <div className="flex items-center gap-2 lg:gap-4 px-4 lg:px-6 py-6 border-b border-black">
        <Search className="size-8 shrink-0 text-black" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch?.(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          className="flex-1 bg-transparent text-[20px] font-medium leading-[1.1] text-black placeholder:text-black outline-none min-w-0"
        />
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-black rounded-sm transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50"
          aria-label="Close search"
        >
          <Close className="size-6" />
        </button>
      </div>

      {/* ── Results Grid ── */}
      {hasResults && (
        <div className="flex flex-col w-full">
          {/* Product images row */}
          <div className="flex w-full">
            {products.map((product, i) => (
              <div key={i} className="flex">
                {i > 0 && <div className="w-px bg-black shrink-0" />}
                <div className="relative flex-1 min-w-0 aspect-square lg:h-[562px]">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  )}
                  {product.badge && (
                    <Badge
                      color="red"
                      className="absolute top-2 right-2 px-2 py-1 text-[16px] font-medium leading-[1.1]"
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-black w-full" />

          {/* Product info row */}
          <div className="flex w-full">
            {products.map((product, i) => (
              <div key={i} className="flex">
                {i > 0 && <div className="w-px bg-black self-stretch shrink-0" />}
                <div className="flex-1 min-w-0 flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 justify-center">
                  {/* Name + variants */}
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <p className="text-[20px] lg:text-[24px] font-medium leading-[1.1] text-black">
                      {product.name}
                    </p>
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
                    <p className="text-[24px] lg:text-[32px] font-medium leading-[1.1] text-black tracking-[-0.04em]">
                      {product.price}
                    </p>
                    {product.compareAtPrice && (
                      <p className="text-[16px] lg:text-[24px] font-medium leading-[1.1] text-[#969696] line-through tracking-[-0.04em] pb-px lg:pb-0.5">
                        {product.compareAtPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-black w-full" />

          {/* View all */}
          <button
            type="button"
            onClick={() => onViewAll?.(query)}
            className="flex items-center justify-center px-4 lg:px-6 py-6 border-b border-black text-[20px] font-medium leading-[1.1] text-black hover:bg-[#623cea] hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf] active:scale-[0.97]"
          >
            View all results
          </button>
        </div>
      )}

      {/* ── No Results ── */}
      {noResults && (
        <div className="flex items-center px-4 lg:px-6 py-6 border-b border-black">
          <p className="flex-1 text-[20px] font-medium leading-[1.1] text-black">
            No matches found for &ldquo;{query}&rdquo;. Check your spelling or try another words.
          </p>
        </div>
      )}
    </div>
  )
}

export { SearchOverlay, type SearchProduct }
