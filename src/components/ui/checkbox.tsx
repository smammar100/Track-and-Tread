"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/icons"

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
            type="checkbox"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          {/* Unchecked box */}
          <span
            className={cn(
              "absolute inset-0 border border-solid transition-colors",
              "peer-checked:hidden",
              disabled
                ? "bg-[#f2f2f2] border-[#969696]"
                : "bg-[#f2f2f2] border-black peer-hover:bg-[#dcdcdc]"
            )}
          />
          {/* Checked box */}
          <span
            className={cn(
              "absolute inset-0 hidden items-center justify-center transition-colors",
              "peer-checked:flex",
              disabled
                ? "bg-[#969696]"
                : "bg-black peer-hover:bg-[#3c3c3c]"
            )}
          >
            <Check className="size-[13px] text-white" />
          </span>
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

Checkbox.displayName = "Checkbox"

export { Checkbox }
