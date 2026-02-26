"use client"

import { MapPin, Check } from "lucide-react"

export function BogotaSection() {
  return (
    <section
      id="bogota"
      className="py-24 relative z-10 bg-subtle scroll-mt-20"
      aria-labelledby="bogota-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-left">
            <div className="relative aspect-square max-w-lg mx-auto p-8 rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-subtle to-background">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">Bogotá</div>
                <div className="text-sm text-muted-foreground">Capital de la comida salvada</div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
                    <div className="text-2xl font-bold text-primary">7M+</div>
                    <div className="text-xs text-muted-foreground">Habitantes</div>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
                    <div className="text-2xl font-bold text-accent-warm">12K</div>
                    <div className="text-xs text-muted-foreground">Restaurantes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Primera ciudad</span>
            </div>
            <h2 id="bogota-heading" className="text-4xl md:text-5xl font-bold leading-tight">
              Arrancamos en{" "}
              <span className="bg-gradient-to-r from-accent-warm to-primary bg-clip-text text-transparent">
                Bogotá
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La capital colombiana es nuestra primera parada. Con una escena gastronómica vibrante y
              miles de restaurantes, Bogotá es el lugar perfecto para iniciar esta revolución.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Chapinero, Zona G, La Candelaria",
                  desc: "Zonas prioritarias para nuestro lanzamiento inicial",
                },
                {
                  title: "+50 restaurantes aliados",
                  desc: "Listos para unirse desde el día uno",
                },
                {
                  title: "Expansión 2025",
                  desc: "Medellín, Cali y Barranquilla en el roadmap",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
