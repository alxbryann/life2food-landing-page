import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Impact } from "@/components/impact"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Impact />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
