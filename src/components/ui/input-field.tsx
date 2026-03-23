"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import ArrowTopRight from "@/components/icons/arrow-top-right"

type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string
  hint?: string
  color?: "black" | "white"
  error?: boolean
  icon?: React.ReactNode | boolean
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      label,
      hint,
      color = "black",
      error = false,
      icon = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isBlack = color === "black"

    /* ── Label colors ── */
    const labelColor = disabled
      ? isBlack
        ? "text-[#969696]"
        : "text-[#787878]"
      : isBlack
        ? "text-black"
        : "text-white"

    /* ── Border colors ── */
    const borderColor = error
      ? "border-[#e01715]"
      : disabled
        ? isBlack
          ? "border-[#969696]"
          : "border-[#787878]"
        : isBlack
          ? "border-black"
          : "border-white"

    /* ── Text / placeholder colors ── */
    const inputText = disabled
      ? isBlack
        ? "text-[#969696] placeholder:text-[#969696]"
        : "text-[#787878] placeholder:text-[#787878]"
      : isBlack
        ? "text-black placeholder:text-black"
        : "text-white placeholder:text-white"

    /* ── Hint colors ── */
    const hintColor = error
      ? "text-[#e01715]"
      : isBlack
        ? "text-[#969696]"
        : "text-[#787878]"

    /* ── Icon color ── */
    const iconColor = disabled
      ? isBlack
        ? "text-[#969696]"
        : "text-[#787878]"
      : isBlack
        ? "text-black"
        : "text-white"

    const renderIcon =
      icon === true ? (
        <ArrowTopRight className={cn("size-[22px] shrink-0", iconColor)} />
      ) : icon ? (
        <span className={cn("shrink-0", iconColor)}>{icon}</span>
      ) : null

    return (
      <div className={cn("flex flex-col gap-2 w-full", className)}>
        {label && (
          <label
            className={cn(
              "text-[20px] font-medium leading-[1.1]",
              labelColor
            )}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center gap-2 border border-solid p-4",
            borderColor
          )}
        >
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              "flex-1 min-w-0 bg-transparent text-[20px] font-medium leading-[1.1] outline-none",
              inputText
            )}
            {...props}
          />
          {renderIcon}
        </div>
        {hint && (
          <p className={cn("text-[20px] font-medium leading-[1.1]", hintColor)}>
            {hint}
          </p>
        )}
      </div>
    )
  }
)

InputField.displayName = "InputField"

export { InputField }
