"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data: { count?: number }) => setWaitlistCount(typeof data?.count === "number" ? data.count : 0))
      .catch(() => setWaitlistCount(0))
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-20 relative z-10" aria-label="Hero principal">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="stagger-children active space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
              <span className="text-[var(--accent-dark)] font-medium">Lanzamiento pronto en Bogotá</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--fg)]">
              Salva comida.
              <br />
              <span className="hero-gradient-text inline-block pb-1">Salva dinero.</span>
              <br />
              Salva el planeta.
            </h1>

            <p className="text-xl text-[var(--muted)] max-w-lg leading-relaxed">
              Conectamos restaurantes y locales con comida deliciosa que sobra, con personas como tú que buscan comer rico y cuidar el planeta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#lista-espera" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                Reserva tu lugar
                <ArrowRight className="size-5" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-center flex items-center justify-center w-full sm:w-auto">
                Descubre cómo funciona
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold counter" style={{ color: "var(--accent-dark)" }}>
                  {waitlistCount === null ? (
                    <span className="animate-pulse opacity-70">—</span>
                  ) : (
                    waitlistCount.toLocaleString("es")
                  )}
                </div>
                <div className="text-sm text-[var(--muted)]">En lista de espera</div>
              </div>
              <div className="w-px h-14 bg-[var(--border)] hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold" style={{ color: "var(--accent-dark)" }}>70%</div>
                <div className="text-sm text-[var(--muted)]">Descuento promedio</div>
              </div>
              <div className="w-px h-14 bg-[var(--border)] hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold" style={{ color: "var(--accent-dark)" }}>50+</div>
                <div className="text-sm text-[var(--muted)]">Aliados listos</div>
              </div>
            </div>
          </div>

          {/* Phone Mockups using existing assets instead of HTML built mockups */}
          <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[700px]" id="phone-container">
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-warm)]/10 blur-3xl animate-pulse"></div>

            <div className="relative w-full max-w-md mx-auto flex items-end justify-center">
              {/* Secondary Phone Left */}
              <div
                className="absolute left-[5%] bottom-0 w-[200px] sm:w-[260px] lg:w-[320px] z-0 origin-bottom drop-shadow-2xl"
                style={{ transform: "rotate(-12deg) translateY(-20px)" }}
              >
                <div className="transition-transform duration-300 hover:scale-[1.02] origin-bottom animate-float-delay">
                  <img
                    src="/home.png"
                    alt="Pantalla de inicio de la app"
                    className="w-full h-auto"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Main Phone Center */}
              <div className="relative z-10 w-[250px] sm:w-[320px] lg:w-[400px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] animate-float drop-shadow-2xl">
                <img
                  src="/ecommerce.png"
                  alt="Pantalla de ofertas y compra en la app"
                  className="w-full h-auto"
                  draggable={false}
                />
              </div>

              {/* Secondary Phone Right */}
              <div
                className="absolute right-[5%] bottom-0 w-[200px] sm:w-[260px] lg:w-[320px] z-0 origin-bottom drop-shadow-2xl"
                style={{ transform: "rotate(12deg) translateY(-20px)" }}
              >
                <div className="transition-transform duration-300 hover:scale-[1.02] origin-bottom animate-float-delay" style={{ animationDelay: '-4s' }}>
                  <img
                    src="/pedido.png"
                    alt="Pantalla de tu pedido en la app"
                    className="w-full h-auto"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

