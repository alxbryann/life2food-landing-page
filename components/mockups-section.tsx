import { Search, CreditCard, MapPin } from "lucide-react"

const cards = [
  {
    icon: Search,
    iconColor: "text-primary",
    bgClass: "from-primary/10 to-primary/5 border-primary/20",
    title: "Descubre ofertas",
    description:
      "Explora restaurantes cercanos con comida deliciosa a precios increíbles",
  },
  {
    icon: CreditCard,
    iconColor: "text-accent-warm",
    bgClass: "from-accent-warm/10 to-accent-warm/5 border-accent-warm/20",
    title: "Reserva y paga",
    description: "Reserva tu pack sorpresa en segundos con pago seguro integrado",
  },
  {
    icon: MapPin,
    iconColor: "text-primary",
    bgClass: "from-primary/10 to-primary/5 border-primary/20",
    title: "Recoge y disfruta",
    description: "Pasa por el local en el horario indicado y disfruta tu comida sorpresa",
  },
]

export function MockupsSection() {
  return (
    <section className="py-24 relative z-10 bg-background" aria-labelledby="mockups-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 id="mockups-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Una app, <span className="text-primary">miles de oportunidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Life2Food transforma la manera en que comes y cuidas el planeta
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {cards.map(({ icon: Icon, iconColor, bgClass, title, description }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-3xl p-9 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-3 hover:border-primary/30 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-warm scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                aria-hidden
              />
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${bgClass} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}
              >
                <Icon className={`h-8 w-8 ${iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center relative z-10">{title}</h3>
              <p className="text-muted-foreground text-center relative z-10">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
