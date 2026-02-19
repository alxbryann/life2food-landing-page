import { Search, ShoppingBag, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Descubre",
      description: "Restaurantes, panaderías y supermercados cerca de ti con excedentes.",
    },
    {
      number: "2",
      icon: ShoppingBag,
      title: "Reserva y recoge",
      description: "Precios con descuento. Tú eliges cuándo recoger.",
    },
    {
      number: "3",
      icon: Heart,
      title: "Ahorra e impacta",
      description: "Buenas comidas, menos desperdicio, apoyo a lo local.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="how-it-works-heading" className="text-4xl lg:text-5xl font-bold mb-3 text-balance">Cómo funciona life2food</h2>
          <p className="text-muted-foreground">En 3 pasos: descubre, reserva, recoge.</p>
        </header>

        <ol className="grid md:grid-cols-3 gap-8" role="list">
          {steps.map((step, index) => (
            <li key={index}>
              <Card className="relative p-8 border-2 hover:border-primary transition-colors bg-card h-full">
                <div className="mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10" aria-hidden="true">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-6xl font-bold text-muted opacity-20" aria-hidden="true">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
