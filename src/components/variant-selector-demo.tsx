"use client";

import { useState } from "react";
import {
  SizeVariant,
  ColorVariant,
  ShoeSizeVariant,
  VariantGroup,
} from "@/components/variant-selector";

export default function VariantSelectorDemo() {
  const [selectedSize, setSelectedSize] = useState<number>(11);
  const [selectedColor, setSelectedColor] = useState<string>("#c5fa1f");
  const [selectedShoe, setSelectedShoe] = useState<number>(36);

  return (
    <div className="flex flex-col gap-14">
      {/* ── Number Variant ── */}
      <div className="flex flex-col gap-6">
        <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
          Number variant — individual states
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <SizeVariant value={11} checked />
            <SizeVariant value={11} checked={false} />
            <SizeVariant value={11} disabled />
            <SizeVariant value={11} checked={false} disabled />
          </div>
          <div className="flex items-center gap-6 body-sm text-[#787878]">
            <span>Checked</span>
            <span>Unchecked</span>
            <span>Checked+Disabled</span>
            <span>Disabled</span>
          </div>
        </div>
      </div>

      {/* ── Color Variant ── */}
      <div className="flex flex-col gap-6">
        <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
          Color variant — individual states
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <ColorVariant color="#c5fa1f" checked />
            <ColorVariant color="#c5fa1f" checked={false} />
            <ColorVariant color="#c5fa1f" checked disabled />
            <ColorVariant color="#c5fa1f" checked={false} disabled />
          </div>
          <div className="flex items-center gap-6 body-sm text-[#787878]">
            <span>Checked</span>
            <span>Unchecked</span>
            <span>Checked+Disabled</span>
            <span>Disabled</span>
          </div>
        </div>
      </div>

      {/* ── Shoe Size Variant — Large ── */}
      <div className="flex flex-col gap-6">
        <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
          Shoe size variant — Large
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <ShoeSizeVariant value={36} size="large" checked />
            <ShoeSizeVariant value={36} size="large" checked={false} />
            <ShoeSizeVariant value={36} size="large" disabled />
            <ShoeSizeVariant value={36} size="large" checked={false} disabled />
          </div>
          <div className="flex items-center gap-6 body-sm text-[#787878]">
            <span>Checked</span>
            <span>Unchecked</span>
            <span>Checked+Disabled</span>
            <span>Disabled</span>
          </div>
        </div>
      </div>

      {/* ── Shoe Size Variant — Small ── */}
      <div className="flex flex-col gap-6">
        <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
          Shoe size variant — Small
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <ShoeSizeVariant value={36} size="small" checked />
            <ShoeSizeVariant value={36} size="small" checked={false} />
            <ShoeSizeVariant value={36} size="small" disabled />
            <ShoeSizeVariant value={36} size="small" checked={false} disabled />
          </div>
          <div className="flex items-center gap-6 body-sm text-[#787878]">
            <span>Checked</span>
            <span>Unchecked</span>
            <span>Checked+Disabled</span>
            <span>Disabled</span>
          </div>
        </div>
      </div>

      {/* ── Interactive demos ── */}
      <div className="border-t border-black/10 pt-10 flex flex-col gap-10">
        <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
          Interactive — VariantGroup
        </p>

        {/* Size group */}
        <VariantGroup
          label="Size"
          type="number"
          selected={selectedSize}
          onChange={setSelectedSize}
          options={[
            { value: 8 },
            { value: 9 },
            { value: 10 },
            { value: 11 },
            { value: 12 },
            { value: 13, disabled: true },
          ]}
        />

        {/* Color group */}
        <VariantGroup
          label="Color"
          type="color"
          selected={selectedColor}
          onChange={setSelectedColor}
          options={[
            { value: "#c5fa1f", color: "#c5fa1f" },
            { value: "#000000", color: "#000000" },
            { value: "#ffffff", color: "#ffffff" },
            { value: "#3b82f6", color: "#3b82f6" },
            { value: "#ef4444", color: "#ef4444", disabled: true },
          ]}
        />

        {/* Shoe size group */}
        <VariantGroup
          label="Shoe Size"
          type="shoe-size"
          size="small"
          selected={selectedShoe}
          onChange={setSelectedShoe}
          options={[
            { value: 35 },
            { value: 36 },
            { value: 37 },
            { value: 38 },
            { value: 39 },
            { value: 40, disabled: true },
            { value: 41 },
            { value: 42 },
          ]}
        />
      </div>
    </div>
  );
}
