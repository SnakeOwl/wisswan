import { Button } from "@/components/ui/button"

const burgers = [
  {
    name: "The Classic",
    description: "Beef patty, American cheese, lettuce, tomato, house sauce on a sesame bun.",
    price: "$9",
    image: "/images/storage/cases/burger_cucumber/burger-classic.png",
    tag: "Fan Favorite",
  },
  {
    name: "Smoky Bacon",
    description: "Crispy bacon, cheddar, caramelized onions, and smoky BBQ glaze.",
    price: "$12",
    image: "/images/storage/cases/burger_cucumber/burger-bacon.png",
    tag: "Bestseller",
  },
  {
    name: "Garden Veggie",
    description: "Plant-based patty, avocado, arugula, tomato, and vegan cheese.",
    price: "$11",
    image: "/images/storage/cases/burger_cucumber/burger-veggie.png",
    tag: "Vegan",
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our Menu</p>
          <h2 className="text-balance font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Crafted for cravings
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every burger is made to order with the freshest ingredients. Here are a few crowd favorites.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {burgers.map((burger) => (
            <article
              key={burger.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={burger.image || "/placeholder.svg"}
                  alt={burger.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {burger.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{burger.name}</h3>
                  <span className="font-display text-2xl font-bold text-primary">{burger.price}</span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{burger.description}</p>
                <Button variant="outline" className="mt-6 w-full border-foreground/20">
                  Add to Order
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
