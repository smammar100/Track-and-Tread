"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer select-none",
          disabled && "cursor-default",
          className
        )}
      >
        <span className="relative size-5 shrink-0">
          <input
            ref={ref}
            type="radio"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          {/* Unchecked circle */}
          <span
            className={cn(
              "absolute inset-0 rounded-full border border-solid transition-colors",
              "peer-checked:hidden",
              disabled
                ? "bg-[#f2f2f2] border-[#969696]"
                : "bg-[#f2f2f2] border-black peer-hover:bg-[#dcdcdc]"
            )}
          />
          {/* Checked circle */}
          <span
            className={cn(
              "absolute inset-0 hidden rounded-full border-[5px] border-solid transition-colors",
              "peer-checked:block",
              disabled
                ? "border-[#969696] bg-[#f2f2f2]"
                : "border-black bg-[#f2f2f2] peer-hover:border-[#3c3c3c]"
            )}
          />
        </span>
        {label && (
          <span
            className={cn(
              "text-[16px] font-medium leading-[1.1] whitespace-nowrap",
              disabled ? "text-[#969696]" : "text-black"
            )}
          >
            {label}
          </span>
        )}
      </label>
    )
  }
)

Radio.displayName = "Radio"

export { Radio }
