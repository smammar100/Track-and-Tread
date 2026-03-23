import { cn } from "@/lib/utils"

type Testimonial = {
  quote: string
  name: string
  location: string
}

type TestimonialsProps = {
  testimonials?: Testimonial[]
  className?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "These are hands-down the most comfortable sneakers I\u2019ve ever trained in. Zero break-in time, perfect\u00A0fit.",
    name: "Mark D.",
    location: "Toronto",
  },
  {
    quote:
      "I\u2019m a personal trainer and I recommend this gear to all my clients. It holds up through every type of\u00A0workout.",
    name: "Lauren K.",
    location: "San Diego",
  },
  {
    quote:
      "The shipping was lightning fast\u00A0\u2014 and the packaging felt premium. You can tell they care about every\u00A0detail.",
    name: "Andre V.",
    location: "Austin",
  },
]

function Testimonials({ testimonials = defaultTestimonials, className }: TestimonialsProps) {
  return (
    <section className={className}>
      {/* Section Header */}
      <div className="py-6 lg:py-10 px-4 lg:px-6">
        <h2>From the Fam</h2>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-col lg:flex-row border-t border-b border-black">
        {testimonials.map((t, i) => (
          <div key={i} className="contents">
            {i > 0 && <div className="w-full h-px lg:w-px lg:h-auto bg-black shrink-0" />}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
              <p className="h5 lg:h4 tracking-[-0.04em] text-black max-w-[65ch]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="body-lg text-[#969696]">
                {t.name}, {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Testimonials }
