"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import Hamburger from "@/components/icons/hamburger";
import MobileNav from "@/components/mobile-nav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ── Desktop Nav ── */}
      <header className="hidden lg:flex bg-[#f2f2f2] border-b border-black items-center justify-between h-[60px] px-6">
        <Logo className="relative w-[232px] h-[28px] overflow-hidden" />
        <Link href="#" className="body-xl transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Shop</Link>
        <Link href="#" className="body-xl transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Journal</Link>
        <Link href="#" className="body-xl transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">About</Link>
        <Link href="#" className="body-xl transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Search</Link>
        <Link href="#" className="body-xl transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Log In</Link>
        <Link href="#" className="body-xl transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Cart (0)</Link>
      </header>

      {/* ── Mobile Nav ── */}
      <header className="flex lg:hidden bg-[#f2f2f2] border-b border-black items-center justify-between h-[56px] px-4">
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer rounded-sm transition-colors hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
            aria-label="Toggle menu"
          >
            <Hamburger className="size-6" />
          </button>
          <Logo className="relative w-[134px] h-[16px] overflow-hidden" />
        </div>
        <div className="flex gap-2 items-center body-lg whitespace-nowrap">
          <Link href="#" className="transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Search</Link>
          <Link href="#" className="transition-colors hover:text-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-50">Cart (0)</Link>
        </div>
      </header>

      {/* ── Mobile Slide-over ── */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
