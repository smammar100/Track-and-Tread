import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowTopRight } from "@/components/icons"

type Article = {
  title: string
  description: string
  image?: string
}

type StoriesProps = {
  articles?: Article[]
  className?: string
}

const defaultArticles: Article[] = [
  {
    title: "A Sneaker Designed for the Long\u00A0Run",
    description:
      "We break down the technology behind our newest long-distance\u00A0trainer.",
    image: "/images/products/insta-1.png",
  },
  {
    title: "Why Rest Days Boost\u00A0Performance",
    description:
      "Discover why doing nothing is sometimes the most productive thing for your\u00A0body.",
    image: "/images/products/insta-2.png",
  },
  {
    title: "Fueling Up: What to Eat Before You\u00A0Train",
    description:
      "The right foods to boost energy, enhance focus, and sustain\u00A0stamina.",
    image: "/images/products/insta-3.png",
  },
]

function Stories({ articles = defaultArticles, className }: StoriesProps) {
  return (
    <section className={className}>
      {/* Section Header */}
      <div className="py-6 lg:py-10 px-4 lg:px-6">
        <h2>Stories that Move</h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-black">
        {/* Image Row */}
        {articles.map((article, i) => (
          <div
            key={`img-${i}`}
            className={`overflow-hidden border-b border-black ${i < articles.length - 1 ? "lg:border-r" : ""} ${i > 0 ? "border-t lg:border-t-0" : ""}`}
          >
            <div className="relative w-full aspect-[4/3] lg:h-[640px] bg-[#c5c5c5]">
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        ))}

        {/* Info Row */}
        {articles.map((article, i) => (
          <div
            key={`info-${i}`}
            className={`flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 ${i < articles.length - 1 ? "lg:border-r border-black" : ""} ${i > 0 ? "border-t lg:border-t-0 border-black" : ""}`}
          >
            <h4 className="lg:h2 tracking-[-0.04em]">{article.title}</h4>
            <p className="body-lg lg:body-xl text-black max-w-[65ch]">{article.description}</p>
            <div>
              <Button variant="dark" size="default">
                Read More
                <ArrowTopRight className="size-[26px]" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Stories }
