export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Explora",
      description: "Abre la app y descubre restaurantes cercanos con packs sorpresa disponibles",
    },
    {
      number: "2",
      title: "Reserva",
      description: "Elige tu pack favorito y reserva pagando directamente en la app",
    },
    {
      number: "3",
      title: "Recoge",
      description: "Ve al restaurante en el horario indicado y muestra tu reserva",
    },
    {
      number: "4",
      title: "Disfruta",
      description: "Lleva a casa comida deliciosa a un precio increíble y salva el planeta",
    },
  ]

  return (
    <section id="como-funciona" className="py-24 relative z-10 bg-[var(--bg)]" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16 reveal">
          <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto text-balance">
            En 4 pasos simples, pasas de tener hambre a disfrutar comida increíble por una fracción del precio
          </p>
        </header>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children" role="list">
          {steps.map((step, index) => (
            <li key={index} className="step-card group h-full">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform relative z-10"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed relative z-10">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

