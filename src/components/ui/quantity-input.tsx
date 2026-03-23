"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Minus, Plus } from "@/components/icons"

type QuantityInputProps = {
  className?: string
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
}

function QuantityInput({
  className,
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 99,
  onChange,
}: QuantityInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = controlledValue ?? internalValue

  const setValue = useCallback(
    (next: number) => {
      const clamped = Math.min(max, Math.max(min, next))
      if (controlledValue === undefined) setInternalValue(clamped)
      onChange?.(clamped)
    },
    [controlledValue, min, max, onChange]
  )

  return (
    <div className={cn("inline-flex items-center", className)}>
      <button
        type="button"
        onClick={() => setValue(value - 1)}
        disabled={value <= min}
        className="flex items-center pl-2 py-2 text-black disabled:text-[#969696] transition-colors rounded-sm hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
        aria-label="Decrease quantity"
      >
        <Minus className="size-[18px]" />
      </button>
      <div className="flex items-center justify-center w-[42px] p-2">
        <span className="text-[16px] font-medium leading-[1.1] text-black text-center tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setValue(value + 1)}
        disabled={value >= max}
        className="flex items-center pr-2 py-2 text-black disabled:text-[#969696] transition-colors rounded-sm hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
        aria-label="Increase quantity"
      >
        <Plus className="size-[18px]" />
      </button>
    </div>
  )
}

export { QuantityInput }
