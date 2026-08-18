import { SiteHeader } from "./components/site-header"
import { HeroSection } from "./components/hero-section"
import { MenuSection } from "./components/menu-section"
import { StorySection } from "./components/story-section"
import { CtaFooter } from "./components/cta-footer"
import { Suspense } from "react"
import { Metadata } from "next"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"



export const metadata: Metadata = {
    title: "BURGER CUCUMBER",
    description: "Стильное и быстрое SPA-приложение, которое переворачивает представление о заказе уличной еды. Сервис создан для тех, кто ценит свое время и обожает сочные, кастомные бургеры с хрустящими фирменными огурчиками.",
    keywords: [],
    generator: 'v0.app',
    openGraph: getDefaultOpenGraph({
        description: "Раздел с ссылками на другие разделы математики"
    }),
}


export default async function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <MenuSection />
      <StorySection />
      
      <Suspense>
        <CtaFooter />
      </Suspense>
    </main>
  )
}
