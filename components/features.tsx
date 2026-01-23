import { MapPin, Bell, Award, Shield, Clock, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Descubrimiento Local",
      description: "Encuentra tiendas y restaurantes participantes en tu vecindario",
    },
    {
      icon: Bell,
      title: "Alertas en Tiempo Real",
      description: "Recibe notificaciones cuando tus lugares favoritos tengan nuevos productos disponibles",
    },
    {
      icon: Award,
      title: "Programa de Recompensas",
      description: "Gana puntos con cada compra y desbloquea beneficios exclusivos",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Todos los alimentos cumplen con estándares de seguridad y requisitos de calidad",
    },
    {
      icon: Clock,
      title: "Recogida Flexible",
      description: "Elige horarios de recogida que se ajusten a tu agenda",
    },
    {
      icon: Sparkles,
      title: "Bolsas Sorpresa",
      description: "Descubre bolsas misteriosas llenas de productos excedentes a excelentes precios",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Todo lo que necesitas para rescatar alimentos
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Nuestra plataforma hace que sea simple y conveniente salvar alimentos mientras apoyas a tu comunidad local.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg"
              role="listitem"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 mb-5 group-hover:scale-110 transition-transform" aria-hidden="true">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
