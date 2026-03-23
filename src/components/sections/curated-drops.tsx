import { Button } from "@/components/ui/button"
import { ArrowTopRight } from "@/components/icons"

type CuratedDropsProps = {
  className?: string
}

function CuratedDrops({ className }: CuratedDropsProps) {
  return (
    <section className={className}>
      {/* Section Header */}
      <div className="py-6 lg:py-10 px-4 lg:px-6">
        <h2>Shop Curated Drops</h2>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black">
        {/* Top-left: Shop Women */}
        <div
          className="relative aspect-square bg-[#e5e5e5] bg-cover bg-center flex items-center justify-center lg:border-r lg:border-b border-black"
          style={{ backgroundImage: "url(/images/products/shop-women.png)" }}
        >
          <Button variant="default" size="default">
            Shop Women
            <ArrowTopRight className="size-[26px]" />
          </Button>
        </div>

        {/* Top-right: Shop Men */}
        <div
          className="relative aspect-square bg-[#d5d5d5] bg-cover bg-center flex items-center justify-center border-t lg:border-t-0 lg:border-b border-black"
          style={{ backgroundImage: "url(/images/products/shop-men.png)" }}
        >
          <Button variant="default" size="default">
            Shop Men
            <ArrowTopRight className="size-[26px]" />
          </Button>
        </div>

        {/* Bottom-left: Image */}
        <div
          className="aspect-square bg-[#ccc] bg-cover bg-center border-t lg:border-t-0 lg:border-r border-black"
          style={{ backgroundImage: "url(/images/products/built-for-every-rep.png)" }}
        />

        {/* Bottom-right: Content */}
        <div className="flex flex-col gap-6 justify-center p-4 lg:p-6 border-t lg:border-t-0 border-black">
          <div className="flex flex-col gap-4">
            <h3>Built for Every Rep</h3>
            <p className="body-lg lg:body-xl text-black">
              From warm-ups to max sets, our training collection delivers comfort, support, and style that keeps up with your grind.
            </p>
          </div>
          <Button variant="dark" size="default">
            Shop Training Gear
            <ArrowTopRight className="size-[26px]" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export { CuratedDrops }
