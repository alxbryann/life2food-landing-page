import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-accent p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-accent-foreground text-balance">
              ¿Listo para marcar la diferencia?
            </h2>
            <p className="text-xl text-accent-foreground/90 text-pretty">
              Únete a miles de consumidores y negocios conscientes trabajando juntos para eliminar el desperdicio de
              alimentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-base">
                Descargar la App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 text-base bg-transparent"
              >
                Hazte Socio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
