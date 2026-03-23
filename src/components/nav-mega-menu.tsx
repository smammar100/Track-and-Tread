import Image from "next/image";
import Link from "next/link";
import ArrowTopRight from "@/components/icons/arrow-top-right";

const shopLinks = ["Shop All", "Shoes", "Apparel", "Accessories"];
const categoryLinks = [
  "Women",
  "Men",
  "Kids",
  "Best Sellers",
  "New Arrivals",
  "Latest Drops",
];

type PromoCardProps = {
  image: string;
  text: string;
};

function PromoCard({ image, text }: PromoCardProps) {
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <div className="relative h-[480px] w-full">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="border-t border-black" />
      <div className="flex items-center gap-4 px-4 py-6">
        <p className="flex-1 body-xl tracking-[-0.96px]">{text}</p>
        <ArrowTopRight className="size-8 shrink-0" />
      </div>
    </div>
  );
}

export default function NavMegaMenu() {
  return (
    <nav className="hidden lg:flex bg-[#f2f2f2] border-b border-black items-start w-full">
      {/* Column 1 — Shop links */}
      <div className="flex-1 flex flex-col gap-4 p-6 body-xl">
        {shopLinks.map((link) => (
          <Link key={link} href="#" className="block w-full transition-colors hover:text-[#623cea] active:opacity-50">
            {link}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-black" />

      {/* Column 2 — Category links */}
      <div className="flex-1 flex flex-col gap-4 p-6 body-xl">
        {categoryLinks.map((link) => (
          <Link key={link} href="#" className="block w-full transition-colors hover:text-[#623cea] active:opacity-50">
            {link}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-black" />

      {/* Promo Card 1 */}
      <PromoCard
        image="/images/promo-shoe.jpg"
        text="Your new training partner has arrived. Lightweight. Durable. Powerful."
      />

      {/* Divider */}
      <div className="w-px self-stretch bg-black" />

      {/* Promo Card 2 */}
      <PromoCard
        image="/images/promo-shoe.jpg"
        text="Designed for athletes, loved by everyone. The sneakers redefining style."
      />
    </nav>
  );
}
