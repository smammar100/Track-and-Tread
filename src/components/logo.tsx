import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "black" | "white";
};

export default function Logo({ className, variant = "black" }: LogoProps) {
  const src =
    variant === "white" ? "/images/logo-white.svg" : "/images/logo-black.svg";

  return (
    <div
      className={cn(
        "relative w-[662px] h-[80px] overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt="Track & Tread"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
