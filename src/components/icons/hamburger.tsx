import { cn } from "@/lib/utils";

export default function Hamburger({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 8H21V10H3V8ZM3 14H21V16H3V14Z" fill="currentColor" />
    </svg>
  );
}
