"use client";

import { cn } from "@/lib/utils";

/* ─── Size Variant (Number) ─── */

type SizeVariantProps = {
  value: string | number;
  checked?: boolean;
  disabled?: boolean;
  size?: "large" | "small";
  onClick?: () => void;
  className?: string;
};

function SizeVariant({
  value,
  checked = false,
  disabled = false,
  size = "large",
  onClick,
  className,
}: SizeVariantProps) {
  const isLarge = size === "large";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center border text-center body-lg transition-colors cursor-pointer select-none",
        isLarge ? "px-8 py-4" : "px-4 py-2",
        // States
        disabled && !checked && "border-[#dcdcdc] text-[#b4b4b4] cursor-not-allowed",
        disabled && checked && "border-[#b4b4b4] text-[#b4b4b4] cursor-not-allowed",
        !disabled && !checked && "border-[#c8c8c8] text-black hover:bg-[#f2f2f2] hover:border-[#c8c8c8]",
        !disabled && checked && "border-black text-black hover:bg-[#f2f2f2]",
        className
      )}
    >
      <span className={cn("body-xl leading-[1.1]", isLarge ? "text-[20px]" : "text-[20px]")}>
        {value}
      </span>

      {/* Strikethrough line for disabled + unchecked */}
      {disabled && !checked && (
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="block h-px w-[140%] bg-[#dcdcdc]"
            style={{ transform: "rotate(-33deg)" }}
          />
        </span>
      )}
    </button>
  );
}

/* ─── Color Variant (Swatch) ─── */

type ColorVariantProps = {
  color: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

function ColorVariant({
  color,
  checked = false,
  disabled = false,
  onClick,
  className,
}: ColorVariantProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "relative size-[42px] transition-all cursor-pointer select-none",
        checked && !disabled && "border border-black",
        checked && disabled && "border border-[#b4b4b4]",
        !checked && !disabled && "border-0",
        disabled && "cursor-not-allowed",
        className
      )}
      style={{
        backgroundColor: disabled
          ? `color-mix(in srgb, ${color} 50%, white)`
          : color,
      }}
    >
      {/* Strikethrough line for disabled + unchecked */}
      {disabled && !checked && (
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="block h-px w-[140%] bg-[#b4b4b4]"
            style={{ transform: "rotate(-45deg)" }}
          />
        </span>
      )}
    </button>
  );
}

/* ─── Shoe Size Variant (Large product selector) ─── */

type ShoeSizeVariantProps = {
  value: string | number;
  checked?: boolean;
  disabled?: boolean;
  size?: "large" | "small";
  onClick?: () => void;
  className?: string;
};

function ShoeSizeVariant({
  value,
  checked = false,
  disabled = false,
  size = "large",
  onClick,
  className,
}: ShoeSizeVariantProps) {
  const isLarge = size === "large";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center border text-center transition-colors cursor-pointer select-none",
        isLarge ? "px-8 py-4" : "px-4 py-2",
        disabled && !checked && "border-[#dcdcdc] text-[#b4b4b4] cursor-not-allowed",
        disabled && checked && "border-[#c8c8c8] text-[#b4b4b4] cursor-not-allowed",
        !disabled && !checked && "border-[#c8c8c8] text-black hover:bg-[#f2f2f2] hover:border-[#c8c8c8]",
        !disabled && checked && "border-black text-black hover:bg-[#f2f2f2]",
        className
      )}
    >
      <span className="body-lg whitespace-nowrap">{value}</span>

      {/* Strikethrough for disabled + unchecked */}
      {disabled && !checked && (
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="block h-px bg-[#dcdcdc]"
            style={{
              width: isLarge ? "102px" : "66px",
              transform: isLarge ? "rotate(-31deg)" : "rotate(-34deg)",
            }}
          />
        </span>
      )}
    </button>
  );
}

/* ─── Grouped selector ─── */

type VariantGroupProps<T extends string | number> = {
  label?: string;
  options: {
    value: T;
    disabled?: boolean;
    color?: string;
  }[];
  selected?: T;
  onChange?: (value: T) => void;
  type?: "number" | "color" | "shoe-size";
  size?: "large" | "small";
  className?: string;
};

function VariantGroup<T extends string | number>({
  label,
  options,
  selected,
  onChange,
  type = "number",
  size = "large",
  className,
}: VariantGroupProps<T>) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label && (
        <p className="body-md text-[#787878]">{label}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isChecked = selected === opt.value;

          if (type === "color") {
            return (
              <ColorVariant
                key={String(opt.value)}
                color={opt.color ?? "#c5fa1f"}
                checked={isChecked}
                disabled={opt.disabled}
                onClick={() => onChange?.(opt.value)}
              />
            );
          }

          if (type === "shoe-size") {
            return (
              <ShoeSizeVariant
                key={String(opt.value)}
                value={opt.value}
                checked={isChecked}
                disabled={opt.disabled}
                size={size}
                onClick={() => onChange?.(opt.value)}
              />
            );
          }

          return (
            <SizeVariant
              key={String(opt.value)}
              value={opt.value}
              checked={isChecked}
              disabled={opt.disabled}
              size={size}
              onClick={() => onChange?.(opt.value)}
            />
          );
        })}
      </div>
    </div>
  );
}

export {
  SizeVariant,
  ColorVariant,
  ShoeSizeVariant,
  VariantGroup,
};
