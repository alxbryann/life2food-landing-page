import { Search, CreditCard, ShoppingBag } from "lucide-react"

export function Features() {
    return (
        <section className="py-24 relative z-10 bg-[var(--bg)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Una app, <span style={{ color: "var(--accent)" }}>miles de oportunidades</span>
                    </h2>
                    <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                        Descubre cómo Life2Food transforma la manera en que comes y cuidas el planeta
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 stagger-children">
                    <div className="step-card text-center group">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 border border-[var(--accent)]/20">
                            <Search className="w-8 h-8 text-[var(--accent)]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 relative z-10">Descubre ofertas</h3>
                        <p className="text-[var(--muted)] relative z-10">Explora restaurantes cercanos con comida deliciosa a precios increíbles</p>
                    </div>

                    <div className="step-card text-center group">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--accent-warm)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 border border-[var(--accent-warm)]/20">
                            <CreditCard className="w-8 h-8 text-[var(--accent-warm)]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 relative z-10">Reserva y paga</h3>
                        <p className="text-[var(--muted)] relative z-10">Reserva tu pack sorpresa en segundos con pago seguro integrado</p>
                    </div>

                    <div className="step-card text-center group">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 border border-[var(--accent)]/20">
                            <ShoppingBag className="w-8 h-8 text-[var(--accent)]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 relative z-10">Recoge y disfruta</h3>
                        <p className="text-[var(--muted)] relative z-10">Pasa por el local en el horario indicado y disfruta tu comida sorpresa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
