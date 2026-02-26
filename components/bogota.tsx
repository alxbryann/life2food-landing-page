import { MapPin, Utensils, TrendingUp } from "lucide-react"

export function BogotaSection() {
    return (
        <section id="bogota" className="py-24 relative z-10 bg-[var(--subtle)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal-left order-2 lg:order-1">
                        <div className="map-container aspect-square max-w-lg mx-auto border border-[var(--border)] relative overflow-hidden flex items-center justify-center">
                            {/* Image map instead of CSS map */}
                            <img
                                src="/Screenshot 2026-02-25 at 7.46.51 PM.png"
                                alt="Mapa de Bogotá Life2Food"
                                className="absolute inset-0 w-full h-full object-cover opacity-90"
                            />

                            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center bg-black/40 p-8 backdrop-blur-sm">
                                <div className="text-5xl md:text-6xl font-bold mb-2 text-white drop-shadow-lg">Bogotá</div>
                                <div className="text-sm text-white/90 drop-shadow-md">Capital de la comida salvada</div>

                                <div className="mt-8 grid grid-cols-2 gap-4 text-center w-full">
                                    <div className="bg-[var(--bg-elevated)]/90 backdrop-blur-md rounded-xl p-4 border border-[var(--border)] shadow-lg">
                                        <div className="text-2xl font-bold" style={{ color: "var(--accent-dark)" }}>7M+</div>
                                        <div className="text-xs text-[var(--muted)]">Habitantes</div>
                                    </div>
                                    <div className="bg-[var(--bg-elevated)]/90 backdrop-blur-md rounded-xl p-4 border border-[var(--border)] shadow-lg">
                                        <div className="text-2xl font-bold" style={{ color: "var(--accent-warm)" }}>12K</div>
                                        <div className="text-xs text-[var(--muted)]">Restaurantes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal order-1 lg:order-2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-sm">
                            <MapPin className="w-4 h-4 text-[var(--accent)]" />
                            <span className="text-[var(--muted)]">Primera ciudad</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--fg)]">
                            Arrancamos en{" "}
                            <span className="bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent)] bg-clip-text text-transparent">
                                Bogotá
                            </span>
                        </h2>

                        <p className="text-xl text-[var(--muted)] leading-relaxed">
                            La capital colombiana es nuestra primera parada. Con una escena gastronómica vibrante y miles de restaurantes, Bogotá es el lugar perfecto para iniciar esta revolución.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-[var(--fg)]">Chapinero, Zona G, La Candelaria</h4>
                                    <p className="text-[var(--muted)] text-sm">Zonas prioritarias para nuestro lanzamiento inicial</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Utensils className="w-5 h-5 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-[var(--fg)]">+50 restaurantes aliados</h4>
                                    <p className="text-[var(--muted)] text-sm">Listos para unirse desde el día uno</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <TrendingUp className="w-5 h-5 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-[var(--fg)]">Expansión 2027</h4>
                                    <p className="text-[var(--muted)] text-sm">Medellín, Cali y Barranquilla en el roadmap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
