"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap transition-all outline-none focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] select-none leading-[1.1] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#f2f2f2] border-black text-black hover:bg-[#623cea] hover:border-[#623cea] hover:text-white focus-visible:outline-black active:bg-[#4f2fbf] disabled:bg-[#f2f2f2] disabled:border-[#dcdcdc] disabled:text-[#b4b4b4]",
        dark:
          "bg-black border-[#f2f2f2] text-white hover:bg-[#623cea] hover:border-[#623cea] focus-visible:outline-white active:bg-[#4f2fbf] disabled:border-[#5a5a5a] disabled:text-[#787878]",
        outline:
          "border-black bg-transparent text-black hover:bg-[#623cea] hover:border-[#623cea] hover:text-white focus-visible:outline-black active:bg-[#4f2fbf] disabled:border-[#dcdcdc] disabled:text-[#b4b4b4]",
        secondary:
          "bg-[#f2f2f2] border-transparent text-black hover:bg-[#623cea] hover:text-white focus-visible:outline-black active:bg-[#4f2fbf] disabled:text-[#b4b4b4]",
        ghost:
          "border-transparent bg-transparent text-black hover:bg-[#623cea] hover:text-white focus-visible:outline-black active:bg-[#4f2fbf] disabled:text-[#b4b4b4]",
        destructive:
          "bg-destructive/10 border-transparent text-destructive hover:bg-destructive/20 focus-visible:outline-red-600 active:bg-destructive/30 disabled:opacity-50",
        link: "border-transparent text-black underline-offset-4 hover:text-[#623cea] hover:underline focus-visible:outline-black active:opacity-80 active:scale-100",
      },
      size: {
        default: "gap-2 px-8 py-6 text-[24px] [&_svg:not([class*='size-'])]:size-[26px]",
        sm: "gap-2 px-6 py-4 text-[20px] [&_svg:not([class*='size-'])]:size-[22px]",
        xs: "gap-1.5 px-4 py-3 text-[16px] [&_svg:not([class*='size-'])]:size-[18px]",
        lg: "gap-2 px-10 py-7 text-[28px] [&_svg:not([class*='size-'])]:size-[30px]",
        icon: "p-6 [&_svg:not([class*='size-'])]:size-[26px]",
        "icon-sm": "p-4 [&_svg:not([class*='size-'])]:size-[22px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
