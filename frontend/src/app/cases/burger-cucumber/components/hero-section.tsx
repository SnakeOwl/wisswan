import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" />
            Voted #1 Burger in Town
          </span>

          <h1 className="text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            Big, juicy, <span className="text-primary">flame-grilled</span> burgers
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Hand-pressed patties, locally sourced beef, and buns toasted to golden perfection. Every bite is built to make
            you come back for more.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="text-base">
              Order Online
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 text-base">
              View Menu
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-display text-2xl font-bold text-foreground">15+</p>
              <p>Signature burgers</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">100%</p>
              <p>Fresh, never frozen</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">30min</p>
              <p>Fast delivery</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <img
            src="/images/storage/cases/burger_cucumber/hero-burger.png"
            alt="A juicy double cheeseburger with melted cheese and fresh toppings"
            className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
