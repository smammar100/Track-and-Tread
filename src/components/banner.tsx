"use client";

import { cn } from "@/lib/utils";
import ArrowTopRight from "@/components/icons/arrow-top-right";

/* ─── Marquee Banner ─── */

function MarqueeBanner({ className }: { className?: string }) {
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="flex items-center gap-4 lg:gap-8 shrink-0">
      <span className="body-md lg:h4 whitespace-nowrap">
        Free shipping on orders over $100
      </span>
      <span className="size-[6px] lg:size-[10px] rounded-full bg-black shrink-0" />
    </span>
  ));

  return (
    <div
      className={cn(
        "bg-[#c5fa1f] border-y border-black overflow-hidden py-2 lg:py-4",
        className
      )}
    >
      <div
        className="flex items-center gap-4 lg:gap-8 w-max"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {items}
      </div>
    </div>
  );
}

/* ─── Form Banner ─── */

function FormBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-[#c5fa1f] border-y border-black overflow-hidden",
        "flex flex-col gap-6 items-start p-4",
        "lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-4",
        className
      )}
    >
      <p className="body-lg lg:body-xl whitespace-normal lg:whitespace-nowrap">
        Be the first to know about new drops and exclusive offers
      </p>

      <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-center lg:w-auto lg:shrink-0">
        {/* Input */}
        <div className="border border-black flex items-center gap-2 p-4 w-full lg:w-[380px]">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="body-lg bg-transparent w-full outline-none placeholder:text-black"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-[#f2f2f2] border border-black flex items-center justify-center gap-2 px-6 py-4 w-full lg:w-auto cursor-pointer hover:bg-[#623cea] hover:border-[#623cea] hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf] active:scale-[0.97]"
        >
          <span className="body-lg whitespace-nowrap">Subscribe</span>
          <ArrowTopRight className="size-[18px]" />
        </button>
      </div>
    </div>
  );
}

/* ─── Unified Banner Export ─── */

type BannerProps = {
  className?: string;
  variant?: "marquee" | "form";
};

export default function Banner({ className, variant = "marquee" }: BannerProps) {
  if (variant === "form") {
    return <FormBanner className={className} />;
  }
  return <MarqueeBanner className={className} />;
}

export { MarqueeBanner, FormBanner };
