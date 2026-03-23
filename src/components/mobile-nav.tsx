"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "@/components/icons/plus";
import Minus from "@/components/icons/minus";
import ArrowTopRight from "@/components/icons/arrow-top-right";

const shopSubLinks = [
  "Shop All",
  "Shoes",
  "Apparel",
  "Accessories",
  "Women",
  "Men",
  "Kids",
  "Best Sellers",
  "New Arrivals",
  "Latest Drops",
];

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [shopExpanded, setShopExpanded] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-[350px] bg-[#f2f2f2] border-r border-black flex flex-col overflow-y-auto transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Links */}
        <div className="flex flex-col gap-6 pt-6 flex-1">
          {/* Shop (expandable) */}
          <button
            type="button"
            className="flex items-center gap-2 px-4 w-full cursor-pointer transition-colors hover:bg-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf]"
            onClick={() => setShopExpanded(!shopExpanded)}
          >
            <span
              className={`flex-1 text-left body-xl ${
                shopExpanded ? "text-[#623cea]" : "text-black"
              }`}
            >
              Shop
            </span>
            {shopExpanded ? (
              <Minus className="size-[26px] shrink-0" />
            ) : (
              <Plus className="size-[26px] shrink-0" />
            )}
          </button>

          {/* Expanded sub-links */}
          {shopExpanded && (
            <div className="flex flex-col gap-4 w-full">
              {shopSubLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="body-md px-8 w-full block transition-colors hover:text-[#623cea] active:opacity-50"
                >
                  {link}
                </Link>
              ))}
            </div>
          )}

          {/* Promo card (when expanded) */}
          {shopExpanded && (
            <div className="flex flex-col w-full">
              <div className="border-t border-black" />
              <div className="relative h-[350px] w-full">
                <Image
                  src="/images/promo-shoe.jpg"
                  alt="Promo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-black" />
              <div className="flex items-center gap-4 px-4 py-6">
                <p className="flex-1 body-md tracking-[-0.64px]">
                  Your new training partner has arrived. Lightweight. Durable.&nbsp;Powerful.
                </p>
                <ArrowTopRight className="size-6 shrink-0" />
              </div>
              <div className="border-t border-black" />
            </div>
          )}

          {/* Journal */}
          <Link href="#" className="body-xl px-4 w-full block transition-colors hover:text-[#623cea] active:opacity-50">
            Journal
          </Link>

          {/* About */}
          <Link href="#" className="body-xl px-4 w-full block transition-colors hover:text-[#623cea] active:opacity-50">
            About
          </Link>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6 px-4 pb-6 pt-6">
          {/* Log In button */}
          <button
            type="button"
            className="bg-black border border-[#f2f2f2] text-white body-lg flex items-center justify-center px-6 py-4 w-full cursor-pointer transition-all hover:bg-[#623cea] hover:border-[#623cea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-[#4f2fbf] active:scale-[0.97]"
          >
            Log In
          </button>

          {/* Create Account */}
          <div className="flex flex-col gap-4 items-center w-full">
            <p className="body-md text-[#969696] text-center w-full">
              Don&rsquo;t have an&nbsp;account?
            </p>
            <button
              type="button"
              className="bg-[#f2f2f2] border border-black text-black body-lg flex items-center justify-center px-6 py-4 w-full cursor-pointer transition-all hover:bg-[#623cea] hover:border-[#623cea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-[#4f2fbf] active:scale-[0.97]"
            >
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
