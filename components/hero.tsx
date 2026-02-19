"use client"

export function Hero() {
  return (
    <section className="relative pt-32 pb-0 lg:pt-40 overflow-hidden" aria-label="Hero principal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado: badge + título + descripción + un botón */}
        <header className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium" role="status" aria-live="polite">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Próximamente
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">
            Convierte el desperdicio de alimentos en oportunidad
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Conéctate con restaurantes, supermercados y granjas locales para rescatar alimentos excedentes. Ahorra
            dinero mientras generas un impacto positivo en nuestro planeta.
          </p>
        </header>

        {/* Mockups debajo del título — superpuestos, centro al frente */}
        <figure className="relative flex items-center justify-center min-h-[380px] lg:min-h-[460px] mt-12 lg:mt-16">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[75%] max-w-lg rounded-full bg-primary/8 blur-2xl" aria-hidden="true" />
          </div>
          <div className="relative w-full max-w-2xl mx-auto h-[400px] sm:h-[440px] lg:h-[500px] flex items-end justify-center">
            {/* Izquierda: atrás, rotado -12deg, apoyado en la misma base */}
            <div
              className="absolute left-1/2 bottom-0 w-[170px] sm:w-[200px] lg:w-[240px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 z-0 origin-bottom"
              style={{ transform: "translate(calc(-100% - 20px), 0) rotate(-12deg)" }}
            >
              <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl">
                <img
                  src="/WhatsApp Image 2026-02-18 at 08.05.42.jpeg"
                  alt="Vista previa de la app life2food - pantalla principal"
                  className="w-full h-full object-cover object-top rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
            {/* Centro: protagonista */}
            <div className="relative z-10 w-[200px] sm:w-[240px] lg:w-[280px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 transition-transform duration-300 hover:scale-[1.02]">
              <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl">
                <img
                  src="/Simulator Screenshot - iPhone 16 - 2026-02-18 at 20.47.50.png"
                  alt="Vista previa de la app life2food - iPhone"
                  className="w-full h-full object-cover object-top rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
            {/* Derecha: atrás, rotado +12deg, apoyado en la misma base */}
            <div
              className="absolute left-1/2 bottom-0 w-[170px] sm:w-[200px] lg:w-[240px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 z-0 origin-bottom"
              style={{ transform: "translate(20px, 0) rotate(12deg)" }}
            >
              <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl">
                <img
                  src="/WhatsApp Image 2026-02-18 at 08.05.42 (1).jpeg"
                  alt="Vista previa de la app life2food - segunda pantalla"
                  className="w-full h-full object-cover object-top rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
