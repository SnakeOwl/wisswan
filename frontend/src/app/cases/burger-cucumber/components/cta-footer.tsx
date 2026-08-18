import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { connection } from 'next/server'
import Link from "next/link";

export async function CtaFooter() {
  await connection();

  return (
    <>
      <section id="locations" className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-balance font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
            Hungry yet?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Order online for pickup or delivery, or swing by and grab a bite. Your next favorite burger is waiting.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-base">
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Find a Location
            </Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-border bg-background py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
          <Link href="#" className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold uppercase tracking-wide">BURGER CUCUMBER</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">WissWan</Link>
            <Link href="#menu" className="hover:text-primary">Menu</Link>
            <Link href="#story" className="hover:text-primary">Our Story</Link>
            <Link href="#locations" className="hover:text-primary">Locations</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} BURGER CUCUMBER</p>
        </div>
      </footer>
    </>
  )
}
