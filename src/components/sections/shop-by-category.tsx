import { Button } from "@/components/ui/button"
import { ArrowTopRight } from "@/components/icons"

type CategoryItem = {
  label: string
  image?: string
}

type ShopByCategoryProps = {
  categories?: CategoryItem[]
  className?: string
}

const defaultCategories: CategoryItem[] = [
  { label: "Shoes", image: "/images/products/shoes.png" },
  { label: "Apparel", image: "/images/products/apparel.png" },
  { label: "Accessories", image: "/images/products/accessories.png" },
]

function ShopByCategory({ categories = defaultCategories, className }: ShopByCategoryProps) {
  return (
    <section className={className}>
      {/* Section Header */}
      <div className="py-6 lg:py-10 px-4 lg:px-6">
        <h2>Shop by Category</h2>
      </div>

      {/* Category Grid */}
      <div className="flex flex-col lg:flex-row border-t border-black">
        {categories.map((cat, i) => (
          <div key={cat.label} className="contents">
            {i > 0 && <div className="w-full h-px lg:w-px lg:h-auto bg-black shrink-0" />}
            <div
              className="relative flex-1 aspect-square bg-[#d5d5d5] bg-cover bg-center flex items-center justify-center"
              style={cat.image ? { backgroundImage: `url(${cat.image})` } : undefined}
            >
              <Button variant="default" size="default">
                {cat.label}
                <ArrowTopRight className="size-[26px]" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { ShopByCategory }
