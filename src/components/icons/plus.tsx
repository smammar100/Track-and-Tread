import { cn } from "@/lib/utils";

export default function Plus({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="currentColor" />
    </svg>
  );
}
