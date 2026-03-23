"use client"

import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "@/components/icons"

type PaginationProps = {
  className?: string
  totalPages: number
  currentPage: number
  onPageChange?: (page: number) => void
}

function Pagination({
  className,
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-2 p-6", className)}
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center justify-center w-[42px] p-2 disabled:opacity-30 transition-all hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
        aria-label="Previous page"
      >
        <ArrowLeft className="size-[26px] text-black" />
      </button>

      {/* Page numbers */}
      {pages.map((page) => {
        const isActive = page === currentPage
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex items-center justify-center w-[42px] p-2 text-[24px] font-medium leading-[1.1] text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
              isActive
                ? "bg-[#623cea] text-white focus-visible:outline-[#623cea]"
                : "text-black hover:bg-[#623cea] hover:text-white focus-visible:outline-black"
            )}
          >
            {page}
          </button>
        )
      })}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center justify-center w-[42px] p-2 disabled:opacity-30 transition-all hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
        aria-label="Next page"
      >
        <ArrowRight className="size-[26px] text-black" />
      </button>
    </nav>
  )
}

export { Pagination }
