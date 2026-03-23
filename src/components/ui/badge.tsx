import { type HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center px-2 py-1 text-[16px] font-medium leading-[1.1] whitespace-nowrap",
  {
    variants: {
      color: {
        white: "bg-white text-black",
        black: "bg-black text-white",
        red: "bg-[#e01715] text-white",
        purple: "bg-[#623cea] text-white",
        green: "bg-[#c5fa1f] text-black",
      },
    },
    defaultVariants: {
      color: "white",
    },
  }
)

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>

function Badge({ className, color, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color }), className)} {...props}>
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
