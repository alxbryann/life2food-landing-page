import { Sprout, Users, Building2 } from "lucide-react"

export function Impact() {
  const impacts = [
    {
      icon: Sprout,
      title: "Impacto Ambiental",
      description:
        "Cada comida salvada reduce las emisiones de gases de efecto invernadero y conserva recursos preciosos utilizados en la producción de alimentos.",
      stat: "125 toneladas",
      statLabel: "CO₂ evitado",
    },
    {
      icon: Users,
      title: "Impacto Comunitario",
      description:
        "Conecta vecinos con negocios locales mientras haces que las opciones sostenibles sean accesibles para todos.",
      stat: "15,000",
      statLabel: "Miembros activos",
    },
    {
      icon: Building2,
      title: "Impacto Empresarial",
      description:
        "Ayuda a restaurantes y tiendas locales a reducir el desperdicio mientras generan valor del inventario excedente.",
      stat: "200+",
      statLabel: "Ubicaciones asociadas",
    },
  ]

  return (
    <section id="impact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Creando impacto real juntos</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Nuestra misión va más allá de salvar alimentos. Estamos construyendo un futuro sostenible para las
            comunidades y nuestro planeta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative p-8 lg:p-10 space-y-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10">
                  <impact.icon className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">{impact.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{impact.description}</p>

                  <div className="pt-6 border-t border-border">
                    <div className="text-3xl font-bold text-primary mb-1">{impact.stat}</div>
                    <div className="text-sm text-muted-foreground">{impact.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
