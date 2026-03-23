import Link from "next/link";
import Logo from "@/components/logo";
import Banner from "@/components/banner";
import PaymentIcons from "@/components/payment-icons";

const footerColumns = [
  {
    title: "Shop",
    links: ["Shop All", "Women", "Men", "Best Sellers", "New Arrivals", "Latest Drops"],
  },
  {
    title: "Info",
    links: ["Journal", "About", "FAQ", "Contact", "Log In"],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookies Settings",
      "Shipping Policy",
      "Start a Return",
    ],
  },
  {
    title: "Social",
    links: ["Facebook", "Instagram", "Threads", "X (Twitter)", "TikTok"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black overflow-hidden">
      {/* ── Newsletter Banner ── */}
      <Banner variant="form" />

      {/* ── Desktop Link Columns ── */}
      <div className="hidden lg:flex items-start w-full">
        {footerColumns.map((col, i) => (
          <div key={col.title} className="contents">
            {i > 0 && <div className="w-px self-stretch bg-black" />}
            <div className="flex-1 flex flex-col gap-6 p-6 body-xl">
              <p className="text-[#969696] tracking-[-0.96px]">{col.title}</p>
              <div className="flex flex-col gap-4 text-black">
                {col.links.map((link) => (
                  <Link key={link} href="#" className="block w-full transition-colors hover:text-[#623cea] active:opacity-50">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile Link Columns ── */}
      <div className="flex flex-col lg:hidden">
        {footerColumns.map((col) => (
          <div key={col.title} className="border-b border-black last:border-b-0">
            <div className="flex flex-col gap-4 px-4 py-6">
              <p className="body-xl text-[#969696] tracking-[-0.96px]">
                {col.title}
              </p>
              <div className="flex flex-col gap-2 body-lg text-black">
                {col.links.map((link) => (
                  <Link key={link} href="#" className="block w-full transition-colors hover:text-[#623cea] active:opacity-50">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider (desktop) ── */}
      <div className="hidden lg:block border-t border-black" />

      {/* ── Bottom Content — Desktop ── */}
      <div className="hidden lg:flex flex-col gap-8 py-6">
        {/* Copyright + Payments */}
        <div className="flex items-center justify-between px-6">
          <p className="body-md whitespace-nowrap">
            &copy; Track&amp;Tread 2025
          </p>
          <PaymentIcons />
        </div>

        {/* Large Logo */}
        <Logo className="relative w-full h-[231px] overflow-hidden" />
      </div>

      {/* ── Bottom Content — Mobile ── */}
      <div className="flex lg:hidden flex-col gap-8 py-6 border-t border-black">
        <div className="flex flex-col gap-4 px-4">
          <p className="body-md whitespace-nowrap">
            &copy; Track&amp;Tread 2025
          </p>
          <PaymentIcons />
        </div>
        <Logo className="relative w-full h-[47px] overflow-hidden" />
      </div>
    </footer>
  );
}
