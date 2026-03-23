import Banner from "@/components/banner"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { ProductCarousel, type Product } from "@/components/sections/product-carousel"
import { CuratedDrops } from "@/components/sections/curated-drops"
import { ShopByCategory } from "@/components/sections/shop-by-category"
import { Stories } from "@/components/sections/stories"
import { Testimonials } from "@/components/sections/testimonials"
import { InstagramGrid } from "@/components/sections/instagram-grid"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

/* ─── Product Data ─── */

const bestSellers: Product[] = [
  {
    name: "Carbon Pulse Blackout",
    price: "$343.99",
    compareAtPrice: "$529.99",
    image: "/images/products/carbon-pulse.png",
    badge: "Best Seller",
    saleBadge: "-20%",
    variants: [
      { color: "#3c3c3c", selected: true },
      { color: "#bdc7d1" },
      { color: "#f9eb3d" },
      { color: "#f3efe9" },
    ],
  },
  {
    name: "Nimbus Glide Icecore",
    price: "$529.99",
    image: "/images/products/nimbus-glide.png",
    badge: "Best Seller",
    variants: [
      { color: "#c3c6c5", selected: true },
      { color: "#e1e4e3" },
    ],
  },
  {
    name: "Voltstorm Radiance",
    price: "$529.99",
    image: "/images/products/voltstorm.png",
    badge: "Best Seller",
    variants: [
      { color: "#dbd5d0", selected: true },
      { color: "#f92131" },
      { color: "#f9eb3d" },
    ],
  },
  {
    name: "Lunar Flow Hyperlime",
    price: "$529.99",
    image: "/images/products/lunar-flow.png",
    badge: "Best Seller",
    variants: [
      { color: "#f9eb3d", selected: true },
      { color: "#f92131" },
    ],
  },
  {
    name: "Ashtrail Coregrey X",
    price: "$529.99",
    image: "/images/products/ashtrail.png",
    badge: "Best Seller",
    variants: [
      { color: "#a6a3a4", selected: true },
      { color: "#282929" },
      { color: "#dfdbd5" },
    ],
  },
]

const interestedIn: Product[] = [
  {
    name: "Carbon Pulse Blackout",
    price: "$343.99",
    compareAtPrice: "$529.99",
    image: "/images/products/carbon-pulse.png",
    saleBadge: "-20%",
    variants: [
      { color: "#3c3c3c", selected: true },
      { color: "#bdc7d1" },
      { color: "#f9eb3d" },
      { color: "#f3efe9" },
    ],
  },
  {
    name: "Nimbus Glide Icecore",
    price: "$529.99",
    image: "/images/products/nimbus-glide.png",
    variants: [
      { color: "#c3c6c5", selected: true },
      { color: "#e1e4e3" },
    ],
  },
  {
    name: "Voltstorm Radiance",
    price: "$529.99",
    image: "/images/products/voltstorm.png",
    variants: [
      { color: "#dbd5d0", selected: true },
      { color: "#f92131" },
      { color: "#f9eb3d" },
    ],
  },
  {
    name: "Lunar Flow Hyperlime",
    price: "$529.99",
    image: "/images/products/lunar-flow.png",
    variants: [
      { color: "#f9eb3d", selected: true },
      { color: "#f92131" },
    ],
  },
  {
    name: "Ashtrail Coregrey X",
    price: "$529.99",
    image: "/images/products/ashtrail.png",
    variants: [
      { color: "#a6a3a4", selected: true },
      { color: "#282929" },
      { color: "#dfdbd5" },
    ],
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f2f2f2]">
      {/* Header */}
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero */}
        <Hero
          headline="Limited Edition Release: Where Style Meets&nbsp;Utility"
          buttonText="View Collection"
          backgroundImage="/images/promo-shoe.jpg"
        />

        {/* Marquee Banner */}
        <Banner variant="marquee" />

        {/* Best Sellers */}
        <ScrollReveal animation="fade-up">
          <ProductCarousel title="Best Sellers" products={bestSellers} />
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-black w-full" />

        {/* Shop Curated Drops */}
        <ScrollReveal animation="fade-up">
          <CuratedDrops />
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-black w-full" />

        {/* Shop by Category */}
        <ScrollReveal animation="fade-up">
          <ShopByCategory />
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-black w-full" />

        {/* You May Be Interested In */}
        <ScrollReveal animation="fade-up">
          <ProductCarousel title="You May Be Interested In" products={interestedIn} />
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-black w-full" />

        {/* Stories that Move */}
        <ScrollReveal animation="fade-up">
          <Stories />
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-black w-full" />

        {/* From the Fam */}
        <ScrollReveal animation="fade-up">
          <Testimonials />
        </ScrollReveal>

        {/* Follow Us on Instagram */}
        <ScrollReveal animation="fade-up">
          <InstagramGrid
            images={[
              "/images/products/insta-1.png",
              "/images/products/insta-3.png",
              "/images/products/built-for-every-rep.png",
              "/images/products/shop-men.png",
            ]}
          />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
