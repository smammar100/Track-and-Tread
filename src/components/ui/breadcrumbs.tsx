import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight } from "@/components/icons"
import React from "react"

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  className?: string
  items: BreadcrumbItem[]
}

function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2", className)}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <ChevronRight className="size-[18px] shrink-0 text-black" aria-hidden />
          )}
          {item.href && i < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-[16px] font-medium leading-[1.1] text-black whitespace-nowrap hover:underline transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[16px] font-medium leading-[1.1] text-black whitespace-nowrap">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export { Breadcrumbs, type BreadcrumbItem }
