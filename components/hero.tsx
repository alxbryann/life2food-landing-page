import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" aria-label="Hero principal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <header className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium" role="status" aria-live="polite">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Únete al movimiento
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              Convierte el desperdicio de alimentos en oportunidad
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Conéctate con restaurantes, supermercados y granjas locales para rescatar alimentos excedentes. Ahorra
              dinero mientras generas un impacto positivo en nuestro planeta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                Empezar a Salvar Comida
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Ver Cómo Funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Comidas Salvadas</div>
              </div>
              <div className="h-12 w-px bg-border" aria-hidden="true"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Tiendas Asociadas</div>
              </div>
              <div className="h-12 w-px bg-border" aria-hidden="true"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">15K</div>
                <div className="text-sm text-muted-foreground">Usuarios Activos</div>
              </div>
            </div>
          </header>

          <figure className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" aria-hidden="true"></div>
            <img
              src="/fresh-produce-and-food-items-in-sustainable-packag.jpg"
              alt="Comida fresca rescatada del desperdicio - Frutas y verduras frescas en empaque sostenible"
              className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
