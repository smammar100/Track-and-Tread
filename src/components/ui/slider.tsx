"use client"

import { useState, useRef, useCallback, useEffect, type PointerEvent } from "react"
import { cn } from "@/lib/utils"

type SliderProps = {
  className?: string
  label?: string
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
  disabled?: boolean
}

function Slider({
  className,
  label,
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = controlledValue ?? internalValue
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const percent = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))

  const updateFromPointer = useCallback(
    (clientX: number) => {
      const track = trackRef.current
      if (!track || disabled) return
      const rect = track.getBoundingClientRect()
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
      const raw = min + ratio * (max - min)
      const stepped = Math.round(raw / step) * step
      const clamped = Math.min(max, Math.max(min, stepped))
      if (controlledValue === undefined) setInternalValue(clamped)
      onChange?.(clamped)
    },
    [controlledValue, min, max, step, onChange, disabled]
  )

  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      if (disabled) return
      e.preventDefault()
      dragging.current = true
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      updateFromPointer(e.clientX)
    },
    [disabled, updateFromPointer]
  )

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging.current) return
      updateFromPointer(e.clientX)
    },
    [updateFromPointer]
  )

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  /* keyboard support */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return
      let next = value
      if (e.key === "ArrowRight" || e.key === "ArrowUp") next = value + step
      else if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = value - step
      else if (e.key === "Home") next = min
      else if (e.key === "End") next = max
      else return
      e.preventDefault()
      const clamped = Math.min(max, Math.max(min, next))
      if (controlledValue === undefined) setInternalValue(clamped)
      onChange?.(clamped)
    },
    [value, step, min, max, controlledValue, onChange, disabled]
  )

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {label && (
        <span className="text-[16px] font-medium leading-[1.1] text-black">
          {label}
        </span>
      )}
      <div
        ref={trackRef}
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled || undefined}
        aria-label={label}
        className={cn(
          "relative w-full pb-[6px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black/20",
          disabled && "cursor-default opacity-50"
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
      >
        {/* Track background */}
        <div className="absolute inset-x-0 bottom-0 h-[6px] bg-[#dcdcdc]" />
        {/* Track fill */}
        <div
          className="absolute left-0 bottom-0 h-[6px] bg-black"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export { Slider }
