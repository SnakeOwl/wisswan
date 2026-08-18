import { Beef, Leaf, Timer } from "lucide-react"

const features = [
  {
    icon: Beef,
    title: "Premium Beef",
    description: "Locally sourced, never frozen, ground fresh every single morning.",
  },
  {
    icon: Leaf,
    title: "Fresh Toppings",
    description: "Crisp produce and house-made sauces prepped daily in our kitchen.",
  },
  {
    icon: Timer,
    title: "Flame-Grilled",
    description: "Seared over an open flame for that unmistakable smoky char.",
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Us</p>
          <h2 className="text-balance font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Quality you can taste
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/30 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
